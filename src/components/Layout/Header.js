import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import Menu from "@mui/material/Menu";
import logo from "../../assets/myDoctorLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import DiseaseSwiper from "../DiseaseSwiper";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState({
    autocomplete: null,
    searchInput: "",
  });

  const user = JSON.parse(localStorage.getItem("userContext"));
  const [anchorEl, setAnchorEl] = useState(null);

  console.log("header", user);

  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        // details.push({
        //   label: returnedData[elem]["name"],
        // });
        details.push(returnedData[elem]["name"]);
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

  const handleSelectedService = (e, value) => {
    console.log(value);
    setSelectedService((prev) => ({ ...prev, autocomplete: value }));
  };

  const handleSearch = () => {
    if (selectedService.autocomplete && !selectedService.searchInput) {
      navigate(`/search?sp=${selectedService.autocomplete}`);
    } else if (!selectedService.autocomplete && selectedService.searchInput) {
      navigate(`/search?q=${selectedService.searchInput}`);
    } else if (selectedService.autocomplete && selectedService.searchInput) {
      navigate(
        `/search?q=${selectedService.searchInput}&sp=${selectedService.autocomplete}`
      );
    }
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setSelectedService((prev) => ({ ...prev, searchInput: e.target.value }));
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", zIndex: 1299 }}>
      <Container maxWidth="xl" sx={{ pb: "0.7rem" }}>
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
                forcePopupIcon={false}
                id="combo-box-demo"
                options={services}
                value={selectedService.autocomplete}
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
                value={selectedService.searchInput}
                onChange={handleInput}
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
            </Box>

            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexGrow: 0 }}>
            {user && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                >
                  <AccountCircle color="disabled" sx={{ fontSize: "50px" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
            {!user && (
              <Link to="/login">
                <Button variant="contained" href="/login" sx={{}}>
                  Log In
                </Button>
              </Link>
            )}
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
              options={services}
              value={selectedService.autocomplete}
              onChange={handleSelectedService}
              id="combo-box-demo"
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
              value={selectedService.searchInput}
              onChange={handleInput}
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
          </Box>

          <IconButton onClick={handleSearch}>
            <SearchIcon href="`/search?sp=${selectedService}`" />
          </IconButton>
        </Box>
      </Container>
      <Box sx={{ height: "30px" }}>
        <DiseaseSwiper />
      </Box>
    </AppBar>
  );
};
export default Header;
