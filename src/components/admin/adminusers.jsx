import React from "react";
import {useSearchParams} from 'react-router-dom'

const users = ["John", "Kane", "Tom", "Jerry", "Roman", "Catalina", "Julia"];


function AdminUsers() {
  const [searchParams, setSearchParams] = useSearchParams({});

  const searchTerm = searchParams.get('name') || '';

  const handleSearch = Event => {
    const name = Event.target.value;

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
