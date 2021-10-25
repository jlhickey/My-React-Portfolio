import React from "react";
import { Accordion } from '@material-ui/core';
import ReactDOM from "react-dom";
import "./index.css";
import App from ".src/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();

//react test
