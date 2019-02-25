import React, { Component } from 'react';
import {Provider} from 'react-redux'

import store from './store/store';
import DefaultRouter from './routers/DefaultRouter'

class App extends Component {

render() {
    return (
        <div>
            <Provider store={store}>
                <DefaultRouter/>
            </Provider>
        </div>

    );
  }
}

export default App;
