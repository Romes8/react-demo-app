import React from "react";
import { Outlet, useParams } from "react-router-dom";


function PostsMonth() {
  const {month} = useParams()
  return (
    <div>
      <h1>Month section</h1>
        <h3>Month: {month} </h3>
    </div>
  );
};

export default PostsMonth;
