import React, { FC } from "react";
import Content from "../content";
import Face from "../face";

let index = 0;
const makeIdx = (): number => {
  return index++;
};

const Front: FC = () => {
  return (
    <Face side="front">
      <Content>
        <h1 tabIndex={makeIdx()}>Title</h1>
        <p>Some convincing content summary goes here.</p>
        <p>Some convincing content summary goes here.</p>
        <p>Some convincing content summary goes here.</p>
        <p>Some convincing content summary goes here.</p>
        <p>Some convincing content summary goes here.</p>
        <h2 tabIndex={makeIdx()}>Sub heading</h2>
        <p>
          Sub content goes here. What do you know about git? Anything to
          enlighten the class? I hope this is helpful! Git is code's best
          friend.
        </p>
        <h2 tabIndex={makeIdx()}>Sub heading</h2>
        <p>
          Summary text of all that was covered above. Summary text of all that
          was covered above. Summary text of all that was covered above. Summary
          text of all that was covered above. Summary text of all that was
          covered above. Summary text of all that was covered above. Summary
          text of all that was covered above.
        </p>
      </Content>
    </Face>
  );
};

export default Front;
