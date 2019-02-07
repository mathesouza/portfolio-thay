import React, { Component } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import NewArt from './components/NewArt';
import GalleryArts from './components/GalleryArts';
import Login from './components/Login';
import Admin from './components/Admin';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route path='/admin' component={Admin}/>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/' component={GalleryArts}/>
                </Switch>
            </Router>

            <Footer/>
        </div>

    );
  }
}

export default App;