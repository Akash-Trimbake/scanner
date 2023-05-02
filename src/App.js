import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignupPage from "./authPages/SignupPage";
import SigninPage from "./authPages/SigninPage";
import Target from "./mainPages/Target";
import Home from "./mainPages/Home";
import Header from "./Components/Header";
import Info from "./mainPages/Info";
import Scanning from "./mainPages/Scanning";
import CheckList from "./Components/CheckList";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./utils/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} exact />
            <Route path="/target" element={<Target />} />
            <Route path="/checklist" element={<CheckList />} />
            <Route path="/info" element={<Info />} />
            <Route path="/scanning" element={<Scanning />} />
          </Route>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* <Route path="*" element={<> not found</>} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
