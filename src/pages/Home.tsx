import { Box } from "@mui/material";
import {
  BestProducts,
  BlogPosts,
  Categories,
  HeroHeader,
  Prices,
  Testimonials,
  TopSellingProducts,
  TrendingsProducts,
} from "../components";

const Home = () => {
  return (
    <Box component={"main"}>
      <HeroHeader />
      <Categories />
      <TrendingsProducts />
      <BestProducts />
      <TopSellingProducts />
      <Prices />
      <Testimonials />
      <BlogPosts />
    </Box>
  );
};

export default Home;
