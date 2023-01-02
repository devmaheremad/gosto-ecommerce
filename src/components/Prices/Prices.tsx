import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { HeadingSection } from "../index";
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
        <HeadingSection
          h4Words="Choose Your Plans"
          subtitle1Words="Take control of your path forward with our Plans, select the option that aligns with your goals and get started now."
          h4WordsColor="white"
          textAlign="center"
        />
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
