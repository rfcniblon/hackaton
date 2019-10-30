import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';


class App extends React.Component {
  
  render(){
    return (
     <div className="App">
        <Switch>
          <Route exact path="/" component={Header} />         
       
        </Switch>
    
      </div>
    );
    }
}

export default App;
//<Route path="/ContactUs" component={ContactForm} />
//<Route path="/erreur404" component={Erreur404} />
   //     <Route path="/Team" component={Team} />