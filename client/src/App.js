import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Landing from './Components/Landing.jsx'
import Home from'./Components/Home.jsx'
import NewActivity from'./Components/NewActivity.jsx'
import CountryDetails from'./Components/CountryDetails.jsx'

function App() {
  return (
    <div className="App">
      <Route exact path='/' render ={()=> <Landing />}/>
      <Route exact path='/home' render ={()=> <><Home   /></>}/>
      <Route exact path='/NewActivity' render ={()=> <><NewActivity /></>}/>
      <Route path='/Country/' render ={()=> <> <CountryDetails /></>}/>
    </div>
  );
}

export default App