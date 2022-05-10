import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Landing from './Components/Landing.jsx'
import Home from'./Components/Home.jsx'
// import Nav from'./Components/Nav.jsx'
import NewActivity from'./Components/NewActivity.jsx'
import CountryDetails from'./Components/CountryDetails.jsx'
// import style from './App.css';
// import Filter from './Components/Filter.jsx'

function App() {
  return (
    <div className="App">
      <Route exact path='/' render ={()=> <Landing />}/>
      {/* <Route exact path='/home' render ={()=> <><Nav /><Home   /></>}/> */}
      <Route exact path='/home' render ={()=> <><Home   /></>}/>
      {/* <Route exact path='/NewActivity' render ={()=> <><Nav /><NewActivity /></>}/> */}
      <Route exact path='/NewActivity' render ={()=> <><NewActivity /></>}/>
      {/* <Route path='/Country/' render ={()=> <> <Nav /> <CountryDetails /></>}/> */}
      <Route path='/Country/' render ={()=> <> <CountryDetails /></>}/>
    </div>
  );
}

export default App