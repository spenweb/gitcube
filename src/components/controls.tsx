import React, { FC } from "react";

const Controls: FC = () => {
  return (
    <>
      <input type="radio" checked id="radio-front" name="select-face" />
      <input type="radio" id="radio-left" name="select-face" />
      <input type="radio" id="radio-right" name="select-face" />
      <input type="radio" id="radio-top" name="select-face" />
      <input type="radio" id="radio-bottom" name="select-face" />
      <input type="radio" id="radio-back" name="select-face" />
    </>
  );
};

export default Controls;
