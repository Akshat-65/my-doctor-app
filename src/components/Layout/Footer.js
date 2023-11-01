import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        p: "32px",
        zIndex: 1201,
        borderTop: "1px solid",
        backgroundColor: "#eeeeee",
        borderTopColor: "#e0e0e0",
        position: "sticky",
        // position:"realtive"
        // botttom:'0px'
      }}
    >
      <Typography>This is some content in sticky footer</Typography>
    </Box>
  );
};

export default Footer;
