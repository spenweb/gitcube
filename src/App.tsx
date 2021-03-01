// Original code from codepen.io
// @see @https://codepen.io/chinchang/pen/lLzyB

import React from "react";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <input type="radio" checked id="radio-front" name="select-face" />
      <input type="radio" id="radio-left" name="select-face" />
      <input type="radio" id="radio-right" name="select-face" />
      <input type="radio" id="radio-top" name="select-face" />
      <input type="radio" id="radio-bottom" name="select-face" />
      <input type="radio" id="radio-back" name="select-face" />

      <div className="space3d">
        <div className="_3dbox">
          <div className="_3dface _3dface--front">hi there</div>
          <div className="_3dface _3dface--top"></div>
          <div className="_3dface _3dface--bottom"></div>
          <div className="_3dface _3dface--left"></div>
          <div className="_3dface _3dface--right"></div>
          <div className="_3dface _3dface--back"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
