import { Box, colors, Stack, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper";
import {
  categoriesSwiperImg,
  categoriesSwiperSvg,
} from "../data/categoriesSwiper";

const Categories = () => {
  return (
    <Box
      mb={10}
      display={"flex"}
      justifyContent={"center"}
      maxWidth={"2500px"}
      mx={"auto"}
    >
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode, Navigation, Autoplay]}
        className="categoriesSwiper"
      >
        {categoriesSwiperSvg.map((slide, i) => {
          return (
            <SwiperSlide key={i} className="w-300px h-130px">
              <Stack
                bgcolor={"white"}
                borderRadius={"15px"}
                direction={"row"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
                width={"100%"}
                height={"100%"}
              >
                {slide.svgImg}
                <Stack direction={"column"}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={"500"}
                    color="black"
                    lineHeight={"18px"}
                  >
                    {slide.title}
                  </Typography>
                  <Typography variant="caption" color={colors.grey[500]}>
                    {slide.items} items
                  </Typography>
                </Stack>
              </Stack>
            </SwiperSlide>
          );
        })}
        {categoriesSwiperImg.map((slide, i) => {
          return (
            <SwiperSlide key={i} className="w-300px h-130px">
              <Stack
                bgcolor={"white"}
                borderRadius={"15px"}
                direction={"row"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
                width={"100%"}
                height={"100%"}
              >
                {slide.img}
                <Stack direction={"column"}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={"500"}
                    color="black"
                    lineHeight={"18px"}
                  >
                    {slide.title}
                  </Typography>
                  <Typography variant="caption" color={colors.grey[500]}>
                    {slide.items} items
                  </Typography>
                </Stack>
              </Stack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Categories;
