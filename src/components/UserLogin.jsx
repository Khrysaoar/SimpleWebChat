import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export const UserLogin = ({ handleLogin }) => {
  const [name, setName] = useState("");

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Please Sign In
        </Typography>
        <TextField
          label="Username"
          placeholder="Enter Username"
          size="medium"
          style={{ margin: "10px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          style={{ margin: "10px", backgroundColor: "#d62e2e"}}
          onClick={() => handleLogin(name)}
        >
          Join chat
        </Button>
      </CardContent>
    </Card>
  );
};