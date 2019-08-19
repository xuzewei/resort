import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Rooms from './pages/Rooms'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
      </Switch>
    </>
  );
}

export default App;
