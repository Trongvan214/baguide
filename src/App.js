import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import AdventureFarming from './components/AdventureFarming';
import WarPatterns from './components/WarPatterns';
import Partners from './components/Partners';

class App extends Component {
  render() {
    return (  
      <Router basename="baguide">
        <React.Fragment>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/adventure" component={AdventureFarming} />
          <Route path="/partners" component={Partners} />
          <Route path="/patterns" component={WarPatterns} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
