import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Top: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="top" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>Restore deleted file</h2>
      </Content>
    </Face>
  );
};

export default Top;
