import Header from "./components/Layout/Header";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LogIn from "./pages/LogIn";
import  Home  from "./pages/Home";
import Specialities from "./pages/Specialities";
import DoctorDetails from "./pages/DoctorDetails";
import SpecialityDetails from "./pages/SpecialityDetails";
import { useState, useEffect } from "react";

function App() {

  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/search" element={<SpecialityDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
