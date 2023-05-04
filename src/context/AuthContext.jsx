import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import axiosInstance from "../axiosApi";

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
  const [ip, setIp] = useState("");
  const [cms, setCms] = useState("");
  const [programminglanguage, setProgramminglanguage] = useState("");
  const [webserver, setWebserver] = useState("");
  const [url, setUrl] = useState("");
  const [subDomains, setSubDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("");
  const [dir, setDir] = useState([]);
  const [endpoints, setEndpoints] = useState([]);
  const [selectedEndpoint, setSelectedEndpoint] = useState("");
  const [zap, setZap] = useState([]);
  const [responseData, setResponseData] = useState("");

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
      navigate("/target");
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

  const sendUrlToBackend = async (url) => {
    let headersList = {
      Authorization: `Bearer ${authTokens.access}`,
    };

    let response = await fetch(
      `http://192.168.0.110:8000/recon/1/sub?url=${url}`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();

    setSubDomains(data.subdomains);
  };

  const handleSubmitAddTarget = (event) => {
    event.preventDefault();
    sendUrlToBackend(url);
    // setUrl("");
  };

  // .....................................................................................................................
  // navigate to info page
  // .....................................................................................................................
  const navigateToInfoPage = () => {
    navigate("/info");
  };

  // .....................................................................................................................
  // Context for Checklist and get techip response
  // .....................................................................................................................

  const getTechIpFromBackend = async () => {
    let headersList = {
      Authorization: `Bearer ${authTokens.access}`,
    };

    let response = await fetch(
      `http://192.168.0.110:8000/recon/1/techip?url=${selectedDomain}`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    // console.log(data);
    // console.log(data.subdomains.length);
    // console.log(typeof data);
    console.log("at techip", data);
    console.log(data.ip);
    console.log("technology", data.technology);

    setIp(data.ip);
    setCms(data.technology.cms);
    setProgramminglanguage(data.technology.programminglanguage);
    setWebserver(data.technology.webservers);
    // webserver,programminglanguage,cms
  };

  // .....................................................................................................................
  // get Directory response
  // .....................................................................................................................
  const getDirFromBackend = async () => {
    let headersList = {
      Authorization: `Bearer ${authTokens.access}`,
    };

    let response = await fetch(
      `http://192.168.0.110:8000/recon/1/dir?url=${selectedDomain}&mode=1`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    console.log("at dir", data);
    setDir(data.directories);
    // console.log(data.directories);
  };

  // .....................................................................................................................
  // get endpoint response
  // .....................................................................................................................

  const getEndptFromBackend = async () => {
    let headersList = {
      Authorization: `Bearer ${authTokens.access}`,
    };

    let response = await fetch(
      `http://192.168.0.110:8000/recon/1/endpt?url=${selectedDomain}&count=100`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    console.log("at endpt", data);
    // console.log(data.endpoints);
    console.log(data.endpoints.length);
    setEndpoints(data.endpoints);
  };

  // .....................................................................................................................
  // get zap data
  // .....................................................................................................................

  const getZapSpyderResponse = async () => {
    let headersList = {
      Authorization: `Bearer ${authTokens.access}`,
    };

    let response = await fetch(
      `http://192.168.0.110:8000/vuln/1/zap/spider?url=${selectedEndpoint}`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    // console.log("zap spyder", data);

    if (data) {
      let headersList = {
        Authorization: `Bearer ${authTokens.access}`,
      };

      let response = await fetch(
        `http://192.168.0.110:8000/vuln/1/zap/active?url=${selectedEndpoint}`,
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();
      console.log("zap active", data);
      setZap(data);
    }
  };

  // .....................................................................................................................
  // navigate to scanning page
  // .....................................................................................................................
  const navigateToScanningPage = () => {
    navigate("/scanning");
  };

  // .....................................................................................................................
  // get nuclei response
  // .....................................................................................................................

  // const getNucleiResponse = () => {
  //   const url =
  //     "http://192.168.0.110:8000/vuln/1/nuclei?url=http://testphp.vulnweb.com/listproducts.php?cat=1";
  //   const headers = { "Content-Type": "application/json" };

  //   fetch(url, {
  //     headers: {
  //       ...headers,
  //       Authorization: `Bearer ${authTokens.access}`,
  //     },
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       let reader = response.body.getReader();
  //       const decoder = new TextDecoder();

  //       function read() {
  //         reader
  //           .read()
  //           .then(({ done, value }) => {
  //             if (done) {
  //               console.log("Stream complete");
  //               return;
  //             }

  //             const decodedValue = decoder.decode(value);
  //             JSON.parse(decodedValue);
  //             setResponseData((prevData) => prevData + decodedValue);
  //             read();
  //           })
  //           .catch((error) => {
  //             console.error(error);
  //           });
  //       }

  //       read();
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // .....................................................................................................................
  //
  // .....................................................................................................................

  const [dctVuln, setdctVuln] = useState([]);
  const getNucleiResponse = () => {
    // localStorage.setItem('data',[])
    const url = `http://192.168.0.110:8000/vuln/1/nuclei?url=${selectedEndpoint}`;
    const headers = { "Content-Type": "application/json" };

    const responseData = document.getElementById("response-data");
    let c = 1;
    fetch(url, {
      headers: {
        ...headers,
        Authorization: `Bearer ${authTokens.access}`,
      },
      method: "GET",
    })
      .then((response) => {
        const reader = response.body.getReader();

        function read() {
          reader
            .read()
            .then(({ done, value }) => {
              if (done) {
                console.log("Stream complete");
                return;
              }

              const decoder = new TextDecoder();
              const text = decoder.decode(value);
              // console.log(text, JSON.parse(`te/xt));
              const items = JSON.parse(`${text}`);
              // console.log(items);
              // setResponse(json.data);
              let dct = [items.data.Vuln, items.data.severity, items.data.url];
              // console.log(dct);

              localStorage.setItem(dct[0], dct);

              let data = Object.keys(localStorage).filter((item) => {
                return item !== "authTokens";
              });
              data = data.filter((item) => {
                return item !== "isLoggedIn";
              });
              console.log(data.length);
              setdctVuln(...[data]);
              read();
              c++;
            })
            .catch((error) => {
              console.error(error);
            });
        }

        read();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // .....................................................................................................................
  //
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
    subDomains: subDomains,
    setSelectedDomain: setSelectedDomain,
    navigateToInfoPage: navigateToInfoPage,
    getTechIpFromBackend: getTechIpFromBackend,
    getDirFromBackend: getDirFromBackend,
    getEndptFromBackend: getEndptFromBackend,
    getZapSpyderResponse: getZapSpyderResponse,
    zap: zap,
    ip: ip,
    webserver: webserver,
    programminglanguage: programminglanguage,
    cms: cms,
    dir: dir,
    endpoints: endpoints,
    selectedEndpoint: selectedEndpoint,
    setSelectedEndpoint: setSelectedEndpoint,
    navigateToScanningPage: navigateToScanningPage,
    getNucleiResponse: getNucleiResponse,
    responseData: responseData,
    dctVuln: dctVuln,
  };

  useEffect(() => {
    let oneDay = 1000 * 60 * 60 * 24;
    setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, oneDay);
  }, [authTokens]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
