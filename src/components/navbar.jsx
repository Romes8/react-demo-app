import React from "react";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div id="navbarSupportedContent">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/products" >Products</Link>
            </li>
            <li class="nav-item dropdown">
              <Link className="nav-link" to="/posts">Posts</Link>
            </li>
            <li class="nav-item dropdown">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
