import { useState } from "react";

const Colorize = () => {
    const [color, setColor] = useState('')
   
    const getRandomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return random;
    }   
    const changeColor = () => {
        const randomColor = getRandomColor();
        console.log('Color change with', randomColor);
        setColor(randomColor)
      }

  return (
    <div className="colorizer">
    <div className='box' style={{backgroundColor: color}}>{color}</div>
    <button onClick={changeColor}>Change color</button>
  </div>
  )
}

export default Colorize;