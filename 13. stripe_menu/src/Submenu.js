import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const container = useRef(null);
  const { isSubmenuOpen, location,page:{page,links} } = useGlobalContext();
  const { center, bottom } = location;
  const [column,setColumn] = useState('col-2')

  useEffect(() => {
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if(links.length === 3) {
      setColumn('col-3')
    }
    if(links.length > 3) {
      setColumn('col-4')
    }
  }, [location]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${column}`}>
        {links.map((link,index)=> {
          const {url,icon,label} = link
          return <a key={index} href={url}>
            {icon}
            {label}
          </a>
        })}
      </div>
    </aside>
  );
};

export default Submenu;
