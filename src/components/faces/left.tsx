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
        <h2 tabIndex={makeIdx()}>Why rebase?</h2>
        <p>
          `git rebase` can be used as a "cleaner" alternative method to `git
          merge`
        </p>
        <h2 tabIndex={makeIdx()}>Demo</h2>
        <h2 tabIndex={makeIdx()}>Questions?</h2>
      </Content>
    </Face>
  );
};

export default Left;
