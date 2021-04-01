import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorList,setColorList] = useState([])

  const handleSubmit =(e)=> {
    e.preventDefault();
    try{
        let colors = new Values(color).all(10)
        setColorList(colors)
        // console.log(colors)
    } catch(error) {
      setError(true)
      console.log(error)
    }


    // console.log('My color is:',color)
  }
  return (
    <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input className={`${error? 'error': null}`} value={color} type='text' onChange={(e)=> setColor(e.target.value)} placeholder='#f15025' />
        <button className='btn'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      {colorList.map((color,index)=> {
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
      })}
    </section>
    </>
  )
}

export default App;
