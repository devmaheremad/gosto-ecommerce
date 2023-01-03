import { Box, Grid } from "@mui/material";
import { trendingsProducts } from "../../data/trendingsProducts";
import { HeadingSection } from "../index";
import TrendingsProduct from "./TrendingsProduct";

const TrendingsProducts = () => {
  return (
    <Box component={"section"} mb={10} maxWidth={"2500px"} mx={"auto"} p={2}>
      <HeadingSection
        textAlign="center"
        h4Words="Trendings Products"
        subtitle1Words="Check the hottest designs of the week. These rising stars are worth your
        attention."
        h4WordsColor="black"
      />
      <Grid container mt={6} spacing={"15px"}>
        {trendingsProducts.map((product, i) => {
          return <TrendingsProduct product={product} key={i} />;
        })}
      </Grid>
    </Box>
  );
};

export default TrendingsProducts;
