import React, { useState } from 'react'
import './feed.css'
import DropDown from '../../../../icons/DropDown'
const Feed = () => {
  const feedLinks=[
    "Posts",
    "Event",
    "News",
    "Article",
    "Announcement",
  ]
  const [activeFeedLink,setActiveFeedLink]=useState(0);
  return (
    <>
      <div className='feed-navigation'>
        <div>
        <div><h3>Your Feed</h3></div>
        <div>
          <p>Recent</p>
          <DropDown/>
        </div>

        </div>
        <div className='feed-nav-btn'>
          <div>
          {feedLinks.map((item, index) => (
            <button className={`${activeFeedLink===index?'active-feed-nav-link':''}`} onClick={()=>setActiveFeedLink(index)}>{item}</button>
          ))}
          </div>
          <div>asdf</div>
        </div>
      </div>
      <div>
        {activeFeedLink===0?"Post":activeFeedLink===1?"Events":activeFeedLink===2?"News":activeFeedLink===3?"Article":activeFeedLink===4?"Announcement":""}
      </div>
    </>
  )
}

export default Feed
