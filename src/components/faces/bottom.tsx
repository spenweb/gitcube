import React, { FC } from "react";
import Face from "../face";

const Bottom: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="bottom" selected={selected}>
      Bottom content
    </Face>
  );
};

export default Bottom;
