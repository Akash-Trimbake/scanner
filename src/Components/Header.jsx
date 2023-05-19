import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const Header = () => {
  // const [notes, setNotes] = useState("");

  let { user, logoutUser, handleToggleAuth } = useContext(AuthContext);

  //

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "right",
          gap: "10px",
          margin: "20px 40px",
        }}
      >
        {/* <Link
          to="/"
          style={{
            marginTop: "12px",
            // marginRight: "0",
            width: "40px",
            height: "25px",
            textAlign: "center",
            color: "black",
            // fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Home
        </Link> */}

        {/* <span> | </span> */}
        <Divider orientation="vertical" />
        <Link
          to="/target"
          color="secondary"
          style={{
            marginTop: "12px",
            width: "100px",
            height: "25px",
            textAlign: "center",
            color: "black",
            // fontWeight: "bold",
            textDecoration: "none",
            lineHeight: "25px",
          }}
        >
          Target
        </Link>
        {/* <span> | </span> */}
        {/* <Divider orientation="vertical" dark /> */}
        {user ? (
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={() => {
              logoutUser();
              handleToggleAuth();
              localStorage.clear();
            }}
          >
            <Link style={{ color: "white", textDecoration: "none" }}>
              LogOut
            </Link>
          </Button>
        ) : (
          <Button variant="contained" color="secondary" size="large">
            <Link
              to="/signin"
              style={{ color: "white", textDecoration: "none" }}
            >
              Sign in
            </Link>
          </Button>
        )}
        {/* <Divider /> */}

        {/* {user && <p>Hello {user.user_id}</p>} */}
        {/* <button
        onClick={() => {
          console.log(username);
        }}
      >
        click
      </button> */}
      </nav>
      <Divider />
    </>
  );
};

export default Header;
