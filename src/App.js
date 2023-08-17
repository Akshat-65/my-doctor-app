import Header from "./components/Layout/Header";
import LogIn from "./components/LogIn";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import  Home  from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <div className="space"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
