import React, { useState } from 'react'
import { Link } from 'gatsby'

import { FaAlignJustify } from "react-icons/fa"

import logo from '../assets/images/logo.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simple recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setToggle(!toggle)} >
            <FaAlignJustify />
          </button>
        </div>
        <div className={ toggle ? "nav-links show-links" : "nav-links" }>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={ () => setToggle(false) }
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={ () => setToggle(false) }
          >
            Recipes
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={ () => setToggle(false) }
          >
            About
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={ () => setToggle(false) }
          >
            Tags
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="btn"
              onClick={ () => setToggle(false) }
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
