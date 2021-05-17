
import './css/style.css';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contactMe';
import Portfolio from './pages/portfolio.js';
import Home from './pages/home';
import Navbar from './components/Navbar/Navbar'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar />
          <div>

            <Route exact path='/' exact component={Home} />
            <Route exact path='/portfolio' exact component={Portfolio} />
            <Route exact path='/about' exact component={AboutMe} />
            <Route exact path='/contact' exact component={Contact} />

          </div>

        </div>
      </Switch>
    </Router>
  );
}

export default App;
