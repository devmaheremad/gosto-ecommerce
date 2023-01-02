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
    <>
      <HeroHeader />
      <Categories />
      <TrendingsProducts />
      <BestProducts />
      <TopSellingProducts />
      <Prices />
      <Testimonials />
      <BlogPosts />
    </>
  );
};

export default Home;
