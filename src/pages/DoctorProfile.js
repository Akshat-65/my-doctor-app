import Box from "@mui/material/Box";
import SideNav from "../components/UIComponents/SideNav";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import { useEffect, useState } from "react";
import EditDoctorProfileForm from "../components/Doctors/EditDoctorProfileForm";

// ------------------------------------styles----------------------------------------

const profileHeaderStyleWrapper = {
  display: "flex",
};

const profileHeaderStyle = {
  color: "black",
  fontSize: { xs: "26px", md: "30px", lg: "36px" },
  fontWeight: "bold",
};

const avatarStyles = {
  width: "120px",
  height: "120px",
  mt: "10px",
  ml: "27px",
};

const uploadImageStyles = {
  ml: "45px",
  color: "rgb(63, 81, 181)",
  fontWeight: "bold",
  mt: "10px",
};

const EditSaveButtonStyles = {
  color: "white",
  backgroundColor: "#3f51b5",
  height: "40px",
};


// ------------------------------------component----------------------------------------
const drawerWidth = 240;
const DoctorProfile = () => {
  const userData = JSON.parse(localStorage.getItem("userContext") || null);
  console.log("test", userData);

  const [avatarImg, setAvatarImg] = useState();
  const [name, setName] = useState("");
  const [fees, setFees] = useState("");
  const [bio, setBio] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [languages, setLanguages] = useState([]);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    setLanguages(userData?.user?.profile?.languages || []);
    setGender(userData?.user?.gender || "male");
    setName(userData?.user?.firstName + " " + userData?.user?.lastName);
    setFees(userData?.user?.profile?.consultationFee);
    setBio(userData?.user?.profile?.bio);
    setContact(userData?.user?.contactNumber);
    setEmail(userData?.user?.email);
    setBio(userData?.user?.profile?.bio);
  }, []);

  async function getDoctorImage() {
    const queryParams = new URLSearchParams({
      avatar: 1,
      "$select[]": "avatarId",
    });
    let response = await fetch(
      `http://my-doctors.net:8090/doctors/${
        userData.user._id
      }?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userData.accessToken}`,
        },
      }
    );
    response = await response.json();
    setAvatarImg(response?.avatar?.buffer);
  }

  async function uploadDoctorImage(data) {
    try {
      let response = await fetch(
        `http://my-doctors.net:8090/doctors/${userData.user._id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
          body: data,
        }
      );
      response = await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
      //   setImageUrl(file);
      const formData = new FormData();
      formData.append("avatar", file);
      try {
        await uploadDoctorImage(formData);
        getDoctorImage();
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    getDoctorImage();
  }, [userData]);

  function languageChange(e, value) {
    setLanguages(value);
  }

  function handleInputChange(e) {
    if (e.target.name === "doctorName") {
      setName(e.target.value);
    }
    if (e.target.name === "fees") {
      setFees(e.target.value);
    }
    if (e.target.name === "contact") {
      setContact(e.target.value);
    }
    if (e.target.name === "gender") {
      setGender(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "bio") {
      setBio(e.target.value);
    }
  }

  function saveRequest() {
    setEditable(false);

    let fullName = name.split(" ");
    let data = {
      firstName: fullName[0],
      gender: gender,
      lastName: fullName[1],
      profile: {
        consultationFee: Number(fees),
        languages: languages,
        bio: bio,
      },
    };
    if (userData?.user?.contactNumber !== contact) {
      data.contactNumber = contact;
    }
    if (userData?.user?.email !== email) {
      data.email = email;
    }

    uploadDoctorData(JSON.stringify(data));
  }

  async function uploadDoctorData(data) {
    try {
      let response = await fetch(
        `http://my-doctors.net:8090/doctors/${userData?.user?._id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${userData?.accessToken}`,
            "content-type": "application/json",
          },
          body: data,
        }
      );
      response = await response.json();
      userData.user = response;
      !response.message &&
        localStorage.setItem("userContext", JSON.stringify(userData));
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
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
          <Box sx={profileHeaderStyleWrapper}>
            <Typography variant="h4" sx={profileHeaderStyle}>
              My Profile
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Avatar sx={avatarStyles} src={avatarImg || "/broken-image.jpg"} />
            <Box sx={uploadImageStyles}>
              <label htmlFor="upload-image">upload image</label>
              <Input
                id="upload-image"
                sx={{ display: "none" }}
                accept="image/*"
                type="file"
                onChange={handleFileUpload}
              />
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
          >
            {!editable && (
              <Button
                sx={EditSaveButtonStyles}
                variant="contained"
                onClick={() => {
                  setEditable(true);
                }}
              >
                EDIT
              </Button>
            )}
            {editable && (
              <Button
                sx={EditSaveButtonStyles}
                variant="contained"
                onClick={saveRequest}
              >
                SAVE
              </Button>
            )}
          </Box>

          <Box>
          <EditDoctorProfileForm 
          handleInputChange ={handleInputChange}
          languageChange = {languageChange}
          editable={editable}
          name={name}
          fees={fees}
          contact = {contact}
          gender = {gender}
          email = {email}
          languages= {languages}
          bio= {bio}
          />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorProfile;
