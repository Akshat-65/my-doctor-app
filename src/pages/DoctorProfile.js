import Box from "@mui/material/Box";
import SideNav from "../components/UIComponents/SideNav";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";

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

const inputFieldWrapperStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
  width: "100%",
  gap: "12px",
  mb: "10px",
  mt: "10px",
  p: "12px",
};

// ------------------------------------component----------------------------------------
const drawerWidth = 240;
const DoctorProfile = () => {
  const userData = JSON.parse(localStorage.getItem("userContext") || null);
  console.log("test", userData);

  const languages_list = [
    { name: "Afrikaans", code: "af" },
    { name: "Albanian - shqip", code: "sq" },
    { name: "Amharic - አማርኛ", code: "am" },
    { name: "Arabic - العربية", code: "ar" },
    { name: "Aragonese - aragonés", code: "an" },
    { name: "Armenian - հայերեն", code: "hy" },
    { name: "Asturian - asturianu", code: "ast" },
    { name: "Azerbaijani - azərbaycan dili", code: "az" },
    { name: "Basque - euskara", code: "eu" },
    { name: "Belarusian - беларуская", code: "be" },
    { name: "Bengali - বাংলা", code: "bn" },
    { name: "Bosnian - bosanski", code: "bs" },
    { name: "Breton - brezhoneg", code: "br" },
    { name: "Bulgarian - български", code: "bg" },
    { name: "Catalan - català", code: "ca" },
    { name: "Central Kurdish - کوردی (دەستنوسی عەرەبی)", code: "ckb" },
    { name: "Chinese - 中文", code: "zh" },
    { name: "Chinese (Hong Kong) - 中文（香港）", code: "zh-HK" },
    { name: "Chinese (Simplified) - 中文（简体）", code: "zh-CN" },
    { name: "Chinese (Traditional) - 中文（繁體）", code: "zh-TW" },
    { name: "Corsican", code: "co" },
    { name: "Croatian - hrvatski", code: "hr" },
    { name: "Czech - čeština", code: "cs" },
    { name: "Danish - dansk", code: "da" },
    { name: "Dutch - Nederlands", code: "nl" },
    { name: "English", code: "en" },
    { name: "English (Australia)", code: "en-AU" },
    { name: "English (Canada)", code: "en-CA" },
    { name: "English (India)", code: "en-IN" },
    { name: "English (New Zealand)", code: "en-NZ" },
    { name: "English (South Africa)", code: "en-ZA" },
    { name: "English (United Kingdom)", code: "en-GB" },
    { name: "English (United States)", code: "en-US" },
    { name: "Esperanto - esperanto", code: "eo" },
    { name: "Estonian - eesti", code: "et" },
    { name: "Faroese - føroyskt", code: "fo" },
    { name: "Filipino", code: "fil" },
    { name: "Finnish - suomi", code: "fi" },
    { name: "French - français", code: "fr" },
    { name: "French (Canada) - français (Canada)", code: "fr-CA" },
    { name: "French (France) - français (France)", code: "fr-FR" },
    { name: "French (Switzerland) - français (Suisse)", code: "fr-CH" },
    { name: "Galician - galego", code: "gl" },
    { name: "Georgian - ქართული", code: "ka" },
    { name: "German - Deutsch", code: "de" },
    { name: "German (Austria) - Deutsch (Österreich)", code: "de-AT" },
    { name: "German (Germany) - Deutsch (Deutschland)", code: "de-DE" },
    { name: "German (Liechtenstein) - Deutsch (Liechtenstein)", code: "de-LI" },
    { name: "German (Switzerland) - Deutsch (Schweiz)", code: "de-CH" },
    { name: "Greek - Ελληνικά", code: "el" },
    { name: "Guarani", code: "gn" },
    { name: "Gujarati - ગુજરાતી", code: "gu" },
    { name: "Hausa", code: "ha" },
    { name: "Hawaiian - ʻŌlelo Hawaiʻi", code: "haw" },
    { name: "Hebrew - עברית", code: "he" },
    { name: "Hindi - हिन्दी", code: "hi" },
    { name: "Hungarian - magyar", code: "hu" },
    { name: "Icelandic - íslenska", code: "is" },
    { name: "Indonesian - Indonesia", code: "id" },
    { name: "Interlingua", code: "ia" },
    { name: "Irish - Gaeilge", code: "ga" },
    { name: "Italian - italiano", code: "it" },
    { name: "Italian (Italy) - italiano (Italia)", code: "it-IT" },
    { name: "Italian (Switzerland) - italiano (Svizzera)", code: "it-CH" },
    { name: "Japanese - 日本語", code: "ja" },
    { name: "Kannada - ಕನ್ನಡ", code: "kn" },
    { name: "Kazakh - қазақ тілі", code: "kk" },
    { name: "Khmer - ខ្មែរ", code: "km" },
    { name: "Korean - 한국어", code: "ko" },
    { name: "Kurdish - Kurdî", code: "ku" },
    { name: "Kyrgyz - кыргызча", code: "ky" },
    { name: "Lao - ລາວ", code: "lo" },
    { name: "Latin", code: "la" },
    { name: "Latvian - latviešu", code: "lv" },
    { name: "Lingala - lingála", code: "ln" },
    { name: "Lithuanian - lietuvių", code: "lt" },
    { name: "Macedonian - македонски", code: "mk" },
    { name: "Malay - Bahasa Melayu", code: "ms" },
    { name: "Malayalam - മലയാളം", code: "ml" },
    { name: "Maltese - Malti", code: "mt" },
    { name: "Marathi - मराठी", code: "mr" },
    { name: "Mongolian - монгол", code: "mn" },
    { name: "Nepali - नेपाली", code: "ne" },
    { name: "Norwegian - norsk", code: "no" },
    { name: "Norwegian Bokmål - norsk bokmål", code: "nb" },
    { name: "Norwegian Nynorsk - nynorsk", code: "nn" },
    { name: "Occitan", code: "oc" },
    { name: "Oriya - ଓଡ଼ିଆ", code: "or" },
    { name: "Oromo - Oromoo", code: "om" },
    { name: "Pashto - پښتو", code: "ps" },
    { name: "Persian - فارسی", code: "fa" },
    { name: "Polish - polski", code: "pl" },
    { name: "Portuguese - português", code: "pt" },
    { name: "Portuguese (Brazil) - português (Brasil)", code: "pt-BR" },
    { name: "Portuguese (Portugal) - português (Portugal)", code: "pt-PT" },
    { name: "Punjabi - ਪੰਜਾਬੀ", code: "pa" },
    { name: "Quechua", code: "qu" },
    { name: "Romanian - română", code: "ro" },
    { name: "Romanian (Moldova) - română (Moldova)", code: "mo" },
    { name: "Romansh - rumantsch", code: "rm" },
    { name: "Russian - русский", code: "ru" },
    { name: "Scottish Gaelic", code: "gd" },
    { name: "Serbian - српски", code: "sr" },
    { name: "Serbo - Croatian", code: "sh" },
    { name: "Shona - chiShona", code: "sn" },
    { name: "Sindhi", code: "sd" },
    { name: "Sinhala - සිංහල", code: "si" },
    { name: "Slovak - slovenčina", code: "sk" },
    { name: "Slovenian - slovenščina", code: "sl" },
    { name: "Somali - Soomaali", code: "so" },
    { name: "Southern Sotho", code: "st" },
    { name: "Spanish - español", code: "es" },
    { name: "Spanish (Argentina) - español (Argentina)", code: "es-AR" },
    {
      name: "Spanish (Latin America) - español (Latinoamérica)",
      code: "es-419",
    },
    { name: "Spanish (Mexico) - español (México)", code: "es-MX" },
    { name: "Spanish (Spain) - español (España)", code: "es-ES" },
    {
      name: "Spanish (United States) - español (Estados Unidos)",
      code: "es-US",
    },
    { name: "Sundanese", code: "su" },
    { name: "Swahili - Kiswahili", code: "sw" },
    { name: "Swedish - svenska", code: "sv" },
    { name: "Tajik - тоҷикӣ", code: "tg" },
    { name: "Tamil - தமிழ்", code: "ta" },
    { name: "Tatar", code: "tt" },
    { name: "Telugu - తెలుగు", code: "te" },
    { name: "Thai - ไทย", code: "th" },
    { name: "Tigrinya - ትግርኛ", code: "ti" },
    { name: "Tongan - lea fakatonga", code: "to" },
    { name: "Turkish - Türkçe", code: "tr" },
    { name: "Turkmen", code: "tk" },
    { name: "Twi", code: "tw" },
    { name: "Ukrainian - українська", code: "uk" },
    { name: "Urdu - اردو", code: "ur" },
    { name: "Uyghur", code: "ug" },
    { name: "Uzbek - o‘zbek", code: "uz" },
    { name: "Vietnamese - Tiếng Việt", code: "vi" },
    { name: "Walloon - wa", code: "wa" },
    { name: "Welsh - Cymraeg", code: "cy" },
    { name: "Western Frisian", code: "fy" },
    { name: "Xhosa", code: "xh" },
    { name: "Yiddish", code: "yi" },
    { name: "Yoruba - Èdè Yorùbá", code: "yo" },
    { name: "Zulu - isiZulu", code: "zu" },
  ];

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
            <Box sx={inputFieldWrapperStyles}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="doctorName"
                disabled={!editable}
                sx={{ width: "80%" }}
                onChange={handleInputChange}
                value={name || ""}
              />
              <TextField
                id="outlined-basic"
                label="Constultant Fee"
                variant="outlined"
                name="fees"
                disabled={!editable}
                sx={{ width: "80%" }}
                required
                onChange={handleInputChange}
                value={fees}
              />
            </Box>
            <Box sx={inputFieldWrapperStyles}>
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                name="contact"
                disabled={!editable}
                style={{ width: "80%" }}
                onChange={handleInputChange}
                value={contact}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Gender"
                name="gender"
                defaultValue="male"
                sx={{ width: "80%" }}
                onChange={handleInputChange}
                disabled={!editable}
                value={gender}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Box>
            <Box sx={inputFieldWrapperStyles}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                disabled={!editable}
                sx={{ width: "80%" }}
                onChange={handleInputChange}
                value={email}
              />
              <Autocomplete
                multiple
                id="tags-outlined"
                options={languages_list}
                getOptionLabel={(option) => option.name}
                filterSelectedOptions
                value={languages.map((item) => item)}
                required
                disabled={!editable}
                onChange={languageChange}
                style={{ width: "80%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Languages"
                    placeholder="Enter Languages"
                  />
                )}
              />
            </Box>
            <Box
              sx={{ ...inputFieldWrapperStyles, gridTemplateColumns: "1fr" }}
            >
              <TextField
                id="outlined-basic"
                label="Bio"
                variant="outlined"
                name="bio"
                multiline
                minRows={4}
                disabled={!editable}
                sx={{ width: "90%" }}
                required
                onChange={handleInputChange}
                value={bio}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorProfile;
