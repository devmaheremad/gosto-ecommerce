import { Box } from "@mui/material";
import { trendingsProducts } from "../../json/trendingsProducts";
import { HeadingSection } from "../index";
import TrendingsProduct from "./TrendingsProduct";

const TrendingsProducts = () => {
  return (
    <Box mb={10} maxWidth={"2500px"} mx={"auto"}>
      <HeadingSection
        textAlign="center"
        h4Words="Trendings Products"
        subtitle1Words="Check the hottest designs of the week. These rising stars are worth your
        attention."
        h4WordsColor="black"
      />
      <Box
        mt={6}
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
