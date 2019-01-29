import React, { Component } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import NewArt from './components/NewArt';
import GalleryArts from './components/GalleryArts';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route path='/' component={GalleryArts}/>
                    <Route path='/nova-arte' component={NewArt}/>
                </Switch>
            </Router>
            
            <Footer/>
        </div>

    );
  }
}

export default App;
