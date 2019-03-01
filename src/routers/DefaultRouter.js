import React, { Component } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

import AdminRouter from './AdminRouter'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GalleryArts from '../components/GalleryArts'
import Login from '../components/Login'

import {connect} from 'react-redux'


class DefaultRouter extends Component{
    
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