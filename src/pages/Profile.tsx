import { Box, Typography } from "@mui/material";
import { ProfileImg } from "../images";

const Profile = () => {
  return (
    <Box
      component={"main"}
      minHeight={"66.8vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Typography variant="h2" component={"h1"} color="black">
        About Page
      </Typography>
      <Typography variant="h2" component={"h1"} color="black" mb={2}>
        Comming Soon!
      </Typography>
      <img src={ProfileImg} alt="profileImg" className="rounded-20px" />
    </Box>
  );
};

export default Profile;
