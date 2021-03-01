// Original code from codepen.io
// @see @https://codepen.io/chinchang/pen/lLzyB

import React from "react";
import "./App.scss";
import Controls from "./components/controls";
import Cube from "./components/cube";
function App() {
  return (
    <div className="App">
      <Controls />
      <div className="container">
        <Cube />
      </div>
    </div>
  );
}

export default App;
