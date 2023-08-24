import Header from "./components/Layout/Header";
import LogIn from "./pages/logIn/LogIn";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import  Home  from "./pages/home/Home";
import Specialities from "./pages/specialities/Specialities";
import DiseaseSwiper from "./components/DiseaseSwiper";

function App() {

  return (
    <BrowserRouter>
      <Box>
        <Header />
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


 // const [data, setData] = useState([]);
  // const pageSize = 10;
  // const apiUrl = 'http://my-doctors.net:8090/specializations';

  // const fetchData = async (page) => {
  //   try {
  //     const response = await fetch(`${apiUrl}?page=${page}&pageSize=${pageSize}`);
  //     const jsonData = await response.json();
  //     return jsonData.data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // const fetchAllData = async () => {
  //   let page = 1;
  //   let allData = [];

  //   while (true) {
  //     const jsonData = await fetchData(page);

  //     if (jsonData.length === 0) {
  //       break; // No more data
  //     }

  //     allData = [...allData, ...jsonData];
  //     page++;
  //   }

  //   setData(allData);
  // };

  // useEffect(() => {
  //   fetchAllData();
  // }, []);