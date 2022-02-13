import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Posts() {
  const year = ["2020", "2021", "2022"]
  const randomyear = year[Math.floor(Math.random() * year.length)]
  
  return (
    <div>
      <h1>Posts</h1>
      <p>Links to years of posts: </p>
      <ul>
        {year.map((y) => (
          <li>
            <NavLink to={'/posts/' + y }>{y}</NavLink>
          </li>
        ))}
        
      </ul>
      <Outlet/>
    </div>
  );
};

export default Posts;
