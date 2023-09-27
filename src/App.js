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

function App() {

  const [doctorSlotDetails, setDoctorSlotDetails] = useState();

  const handleDoctorSlotDetails = (slotsDetail)=>{
    setDoctorSlotDetails(slotsDetail);
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
          <Route path="/appointments" element={<PatientAppointments />} />
          <Route path="/myprofile" element={<PatientProfile />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/book-appointment" element={<BookAppointment slotsDetail = {doctorSlotDetails}/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
