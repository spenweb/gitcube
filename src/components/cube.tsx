import React, { FC } from "react";
import Back from "./faces/back";
import Bottom from "./faces/bottom";
import Front from "./faces/front";
import Left from "./faces/left";
import Right from "./faces/right";
import Top from "./faces/top";

const Cube: FC<{ selectedSide: string }> = ({ selectedSide }) => {
  return (
    <div className="cube">
      <Front selected={selectedSide === "front"} />
      <Back selected={selectedSide === "back"} />
      <Left selected={selectedSide === "left"} />
      <Right selected={selectedSide === "right"} />
      <Top selected={selectedSide === "top"} />
      <Bottom selected={selectedSide === "bottom"} />
    </div>
  );
};

export default Cube;
