import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Bottom: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="bottom" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>Deployment with `git archive`</h2>
        <h2 tabIndex={makeIdx()}>Documentation</h2>
        <p>
          <a
            href="https://git-scm.com/docs/git-archive"
            target="_blank"
            tabIndex={makeIdx()}
          >
            https://git-scm.com/docs/git-archive
          </a>
        </p>
      </Content>
    </Face>
  );
};

export default Bottom;
