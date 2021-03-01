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
      </Content>
    </Face>
  );
};

export default Right;
