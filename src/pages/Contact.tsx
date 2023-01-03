import { Box, Typography } from "@mui/material";
import { ContactImg } from "../images";

const Contact = () => {
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
        Contact Page
      </Typography>
      <Typography variant="h2" component={"h1"} color="black" mb={2}>
        Comming Soon!
      </Typography>
      <img src={ContactImg} alt="ContactImg" className="rounded-20px" />
    </Box>
  );
};

export default Contact;
