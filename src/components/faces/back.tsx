import React, { FC } from "react";
import Face from "../face";

const Back: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="back" selected={selected}>
      Back content
    </Face>
  );
};

export default Back;
