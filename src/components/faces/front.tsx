import React, { FC } from "react";
import { makeIdx } from "../../helpers";
import Content from "../content";
import Face from "../face";

const Front: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="front" selected={selected}>
      <Content>
        <h2 tabIndex={makeIdx()}>Be a Git Power User</h2>
        <p>
          Git is a coder's best friend! I encourage you to get to know your best
          friend.
        </p>
        <h2 tabIndex={makeIdx()}>
          Read the{" "}
          <a href="https://git-scm.com/doc" target="_blank">
            documentation
          </a>
          !
        </h2>
        <p>
          You'll find some amazing git things! Here are some honorable mentions:
        </p>
        <ul>
          <li>
            <a
              tabIndex={makeIdx()}
              href="https://git-scm.com/docs/git-instaweb"
              target="_blank"
            >
              `git instaweb`
            </a>
          </li>
          <li>
            <a
              tabIndex={makeIdx()}
              href="https://git-scm.com/docs/git-notes"
              target="_blank"
            >
              `git notes`
            </a>
          </li>
          <li>
            <a
              tabIndex={makeIdx()}
              href="https://git-scm.com/docs/git-archive"
              target="_blank"
              rel="noreferrer"
            >
              `git archive`
            </a>
          </li>
          <li>
            <a
              tabIndex={makeIdx()}
              href="https://git-scm.com/docs/git-blame"
              target="_blank"
            >
              `git blame`
            </a>
          </li>
          <li>
            <a
              tabIndex={makeIdx()}
              href="https://git-scm.com/docs/git-stash"
              target="_blank"
            >
              `git stash`
            </a>
          </li>
        </ul>
        <p>
          Learning git is a journey. Git is your friend. Understand your friend
          by reading the docs! Git's documentation even has videos!
        </p>
        <h2 tabIndex={makeIdx()}>Contributing</h2>
        <p>
          Feel free to make a pull request (PR) into this presentation's'public
          git repository here:{" "}
          <a href="https://github.com/spenweb/gitcube" target="_blank">
            https://github.com/spenweb/gitcube
          </a>
          .
        </p>
        <h2 tabIndex={makeIdx()}>End</h2>
      </Content>
    </Face>
  );
};

export default Front;
