import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLink,setShowLink] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(()=> {
    const linkHeight = linksRef.current.getBoundingClientRect().height
    if(showLink) {
      linksContainerRef.current.style.height = `${linkHeight}px`
    } else {
      linksContainerRef.current.style.height = `0px`
    }
  },[showLink])

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo"/>
        <button className="nav-toggle">
          <FaBars onClick={()=> setShowLink(!showLink)} />
        </button>
      </div>

          <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link)=> {
              return (
               <li>
                 <a key={link.id} href={link.url}>{link.text}</a>
               </li>
              )
            })}
          </ul>
        </div>

      <ul className="social-icons">
          {social.map((item)=> {
            return (
              <li>
                <a keu={item.id} href={item.url}> {item.icon} </a>
              </li>
            )
          })}
      </ul>
    </div>
  </nav>
}

export default Navbar
