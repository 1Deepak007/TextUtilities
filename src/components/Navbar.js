// create file and type import rfs

import React from 'react'
import PropTypes from 'prop-types'

// props
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                    <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`}>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

//PROPTYPES
// proptype will ensure we are sending correct thing in prop
Navbar.propTypes = {
    title: PropTypes.string.isRequired,                    //we cn write PropTypes.string.isRequired  then we have to pass title value 
    home: PropTypes.string,
    aboutText: PropTypes.string
}


//DEFAULT PROPES
//setting default values of props, when we dont pass values of prop then these values will be used
Navbar.defaultProps = {
    title: 'Set title here',
    home: 'Set homeText here',
    aboutText: 'Set aboutText here'
}

