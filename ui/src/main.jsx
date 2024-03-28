import React from "react";
import ReactDOM from "react-dom/client";
import configureApp from "./App.jsx";
import "./index.scss";
import "./text.scss";
import "./colors.scss";

export default configureApp(false).then((App) => {
  const ssrData = JSON.parse(window.getSSRData());
  ReactDOM.hydrateRoot(
    document.getElementById("root"),
    <React.StrictMode>
      <App ssrData={ssrData} />
    </React.StrictMode>
  );
});
