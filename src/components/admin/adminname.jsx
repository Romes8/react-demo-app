import React from "react";
import { useParams } from "react-router-dom";

function AdminName() {
  const { name } = useParams();
  
  return(
    <h1>Admin {name}</h1>
  );
}

export default AdminName;
