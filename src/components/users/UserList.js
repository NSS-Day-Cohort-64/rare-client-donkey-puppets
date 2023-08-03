import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../managers/UserManager";
import { User } from "./User";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend and set them to the state
    getAllUsers().then((data) => {
      // Assuming the users are already sorted by username on the backend
      setUsers(data);
    });
  }, []);

  return (
    <div style={{ margin: "0rem 3rem" }}>
      <h1>Users</h1>
      <article className="users">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </article>
    </div>
  );
};
