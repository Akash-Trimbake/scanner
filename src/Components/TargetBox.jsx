import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

// ...........................................................................

import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import CheckList from "../Components/CheckList";

// ...........................................................................

const TargetBox = () => {
  let { url, setUrl, handleSubmitAddTarget } = useContext(AuthContext);

  return (
    <div>
      <form onSubmit={handleSubmitAddTarget}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            width: "85vw",
            textAlign: "left",
            margin: "1vh 4vw",
            padding: "1vw 1vw",
            borderRadius: 2,
          }}
        >
          Add Target
        </Typography>
        <br />

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
          sx={{ width: "90vw", marginLeft: "5vw" }}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          sx={{ width: "90vw", margin: "1vw 5vw" }}
        >
          Submit
        </Button>
      </form>
      <br />
    </div>
  );
};

export default TargetBox;
