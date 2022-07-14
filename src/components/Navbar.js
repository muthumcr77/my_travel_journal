import React from "react"
import globeLogo from "../images/globe_travel_icon.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={globeLogo} alt="globe travel" className="nav-icon"></img>
      <h1 className="nav-title">My Travel Journal</h1>
    </nav>
  )
}

export default Navbar