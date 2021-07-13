import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Redirect path="/" to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
