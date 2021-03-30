import React, { useState } from 'react';
import people from './data';
import {FaChevronLeft,FaChevronRight,FaQuoteRig, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index]
  console.log(`${index} and ${people.length}`)
  const checkNumber = (number) => {
    if(number> people.length-1){
      return 0;
    }
    if(number<0){
      return people.length-1
    }
    return number
  }
  const prevButton = ()=> {
    setIndex((index)=> {
      let newIndex = index -1
      return checkNumber(newIndex)
    })
  }
  const nextButton = ()=> {
    setIndex((index)=> {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  // const randomButton = ()=> {
  //   let number = Math.random()*people.length
    
  //   setIndex(()=> {
  //     let newIndex = Math.floor(number)
  //     setIndex(()=> {
  //       let newIndex = Math.floor(number);
  //       return checkNumber(newIndex)
  //     })   

  // }
  const randomButton = ()=> {
    let number = Math.random()*people.length
    setIndex(()=> {
      let newIndex = Math.floor(number)
      if(newIndex===index){
        newIndex += 1
      }
      return checkNumber(newIndex)
    })
  }

  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author"> {name} </h4>
    <p className="job">{job} </p>
    <p className="info"> {text} </p>
    <div className="button-container">
      <button className='prev-btn' onClick= {prevButton} > <FaChevronLeft /> </button> 
      
      <button className='next-btn' onClick={nextButton}> <FaChevronRight /> </button>
      
    </div>
    <button className='random-btn' onClick={randomButton}> Surprise me</button>
  </article>
};

export default Review;
