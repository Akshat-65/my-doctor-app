import Header from "./components/Layout/Header";
import LogIn from "./pages/logIn/LogIn";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import  Home  from "./pages/home/Home";
import Specialities from "./pages/specialities/Specialities";
import { useEffect, useState } from "react";

function App() {

  useEffect(() => {
    fetch('http://my-doctors.net:8090/specializations').then((res)=>{
      return res.json();
    }).then ((data)=>{
      console.log(data.data);
    })
  },[]);

  return (
    <BrowserRouter>
      <Box>
        <Header />
        <div className="space"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/specialities" element={<Specialities />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
