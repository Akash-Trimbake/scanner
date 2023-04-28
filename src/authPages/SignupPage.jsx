import React, { useState } from "react";
import { Link } from "react-router-dom";

// ................................................................

import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";
// import Avatar from "@mui/material/Avatar";

// ................................................................

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Card
        className="signup-card"
        variant="outlined"
        sx={{
          width: "35vw",
          textAlign: "center",
          margin: "8vh auto",
          padding: "3vw 5vw",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="div">
          Sign Up
        </Typography>
        <Typography
          sx={{ fontSize: 14, margin: "15px" }}
          color="text.secondary"
          gutterBottom
        >
          Already Registered?{" "}
          <Link to="/signin" style={{ textDecoration: "none", color: "blue" }}>
            Sign In
          </Link>
        </Typography>

        {/* setting the input field for emails */}

        <div sx={{ margin: "5vh auto" }}>
          <Typography variant="p" component="div" sx={{ textAlign: "left" }}>
            Email address :
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            // label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            placeholder="Enter Email"
            fullWidth
          />
        </div>

        <br />
        {/* setting the input field for password */}
        <div sx={{ margin: "5vh auto" }}>
          <Typography variant="p" component="div" sx={{ textAlign: "left" }}>
            Password :
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            // label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
            placeholder="Enter Password"
            fullWidth
          />
        </div>

        <br />
        <Button onClick={() => alert("SignedUp")} variant="contained" fullWidth>
          SignUp
        </Button>
        <br />
      </Card>
    </div>
  );
};

export default SignupPage;
