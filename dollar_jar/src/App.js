import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';
import './App.css';
import secondPage from './components/secondPage';
class App extends Component {
  
  render() { 
    return ( 
          <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/user" component={secondPage}/>
        </div>
    </Router>
   );
  }
}
 
export default App;

  