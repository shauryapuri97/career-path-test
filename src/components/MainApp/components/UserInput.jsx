import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function UserInput() {
  const [loggedUser, setLoggedUser] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const onBeginTest = (event) => {
    event.preventDefault();
    if (loggedUser) {
      setSearchParams({ user: loggedUser });
    } else {
      window.alert("Please select a user");
    }
  };

  return (
    <div className="userInputContainer">
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Please enter user to continue
      </Typography>
      <TextField
        label="User"
        variant="outlined"
        value={loggedUser}
        onChange={(e) => setLoggedUser(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={onBeginTest}
        style={{ backgroundColor: `rgb(57, 73, 171)`, color: "white" }}
      >
        Begin Test
      </Button>
    </div>
  );
}

export default UserInput;
