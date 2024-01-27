import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    // bg-body-tertiary
    // in below class we will put javascript to change the color of navbar
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>            
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true" to="/">{props.disableText}</Link>
            </li>
          </ul>
          <form className="d-flex mx-auto" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          {/* switches for dark and light mode and using javascript we can control text color*/}
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable green mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input" onClick={props.toggleMode3} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable yellow mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  // if u dont want something undefined...then simply apply isrequired 
  title: PropTypes.string.isRequired,
  disableText: PropTypes.string
}

Navbar.defaultProps = {
  // default text when no props will pass there...
  title: "Aaein_Baigan",
  disableText: "deaf",
  aboutText: "About"
}
