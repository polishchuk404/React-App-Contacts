import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./components/Posts/Posts";

ReactDOM.render(
  <React.StrictMode>
    <Posts />
  </React.StrictMode>,
  document.getElementById("root")
);