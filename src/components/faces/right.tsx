import React, { FC } from "react";
import Face from "../face";

const Right: FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <Face side="right" selected={selected}>
      Right content
    </Face>
  );
};

export default Right;
