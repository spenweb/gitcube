import React, { FC } from "react";
import Face from "../face";

const Top: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="top" selected={selected}>
      Top content
    </Face>
  );
};

export default Top;
