import React, { useState, useEffect } from "react";
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import { decode } from "jsonwebtoken";
import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";

function App() {
  const [user, setUser] = useState(null);
  const initialValue = localStorage.getItem('jobly-token') || null;
  const [token, setToken] = useState(initialValue);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        let { username } = decode(token);
        let currentUser = await JoblyApi.getUser(username);
        setUser(currentUser);
      } catch (err) {
        setUser(null);
      }
      setInfoLoaded(true);
    }

    if (!token) {
      localStorage.removeItem('jobly-token');
    } else {
      localStorage.setItem('jobly-token', token);
    }
    setInfoLoaded(false);
    getUser();
  }, [token]);

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  if (!infoLoaded) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <NavBar logout={logout} />
          <Routes setToken={setToken} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
