import React from "react";
import ReactDOM from "react-dom";

import { Timer } from "./Timer";
import { Counter } from "remote/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <Counter from="host" />
    <Timer seconds={10} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
