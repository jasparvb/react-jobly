import React, { useState, useContext } from "react";
import Alert from "./Alert";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";

function Profile() {
    const { user, setUser } = useContext(UserContext);

    const INITIAL_STATE = { 
        username: user.username,
        password: "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        photo_url: user.photo_url || "",
        userSaved: false,
        errors: [] 
    };

    const [userData, setUserData] = useState(INITIAL_STATE);
 
    async function handleSubmit(evt) {
        evt.preventDefault();

        let data = {
            password: userData.password,
            first_name: userData.first_name || undefined,
            last_name: userData.last_name || undefined,
            email: userData.email || undefined,
            photo_url: userData.photo_url || undefined
        };

        try {
            const updatedUser = await JoblyApi.updateUser(userData.username, data);
            console.log("UPDATED USER", updatedUser);
            setUserData(f => ({ ...f, errors: [], password: "", userSaved: true }));
            setUser(updatedUser);
        } catch (errors) {
            return setUserData(data => ({ ...data, errors }));
        }
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value } = evt.target;
      setUserData(f => ({
        ...f,
        [name]: value,
        userSaved: false
      }));
    };
  
    return (
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <p className="form-control-plaintext">{userData.username}</p>
                        </div>
                        <div className="form-group">
                            <label>First name</label>
                            <input 
                                name="first_name" 
                                className="form-control" 
                                value={userData.first_name} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input 
                                name="last_name" 
                                className="form-control" 
                                value={userData.last_name} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                value={userData.email} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Photo URL</label>
                            <input 
                                type="photo_url" 
                                name="photo_url" 
                                className="form-control" 
                                value={userData.photo_url} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Re-enter Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                className="form-control" 
                                value={userData.password} 
                                onChange={handleChange}
                            />
                        </div>
                        {userData.errors.length ? (
                            <Alert type="danger" messages={userData.errors} />
                        ) : null}
                        {userData.userSaved ? (
                            <Alert type="success" messages={["User updated successfully."]} />
                        ) : null}
                        <button type="submit" className="btn btn-primary btn-block mt-4">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;