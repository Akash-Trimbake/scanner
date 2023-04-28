import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  // const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [subDomains, setSubDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("");
  // ...............................................................................

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedBooleanState = localStorage.getItem("isLoggedIn");
    if (storedBooleanState !== null) {
      return storedBooleanState === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  const handleToggleAuth = () => {
    setIsLoggedIn(true);
  };
  // ...............................................................................

  // ...............................................................................
  const navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();

    let response = await fetch("http://192.168.0.110:8000/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    // console.log("data:", data);
    // console.log("response:", response);

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.setItem("isLoggedIn", false);
    window.location.reload();
    navigate("/signin");
  };

  let updateToken = async (e) => {
    console.log("update token called");
    let response = await fetch("http://192.168.0.110:8000/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens.refresh }),
    });
    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  // .....................................................................................................................
  // Context for Target
  // .....................................................................................................................

  function sendUrlToBackend(url) {
    // const authTokens = localStorage.getItem("authTokens");
    const headers = { Authorization: `Bearer ${authTokens.access}` };

    const data = { url: url };

    axios
      .get(`http://192.168.0.110:8000/recon/1/sub?url=${url}`, data, {
        method: "GET",
        headers,
      })
      .then((response) => {
        // Handle successful response
        setSubDomains(response.data.subdomains);

        // console.log(response.data.subdomains);
      })
      .catch((error) => {
        // Handle error
        alert(error);
      });
  }

  const selectSubdomain = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleSubmitAddTarget = (event) => {
    event.preventDefault();
    sendUrlToBackend(url);
    setUrl("");
  };

  // .....................................................................................................................
  // Context for Checklist and get techip response
  // .....................................................................................................................
  // const selectedDomain = localStorage.getItem("selectedDomain");

  async function sendSelectedSubdomainToBackend() {
    const headers = { Authorization: `Bearer ${authTokens.access}` };
    const data = { selectedDomain: selectedDomain };

    axios
      .get(
        `http://192.168.0.110:8000/recon/1/techip?url=${selectedDomain}`,
        data,
        {
          method: "GET",
          headers,
        }
      )
      .then((response) => {
        // Handle successful response
        console.log(response.data.ip);
        // console.log(response.data.technology.webservers);
        // console.log(response.data.technology.cms);
        // console.log(response.data.technology.programminglanguages);
      })
      .catch((error) => {
        // Handle error
        alert("error fetching ip");
      });
  }
  // .....................................................................................................................
  // get Directory response
  // .....................................................................................................................

  async function getDirFromBackend() {
    const headers = { Authorization: `Bearer ${authTokens.access}` };
    const data = { selectedDomain: selectedDomain };

    axios
      .get(
        `http://192.168.0.110:8000/recon/1/dir?url=${selectedDomain}&mode=1`,
        data,
        {
          method: "GET",
          headers,
        }
      )
      .then((response) => {
        // Handle successful response
        console.log(response.data.directories);
      })
      .catch((error) => {
        // Handle error
        alert("error fetching dir");
      });
  }

  // .....................................................................................................................
  // get endpt response
  // .....................................................................................................................

  async function getEndptFromBackend() {
    const headers = { Authorization: `Bearer ${authTokens.access}` };
    const data = { selectedDomain: selectedDomain };

    axios
      .get(
        `http://192.168.0.110:8000/recon/1/endpt?url=${selectedDomain}`,
        data,
        {
          method: "GET",
          headers,
        }
      )
      .then((response) => {
        // Handle successful response
        console.log(response.data.endpoints);
      })
      .catch((error) => {
        // Handle error
        alert("error fetching endpt");
      });
  }
  // .....................................................................................................................

  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    isLoggedIn: isLoggedIn,
    handleToggleAuth: handleToggleAuth,
    authTokens: authTokens,
    handleSubmitAddTarget: handleSubmitAddTarget,
    setUrl: setUrl,
    url: url,
    selectedDomain: selectedDomain,
    sendSelectedSubdomainToBackend: sendSelectedSubdomainToBackend,
    subDomains: subDomains,
    selectSubdomain: selectSubdomain,
    setSelectedDomain: setSelectedDomain,
    getDirFromBackend: getDirFromBackend,
    getEndptFromBackend: getEndptFromBackend,
  };

  useEffect(() => {
    let tenMinute = 1000 * 60 * 10;
    setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, tenMinute);
  }, [authTokens]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
