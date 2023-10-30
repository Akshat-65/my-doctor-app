import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideNav from "../components/UIComponents/SideNav";
import CustomButton from "../components/UIComponents/Button";
import DoctorQualificationForm from "../components/Doctors/DoctorQualificationForm";
import { useEffect, useState } from "react";

const appointmentHeaderDropdownWrapper = {
  display: "flex",
  // flexDirection: { xs: "column", sm: "row" },
  alignItems: "center",
  justifyContent: "space-between",
};

const appointmentHeaderStyles = {
  color: "#000000",
  fontSize: { xs: "20px", sm: "25px" },
  fontWeight: "bold",
  mb: { xs: "0.2rem", sm: "0px" },
};

const DoctorQualification = () => {
  const drawerWidth = 240;

  const userData = JSON.parse(localStorage.getItem("userContext") || null);
  const [editable, setEditable] = useState(false);
  const [disableSave, setDisableSave] = useState(true);
  const [qualification, setQualification] = useState(
    userData?.user?.profile?.qualifications || []
  );
  const [newQualification, setNewQualification] = useState({
    name: "",
    institute: "",
    year: "",
  });

  useEffect(() => {
    for (let i = 0; i < qualification?.length; i++) {
      if (
        qualification[i].name === "" ||
        qualification[i].institute === "" ||
        qualification[i].year === "" ||
        qualification[i].name.length < 3 ||
        qualification[i].institute.length < 3 ||
        qualification[i].year.length < 4
      ) {
        setDisableSave(true);
        break;
      } else {
        setDisableSave(false);
      }
    }
  }, [qualification, setDisableSave]);

  const handleAddQualification = () => {
    setQualification([...qualification, newQualification]);
    setNewQualification({ name: "", institute: "", year: "" });
  };

  const cancelEditing = () => {
    setQualification(userData?.user?.profile?.qualifications);
    setEditable(false);
  };

  const deleteBox = (i) => {
    setQualification(qualification.filter((item, index) => i !== index));
  };

  const handleSaveQualification = () => {
    setEditable(false);
    const data = {
      profile: {
        qualifications: qualification,
      },
    };
    uploadDoctorData(JSON.stringify(data));
  };

  const uploadDoctorData = async (data) => {
    try {
      let response = await fetch(
        `http://my-doctors.net:8090/doctors/${userData.user._id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
            "content-type": "application/json",
          },
          body: data,
        }
      );
      response = await response.json();
      // console.log(response);
      let newData = {
        ...userData,
        user: response,
      };
      response?._id &&
        localStorage.setItem("userContext", JSON.stringify(newData));
      setQualification(response?.profile?.qualifications);
      console.log(newData);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

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
        <Box component="section" sx={{ pl: "1rem", pr: "1rem" }}>
          <Box sx={appointmentHeaderDropdownWrapper}>
            <Typography variant="h4" sx={appointmentHeaderStyles}>
              My Qualifications
            </Typography>

            <Box sx={{ display: "flex" }}>
              {editable && (
                <CustomButton label="CANCEL" onClick={cancelEditing} />
              )}
              <Box sx={{ml:"0.5rem"}}>
                {editable ? (
                  <CustomButton
                    label="SAVE"
                    onClick={handleSaveQualification}
                    disabled={disableSave}
                  />
                ) : (
                  <CustomButton
                    label="EDIT"
                    onClick={() => {
                      setEditable(true);
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>

          {!editable && !qualification && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="body1"
                sx={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "20px" }}
              >
                No Qualification added
              </Typography>
            </Box>
          )}

          <Box>
            {qualification?.map((elem, index) => (
              <DoctorQualificationForm
                key={index}
                name={elem.name}
                institute={elem.institute}
                year={elem.year}
                qualification={qualification}
                editable={editable}
                index={index}
                deleteBox={deleteBox}
                setQualification={setQualification}
              />
            ))}
          </Box>
          <Box
            sx={{
              mt: "10px",
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "self-end",
            }}
          >
            {editable && (
              <CustomButton label="ADD MORE" onClick={handleAddQualification} />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorQualification;
