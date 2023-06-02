import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// ...........................................................................
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";

// ...........................................................................

// ...........................................................................

const SigninPage = () => {
  let { loginUser, handleToggleAuth } = useContext(AuthContext);
  return (
    <div>
      {/* <Card
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
      </Card> */}

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={loginUser} noValidate sx={{ mt: 1 }}>
            <TextField
              name="username"
              type="text"
              required
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              label="Password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
              onClick={() => {
                handleToggleAuth();
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Typography
                  sx={{ fontSize: 14, margin: "15px" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Not registered yet?{" "}
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    Sign Up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SigninPage;
