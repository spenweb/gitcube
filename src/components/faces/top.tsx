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
            rel="noreferrer"
            tabIndex={makeIdx()}
          >
            https://git-scm.com/docs/git-checkout
          </a>
        </p>
        <h2 tabIndex={makeIdx()}>Use case</h2>
        <p>
          Everyone makes mistakes. Plus, there are times when you decide that
          you actually need that file you deleted a few weeks back.{" "}
          <a
            href="https://www.git-tower.com/learn/git/faq/restoring-deleted-files/"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>{" "}
          is a detailed reference on how to restore deleted files in git.
        </p>
        <h3 tabIndex={makeIdx()}>Demo</h3>
        <h3 tabIndex={makeIdx()}>Questions?</h3>
      </Content>
    </Face>
  );
};

export default Top;
