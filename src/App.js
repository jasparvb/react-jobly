import React, { useState, useEffect } from "react";
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";

function App() {
  const [user, setUser] = useState(null);
  const initialValue = localStorage.getItem('jobly-token') || null;
  const [token, setToken] = useState(initialValue);

  useEffect(() => {
    if (!token) {
      localStorage.removeItem('jobly-token');
    } else {
      localStorage.setItem('jobly-token', token);
    }
  }, [token]);

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
          <Routes setToken={setToken} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
