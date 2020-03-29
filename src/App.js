import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import './pages/homepage/homepage.styles.scss';


import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path={'/'} component={HomePage} />
      <Route path={'/hats'} component={HatsPage} />
    </div>
  );
}

export default App;
