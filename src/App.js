import Header from "./components/Layout/Header";
import LogIn from "./pages/HomePage/logIn/LogIn";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import  Home  from "./pages/HomePage/home/Home";
import Specialities from "./components/Specialities";

function App() {
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
