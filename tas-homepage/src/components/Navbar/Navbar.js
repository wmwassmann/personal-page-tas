import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import './css/style.css';
import { IconContext } from 'react-icons';


function Navbar() {

  // toggle for sidebar/reveal anything
  const [sidebar, setSidebar] = useState(false) 

  const showSidebar = () => setSidebar(!sidebar)



    return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li classNamn='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose/>
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        </IconContext.Provider>
      </>
    )
}

export default Navbar