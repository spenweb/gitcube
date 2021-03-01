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
            rel="noreferrer"
            tabIndex={makeIdx()}
          >
            https://git-scm.com/docs/git-pull
          </a>
        </p>
        <p>
          A pull request is just a fancy way of saying, "Please review my code
          changes and merge it into the target branch". Gitlab, for example,
          calls them Merge Requests (MR).
        </p>
        <p>There is much value to be had in a proper code review.</p>
        <h2 tabIndex={makeIdx()}>Demo</h2>
        <h2 tabIndex={makeIdx()}>Questions?</h2>
      </Content>
    </Face>
  );
};

export default Bottom;
