import React, { Component } from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import NewArt from './components/NewArt';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Router>
                <Route path='/nova-arte' component={NewArt}/>
            </Router>
            <Footer/>
        </div>

    );
  }
}

export default App;
