import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";

const appointmentDetailsWrapper = {
  display: "grid",
  gridTemplateColumns: "auto",
};

const specificDetailsBox = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
};

const PatientAppointmentDetails = ({
  patientNameInput,
  patientContactInput,
  slotsDetail,
  name,
}) => {

  const user = JSON.parse(localStorage.getItem("userContext"));
  console.log(user);
//   console.log("test", slotsDetail);

  const loggedInPatientName = name;
  const patientName = patientNameInput ? patientNameInput : loggedInPatientName;
  const patientContact = patientContactInput
    ? patientContactInput
    : user.user.contactNumber;
  const consultationFee = slotsDetail?.doctor?.profile?.consultationFee;
  const doctorsName = `${slotsDetail?.doctor?.firstName} ${slotsDetail?.doctor?.lastName}`;
  const appointmentDate = `${dayjs(slotsDetail?.startTime).format(
    "dddd, DD MMM, YYYY"
  )} `;
  const appointmentTime = `${dayjs(slotsDetail?.startTime).format(
    "h:mm a"
  )} - ${dayjs(slotsDetail?.endTime).format("h:mm a")}`;

  return (
    <Box sx={appointmentDetailsWrapper}>
      <Box sx={specificDetailsBox}>
        <Box>
          <Typography>Patient's name</Typography>
        </Box>
        <Box>
          <Typography>{patientName}</Typography>
        </Box>
      </Box>

      <Divider />

      <Box sx={specificDetailsBox}>
        <Box>
          <Typography>Patient's contact number</Typography>
        </Box>
        <Box>
          <Typography>{patientContact}</Typography>
        </Box>
      </Box>

      <Divider />

      <Box sx={specificDetailsBox}>
        <Box>
          <Typography>Consultation fee</Typography>
        </Box>
        <Box>
          <Typography>{`Rs ${consultationFee}`}</Typography>
        </Box>
      </Box>

      <Divider />

      <Box sx={specificDetailsBox}>
        <Box>
          <Typography>Doctor's name</Typography>
        </Box>
        <Box>
          <Typography>{`Dr. ${doctorsName}`}</Typography>
        </Box>
      </Box>

      <Divider />

      <Box sx={specificDetailsBox}>
        <Box>
          <Typography>Appointment date</Typography>
        </Box>
        <Box>
          <Typography>{appointmentDate}</Typography>
        </Box>
      </Box>

      <Divider />

      <Box sx={specificDetailsBox}>
        <Box>
          <Typography>Appointment time</Typography>
        </Box>
        <Box>
          <Typography>{appointmentTime}</Typography>
        </Box>
      </Box>

      <Divider />
    </Box>
  );
};

export default PatientAppointmentDetails;
