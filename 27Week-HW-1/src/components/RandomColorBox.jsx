
import { useState } from "react";

export default function RandomColorBox() {
  const [color, setColor] = useState(getRandomColor());

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
  }
  function changeColor() {
    setColor(getRandomColor());
  }

  return (
    <div className="container">
      <div className="box"style={{ backgroundColor: color }}></div>
      <button onClick={changeColor}>Change Color</button>

    </div>
  );
}
