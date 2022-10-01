import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersListState) => {
      return [
        ...prevUsersListState,
        { id: Math.random(), name: uName, age: uAge },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
