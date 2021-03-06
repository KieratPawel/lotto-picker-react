import React from "react";
import ReactDOM from "react-dom";
import "./main/style.css";
import App from "./main/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
