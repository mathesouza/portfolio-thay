import React, { Component } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

import AdminRouter from './AdminRouter'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GalleryArts from '../components/GalleryArts'
import Login from '../components/Login'
import {auth} from '../base'
import {connect} from 'react-redux'

const LOGGED = 'LOGGED'

class DefaultRouter extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        auth.onAuthStateChanged(user =>{
            if(!!user){
                this.props.dispatch({type:LOGGED})
            }
        })
    }
    render(){
        return(
            <div>
                <Header/>
                <Router>
                    <Switch>
                        <Route path='/admin' component={AdminRouter}/>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/' component={GalleryArts}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default connect()(DefaultRouter)