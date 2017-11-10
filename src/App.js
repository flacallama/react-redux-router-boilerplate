import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import About from './components/About';

import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'






class App extends Component {
  render() {
    const history = createBrowserHistory()

    return (

        <Router history={history}>
          <div className='lower'>

            <Route exact path="/" component={Main} history={history}/>
            <Route path="/about" component={About}/>


          </div>
        </Router>

    );
  }
}

export default App;
