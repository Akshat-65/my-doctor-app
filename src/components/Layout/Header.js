import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import logo from "../../assets/myDoctorLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: { xs: "flex" }, justifyContent: "space-between" }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="blue"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
                options={top100Films}
                sx={{
                  width: { xs: "10rem", md: "16rem" },
                  m: 0.5,
                  "& .MuiOutlinedInput-root": {
                    // border: "1px solid yellow",
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
              id="combo-box-demo"
              options={top100Films}
              sx={{
                width: { xs: "10rem", md: "16rem" },
                m: 0.5,
                "& .MuiOutlinedInput-root": {
                  // border: "1px solid yellow",
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
    </AppBar>
  );
};
export default Header;

const top100Films = [
  { label: "Bone Marrow" },
  { label: "Crdiac Surgery" },
  { label: "Cosmetology" },
  { label: "Clinical Nutrition & Dietetics" },
  { label: "Child & Adolescent Psychiatry" },
  { label: "Emergency Medicine" },
  { label: "Gastroenterology" },
  {
    label: "Endocrinology & Diabetology",
  },
];
