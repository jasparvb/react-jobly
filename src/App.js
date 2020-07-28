import React, { useState, useEffect } from "react";
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import NavBar from './NavBar';
import UserContext from "./UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <NavBar />
          <Routes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
