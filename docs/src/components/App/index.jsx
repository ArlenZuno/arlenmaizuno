import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Work from '../Work/Work'
import Project from '../Project/Project'
import Loading from '../Loading/Loading'

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path='/' exact render={() => { return <Home /> }} />
            <Route path='/contact' component={Contact} />
            <Route path='/work' component={Work} />
            <Route path='/project' component={Project} />
            <Route path='/underconstruction' component={Loading} />
          </Switch>
      </div>
    );
  }
}

export default App;
