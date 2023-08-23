import React from 'react'
import './navbar.css'
import SearchIcon from '../../icons/SearchIcon'
import Message from '../../icons/Message'
import Calender from '../../icons/Calender'
import Notification from '../../icons/Notification'
import Profile from '../../assets/Ellipse 94.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='search-box'>
        <div className='search-box-child'>
          <label htmlFor='search-box'>
            <SearchIcon />
          </label>
          <input type="text" name="search-box" placeholder='Ask me anything' />
        </div>
      </div>
      <div className='icons-container'>
        <div className='nav-icons' ><Calender /></div>
        <div className='nav-icons' ><Message /></div>
        <div className='nav-icons' ><Notification /></div>
        <div className='nav-icons' ><img src={Profile}  alt={"Profile icon"} /></div>
      </div>
    </div>
  )
}

export default Navbar
