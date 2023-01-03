import { Box, Typography } from "@mui/material";
import { BlogImg } from "../images";

const Blog = () => {
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
        Blog Page
      </Typography>
      <Typography variant="h2" component={"h1"} color="black" mb={2}>
        Comming Soon!
      </Typography>
      <img src={BlogImg} alt="BlogImg" className="rounded-20px" />
    </Box>
  );
};

export default Blog;
