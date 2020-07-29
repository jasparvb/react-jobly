import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "./JoblyApi";

function Login({authenticate}) {
    const [activeTab, setActiveTab] = useState('login');
    const INITIAL_STATE = { 
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "" 
    };

    const [loginData, setLoginData] = useState(INITIAL_STATE);
    const history = useHistory();

    function setLogin() {
        setActiveTab('login');
    }
    function setSignup() {
        setActiveTab('signup');
    }
  
    /** Send {name, quantity} to parent
     *    & clear form. */
  
    const handleSubmit = evt => {
        evt.preventDefault();
        let endpoint;
        let data;
        let token;

        if(activeTab === 'signup') {
            data = {
                username: loginData.username,
                password: loginData.password,
                first_name: loginData.first_name || undefined,
                last_name: loginData.last_name || undefined,
                email: loginData.email || undefined
            };
            endpoint = "register";
        } else {
            data = {
                username: loginData.username,
                password: loginData.password
            };
            endpoint = "login";
        }

        try {
            token = await JoblyApi[endpoint](data);
        } catch (errors) {
            return setloginData(data => ({ ...data, errors }));
        }
        
        authenticate(token);
        history.push("/jobs");
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value } = evt.target;
      setLoginData(fData => ({
        ...fData,
        [name]: value
      }));
    };
  

    const signupFields = (
        <div>
            <div className="form-group">
                <label>First name</label>
                <input 
                    name="first_name" 
                    className="form-control" 
                    value={loginData.first_name} 
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Last name</label>
                <input 
                    name="last_name" 
                    className="form-control" 
                    value={loginData.last_name} 
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    value={loginData.email} 
                    onChange={handleChange}
                />
            </div>
        </div>
    );

    return (
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <div className="d-flex justify-content-end">
                <div className="btn-group">
                    <button className={`btn btn-primary ${activeTab === 'login' ? "active" : ""}`} onClick={setLogin}>Login</button>
                    <button className={`btn btn-primary ${activeTab === 'signup' ? "active" : ""}`} onClick={setSignup}>Sign up</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input 
                                name="username" 
                                className="form-control" 
                                value={loginData.username} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                className="form-control" 
                                value={loginData.password} 
                                onChange={handleChange}
                            />
                        </div>
                        {activeTab === 'signup' ? signupFields : ''}
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;