import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Distrib from './components/distributeur/Distrib';
import Ambiance from './components/ambiance';
import Navbar1 from './components/Navbar';


class App extends React.Component {
  
  render(){
    return (
     <div className="App">
      <Ambiance/>
      <Navbar1 />
        <Switch>
          <Route exact path="/" component={Distrib} />         
        </Switch>
      </div>
    );
  }
}

export default App;
