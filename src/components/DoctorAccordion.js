import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
const DoctorAccordion = ({ doctorsDetailsData }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Specialities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {doctorsDetailsData && doctorsDetailsData.specialities
            ? doctorsDetailsData.specialities.map((item) => (
                <ul>
                 <li><Typography>{item}</Typography></li>
                </ul>
              ))
            : <Typography>No specialities available</Typography>}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Qualifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {doctorsDetailsData && doctorsDetailsData.qualifications
            ? doctorsDetailsData.qualifications.map((item) => (
                <ul>
                 <li><Typography>{item}</Typography></li>
                </ul>
              ))
            : <Typography>No qualifications available</Typography>}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {doctorsDetailsData && doctorsDetailsData.experience
            ? doctorsDetailsData.experience.map((item) => (
                <ul>
                 <li><Typography>{item}</Typography></li>
                </ul>
              ))
            : <Typography>No experience available</Typography>}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {doctorsDetailsData && doctorsDetailsData.languages
            ? doctorsDetailsData.languages.map((item) => (
                <ul>
                 <li><Typography>{item}</Typography></li>
                </ul>
              ))
            : <Typography>No languages available</Typography>}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {doctorsDetailsData && <Typography>{doctorsDetailsData.reviews}</Typography>}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Write a review</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {doctorsDetailsData && doctorsDetailsData.specialities
            ? doctorsDetailsData.specialities.map((item) => (
                <ul>
                 <li><Typography>{item}</Typography></li>
                </ul>
              ))
            : <Typography>No specialities available</Typography>}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DoctorAccordion;
