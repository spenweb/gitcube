import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Right: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="right" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>Resolve merge conflicts</h2>
      </Content>
    </Face>
  );
};

export default Right;
