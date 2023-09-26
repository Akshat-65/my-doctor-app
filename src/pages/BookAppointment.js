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

const BookAppointment = () => {
  const drawerWidth = 240;
  const steps = ["Patient Details", "Appointment Details", "Payment Details"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

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
        sx={{
          p: {xs:"4px",sm:"24px",md:"32px"},
          pt:"8px",
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Box component="section" sx={{ pl: "1rem", pr: "1rem" }}> */}
        <Stepper activeStep={activeStep} 
 sx={{ p: {xs:"16px",sm:"24px"} }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            //   if (isStepOptional(index)) {
            //     labelProps.optional = (
            //       <Typography variant="caption">Optional</Typography>
            //     );
            //   }
            //   if (isStepSkipped(index)) {
            //     stepProps.completed = false;
            //   }
            return (
              <Step key={label} {...stepProps} >
                <StepLabel {...labelProps} ><Typography sx={{fontSize:{xs:'12px',sm:'1rem'}}}>{label}</Typography></StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box
          sx={{
            // width:"100%",
            ml: "auto",
            mr: "auto",
            pl: { xs: "16px", sm: "24px" },
            pr: { xs: "16px", sm: "24px" },
            maxWidth: { sm: "600px" },
          }}
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
              //   display: "flex",
              //   flexDirection: "row",
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
              sx={{ mr: 1 , border: '1px solid rgba(0, 0, 0, 0.23)'}}
            >
              Back
            </Button>
            {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}

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
        {/* {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )} */}
      </Box>
    </Box>
    // </Box>
  );
};

export default BookAppointment;
