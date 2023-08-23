import React from 'react'
import './dashbord.css'
import Headline from './headline/Headline.jsx'
import TodoList from './todolist/TodoList.jsx'
import Files from './files/Files'
import Calender from './calender/Calender'
import Main from './main/Main.jsx'
const Dashboard = () => {
  return (
    <div>
      <div className='dasboard-page-hover'>
        <div>Left</div>
        <div>Right</div>
      </div>
      <Headline/>
      <TodoList/>
      <Files/>
      <Calender/>
      <Main/>
    </div>
  )
}

export default Dashboard
