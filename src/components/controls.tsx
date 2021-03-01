import React, { FC, useEffect } from "react";

const sides = [
  { sideName: "front", keyUp: "Digit1" },
  { sideName: "right", keyUp: "Digit2" },
  { sideName: "left", keyUp: "Digit3" },
  { sideName: "top", keyUp: "Digit4" },
  { sideName: "back", keyUp: "Digit5" },
  { sideName: "bottom", keyUp: "Digit6" },
];

const Controls: FC<{ setSelected: Function }> = ({ setSelected }) => {
  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      console.log({ code: event.code });
      sides.forEach(({ sideName, keyUp }) => {
        if (event.code === keyUp) {
          setSelected(sideName);
        }
      });
    });
    // TODO: Return unregister event listener function
    // eslint-disable-next-line
  }, []);

  const handleClick = (side: string) => () => {
    setSelected(side);
  };

  return (
    <ul className="controls">
      {sides.map(({ sideName }, idx) => (
        <li key={idx} onClick={handleClick(sideName)}>
          {idx + 1}
        </li>
      ))}
    </ul>
  );
};

export default Controls;
