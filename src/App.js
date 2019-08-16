import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
