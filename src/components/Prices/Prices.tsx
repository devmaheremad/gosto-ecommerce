import { Box, colors, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FreePrices, PremiumPrices, UnlimitedPrices } from "./index";

const Prices = () => {
  return (
    <Box
      py={10}
      mb={6}
      bgcolor={"#0a2748"}
      px={{ xs: 2, sm: 3, md: 4, lg: 8, xl: 10 }}
      minHeight={"850px"}
    >
      <Box maxWidth={"2500px"} mx={"auto"}>
        <Typography
          variant="h4"
          fontWeight={500}
          textAlign={"center"}
          color="white"
        >
          Top Selling Products
        </Typography>
        <Typography
          variant="subtitle1"
          color={colors.grey[500]}
          textAlign={"center"}
        >
          Meet our newbies! The latest templates uploaded to the marketplace.
        </Typography>
        <Grid2 container spacing={2} mt={5} justifyContent={"center"}>
          <FreePrices />
          <PremiumPrices />
          <UnlimitedPrices />
        </Grid2>
      </Box>
    </Box>
  );
};

export default Prices;
