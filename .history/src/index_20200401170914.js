import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts";

ReactDOM.render(
  <React.StrictMode>
    <div className="contacts">
      <Contacts />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);