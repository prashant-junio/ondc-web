import React from "react";
import ReactDOMServer from "react-dom/server";
import configureApp from "./App.jsx";

export async function render(req, session, helmetAttributes={}) {
  const App = await configureApp(req);

  const ssrData = { 
    helmetAttributes,
    ...session?.authentication
  };

  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <App ssrData={ssrData} />
    </React.StrictMode>
  );
}
