import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

// ...........................................................................
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CheckList from "../Components/CheckList";
import loader from "../assets/loader.svg";

// ...........................................................................

const Target = () => {
  const [isLoading, setIsLoading] = useState(false);
  let { url, setUrl, handleSubmitAddTarget } = useContext(AuthContext);

  function handleLoading() {
    setIsLoading(!isLoading);
  }

  return (
    <div style={{ backgroundColor: "#f9fafe" }}>
      <form onSubmit={handleSubmitAddTarget}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
            margin: "1vh 4vw",
            padding: "1vw 1vw",
            borderRadius: 2,
          }}
        >
          Add Target
        </Typography>
        <br />

        <div style={{ textAlign: "center" }}>
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            name="url"
            type="text"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            required
            placeholder="Enter Address"
            fullWidth
            sx={{ width: "50vw" }}
          />

          <br />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            sx={{ width: "10vw", margin: "1vw 5vw" }}
            onClick={handleLoading}
          >
            Submit
          </Button>
        </div>
      </form>
      <br />

      <div style={{ textAlign: "center" }}>
        <CheckList />
      </div>
    </div>
  );
};

export default Target;
