import React from "react";
import {NavLink, Outlet} from 'react-router-dom';

function Dashboard() {
  return(
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <NavLink to ="adminposts/">Posts</NavLink>
        </li>
        <li>
          <NavLink to ="adminusers/">Users</NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  )
}

export default Dashboard;
