import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './components/Home.js';

const newHistory = createBrowserHistory();

const getRoutes = () => {
  return (
    <Router history={newHistory}>
      <Route path='/' component={Home}>
      </Route>
    </Router>
  );
}

ReactDOM.render(getRoutes(), document.getElementById('app'));
