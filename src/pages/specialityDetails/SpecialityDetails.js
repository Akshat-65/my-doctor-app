import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../../components/SideNav";
import { useParams } from "react-router-dom";

const SpecialityDetails= () => {
    const para = useParams();
    const specialityName = para.sp;
    console.log(para)
    
    const drawerWidth = 240;

    const handleSpecialityDetail = (speciality)=>{
        console.log(speciality);
      
        const paramObject = {
          speciality:speciality
        }
      
        const params = new URLSearchParams(paramObject);
        console.log(params);
      
        const getSpecializationData = async () => {
          try {
            const response = await fetch(
              `http://my-doctors.net:8090/doctors?${params}` 
            );
            let data = await response.json();
            console.log(data);
            // let returnedData = data.data;
            // let totalSpecializations = data.total;
            // console.log(totalSpecializations);
            // returnedData = returnedData.slice(0, 6);
            // console.log(returnedData);
            // const details = [];
            // for (let elem in returnedData) {
            //   details.push({
            //     name: returnedData[elem]["name"],
            //     image: returnedData[elem]["imageUrl"],
            //     totalSpecializations: Math.floor(totalSpecializations / 10),
            //   });
            // }
            // console.log(details);
            // setSpecializationData(details);
          } catch (error) {
            console.log(error);
          }
        };
        getSpecializationData();
      }

      React.useEffect(()=>{
        handleSpecialityDetail(specialityName);
      },[])

    return ( 
        <Box sx={{ display: "flex", mt: { xs: "12rem", md: "9rem" } }}>
      <SideNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
      </Box>
    </Box>
     );
}
 
export default SpecialityDetails;