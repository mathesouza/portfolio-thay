import React from 'react'
import {Link} from 'react-router-dom'
const Header = (props)=>{
    return(
        <div>
            <header className='footer text-faded text-center py-5 header-site'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <img src="images/panda.png" alt="" className='navbar-brand' height="40" width="40"/>
            </nav>
        </header>
      </div>
    )
}

export default Header
