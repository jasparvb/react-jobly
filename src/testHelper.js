import React from "react";
import UserContext from "./UserContext";

const demoUser = {
  username: "test",
  first_name: "test",
  last_name: "mctest",
  email: "test@test.net",
  photo_url: null,
  jobs: []
};

const UserProvider = ({ children, user = demoUser }) => (
  <UserContext.Provider value={{user}}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };
