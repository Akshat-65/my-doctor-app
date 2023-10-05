import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../components/UIComponents/SideNav";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PatientDetails from "../components/Patients/PatientDetails";
import PatientAppointmentDetails from "../components/Patients/PatientAppointmentDetails";
import PatientPaymentDetails from "../components/Patients/PatientPaymentDetails";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

const showDetailsWrapper = {
  border: "0.5px solid lightGrey",
  p: "1.5rem",
  mt: "1rem",
  minHeight: "40vh",
};

const mainComponentStyles = {
  p: { xs: "4px", sm: "24px", md: "32px" },
  pt: "8px",
  flexGrow: 1,
  width: { sm: `calc(100% - ${drawerWidth}px)` },
};

const detailsWrapper = {
  ml: "auto",
  mr: "auto",
  pl: { xs: "16px", sm: "24px" },
  pr: { xs: "16px", sm: "24px" },
  maxWidth: { sm: "600px" },
};

const BookAppointment = ({ slotsDetail, handleBookingStatus }) => {
  const user = JSON.parse(localStorage.getItem("userContext"));
  // console.log("patientDetail", user.user);
  // console.log(slotsDetail);

  const name = user.user?.lastName
    ? user.user.firstName + " " + user.user.lastName
    : user.user?.firstName || " ";

  const navigate = useNavigate();

  const steps = ["Patient Details", "Appointment Details", "Payment Details"];
  const [activeStep, setActiveStep] = useState(0);
  const [patientNameInput, setPatientNameInput] = useState("");
  const [patientContactInput, setPatientContactInput] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [appointmentFor, setAppointmentFor] = useState("myself");
  const [isDisabled, setIsDisabled] = useState(true);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(true);
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    contactNumber: true,
    cardIsValid: false,
    securityCodeIsValid: false,
  });
  const [cardError, setCardError] = useState({
    cardNumberError: true,
    securityNumberError: true,
  });

  const cardDetails = {
    cardNumber: cardNumber,
    cvv: securityCode,
    doctorId: slotsDetail?.doctorId,
    expiryDate: "",
    slotId: slotsDetail?._id,
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 2) {
      handleMakePayment();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCardNumber("");
    setSecurityCode("");
    setFormIsValid((prevState) => ({
      ...prevState,
      securityCodeIsValid: false,
      cardIsValid: false,
    }));
    setCardError((prevState) => ({
      ...prevState,
      cardNumberError: true,
      securityNumberError: true,
    }));
  };

  const handleMakePayment = async () => {
    try {
      const response = await fetch("http://my-doctors.net:8090/payments", {
        method: "POST",
        body: JSON.stringify(cardDetails),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.name === "Forbidden") {
        handleBookingStatus(true);
        navigate("/appointments");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePatientNameChange = (e) => {
    // console.log(e.target.value);
    setPatientNameInput(e.target.value);
  };

  const handlePatientContactChange = (e) => {
    // console.log(e.target.value);
    setPatientContactInput(e.target.value);
  };

  const handlePatientChange = (e) => {
    setAppointmentFor(e.target.value);
  };

  const handlePatientNumberValues = () => {
    if (appointmentFor === "myself") {
      setIsDisabled(true);
      setFormIsValid((prevState) => ({
        ...prevState,
        name: true,
        contactNumber: true,
      }));
      setNextButtonEnabled(true);
      setPatientNameInput("");
      setPatientContactInput("");
    } else {
      setIsDisabled(false);
      setNextButtonEnabled(false);
    }
  };

  const handleCardInput = (e) => {
    if (e.target.name === "card") {
      setCardNumber(e.target.value);
    } else {
      setSecurityCode(e.target.value);
    }
  };

  useEffect(() => {
    handlePatientNumberValues();
  }, [appointmentFor]);

  const validatePatientName = (e) => {
    const inputValue = e.target.value.trim();
    const isEmpty = inputValue === "";
    const startsWithNumber = /^\d/.test(inputValue);
    setFormIsValid((prevState) => ({
      ...prevState,
      name: !isEmpty && !startsWithNumber,
    }));
    setNextButtonEnabled(!isEmpty && !startsWithNumber && patientContactInput);
  };

  const validateContactNumber = (e) => {
    const isValid = e.target.value.trim().length === 10 ? true : false;
    setFormIsValid((prevState) => ({
      ...prevState,
      contactNumber: isValid,
    }));
    setNextButtonEnabled(isValid && patientNameInput);
  };

  const validateCardAndSecurity = (e) => {
    if (e.target.name === "card") {
      const isValid = /^\d{16}$/.test(cardNumber);
      setFormIsValid((prevState) => ({
        ...prevState,
        cardIsValid: isValid,
      }));
      setCardError((prevState) => ({
        ...prevState,
        cardNumberError: isValid,
      }));
    } else {
      const isValid = /^\d{4}$/.test(securityCode);
      setFormIsValid((prevState) => ({
        ...prevState,
        securityCodeIsValid: isValid,
      }));
      setCardError((prevState) => ({
        ...prevState,
        securityNumberError: isValid,
      }));
    }
  };

  let showDetails;
  if (activeStep === 0) {
    showDetails = (
      <Box Box sx={showDetailsWrapper}>
        <PatientDetails
          slotsDetail={slotsDetail}
          handlePatientNameChange={handlePatientNameChange}
          handlePatientContactChange={handlePatientContactChange}
          patientContactInput={patientContactInput}
          patientNameInput={patientNameInput}
          appointmentFor={appointmentFor}
          isDisabled={isDisabled}
          handlePatientChange={handlePatientChange}
          handlePatientNumberValues={handlePatientNumberValues}
          validatePatientName={validatePatientName}
          validateContactNumber={validateContactNumber}
          formIsValid={formIsValid}
          user={user}
          name={name}
        />
      </Box>
    );
  } else if (activeStep === 1) {
    showDetails = (
      <Box Box sx={showDetailsWrapper}>
        <PatientAppointmentDetails
          patientNameInput={patientNameInput}
          patientContactInput={patientContactInput}
          slotsDetail={slotsDetail}
          name={name}
        />
      </Box>
    );
  } else {
    showDetails = (
      <Box Box sx={showDetailsWrapper}>
        <PatientPaymentDetails
          cardNumber={cardNumber}
          handleCardInput={handleCardInput}
          securityCode={securityCode}
          validateCardAndSecurity={validateCardAndSecurity}
          cardError={cardError}
        />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", mt: { xs: "10rem", md: "8rem" } }}>
      <SideNav />
      <Box component="main" sx={mainComponentStyles}>
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
        <Box sx={detailsWrapper}>
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
              disabled={
                activeStep === 2
                  ? !formIsValid.cardIsValid || !formIsValid.securityCodeIsValid
                  : !nextButtonEnabled
              }
              variant="contained"
              sx={{ backgroundColor: "rgb(63, 81, 181)" }}
              onClick={handleNext}
            >
              {activeStep === 2
                ? "MAKE PAYMENT"
                : activeStep === 1
                ? "CONFIRM AND PROCEED"
                : activeStep === 0
                ? "NEXT"
                : "MAKE PAYMENT"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookAppointment;
