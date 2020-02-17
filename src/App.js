import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './config/history';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import FeedList from './pages/feed/FeedList';
import Topics from './pages/topics/Topics';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/feed" component={FeedList} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </Router>
  );
}

export default App;
