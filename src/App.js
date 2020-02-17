import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './config/PrivateRoute';
import history from './config/history';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import FeedList from './pages/feed/FeedList';
import Topics from './pages/topics/Topics';
import './App.css';

function App() {
  const auth = useSelector(state => state.user.auth);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute
          path="/feed"
          component={FeedList}
          isAuthenticated={auth}
        />
        <PrivateRoute
          path="/topics"
          component={Topics}
          isAuthenticated={auth}
        />
      </Switch>
    </Router>
  );
}

export default App;
