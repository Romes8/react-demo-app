import React from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";


function PostsYear() {
  const {year} = useParams()
  const months = ["Jan" , "Feb", "March"]
  return (
    <div>
      <h1>Year section</h1>
      <h3>Year: {year} </h3>
      <h3>For more choose specific month:</h3>
      <ul>
        {months.map((m) => (
          <li>
            <NavLink to={"/posts/" + year + "/" + m}>{m}</NavLink>
          </li>
        ))}
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default PostsYear;
