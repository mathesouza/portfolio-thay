import React, { Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import NewArt from '../features/admin/Arts'
import AdminHeader from '../features/admin/AdminHeader';
import Logout from '../features/admin/Logout'
import Loader from '../Loader'
import {auth} from '../base'
import { LOGINSUCCESS, LOGINFAILED } from '../store/action-types';
import { NOVA_ARTE, LOGOUT } from './routes/admin';


const Todo = ()=>{ return <p>todo</p>}
class Admin extends Component{
    componentDidMount(){
        auth.onAuthStateChanged(user =>{
            if(!!user){
                this.props.dispatch({ type: LOGINSUCCESS })
            }else{
                this.props.dispatch({ type: LOGINFAILED })
            }
        })
    }
    render(){
        
        if(this.props.isAuthing){
            return(
                <Loader />
            )    
        }
        if(!this.props.isLogged){
            return <Redirect to='/login'></Redirect>
        }
        return(
            <div>
                <AdminHeader/>
                    <Route
                        path={'/'}
                        component={ Todo }
                    />
                    <Route
                        path={`${this.props.match.url}/${NOVA_ARTE}`}
                        component={ NewArt }
                    />
                    <Route
                        path={`${this.props.match.url}/${LOGOUT}`}
                        component={ Logout }
                    />
            </div>
        )
    }
}

const mapStateToProps = state =>({
    isLogged: state.isLogged,
    isAuthing: state.isAuthing
})

export default connect(mapStateToProps)(Admin)
