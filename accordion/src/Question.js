import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
  const {title,info} = question
  const [toggle,setToggle] = useState(false)
  return (
    <section>
      <div className="question">
        <header>
          <h4>{title}</h4>

          <button className='btn' onClick={()=> setToggle(!toggle)}> {!toggle? <AiOutlinePlus />: <AiOutlineMinus />} </button>
          {/* <button className='btn'> <AiOutlineMinus /> </button> */}

        </header> 
        {toggle&&<p>{info}</p>   } 
            
     </div>
    </section>
  );
};

export default Question;
