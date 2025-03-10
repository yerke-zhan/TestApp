
import { useState } from "react";

export default function RandomColorBox() {
  const [color, setColor] = useState(getRandomColor());
  const colors = ["#00ffff","#ff00ff","#bf00ff", "#8000ff	", "#ff8000", "#bfff00"];
  const [color2, setColor2] = useState(colors[0]);

  


  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
  }
  function changeColor() {
    setColor(getRandomColor());
  }
  
  function RandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  
    
  }
    
  const ChangeColor =()=>{
    setColor2(RandomColor());
      
     

  }


  return (
    <div className="container">
      <h1>Вариант 1</h1>
      <div className="box" style={{ backgroundColor: color }}></div>
      <button onClick={changeColor}>Change Color</button>
      
      <h1>Вариант 2</h1>
      <h3>colors = ["#00ffff","#ff00ff","#bf00ff", "#8000ff	", "#ff8000", "#bfff00"]</h3>
      <div className="box-2" style={{backgroundColor:color2}} ></div>
      <button onClick={ChangeColor}>Change Color</button>
    </div>
  );


}
