import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminHeader = () =>{
    return(
            <div>
                <nav id='adminHeader' className="navbar navbar-expand-lg navbar-light bg-light header">
                    <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
                        <ul className="navbar-nav ml-auto text-center">
                            <li className="nav-item active">
                                <div className="nav-link"   >
                                    <NavLink to='/admin/nova-arte' >Logout</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto my-2 order-0 order-md-1 position-relative">
                        <div className="nav-link"   >
                            <NavLink to='/admin' location >Admin</NavLink>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
                        <ul className="navbar-nav mr-auto text-right">
                            <li className="nav-item active">
                                <div className="nav-link"   >
                                    <NavLink to='/admin/logout'>Logout</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}

export default AdminHeader
