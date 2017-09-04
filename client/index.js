import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Greetings from './components/Greetings.js';
import Register from './components/Register.js';
import Navs from './components/Navs.js'

const newHistory = createBrowserHistory();

const getRoutes = () => {
  return (
        <Router history={newHistory}>
          <div className="container">
            <Navs/>
            <Route exact path='/' component={Greetings}/>
            <Route path='/register' component={Register}/>
          </div>
        </Router>
  );
}

ReactDOM.render(getRoutes(), document.getElementById('app'));
