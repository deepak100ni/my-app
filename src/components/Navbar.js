import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className = {`navbar navbar-expand-lg bg-${props.mode}`} >
        <div className="container-fluid">
            <a className={`navbar-brand text-${(props.mode === 'light')?'dark':'light'}`} href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className={`nav-link active text-${(props.mode === 'light')?'dark':'light'}`} aria-current="page" href="#">{props.homeText}</a>
                </li>
                 {/* <li className="nav-item">
                <Link className={`nav-link text-${(props.mode === 'light')?'dark':'light'}`} aria-current="to" to="/about">{props.aboutText}</Link>
                </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toogleMode} id="flexSwitchCheckDefault"/>
            <label className = {`form-check-label text-${(props.mode === 'light')?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"> Enable {(props.mode === 'light')?'dark':'light'} mode </label>
            </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
                        title:PropTypes.string.isRequired,
                        aboutText:PropTypes.string.isRequired,
                        homeText:PropTypes.string.isRequired
                    }
Navbar.defaultProps = {
    title : 'TextUtils',
    aboutText : 'About Us',
    homeText : 'Home'
}