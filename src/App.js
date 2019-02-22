import React, { Component } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import Header from './components/Header';
import Footer from './components/Footer';
import GalleryArts from './components/GalleryArts';
import Login from './components/Login';
import Admin from './components/admin/Admin';
import store from './store/store';

class App extends Component {

render() {
    return (
        <div>
            <Provider store={store}>
                <Header/>
                <Router>
                    <Switch>
                        <Route path='/admin' component={Admin}/>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/' component={GalleryArts}/>
                    </Switch>
                </Router>
            </Provider>

            <Footer/>
        </div>

    );
  }
}

export default App;
