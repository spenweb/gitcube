// Original code from codepen.io
// @see @https://codepen.io/chinchang/pen/lLzyB

import React, { useState } from "react";
import "./App.scss";
import Controls from "./components/controls";
import Cube from "./components/cube";
function App() {
  const [selected, setSelected] = useState<string>("front");

  return (
    <div className={`App selected-${selected}`}>
      <div className="container">
        <Cube selectedSide={selected} />
      </div>
      <Controls setSelected={setSelected} />
    </div>
  );
}

export default App;
