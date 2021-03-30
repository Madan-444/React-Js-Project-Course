import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true);
    // const response = await fetch(url)
    // const tours = await response.json()
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours);
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(()=> {
      fetchTours()
   },[])

   const removeTour = (id)=> {
     const newTour = tours.filter((tour)=> tour.id !== id )
     setTours(newTour)
   }
   if(tours.length === 0) {
     return (
       <main>
         <div className='title'>
           <h2>no tours left</h2>
           <button className='btn' onClick={()=> fetchTours()}>Refresh</button>

         </div>
       </main>
     )
   }
  
  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Tours tours = {tours} removeTour= {removeTour} />
    </main>
  )
}

export default App
