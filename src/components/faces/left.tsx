import React, { FC } from "react";
import Face from "../face";

const Left: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="left" selected={selected}>
      Left content
    </Face>
  );
};

export default Left;
