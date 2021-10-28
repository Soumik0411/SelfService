import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// get our fontawesome imports




// import logo from './logo.svg';
import './App.css';
// import './components/CSS/stylog.css'
import './components/CSS/bootstrap.min.css'
import Header from './components/Header';
// import Navbar from './components/Navbar';
import Login from './components/Login';

import './components/CSS/style.css';
// import './components/CSS/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header/>
      <Router>
      <Switch>
        <Route exact path="/" Render={()=>{
          return(<Login/>)
        }}> 

        </Route>
        
        
        
        
        
        <Route exact path="/dashboard">
          <Dashboard/>

        </Route>
      </Switch>
      </Router>
      {/* <Login/> */}
      {/* <Dashboard /> */}
      <Footer/>

    </>


  );
}

export default App;
