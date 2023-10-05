import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";

// ------------------------------------styles----------------------------------------

const cardWrapperStyles = {
  p: "1rem",
  boxShadow: 2,
  minWidth: { xs: "250px", sm: "480px" },
};

const avatarStyles = { bgcolor: red[500] };
const mb = { mb: "1rem" };

// ------------------------------------component----------------------------------------

const DoctorDetailsCard = ({ doctorsDetailsData }) => {
  return (
    <Card sx={cardWrapperStyles}>
      <CardHeader
        avatar={
          <Avatar sx={avatarStyles}>
            <img src="" alt={doctorsDetailsData.name} />
          </Avatar>
        }
        title={`Dr. ${doctorsDetailsData.name}`}
        subheader={
          doctorsDetailsData["experienceMonths"] &&
          doctorsDetailsData["experienceMonths"]
            ? `${Math.floor(
                doctorsDetailsData.experienceMonths / 12
              )} Years of experience`
            : "No experience"
        }
        sx={mb}
      />
      <CardContent sx={mb}>
        <Typography variant="body2" color="text.secondary">
          {doctorsDetailsData && doctorsDetailsData.bio
            ? `${doctorsDetailsData.bio}`
            : "Bio not available"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DoctorDetailsCard;
