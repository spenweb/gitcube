import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Bottom: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="bottom" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>Deployment with `git archive`</h2>
      </Content>
    </Face>
  );
};

export default Bottom;
