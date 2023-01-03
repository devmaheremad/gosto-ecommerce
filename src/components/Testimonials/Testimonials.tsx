import { Box } from "@mui/material";
import { HeadingSection } from "../index";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Importing TestimonialsData
import TestimonialsData from "../../data/testimonials.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Box mb={10}>
      <Box
        maxWidth={"2500px"}
        mx={"auto"}
        px={{ xs: 2, sm: 3, md: 4, lg: 8, xl: 10 }}
      >
        <HeadingSection
          textAlign="center"
          h4Words="Testimonials"
          subtitle1Words="Looking for some reassurance before making a purchase? Check out testimonials for genuine customer feedback."
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
          pagination={{
            clickable: true,
          }}
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
          modules={[Pagination]}
          className="testimonialsSwiper fullWidth fullHeight pt-32px h-365px"
        >
          {TestimonialsData &&
            TestimonialsData.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
