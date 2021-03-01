import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Left: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="left" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>Git rebase</h2>
        <h2 tabIndex={makeIdx()}>Documentation</h2>
        <p>
          <a
            href="https://git-scm.com/docs/git-rebase"
            target="_blank"
            tabIndex={makeIdx()}
          >
            https://git-scm.com/docs/git-rebase
          </a>
        </p>
      </Content>
    </Face>
  );
};

export default Left;
