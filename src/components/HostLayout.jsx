import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


const HostLayout = () => {
  let activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  return (
    <>
      <nav className='host-nav'>
        <NavLink end style={({ isActive }) => isActive ? activeStyle : undefined} to="/host">Dashboard</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/host/income">Income</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/host/vans">Vans</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout