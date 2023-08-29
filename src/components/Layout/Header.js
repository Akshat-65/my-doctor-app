import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import logo from "../../assets/myDoctorLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import DiseaseSwiper from "../DiseaseSwiper";
import { useState, useEffect} from "react";


const Header = () => {

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState();

  const getServicesData = async () => {
    try {
      const response = await fetch(
        "http://my-doctors.net:8090/specializations?$limit=56&$skip=0"
      );
      let data = await response.json();
      let returnedData = data.data;
      let totalSpecializations = data.total;
      console.log(totalSpecializations);
      console.log(returnedData);
      const details = [];
      for (let elem in returnedData) {
        details.push({
          label: returnedData[elem]["name"],
        });
      }
      console.log(details);
      setServices(details);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServicesData();
  }, []);


  const handleSelectedService = (e) => {
    console.log(e.target.value)
    console.log(e)
    setSelectedService(e.target.value);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", zIndex: 1299}}>
      <Container maxWidth="xl" sx={{pb:'0.7rem'}}>
        <Toolbar
          disableGutters
          sx={{ display: { xs: "flex" }, justifyContent: "space-between" }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Sidebar />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <img src={logo} style={{ height: "40px", width: "160px" }} />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mt: "0.5rem" }}>
            <Link to="/">
              <img src={logo} style={{ height: "32px", width: "160px" }} />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fafafa",
            }}
          >
            <Box>
              <Autocomplete
                disablePortal
                // defaultValue={selectedService}
                forcePopupIcon={false}
                id="combo-box-demo"
                options={services}
                value={selectedService}
                onChange={handleSelectedService}
                sx={{
                  width: { xs: "10rem", md: "16rem" },
                  m: 0.5,
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .css-yjsfm1 span": {
                    display: "none",
                  },
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select a Service" />
                )}
              />
            </Box>

            <Box>
              <TextField
                id="outlined-basic"
                placeholder="Search Doctors"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
            </Box>

            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexGrow: 0 }}>
            <Link to="/login">
              <Button variant="contained" href="/login" sx={{}}>
                Log In
              </Button>
            </Link>
          </Box>
        </Toolbar>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
          }}
        >
          <Box>
            <Autocomplete
              disablePortal
              forcePopupIcon={false}
              value={selectedService}
              onChange={handleSelectedService}
              id="combo-box-demo"
              options={services}
              sx={{
                width: { xs: "10rem", md: "16rem" },
                m: 0.5,
                "& .MuiOutlinedInput-root": {
                  border: "none",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .css-yjsfm1 span": {
                  display: "none",
                },
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select a Service" />
              )}
            />
          </Box>

          <Box>
            <TextField
              id="outlined-basic"
              placeholder="Search Doctors"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
          </Box>

          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </Container>
      <Box sx={{height:'30px'}}>
        <DiseaseSwiper />
      </Box>
    </AppBar>
  );
};
export default Header;
