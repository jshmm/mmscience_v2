import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './config/history';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import FeedList from './pages/feed/FeedList';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/feed" component={FeedList} />
      </Switch>
    </Router>
  );
}

export default App;
