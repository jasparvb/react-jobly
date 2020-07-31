import React, { useContext } from "react";
import UserContext from "./UserContext";

function Home() {
  const { user } = useContext(UserContext);
  return (
    <section className="Home col-md-12 mt-5">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {user ? <h2>Welcome Back!</h2> : <a className="btn btn-primary font-weight-bold" href="/login">Log in</a>}
      </div>
    </section>
  );
}

export default Home;
