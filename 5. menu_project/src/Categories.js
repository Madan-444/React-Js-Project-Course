import React from 'react';

const Categories = ({filterItems,categories}) => {
  console.log('My categories lisi is',categories)
  return <div className="btn-container">
    {/* <button onClick={filterItems('all')} className='filter-btn'>all</button> */}
     { categories.map((category,index)=> {
       console.log(category)
       return <button className='filter-btn' key={index} onClick={()=> filterItems(category)}>{category} </button>
     })}
   
    </div>
};

export default Categories;
