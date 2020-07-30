import React, { useState, useContext, useEffect, useRef } from "react";
import Alert from "./Alert";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";

function Profile() {
    const { user, setUser } = useContext(UserContext);

    const [activeTab, setActiveTab] = useState('login');
    const INITIAL_STATE = { 
        username: user.username,
        password: "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        photo_url: user.photo_url || "",
        errors: [] 
    };

    const [userData, setUserData] = useState(INITIAL_STATE);
  
    /** Send {name, quantity} to parent
     *    & clear form. */
  
    async function handleSubmit(evt) {
        evt.preventDefault();

        let data = {
            username: userData.username,
            password: userData.password,
            first_name: userData.first_name || undefined,
            last_name: userData.last_name || undefined,
            email: userData.email || undefined
        };

        try {
            const message = await JoblyApi.updateUser(data);
        } catch (errors) {
            return setUserData(data => ({ ...data, errors }));
        }
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value } = evt.target;
      setUserData(fData => ({
        ...fData,
        [name]: value
      }));
    };
  

}

export default Profile;