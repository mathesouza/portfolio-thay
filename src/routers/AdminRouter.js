import React, { Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import NewArt from '../components/admin/Arts'
import AdminHeader from '../components/admin/AdminHeader';
import Logout from '../components/admin/Logout'
import Loader from '../Loader'
import {auth} from '../base'
import { LOGINSUCESS, LOGINFAILED } from '../store/action-types';


const todo = ()=>{ return <p>todo</p>}
class Admin extends Component{
    componentDidMount(){
        auth.onAuthStateChanged(user =>{
            if(!!user){
                this.props.dispatch({type:LOGINSUCESS})
            }else{
                this.props.dispatch({type:LOGINFAILED})
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
                        component={ todo }
                    />
                    <Route
                        path={this.props.match.url+'/nova-arte'}
                        component={ NewArt }
                    />
                    <Route
                        path={this.props.match.url+'/logout'}
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
