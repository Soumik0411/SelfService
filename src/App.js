import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// get our fontawesome imports




// import logo from './logo.svg';
import './App.css';
import './components/CSS/bootstrap.min.css'
import Header from './components/Header';
// import Navbar from './components/Navbar';
import Login from './components/Login';


import './components/CSS/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      
      {/* <Router>
      <Switch>
        <Route exact path="/" Render={()=>{
          return(<Login/>)
        }}> 

        </Route>
        <Route exact path="/dashboard">
        <Dashboard/>
        </Route>
        </Switch>
      </Router> */}
      <Switch>
        <Route path="/dashboard">
          <Header/>
          <Dashboard/>
          <Footer/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>

      </Switch>
      </Router>
        
        
        
        

      {/* <Login/> */}
      {/* <Dashboard /> */}
     

    </>


  );
}

export default App;
