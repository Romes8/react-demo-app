import React from "react";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/products">Products</Link>
        </li>
        <li class="nav-item dropdown">
        <Link to="/posts">Posts</Link>
        </li>
        <li class="nav-item dropdown">
        <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
