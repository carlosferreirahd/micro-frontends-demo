import React from "react";
import ReactDOM from "react-dom";

import { Counter } from "./Counter";
import { Timer } from "host/Timer";

import "./index.css";

const App = () => {

  return (
    <div className="container">
      <div>Name: remote</div>
      <Counter from="remote" />
      <Timer seconds={15} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
