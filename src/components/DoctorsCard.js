import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const doctorsCardStyles = {
  display: "flex",
  p: "1rem",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  minHeight: "296px",
  height: "92%",
};

const doctorDetailsTypographyStyle = {
  fontSize: "13px",
  color: "rgba(0, 0, 0, 0.54)",
};

const DoctorsCard = ({ doctorsData }) => {
  const navigate = useNavigate();
  const doctors = doctorsData.map((elem) => (
    <Box>
      <Card variant="outlined" sx={doctorsCardStyles}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "20%", mr: "2rem" }}>
            <Box sx={{}}>
              <AccountCircleIcon color="disabled" sx={{ fontSize: "90px" }} />
            </Box>
          </Box>

          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              mt: "0.5rem",
            }}
          >
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "600", fontSize: "16px" }}
              >
                {`Dr. ${elem.name}`}
              </Typography>
              <Typography variant="body2" sx={doctorDetailsTypographyStyle}>
                {elem.qualifications &&
                  elem.qualifications.map((item) => item).join(" | ")}
              </Typography>
              <Typography variant="body2" sx={doctorDetailsTypographyStyle}>
                {elem.specialities &&
                  elem.specialities.map((item) => item).join(" | ")}
              </Typography>
              <Typography variant="body2" sx={doctorDetailsTypographyStyle}>
                {elem.experience &&
                  `${Math.floor(elem.experience / 12)} years experience`}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridGap: "0.2rem 1rem",
                gridTemplateRows: "auto auto auto",
                gridTemplateColumns: "auto 1fr",
                mt: "1rem",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "13px" }}>
                Hospital
              </Typography>
              <Typography variant="body2" sx={doctorDetailsTypographyStyle}>
                {elem.hospital && elem.hospital.length > 0
                  ? elem.hospital.map((item) => item && item)
                  : "Not available"}
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>Languages</Typography>
              <Typography variant="body2" sx={doctorDetailsTypographyStyle}>
                {elem.languages && elem.languages.length > 0
                  ? elem.languages.map((item) => item).join(", ")
                  : "Not available"}
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>Next available</Typography>
              <Typography variant="body2" sx={doctorDetailsTypographyStyle}>
                Not available
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "flex-start",
            ml: "1rem",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "25px",
              color: "#3f51b5",
              border: "1px solid rgba(63, 81, 181, 0.5)",
              fontSize: "0.8125rem",
            }}
            onClick={() => navigate(`/doctors/${elem.id}`)}
          >
            BOOK APPOINTMENT
          </Button>
        </Box>
      </Card>
    </Box>
  ));
  return <>{doctors}</>;
};

export default DoctorsCard;
