import { Box, Typography } from "@mui/material";
import { FavoriteImg } from "../images";

const Favorite = () => {
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
      <img src={FavoriteImg} alt="favoriteImg" className="rounded-20px" />
    </Box>
  );
};

export default Favorite;
