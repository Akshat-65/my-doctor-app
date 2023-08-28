import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
const DoctorAccordion = ({ doctorsDetailsData }) => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  const labels = {
    1: "Very sad",
    2: "Sad",
    3: "Neutral",
    4: "Happy",
    5: "Very happy",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'600'}}>Specialities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {doctorsDetailsData && doctorsDetailsData.specialities ? (
            doctorsDetailsData.specialities.map((item) => (
              <ul>
                <li>
                  <Typography>{item}</Typography>
                </li>
              </ul>
            ))
          ) : (
            <Typography>No specialities available</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'600'}}>Qualifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {doctorsDetailsData && doctorsDetailsData.qualifications ? (
            doctorsDetailsData.qualifications.map((item) => (
              <ul>
                <li>
                  <Typography>{item}</Typography>
                </li>
              </ul>
            ))
          ) : (
            <Typography>No qualifications available</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'600'}}>Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {doctorsDetailsData && doctorsDetailsData.experience ? (
            doctorsDetailsData.experience.map((item) => (
              <ul>
                <li>
                  <Typography>{item}</Typography>
                </li>
              </ul>
            ))
          ) : (
            <Typography>No experience available</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'600'}}>Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {doctorsDetailsData && doctorsDetailsData.languages ? (
            doctorsDetailsData.languages.map((item) => (
              <ul>
                <li>
                  <Typography>{item}</Typography>
                </li>
              </ul>
            ))
          ) : (
            <Typography>No languages available</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'600'}}>Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {doctorsDetailsData && (
            <Typography>{doctorsDetailsData.reviews}</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'600'}}>Write a review</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">Rating</Typography>
            <Box
              sx={{
                width: 220,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "#0652a5",
                  },
                  "& .MuiRating-iconHover": {
                    color: "#0652a5",
                  },
                }}
              />
              {value !== null && (
                <Box
                  sx={{
                    ml: 2,
                    fontSize: "1.1rem",
                    fontWeight: "400",
                    color: "black",
                  }}
                >
                  {labels[hover !== -1 ? hover : value]}
                </Box>
              )}
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                placeholder="Write a review"
                variant="outlined"
                sx={{
                  minHeight: "80px",
                  width: { xs: "80%", sm: "50%", md: "70%", lg: "90%" },
                  p: "10px",
                  mt: "25px",
                  borderRadius: "10px",
                  border: "0.1rem solid #a9a9a9",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              ></TextField>
              <Box
                sx={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "flex-start",
                  mt:'2rem'
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: "#0652a5",
                    border: "1px solid rgba(63, 81, 181, 0.5)",
                    fontSize: "0.8125rem",
                    p:'0.3rem 2.5rem',
                    fontWeight:'500',
                    ':hover': {
                      bgcolor: '#3F51B5', // theme.palette.primary.main
                      color: 'white',
                    }
                  }}
                  // onClick={()=>navigate(`/doctors/${elem.id}`)}
                >
                  SUBMIT
                </Button>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DoctorAccordion;
