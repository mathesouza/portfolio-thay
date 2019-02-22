import React from 'react'
import {connect} from 'react-redux'
const _Header = (props)=>{
    
    return(
            <nav id='header' className="navbar navbar-expand-lg navbar-light bg-light header">
                <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
                    <ul className="navbar-nav ml-auto text-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Jobs</a>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto my-2 order-0 order-md-1 position-relative">
                    <a className="mx-auto" href="/">
                        <img src="../images/header.png" width='120' alt='header' height='120' className="rounded-circle"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
                    <ul className="navbar-nav mr-auto text-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Jogos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Animações</a>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}
const Header = connect(
    state =>({
        logged: state.logged
    })
)(_Header)
export default Header
