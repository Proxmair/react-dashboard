import React from 'react'
import './sidemenu.css'
import Logo from '../../icons/Logo'
import { Link } from 'react-router-dom';
import SideMenuIcon1 from '../../icons/SideMenuIcon1';
import SideMenuIcon2 from '../../icons/SideMenuIcon2';
import SideMenuIcon3 from '../../icons/SideMenuIcon3';
import SideMenuIcon4 from '../../icons/SideMenuIcon4';
import SideMenuIcon5 from '../../icons/SideMenuIcon5';
import SideMenuIcon6 from '../../icons/SideMenuIcon6';
import SideMenuIcon7 from '../../icons/SideMenuIcon7';
import SideMenuIcon8 from '../../icons/SideMenuIcon8';
import { useState } from 'react';

const sideMenuData = [
  {
    text: "Dashboard",
    link: "/dashboard",
    icon: <SideMenuIcon1 />,
  },
  {
    text: "Projects",
    link: "/projects",
    icon: <SideMenuIcon2 />,
  },
  {
    text: "Events",
    link: "/events",
    icon: <SideMenuIcon3 />,
  },
  {
    text: "People",
    link: "/people",
    icon: <SideMenuIcon4 />,
  },
  {
    text: "Offer",
    link: "/offer",
    icon: <SideMenuIcon5 />,
  },
  {
    text: "Community",
    link: "/community",
    icon: <SideMenuIcon6 />,
  },
  {
    text: "Media Center",
    link: "/media-center",
    icon: <SideMenuIcon7 />,
  },
  {
    text: "Data Center",
    link: "/data-center",
    icon: <SideMenuIcon8 />,
  },
];
const SideMenu = () => {
  const [activelink,setActiveLink]=useState(0);
  return (
    <div className='side-menu-container'>
      <div className='side-menu'>
        <div className='logo'>
          <Logo />
        </div>
        <div className='menu-icon-container'>
          {sideMenuData.map((item, index) => (
            <Link onClick={()=>setActiveLink(index)} className={`menu-icon ${activelink===index?'menu-icon-active':''}`} to={item.link} key={index}>
              {item.icon}
              <h5>{item.text}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideMenu
