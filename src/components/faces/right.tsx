import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Right: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="right" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>Resolve merge conflicts</h2>
        <h2 tabIndex={makeIdx()}>Documentation</h2>
        <p>
          <a
            href="https://git-scm.com/docs/git-mergetool"
            target="_blank"
            tabIndex={makeIdx()}
          >
            https://git-scm.com/docs/git-mergetool
          </a>
        </p>
        <h3 tabIndex={makeIdx()}>How to make merge conflict?</h3>
        <p>
          Normally, you do not purposefully try to make a merge conflict, but it
          can help you understand how to avoid them if you know how to create
          them.{" "}
          <a
            href="https://jonathanmh.com/how-to-create-a-git-merge-conflict/"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>{" "}
          is a detailed post about it.
        </p>
        <h3 tabIndex={makeIdx()}>Demo</h3>
        <h3 tabIndex={makeIdx()}>Questions?</h3>
      </Content>
    </Face>
  );
};

export default Right;
