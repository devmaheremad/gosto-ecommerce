import { Box, Typography } from "@mui/material";
import { ShopPage } from "../images";

const Shop = () => {
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
        Shop Page
      </Typography>
      <Typography variant="h2" component={"h1"} color="black" mb={2}>
        Comming Soon!
      </Typography>
      <img src={ShopPage} alt="shopPage" className="rounded-20px" />
    </Box>
  );
};

export default Shop;
