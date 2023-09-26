import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PatientDetails from "../components/PatientDetails";
import PatientAppointmentDetails from "../components/PatientAppointmentDetails";
import PatientPaymentDetails from "../components/PatientPaymentDetails";
import { useState } from "react";
const drawerWidth = 240;

const mainComponentStyles = {
    p: { xs: "4px", sm: "24px", md: "32px" },
    pt: "8px",
    flexGrow: 1,
    width: { sm: `calc(100% - ${drawerWidth}px)` },
  }

  const detailsWrapper= {
    ml: "auto",
    mr: "auto",
    pl: { xs: "16px", sm: "24px" },
    pr: { xs: "16px", sm: "24px" },
    maxWidth: { sm: "600px" },
  }


const BookAppointment = () => {
 
  const steps = ["Patient Details", "Appointment Details", "Payment Details"];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  let showDetails;
  if (activeStep === 0) {
    showDetails = <PatientDetails />;
  } else if (activeStep === 1) {
    showDetails = <PatientAppointmentDetails />;
  } else {
    showDetails = <PatientPaymentDetails />;
  }

  return (
    <Box sx={{ display: "flex", mt: { xs: "10rem", md: "8rem" } }}>
      <SideNav />
      <Box
        component="main"
        sx={mainComponentStyles}
      >
        <Stepper activeStep={activeStep} sx={{ p: { xs: "16px", sm: "24px" } }}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  <Typography sx={{ fontSize: { xs: "12px", sm: "1rem" } }}>
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box
          sx={detailsWrapper}
        >
          <Typography variant="h4">
            {activeStep === 0
              ? "Patient Details"
              : activeStep === 1
              ? "Appointment Details"
              : "Payment Details"}
          </Typography>
          <Box>{showDetails}</Box>
          <Box
            sx={{
              display: "grid",
              padding: "0.4rem 0",
              columnGap: "1rem",
              gridTemplateRows: "1fr",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, border: "1px solid rgba(0, 0, 0, 0.23)" }}
            >
              Back
            </Button>

            <Button
              variant="contained"
              sx={{ backgroundColor: "rgb(63, 81, 181)" }}
              onClick={handleNext}
            >
              {activeStep === 2
                ? "MAKE PAYMENT"
                : activeStep === 1
                ? "CONFIRM PAYMENT"
                : "NEXT"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    // </Box>
  );
};

export default BookAppointment;
