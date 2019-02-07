import React from 'react'
import {Link} from 'react-router-dom'
const Header = (props)=>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img className="navbar-brand" width="40" height="40" src='images/panda.png' href="/"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link"  href="#"> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">todo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">todo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">todo</a>
            </li>
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default Header
