import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route 
                  path="/about"
                  component={About}
              />
              <Route
                  path="*"
                  component={Home}
              />
          </Switch>
      </Router> 
    );
  }
}

export default App;
