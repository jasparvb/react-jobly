import React, { useState, useEffect } from "react";
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      let user = await JoblyApi.getUser(user)
    }
  });

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
