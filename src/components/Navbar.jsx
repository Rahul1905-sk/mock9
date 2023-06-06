import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:'flex' , justifyContent:'space-evenly', marginBottom:'50px'}}>
        
        <a href="/login"> Login</a>
        <a href="/signup"> Signup</a>
        <a href="/dashboard"> Dashboard</a>
    </div>
  )
}

export default Navbar