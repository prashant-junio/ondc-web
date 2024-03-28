const path = require("node:path");
const express = require("express");
const compression = require("compression");
const serveStatic = require("serve-static");
const vite = require("vite");
const chalk = require("chalk");
const appUtils = require("./utils");
const fs = require("fs");
const { Helmet } = require("react-helmet");

const SOURCE_PATH = path.resolve(
  __dirname,
  process.env.SOURCE_PATH || "../../ui"
);
const APP_BASENAME = process.env.VITE_APP_BASENAME;
const STATIC_BUILD_PATH_CLIENT = path.join(SOURCE_PATH, "dist/client");
const STATIC_BUILD_PATH_SERVER = path.join(SOURCE_PATH, "dist/server");

console.log(chalk.green.bold("STATIC:"), STATIC_BUILD_PATH_CLIENT);
console.log(chalk.green.bold("SOURCE:"), SOURCE_PATH);

/**
 *
 * @returns {{router:Router,vite:viteServer}}
 */
async function configureApp(isProd = false, hmrPort) {
  /**
   * @type {string}
   */
  let indexHtml = "";
  let viteServer;
  const router = express.Router();

  if (isProd) {
    indexHtml = fs.readFileSync(
      path.join(STATIC_BUILD_PATH_CLIENT, "index.html"),
      "utf-8",
      "r"
    );
    indexHtml = indexHtml.toString("utf-8");

    router.use(compression());
    router.use(serveStatic(STATIC_BUILD_PATH_CLIENT, { index: false }));
  } else {
    indexHtml = fs.readFileSync(path.join(SOURCE_PATH, "index.html"));
    indexHtml = indexHtml.toString("utf-8");

    viteServer = await vite.createServer({
      root: SOURCE_PATH,
      base: APP_BASENAME,
      logLevel: !isProd ? "error" : "info",
      build: {
        sourcemap: true,
      },
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: "custom",
    });
    // use vite's connect instance as middleware
    router.use(viteServer.middlewares);
  }

  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} resp
   */
  async function IndexRenderer(
    req,
    resp,
    attributes = { helmetAttributes: {} }
  ) {
    try {
      const url = req.originalUrl;
      /**
       * @type {string}
       */
      let htmlText;
      /**
       * @type {string}
       */
      let htmlTemplate;
      /**
       * @type {function}
       */
      let renderHtml;

      if (isProd) {
        htmlTemplate = indexHtml;
        renderHtml = (
          await import(path.resolve(STATIC_BUILD_PATH_SERVER, "ssr.mjs"))
        ).render;
      } else {
        // dev environment configuration
        htmlTemplate = indexHtml;
        htmlTemplate = await viteServer.transformIndexHtml(url, htmlTemplate);
        renderHtml = (
          await viteServer.ssrLoadModule(
            path.resolve(path.join(SOURCE_PATH, "src"), "ssr.jsx")
          )
        ).render;
      }

      const context = {};
      const rendered = await renderHtml(
        appUtils.createFetchRequest(req),
        req.session,
        attributes.helmetAttributes
      );
      // const app = ReactDOMServer.renderToString();
      const helmet = Helmet.renderStatic();

      htmlText = htmlTemplate
        .replace(
          `<!--app-head-->`,
          `<script id="__SSR_DATA">function getSSRData() { return '${JSON.stringify(
            {
              helmetAttributes: attributes.helmetAttributes,
              is_logged_in: req.session?.authentication.is_logged_in,
              is_anonymous_user: req.session?.authentication.is_anonymous_user,
              person_id: req.session?.authentication.person_id,
              phone_number: req.session?.authentication.phone_number,
              name: req.session?.authentication.name,
            }
          )}' }</script>`
        )
        .replace(`<!--app-html-->`, rendered ?? "")
        .replace(
          `<!--helmet-attributes-->`,
          `
                    ${helmet.title.toString()}
                    ${helmet.meta.toString()}
                    ${helmet.link.toString()}
                `
        );

      if (context.url) {
        return resp.redirect(301, context.url);
      }

      return resp
        .status(200)
        .set({ "Content-Type": "text/html" })
        .end(htmlText);
    } catch (e) {
      console.log(chalk.red(e));
      !isProd && viteServer.ssrFixStacktrace(e);
      console.log(e.stack);
      resp.status(500).end(e.stack);
    }
  }


  router.use("*", IndexRenderer);

  return { router, viteServer };
}

module.exports = configureApp;
