import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Top: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="top" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>Restore deleted file</h2>
        <h2 tabIndex={makeIdx()}>Documentation</h2>
        <p>
          <a
            href="https://git-scm.com/docs/git-checkout "
            target="_blank"
            tabIndex={makeIdx()}
          >
            https://git-scm.com/docs/git-checkout
          </a>
        </p>
      </Content>
    </Face>
  );
};

export default Top;
