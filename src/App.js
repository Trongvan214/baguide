import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AdventureFarming from './components/adventure/AdventureFarming';
import WarPatterns from './components/warpattern/WarPatterns';
import Partners from './components/partners_and_battling/PartnersAndBattling';
import About from './components/about/About';

class App extends Component {
  render() {
    return (  
      <Router basename="baguide">
        <React.Fragment>
          <CustomNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/adventure" component={AdventureFarming} />
            <Route path="/partners/:section" component={Partners} />
            <Route path="/partners/" component={Partners} />
            <Route path="/patterns/" component={WarPatterns} />
            <Route path="/about" component={About} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
