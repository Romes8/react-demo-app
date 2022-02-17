import React from "react";
import {useSearchParams} from 'react-router-dom'

const users = ["John", "Kane", "Tom", "Jerry", "Roman", "Catalina", "Julia"];


function AdminUsers() {
  const [searchParams, setSearchParams] = useSearchParams();    //attention to the brackets

  
  const searchTerm = searchParams.get('name') || '';  //set the varible name which we are looking for

  //handles the search input change
  const handleSearch = Event => {
    const name = Event.target.value;    //const needs to carry the same name as in .get()   /// otherwise it wont work

    if (name) {
      setSearchParams({name});
    }
    else {
      setSearchParams({});
    }
  };

  return(
    <div>
      <h1>Admin Users</h1>
      <input type="text" value={searchTerm} onChange={handleSearch} />  
      <ul>
        {users.filter(user => user.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  
  );
}

export default AdminUsers;
