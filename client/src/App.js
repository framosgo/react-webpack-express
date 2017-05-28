import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import Home from './components/Home'
import Login from './components/Login'

// React router setting up
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch id="Switch">
            <Route exact path='/'
                   component={Home} />
            <Route path='/login'
                   component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
