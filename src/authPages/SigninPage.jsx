import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// ...........................................................................
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// ...........................................................................

// ...........................................................................

const SigninPage = () => {
  let { loginUser, handleToggleAuth } = useContext(AuthContext);
  return (
    <div>
      <Card
        className="signin-card"
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
          Sign In
        </Typography>
        <Typography
          sx={{ fontSize: 14, margin: "15px" }}
          color="text.secondary"
          gutterBottom
        >
          Not registered yet?{" "}
          <Link to="/signup" style={{ textDecoration: "none", color: "blue" }}>
            Sign Up
          </Link>
        </Typography>

        {/* setting the input field for emails */}
        <form onSubmit={loginUser}>
          <div sx={{ margin: "5vh auto" }}>
            <Typography variant="p" component="div" sx={{ textAlign: "left" }}>
              Email address :
            </Typography>
            <TextField
              id="outlined-basic1"
              variant="outlined"
              name="username"
              type="text"
              required
              placeholder="Enter Your Name :"
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
              id="outlined-basic2"
              variant="outlined"
              name="password"
              type="password"
              required
              placeholder="Enter Your Password :"
              fullWidth
            />
          </div>

          <br />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            onClick={() => {
              handleToggleAuth();
            }}
          >
            SignIn
          </Button>
        </form>
        <br />
      </Card>
    </div>
  );
};

export default SigninPage;
