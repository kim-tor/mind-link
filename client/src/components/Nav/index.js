import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/search">
        Articles
      </Link>
      <Link className="navbar-brand" to="/posts">
        Posts
      </Link>
    </nav>
  );
}

export default Nav;
