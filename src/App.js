import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Color from "./features/canvas/Color";
import Font from "./features/canvas/Font";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Color />
      <Font />
    </div>
  );
}

export default App;
