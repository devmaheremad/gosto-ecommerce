import { Box, colors, Typography } from "@mui/material";
import { trendingsProducts } from "../../json/trendingsProducts";
import TrendingsProduct from "./TrendingsProduct";

const TrendingsProducts = () => {
  return (
    <Box mb={6} maxWidth={"2500px"} mx={"auto"}>
      <Typography
        variant="h4"
        fontWeight={500}
        textAlign={"center"}
        color="black"
      >
        Trendings Products
      </Typography>
      <Typography
        variant="subtitle1"
        color={colors.grey[500]}
        textAlign={"center"}
      >
        Check the hottest designs of the week. These rising stars are worth your
        attention.
      </Typography>
      <Box
        mb={4}
        mt={2}
        gap={"25px"}
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {trendingsProducts.map((product, i) => {
          return <TrendingsProduct product={product} key={i} />;
        })}
      </Box>
    </Box>
  );
};

export default TrendingsProducts;
