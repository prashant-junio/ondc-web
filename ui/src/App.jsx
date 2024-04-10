import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider as ClientRouterProvider,
  Outlet
} from "react-router-dom";
import {
  createStaticRouter,
  createStaticHandler,
  StaticRouterProvider as ServerRouterProvider,
} from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "react-query";
import { StateContext } from "./ssr-context";
import Landing from "./pages/landing";

const queryClient = new QueryClient();

const routes = [
  {
    path: "/vouchers/",
    Component: () => (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/vouchers/",
        element: <Landing />,
      },
    ],
  },
];

async function configureApp(request) {
  let routerProvider;
  if (request) {
    const { query, dataRoutes } = createStaticHandler(routes);
    const context = await query(request);

    if (context instanceof Response) {
      throw context;
    }
    const router = createStaticRouter(dataRoutes, context);
    routerProvider = (
      <ServerRouterProvider router={router} context={context} hydrate={true} />
    );
  } else {
    const router = createBrowserRouter(routes);
    routerProvider = <ClientRouterProvider router={router} />;
  }

  function App({ ssrData: { helmetAttributes = {}, ...restSSRData } }) {
    return (
      <>
        <StateContext.Provider value={{ ...restSSRData }}>
          <QueryClientProvider client={queryClient}>
            {routerProvider}
          </QueryClientProvider>
        </StateContext.Provider>
      </>
    );
  }

  return App;
}

export default configureApp;
