import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Back: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="back" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>Undo last commit</h2>
        <h2 tabIndex={makeIdx()}>Documentation</h2>
        <p>
          <a
            href="https://git-scm.com/docs/git-reset"
            target="_blank"
            tabIndex={makeIdx()}
          >
            https://git-scm.com/docs/git-reset
          </a>
        </p>
      </Content>
    </Face>
  );
};

export default Back;
