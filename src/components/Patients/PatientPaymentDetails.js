import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import visa from "../../assets/Images/visa.svg";
import maestro from "../../assets/Images/maestro.svg";
import western_union from "../../assets/Images/western_union.svg";
import unionpay from "../../assets/Images/unionpay.svg";
import american_express from "../../assets/Images/american_express.svg";
import master_card from "../../assets/Images/master_card.svg";
import jcb from "../../assets/Images/jcb.svg";
import { useState } from "react";

const months = [
  { value: 1, label: "01 | January" },
  { value: 2, label: "02 | February" },
  { value: 3, label: "03 | March" },
  { value: 4, label: "04 | April" },
  { value: 5, label: "05 | May" },
  { value: 6, label: "06 | June" },
  { value: 7, label: "07 | July" },
  { value: 8, label: "08 | August" },
  { value: 9, label: "09 | September" },
  { value: 10, label: "10 | October" },
  { value: 11, label: "11 | November" },
  { value: 12, label: "12 | December" },
];

const formIsValidStyles = {
    color: "#f44336",
    fontSize: "0.80rem",
    marginLeft: "1rem",
    marginBottom: 0,
    marginTop: "0.3rem",
  };

const PatientPaymentDetails = ({
  cardNumber,
  securityCode,
  validateCardAndSecurity,
  handleCardInput,
  cardError
}) => {
  const getMonth = new Date().getMonth() + 1;
  const getYear = new Date().getFullYear();

  const [expMonth, setExpMonth] = useState(getMonth);
  const [expYear, setExpYear] = useState(getYear);

  let year = [];
  for (let i = getYear; i <= getYear + 30; i++) {
    year.push(i);
  }

  const handleMonthChange = (e) => {
    setExpMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setExpYear(e.target.value);
  };

  // console.log("card",cardNumber)
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", p: "12px" }}>
      <Box>
        <Typography>Accepted Credit/Debit Cards</Typography>
        <img src={visa} alt="visa" style={{ width: "9%", marginLeft: "2%" }} />
        <img src={maestro} alt="maestro" />
        <img src={western_union} alt="western_union" />
        <img src={unionpay} alt="unionpay" />
        <img src={american_express} alt="american_express" />
        <img src={master_card} alt="master_card" />
        <img src={unionpay} alt="unionpay" />
        <img src={jcb} alt="jcb" />
      </Box>

      <Box sx={{ width: "100%" }}>
        <FormControl
          fullWidth
          error={!cardError.cardNumberError}
          sx={{
            mb: "2rem",
            mt: "2rem",
          }}
        >
          <InputLabel htmlFor="card-number">
            Credit/Debit Card Number
          </InputLabel>
          <OutlinedInput
            id="card-number"
            label="Credit/Debit Card Number"
            name="card"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            inputProps={{
                maxLength: 16,
              }}
            value={cardNumber}

            onChange={handleCardInput}
            onBlur={validateCardAndSecurity}
          />
          {!cardError.cardNumberError && (
              <p style={formIsValidStyles}>Please enter a valid 16 digit card Number</p>
            )}
        </FormControl>
      </Box>

      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "100%" }}
      >
        <Box>
          <TextField
            id="outlined-select-month"
            select
            label="Expiration month"
            value={expMonth}
            onChange={handleMonthChange}
          >
            {months.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box>
          <TextField
            id="outlined-select-year"
            select
            label="Expiration year"
            value={expYear}
            onChange={handleYearChange}
          >
            {year.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <FormControl
          fullWidth
          error={!cardError.securityNumberError}
          sx={{
            mb: "2rem",
            mt: "2rem",
          }}
        >
          <InputLabel htmlFor="security-code">Security code</InputLabel>
          <OutlinedInput
            id="security-code"
            label="Security code"
            name="security"
            placeholder="XXXX"
            inputProps={{
                maxLength: 4,
              }}
            value={securityCode}
            onChange={handleCardInput}
            onBlur={validateCardAndSecurity}
          />
          {!cardError.securityNumberError&& (
              <p style={formIsValidStyles}>Please enter a valid security code</p>
            )}
        </FormControl>
      </Box>
    </Box>
  );
};

export default PatientPaymentDetails;
