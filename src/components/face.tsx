import React, { FC } from "react";

const Face: FC<{ side: string }> = ({ side, children }) => {
  return <div className={`face ${side}`}>{children}</div>;
};

export default Face;
