import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../../components/SideNav";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useRef } from "react";

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
  fontSize: { xs: "26px", md: "30px", lg: "36px" },
  fontWeight: "bold",
  mb: { xs: "0.2rem", sm: "0px" },
};

const specialityHeaderDropdownWrapper = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: { xs: "flex-start", sm: "center" },
  justifyContent: "space-between",
  mb: "1rem",
};

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
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  const [filteredSpecialities, setFilteredSpecialities] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

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

  const searchRef = useRef();

  let requiredSpecialitiesPerPage =
    filteredSpecialities.length > 0
      ? filteredSpecialities.slice(startPageData, endPageData)
      : specializationData.slice(startPageData, endPageData);
  console.log(requiredSpecialitiesPerPage);

  const handleSpecialityDetail = (speciality) => {
    navigate(`/search?sp=${speciality}`);
  };

  const specialities = requiredSpecialitiesPerPage.map((elem) => (
    <Box
      onClick={() => handleSpecialityDetail(elem.name)}
      sx={{ cursor: "pointer" }}
    >
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
      setIsLoading(true);
      const response = await fetch(
        "http://my-doctors.net:8090/specializations?$limit=56&$skip=0&$sort[name]=1"
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
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getSpecializationData();
  }, []);

  const handleSpecialityFilterCount = (e) => {
    setSpecialityCountFilter(e.target.value);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };


  const handleSpecialitySearch = () => {
    let searchValue = searchRef.current.value.toLowerCase();
    console.log(searchValue);

    let filteredSpecialities = specializationData.filter((item) => {
      let itemName = item.name.toLowerCase();
      if (itemName.includes(searchValue)) {
        return true;
      }
      return false;
    });

    console.log(filteredSpecialities);
    if (filteredSpecialities.length > 0) {
      setIsEmpty(false); 
    } 
    if(filteredSpecialities.length === 0 && searchValue==='') {
      setIsEmpty(true); 
    }
    setFilteredSpecialities(filteredSpecialities);
    console.log(filteredSpecialities.length === 0);
  };

  const loading = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "3rem",
      }}
    >
      <CircularProgress />
    </Box>
  );

  let filteredSpecialityCount = 0;
  if(Math.floor(filteredSpecialities.length / 10)<= 1){
    filteredSpecialityCount = `${Math.floor(filteredSpecialities.length)}+ Specialities`
  }
  else{
    filteredSpecialityCount = `${Math.floor(filteredSpecialities.length / 10)}0+ Specialities`
  }

  console.log(isEmpty);
  console.log(filteredSpecialities.length === 0);

  return (
    <Box sx={{ display: "flex", mt: { xs: "12rem", md: "9rem" } }}>
      <SideNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Box component="section" sx={{ pl: "1rem", pr: "1rem" }}>
          {isLoading && loading}
          {!isLoading && (
            <>
              <Box sx={specialityHeaderDropdownWrapper}>
                <Typography variant="h4" sx={specialityHeaderStyles}>
                  {    (!isEmpty && filteredSpecialities.length >= 0)?  filteredSpecialityCount:  specializationData.length > 0 &&
                    `${specializationData[0].totalSpecializations}0+ Specialities`}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Search a Speciality"
                    variant="outlined"
                    size="small"
                    fullWidth
                    // onChange={handleInput}
                    // value={input}
                    inputRef={searchRef}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="search specialities"
                            onClick={handleSpecialitySearch}
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <FormControl sx={{ minWidth: 65, ml: "0.5rem" }}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={specialityCountFilter}
                      onChange={handleSpecialityFilterCount}
                      size="small"
                      autoWidth
                    >
                      {specialityFilterCount.map((count) => (
                        <MenuItem value={count} sx={{ minWidth: 70 }}>
                          {count}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box sx={SpecialitiesCardWrapperStyles}>{(!isEmpty && filteredSpecialities.length === 0) ? <Typography>No specialities found</Typography> : specialities}</Box>
              <Pagination
                sx={{ display: "flex", mt: "16px", justifyContent: "center" }}
                size="small"
                count={pages}
                page={page}
                onChange={handleSpecialitiesPageChange}
                variant="outlined"
                color="primary"
              />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Specialities;
