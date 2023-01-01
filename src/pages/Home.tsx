import {
  BestProducts,
  BlogPosts,
  Categories,
  HeroHeader,
  Prices,
  Testimonial,
  TopSellingProducts,
  TrendingsProducts,
} from "../components";

const Home = () => {
  return (
    <>
      <HeroHeader />
      <Categories />
      <TrendingsProducts />
      <BestProducts />
      <TopSellingProducts />
      <Prices />
      <Testimonial />
      <BlogPosts />
    </>
  );
};

export default Home;
