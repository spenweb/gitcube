import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Bottom: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="bottom" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>{"Pull Requests (PR) & Code Reviews"}</h2>
        <h2 tabIndex={makeIdx()}>Documentation</h2>
        <p>
          <a
            href="https://git-scm.com/docs/git-pull"
            target="_blank"
            tabIndex={makeIdx()}
          >
            https://git-scm.com/docs/git-pull
          </a>
        </p>
      </Content>
    </Face>
  );
};

export default Bottom;
