import React, { FC } from "react";
import Back from "./faces/back";
import Bottom from "./faces/bottom";
import Front from "./faces/front";
import Left from "./faces/left";
import Right from "./faces/right";
import Top from "./faces/top";

const Cube: FC = () => {
  return (
    <div className="cube">
      <Front />
      <Back />
      <Left />
      <Right />
      <Top />
      <Bottom />
    </div>
  );
};

export default Cube;
