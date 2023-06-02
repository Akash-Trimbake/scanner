import React, { useState } from "react";
import { Link } from "react-router-dom";

// ................................................................

import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";

// ................................................................

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {/* <Card
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


        <div sx={{ margin: "5vh auto" }}>
          <Typography variant="p" component="div" sx={{ textAlign: "left" }}>
            Email address :
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            placeholder="Enter Email"
            fullWidth
          />
        </div>

        <br />

        <div sx={{ margin: "5vh auto" }}>
          <Typography variant="p" component="div" sx={{ textAlign: "left" }}>
            Password :
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={() => {}} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Typography
                sx={{ fontSize: 14, margin: "15px" }}
                color="text.secondary"
                gutterBottom
              >
                Already have an account?{" "}
                <Link
                  to="/signin"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Sign In
                </Link>
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignupPage;
