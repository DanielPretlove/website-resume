import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';



// components
import { Footer } from './components/Footer';
import { Header } from './components/Header';

// pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Blogs } from './pages/Blogs';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Skills" component={Skills} />
          <Route path="/About" component={About} />
          <Route path="/Blogs" component={Blogs} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;