import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About-Us-Body';

function App() {
  return (
    <BrowserRouter basename="/ACM-PEC-Website">
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about-us'>
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
