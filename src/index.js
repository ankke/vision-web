import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counter from "./reducer";
import { createHashHistory } from "history";
import { logger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";

const store = configureStore({
  reducer: counter,
  middleware: [
    ...getDefaultMiddleware(),
    logger,
    routerMiddleware(createHashHistory()),
  ],
});

const history = createHashHistory();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
