import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../../components/SideNav";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

const specialitiesCardStyles = {
  display: "flex",
  flexDirection: "column",
  p: "1rem",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
};

const specialityHeaderStyles = {
  color: "#3f51b5",
  fontSize: {xs:"26px",md:"30px",lg:"36px"},
  fontWeight: "bold",
  mb:{xs:"0.2rem",sm:'0px'}
};

const specialityHeaderDropdownWrapper = {
  display: "flex",
  flexDirection:{xs:'column',sm:'row'},
  alignItems: {xs:"flex-start",sm:"center"},
  justifyContent: "space-between",
  mb: '1rem'
}

const SpecialitiesCardWrapperStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "auto",
    sm: "1fr 1fr",
    md: "1fr 1fr 1fr",
  },
  gap: "20px",
};

const Specialities = () => {
  const drawerWidth = 240;
  const [specializationData, setSpecializationData] = useState([]);
  const [page, setPage] = useState(1);
  const [specialityCountFilter, setSpecialityCountFilter] = useState(8);

  const navigate = useNavigate();
  const SpecialitiesPerPage = specialityCountFilter;
  let pages;
  // if (specializationData.length > 0) {
  //   pages = (specializationData[0]?.totalSpecializations);
  //   console.log(pages);
  // }

  pages = Math.ceil(
    (specializationData[0]?.totalSpecializations * 10) / SpecialitiesPerPage
  );
  let startPageData = page * SpecialitiesPerPage - SpecialitiesPerPage;
  let endPageData = startPageData + SpecialitiesPerPage;

  const handleSpecialitiesPageChange = (event, value) => {
    setPage(value);
  };
  const requiredSpecialitiesPerPage = specializationData.slice(
    startPageData,
    endPageData
  );

  const handleSpecialityDetail = (speciality) => {
    navigate(`/search?sp=${speciality}`);
  };

  const specialities = requiredSpecialitiesPerPage.map((elem) => (
    <Box  onClick={() => handleSpecialityDetail(elem.name)} sx={{cursor:'pointer'}}>
      <Card variant="outlined" sx={specialitiesCardStyles}>
        <Box sx={{ width: "100px", height: "100px", borderRadius: "50%" }}>
          <img
            src={`http://my-doctors.net/${elem.image}`}
            style={{ width: "100%" }}
          />
        </Box>
        <Typography>{elem.name}</Typography>
      </Card>
    </Box>
  ));

  const specialityFilterCount = [8, 12, 16, 20, 40];

  const getSpecializationData = async () => {
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
          name: returnedData[elem]["name"],
          image: returnedData[elem]["imageUrl"],
          totalSpecializations: Math.floor(totalSpecializations / 10),
        });
      }
      console.log(details);
      setSpecializationData(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSpecializationData();
  }, []);

  const handleSpecialityFilterCount = (e) => {
    setSpecialityCountFilter(e.target.value);
  };

  return (
    <Box sx={{ display: "flex", mt:{xs:'12rem',md:'9rem'} }}>
      <SideNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Box component="section" sx={{ pl: "1rem", pr: "1rem" }}>
          <Box
            sx={specialityHeaderDropdownWrapper}
          >
            <Typography variant="h4" sx={specialityHeaderStyles}>
              {specializationData.length > 0 &&
                `${specializationData[0].totalSpecializations}0+ Specialities`}
            </Typography>

            <Box sx={{ display: "flex",alignItems: "center" }}>
              <TextField
                id="outlined-basic"
                placeholder="Search a Speciality"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="search specialities">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl sx={{minWidth: 65 , ml:'0.5rem'}} >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={specialityCountFilter}
                  onChange={handleSpecialityFilterCount}
                  size="small"
                  autoWidth
                >
                  {specialityFilterCount.map((count) => (
                    <MenuItem  value={count} sx={{minWidth: 70}}>{count}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={SpecialitiesCardWrapperStyles}>{specialities}</Box>
          <Pagination
            sx={{ display: "flex", mt: "16px", justifyContent: "center" }}
            size="small"
            count={pages}
            page={page}
            onChange={handleSpecialitiesPageChange}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Specialities;
