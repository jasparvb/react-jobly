import React from "react";

function Home({loggedIn}) {
  return (
    <section className="col-md-8">
      <div class="container text-center">
        <h1 class="mb-4 font-weight-bold">Jobly</h1>
        <p class="lead">All the jobs in one, convenient place.</p>
        {loggedIn ? <h2>Welcome Back!</h2> : <a class="btn btn-primary font-weight-bold" href="/login">Log in</a>}
      </div>
    </section>
  );
}

export default Home;
