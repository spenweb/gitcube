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
            rel="noreferrer"
            tabIndex={makeIdx()}
          >
            https://git-scm.com/docs/git-reset
          </a>
        </p>
        <h2 tabIndex={makeIdx()}>When to reset?</h2>
        <p>
          `git reset` can be used when wanting to undo a previous commit.
          <a
            href="https://devconnected.com/how-to-undo-last-git-commit/"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>{" "}
          is a detailed article on some of the ways to use `git reset`.
        </p>
        <h2 tabIndex={makeIdx()}>Demo</h2>
        <h2 tabIndex={makeIdx()}>Questions?</h2>
      </Content>
    </Face>
  );
};

export default Back;
