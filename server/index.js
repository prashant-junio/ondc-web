
console.log("ENV_PATH", process.env.ENV_PATH)
if(process.env.ENV_PATH) {
  require("dotenv").config({ path: process.env.ENV_PATH });
} else {
  require("dotenv").config();
}

const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const logger = require("./logger");
const configureApp = require("./app");


const LISTENER_PORT = process.env.PORT || 8001;
const ENV = process.env.NODE_ENV || "development";

logger.info(chalk.green.bold("PORT : ") + LISTENER_PORT);
logger.info(chalk.green.bold("ENV  : ") + ENV);

const isProd = ["production", "staging"].includes(process.env.NODE_ENV);
const isTest = false;


async function createServer(hmrPort) {
  const app = express();
  app.use(morgan('dev'));
  app.use(express.text());
  app.use(express.json());

  const { router, viteServer } = await configureApp(isProd, hmrPort);

  app.use("/ping", (req, resp) => {
    return resp.json({ ok: "true", env: process.env.NODE_ENV });
  });

  app.use("/vouchers", router);

  app.use("/", async (_, resp) => resp.redirect("/vouchers"));

  return { app, viteServer };
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(LISTENER_PORT, () =>
      console.info(chalk.blue("listening on http://localhost:" + LISTENER_PORT))
    )
  );
}
