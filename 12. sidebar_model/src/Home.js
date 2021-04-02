import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {AppContext, useGlobalContext} from './context.js'



const Home = () => {
  const {openSidebar,setIsModalOpen} = useGlobalContext()
  // console.log("My name is:",name)
  return <main>
    <button className='sidebar-toggle' onClick={openSidebar} > <FaBars /> </button>
    <button className='btn' onClick={()=> setIsModalOpen(true)}>show modal</button>
  </main>
}

export default Home
