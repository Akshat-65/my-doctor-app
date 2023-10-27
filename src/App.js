import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Box from "@mui/material/Box";
import LogIn from "./pages/LogIn";
import  Home  from "./pages/Home";
import Specialities from "./pages/Specialities";
import DoctorDetails from "./pages/DoctorDetails";
import SpecialityDetails from "./pages/SpecialityDetails";
import PatientProfile from "./pages/PatientProfile";
import PatientAppointments from "./pages/PatientAppointments";
import ChangePassword from "./pages/ChangePassword";
import BookAppointment from "./pages/BookAppointment";
import "./index.css";
import { useState } from "react";
import DoctorProfile from "./pages/DoctorProfile";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorAppointment from "./pages/DoctorAppointment";
import DoctorQualification from "./pages/DoctorQualification";
import DoctorExperience from "./pages/DoctorExperience";

function App() {

  const [doctorSlotDetails, setDoctorSlotDetails] = useState();
  const [bookingFailed, setBoookingFailed] = useState(false);

  const handleDoctorSlotDetails = (slotsDetail)=>{
    setDoctorSlotDetails(slotsDetail);
  }

  const handleBookingStatus = (status)=>{
    setBoookingFailed(status);
  }

  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/doctors/:id" element={<DoctorDetails handleDoctorSlotDetails = {handleDoctorSlotDetails}/>} />
          <Route path="/search" element={<SpecialityDetails />} />
          <Route path="/appointments" element={<PatientAppointments bookingFailed={bookingFailed}/>} />
          <Route path="/myprofile" element={<PatientProfile />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/book-appointment" element={<BookAppointment slotsDetail = {doctorSlotDetails} handleBookingStatus={handleBookingStatus}/>} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
          <Route path="/doctor-appointments" element={<DoctorAppointment />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-profile/qualification" element={<DoctorQualification />} />
          <Route path="/doctor-profile/experience" element={<DoctorExperience />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
