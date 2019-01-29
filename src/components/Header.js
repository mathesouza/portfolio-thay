import React from 'react'
import {Link} from 'react-router-dom'
const Header = (props)=>{
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img class="navbar-brand" width="40" height="40" src='images/panda.png' href="/"/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link"  href="#"> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">todo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">todo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">todo</a>
            </li>
          </ul>
        </div>
      </nav>        
        </div>
    )
}

export default Header
