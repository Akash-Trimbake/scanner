import { useContext } from "react";
import AuthContext from "../context/AuthContext";
// ...........................................................................
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";

// ............................................................................
const CheckList = () => {
  let {
    subDomains,
    selectedDomain,
    setSelectedDomain,
    getTechIpFromBackend,
    getDirFromBackend,
    getEndptFromBackend,
    getPortData,
    navigateToInfoPage,
  } = useContext(AuthContext);

  // ..............................................................................
  return (
    <div>
      {subDomains.length !== 0 ? (
        <FormControl style={{ marginLeft: "2vw", textAlign: "left" }}>
          {/* <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="radio"
            value={selectedDomain}
            onChange={(event) => setSelectedDomain(event.target.value)}
          >
            <ul>
              {subDomains.map((domain) => (
                <li key={domain} style={{ listStyle: "none" }}>
                  <FormControlLabel
                    value={domain}
                    control={<Radio />}
                    label={domain}
                  />
                  <Divider />
                </li>
              ))}
            </ul>
          </RadioGroup>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ width: "10vw", margin: "1vw 6vw" }}
            onClick={() => {
              getTechIpFromBackend();
              getDirFromBackend();
              getEndptFromBackend();
              navigateToInfoPage();
              getPortData();
            }}
          >
            Proceed
          </Button>
        </FormControl>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CheckList;
