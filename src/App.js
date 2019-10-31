import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Ambiance from './components/ambiance';
import Navbar1 from './components/Navbar';


class App extends React.Component {
  
  render(){
    return (
     <div className="App">
      <Ambiance/>
      <Navbar1 />
        <Switch>
          <Route exact path="/" component={Header} />         
        </Switch>
      </div>
    );
  }
}

export default App;
