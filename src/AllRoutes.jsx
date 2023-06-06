import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const AllRoutes = () => {
  return (
    
    <Routes>
        <Route path='/login'  element={<Login />} />
        <Route path='/signup'  element={<Signup />} />
        <Route path='/dashboard'  element={
        // <PrivateRoute>
            <Dashboard />
        // </PrivateRoute>
        
        } />
    </Routes>
  )
}

export default AllRoutes