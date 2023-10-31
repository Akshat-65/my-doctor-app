import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";

const wrapperStyles = {
  marginRight: "4%",
  fontSize: "20px",
  textAlign: "center",
  width: "100%",
};

const overallRatingStyles = {
  color: "#3f51b5",
  padding: "5px 40px",
  fontSize: "52px",
  textAlign: "center",
};

const totalRatingsStyles = {
  padding: "0 44px",
  fontSize: "14px",
  marginTop: "-15px",
  textAlign: "center",
};

const mtMl = { marginTop: "-15px", marginLeft: "50%" };
const mtMr = { marginTop: "30px", marginRight: "70%" };
const iconStyles = {
  color: "#f1af09",
  fontSize: "22px",
  marginTop: "-25px",
  marginBottom: "-4px",
};

const linearProgressStyles = {
  width: "50%",
  marginTop: "-15px",
  marginLeft: "19%",
};

const DoctorRating = () => {
  return (
    <Box sx={wrapperStyles}>
      <Typography sx={overallRatingStyles}>3.4</Typography>
      <Typography sx={totalRatingsStyles}>5 ratings</Typography>
      <Box sx={{ marginTop: "-27px", marginLeft: "15%" }}>
        <Box>
          <Typography sx={mtMr}>
            5
            <StarIcon sx={iconStyles} />
          </Typography>

          <LinearProgress
            sx={linearProgressStyles}
            value={60}
            variant="determinate"
          />

          <Typography variant="body1" sx={mtMl}>
            60%
          </Typography>
        </Box>
        <Box sx={{ mt: "-25px" }}>
          <Typography sx={mtMr}>
            4
            <StarIcon sx={iconStyles} />
          </Typography>

          <LinearProgress
            sx={linearProgressStyles}
            value={50}
            variant="determinate"
          />

          <Typography variant="body1" sx={mtMl}>
            50%
          </Typography>
        </Box>
        <Box sx={{ mt: "-25px" }}>
          <Typography sx={mtMr}>
            3
            <StarIcon sx={iconStyles} />
          </Typography>

          <LinearProgress
            sx={linearProgressStyles}
            value={70}
            variant="determinate"
          />

          <Typography variant="body1" sx={mtMl}>
            70%
          </Typography>
        </Box>
        <Box sx={{ mt: "-25px" }}>
          <Typography sx={mtMr}>
            2
            <StarIcon sx={iconStyles} />
          </Typography>

          <LinearProgress
            sx={linearProgressStyles}
            value={20}
            variant="determinate"
          />

          <Typography variant="body1" sx={mtMl}>
            20%
          </Typography>
        </Box>
        <Box sx={{ marginTop: "-25px" }}>
          <Typography sx={mtMr}>
            1
            <StarIcon sx={iconStyles} />
          </Typography>

          <LinearProgress
            sx={linearProgressStyles}
            value={30}
            variant="determinate"
          />

          <Typography variant="body1" sx={mtMl}>
            30%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorRating;
