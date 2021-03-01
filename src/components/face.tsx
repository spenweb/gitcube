import React, { FC, useEffect, useRef } from "react";

const Face: FC<{ side: string; selected: boolean }> = ({
  side,
  selected,
  children,
}) => {
  const faceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (faceRef.current) {
      const firstHeader = faceRef.current.querySelector("h1,h2,h3");
      if (firstHeader) {
        (firstHeader as HTMLElement)?.focus();
      }
    }
  }, [selected]);
  return (
    <div ref={faceRef} className={`face ${side}`}>
      {children}
    </div>
  );
};

export default Face;
