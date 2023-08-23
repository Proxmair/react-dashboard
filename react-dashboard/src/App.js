import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar.jsx'
import SideMenu from './component/sidemenu/SideMenu.jsx'
import Dashboard from './component/dashboard/Dashboard.jsx'
const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <SideMenu />
            </div>
            <Routes>
                <Route index path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    )
}

export default App
