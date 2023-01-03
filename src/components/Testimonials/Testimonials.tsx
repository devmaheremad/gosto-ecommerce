import { Box } from "@mui/material";
import { HeadingSection } from "../index";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Importing TestimonialsData
import TestimonialsData from "../../data/testimonials.json";
// Import Swiper styles
import "swiper/css";

// import required modules
import TestimonialCard from "./TestimonialCard";
import { Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <Box component={"section"} mb={10} maxWidth={"2500px"} mx={"auto"} p={2}>
      <HeadingSection
        textAlign="center"
        h4Words="Testimonials"
        subtitle1Words="Looking for some reassurance before making a purchase? Check out testimonials for genuine customer feedback."
        h4WordsColor="black"
      />
      <Box mt={2} position={"relative"}>
        <Swiper
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          style={{ paddingLeft: "2px", paddingRight: "2px" }}
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
          modules={[Autoplay]}
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
