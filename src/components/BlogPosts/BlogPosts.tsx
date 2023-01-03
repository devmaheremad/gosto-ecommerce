import { Box } from "@mui/material";
import { HeadingSection } from "../index";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Importing TestimonialsData
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import BlogCard from "./BlogCard";
import { blogsData } from "../../data/blogsData";

const BlogPosts = () => {
  return (
    <Box mb={10}>
      <Box
        maxWidth={"2500px"}
        mx={"auto"}
        px={{ xs: 2, sm: 3, md: 4, lg: 8, xl: 10 }}
      >
        <HeadingSection
          textAlign="center"
          h4Words="Latest Blog Posts"
          subtitle1Words="Latest marketplace news, success stories and tutorials."
          h4WordsColor="black"
        />
      </Box>
      <Box mt={2} position={"relative"}>
        <Swiper
          grabCursor={true}
          style={{ maxWidth: "98%", paddingLeft: "2px", paddingRight: "2px" }}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            620: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
          className="testimonialsSwiper fullWidth fullHeight pt-32px h-365px"
        >
          {blogsData &&
            blogsData.map((blog, index) => {
              return (
                <SwiperSlide key={index}>
                  <BlogCard blog={blog} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default BlogPosts;