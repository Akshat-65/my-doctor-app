import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Box from "@mui/material/Box";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Specialities from "./pages/Specialities";
import DoctorDetails from "./pages/DoctorDetails";
import SpecialityDetails from "./pages/SpecialityDetails";
import PatientProfile from "./pages/PatientProfile";
import PatientAppointments from "./pages/PatientAppointments";
import ChangePassword from "./pages/ChangePassword";
import BookAppointment from "./pages/BookAppointment";
import { useState } from "react";
import DoctorProfile from "./pages/DoctorProfile";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorAppointment from "./pages/DoctorAppointment";
import DoctorQualification from "./pages/DoctorQualification";
import DoctorExperience from "./pages/DoctorExperience";
import Footer from "./components/Layout/Footer";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import "./index.css";

function App() {
  let user = JSON.parse(localStorage.getItem("userContext") || "null");

  const [doctorSlotDetails, setDoctorSlotDetails] = useState();
  const [bookingFailed, setBoookingFailed] = useState(false);

  const handleDoctorSlotDetails = (slotsDetail) => {
    setDoctorSlotDetails(slotsDetail);
  };

  const handleBookingStatus = (status) => {
    setBoookingFailed(status);
  };

  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Box sx={{minHeight:'68vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route
            path="/doctors/:id"
            element={
              <DoctorDetails
                handleDoctorSlotDetails={handleDoctorSlotDetails}
              />
            }
          />
          <Route path="/search" element={<SpecialityDetails />} />
          <Route
            path="/appointments"
            element={
              // <PrivateRoute user={user}>
                <PatientAppointments bookingFailed={bookingFailed} />
              // </PrivateRoute>
            }
          />
          <Route
            path="/myprofile"
            element={
              // <PrivateRoute user={user}>
                <PatientProfile />
              // </PrivateRoute>
            }
          />
          <Route
            path="/changepassword"
            element={
              // <PrivateRoute user={user}>
                <ChangePassword />
              // </PrivateRoute>
            }
          />
          <Route
            path="/book-appointment"
            element={
              // <PrivateRoute user={user}>
                <BookAppointment
                  slotsDetail={doctorSlotDetails}
                  handleBookingStatus={handleBookingStatus}
                />
              // </PrivateRoute>
            }
          />
          <Route
            path="/doctor-profile"
            element={
              // <PrivateRoute user={user}>
                <DoctorProfile />
              // </PrivateRoute>
            }
          />
          <Route
            path="/doctor-appointments"
            element={
              // <PrivateRoute user={user}>
                <DoctorAppointment />
              // </PrivateRoute>
            }
          />
          <Route
            path="/doctor-dashboard"
            element={
              // <PrivateRoute user={user}>
                <DoctorDashboard />
              // </PrivateRoute>
            }
          />
          <Route
            path="/doctor-profile/qualification"
            element={
              // <PrivateRoute user={user}>
                <DoctorQualification />
              // </PrivateRoute>
            }
          />
          <Route
            path="/doctor-profile/experience"
            element={
              // <PrivateRoute user={user}>
                <DoctorExperience />
              // </PrivateRoute>
            }
          />
        </Routes>
        </Box>
       
        <Footer/>
      </Box>
    </BrowserRouter>
  );
}

export default App;
