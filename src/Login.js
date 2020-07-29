import React, { useState, useEffect } from "react";


function Login() {
    return (
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <div className="d-flex justify-content-end">
                <div className="btn-group">
                    <button className="btn btn-primary active">Login</button>
                    <button className="btn btn-primary">Sign up</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" className="form-control" value="" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" value="" />
                        </div>
                        <div>
                            <div class="form-group">
                                <label>First name</label>
                                <input name="first_name" class="form-control" value="" />
                            </div>
                            <div class="form-group">
                                <label>Last name</label>
                                <input name="last_name" class="form-control" value="" />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="email" class="form-control" value="" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;