import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import React, { useState } from 'react'
import Profile from './components/Profile';
import {LoginContext} from './Contexts/LoginContext'

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      {/*We will pass the states that we want share to access them in Login and Profile components, throught this value object in the context Provider. 
      We do this in the higher order compenent which is here the App component */}
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile? <Profile/> : <Login/>}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
