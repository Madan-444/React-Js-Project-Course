import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {isSubmenuOpen,location,page:{page,links}} = useGlobalContext();
  const container = useRef(null);
  const [column,setColumn] = useState('col-2')

  useEffect(()=> {
    setColumn('col-2')
    const submenu = container.current;
    // console.log(submenu)
    const {center,buttom} = location;
    submenu.style.left = `${center}px`
    submenu.style.top = `${buttom}px`

    if(links.length=== 3) {
      setColumn('col-3')
    }
    if(links.length > 3) {
      setColumn('col-4')
    }
  },[location,links.length])

  return <aside className={`${isSubmenuOpen? 'submenu show' : 'submenu'}`} ref={container} > 
  <h4>{page}</h4>
  <div className={`submenu-center ${column}` }>
    {links.map((link,index)=> {
      const {label,url,icon} = link
      return (
        <a href={url} key={index} >{icon}{label}</a>
      )
    })}
  </div>
  </aside>
}

export default Submenu
