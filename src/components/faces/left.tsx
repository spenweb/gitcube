import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Left: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="left" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>Git rebase</h2>
      </Content>
    </Face>
  );
};

export default Left;
