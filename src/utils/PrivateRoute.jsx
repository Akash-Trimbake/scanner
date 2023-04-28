import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const PrivateRoutes = () => {
  let { isLoggedIn } = useContext(AuthContext);

  // let auth = { token: true };
  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
