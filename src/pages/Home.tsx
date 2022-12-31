import {
  BestProducts,
  Categories,
  HeroHeader,
  TrendingsProducts,
} from "../components";

const Home = () => {
  return (
    <>
      <HeroHeader />
      <Categories />
      <TrendingsProducts />
      <BestProducts />
    </>
  );
};

export default Home;
