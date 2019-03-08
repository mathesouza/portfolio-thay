import React from 'react'
const AdminHeader = () =>{
    return(
            <div>
                <nav id='adminHeader' className="navbar navbar-expand-lg navbar-light bg-light header">
                    <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
                        <ul className="navbar-nav ml-auto text-center">
                            <li className="nav-item active">
                                <a className="nav-link" href="/admin/nova-arte">Nova Arte</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto my-2 order-0 order-md-1 position-relative">
                        <a className="mx-auto" href="/admin">
                            Admin
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
                        <ul className="navbar-nav mr-auto text-right">
                            <li className="nav-item active">
                                <a className="nav-link" href="/admin/logout">logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}

export default AdminHeader
