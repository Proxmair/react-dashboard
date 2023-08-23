import React from 'react'
import './main.css'
import DashboardMainImage1 from '../../../assets/Frame 4900.png'
import DashboardMainImage2 from '../../../assets/Frame 1058.png'
import DashboardMainImage3 from '../../../assets/Frame 4900-1.png'
import Feed from './feed/Feed.jsx'
const Main = () => {
  return (
    <div className='dashboard-main'>1
      <div><img src={DashboardMainImage1} alt='dashboardItem1' /></div>
      <div><img src={DashboardMainImage2} alt='dashboardItem2' /></div>
      <div><img src={DashboardMainImage3} alt='dashboardItem3' /></div>
      <div className='feed-container' ><Feed/></div>
    </div>
  )
}

export default Main
