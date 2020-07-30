import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "./UserContext";

function NavBar({ logout }) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar className="NavBar" expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        { user ? 
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" onClick={logout}>Logout</NavLink>
          </NavItem>
        </Nav>
        : 
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
        </Nav>
        }
      </Navbar>
    </div>
  );
}

export default NavBar;
