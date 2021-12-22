import React from 'react'
import { Link } from 'gatsby'

import { FaAlignJustify } from "react-icons/fa"

import logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simple recipes" />
          </Link>
          <button className="nav-btn">
            <FaAlignJustify />
          </button>
        </div>
        <div className="navlinks show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link to="/recipes" className="nav-link" activeClassName="active-link">
            Recipes
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            Tags
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
