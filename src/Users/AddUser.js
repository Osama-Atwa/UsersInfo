import React, { useState } from "react";

import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserName = (event) => {
    setEnteredName(event.target.value);
  };
  const addUserAge = (event) => {
    setEnteredAge(event.target.value);
  };
  const addNewUser = (event) => {
    event.preventDefault();

    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "Invalid Name Or Age",
        message: "Please enter Valid name Or Age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter Valid Age (age > 0)",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    setEnteredAge("");
    setEnteredName("");
  };

  const onConfirm = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onConfirm}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addNewUser}>
          <label htmlFor="UserName">User Name</label>
          <input
            type="text"
            value={enteredName}
            id="UserName"
            onChange={addUserName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            value={enteredAge}
            id="age"
            onChange={addUserAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
