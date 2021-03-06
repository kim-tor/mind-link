import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
       <h2>Mind-Link</h2>
      <Link className="navbar-brand" to="/about">
        About
      </Link>
      <Link className="navbar-brand" to="/search">
        Articles
      </Link>
      <Link className="navbar-brand" to="/posts">
        Posts
      </Link>
      <Link className="navbar-brand" to="/addposts">
        Add Posts
      </Link>
      <Link className="navbar-brand" to="/">
        Login
      </Link>
      <Link className="navbar-brand" to="/signup"> Sign Up
      </Link>
      <Link className="navbar-brand" to="/"> Log Out
      </Link>
    </nav>
  );
}

export default Nav;
