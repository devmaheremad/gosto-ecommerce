import { TrendingsProductTypeProps } from "../../@types/TrendingsProduct";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { Box, colors, Grid, IconButton, Typography } from "@mui/material";

const TrendingsProduct = ({ product }: TrendingsProductTypeProps) => {
  const { title, by, imgs, price } = product;

  // create a function to slice the product title
  const sliceTitle = (title: string): string => {
    return title.length > 50 ? `${title.substring(0, 50)}...` : title;
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={3}
      xl={2}
      position={"relative"}
      height={"300px"}
    >
      {imgs.length > 1 ? (
        <>
          <Box height={"65%"} mb={2}>
            <Swiper
              loop={true}
              spaceBetween={10}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: Math.floor(Math.random() * 12000) + 2000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="TrendingsProductSwiper position-relative fullWidth fullHeight"
            >
              <Box position={"relative"} zIndex={1}>
                {imgs.map((img, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <img
                        width={"100%"}
                        height={"100%"}
                        src={img}
                        alt={title}
                        className="rounded-20px"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </SwiperSlide>
                  );
                })}
              </Box>
            </Swiper>
          </Box>
          <Box textAlign={{ xs: "center", sm: "start" }}>
            <Typography
              variant="body2"
              fontWeight={500}
              color="black"
              m={"0 !important"}
              height={"40px"}
            >
              {sliceTitle(title)}
            </Typography>
            <Typography
              variant="caption"
              color="black"
              sx={{ color: colors.grey[500] }}
            >
              <i>by: {by}</i>
            </Typography>
            <Typography variant="body2" fontWeight={500} color="black">
              {price}
            </Typography>
          </Box>
          <Box
            bgcolor={"#000000b3"}
            width={"40%"}
            borderRadius={"50px"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            left={"50%"}
            top={"10%"}
            sx={{ transform: "translateX(-50%)" }}
            display={"flex"}
            gap={"12px"}
            height={"60px"}
            zIndex={3}
          >
            <IconButton
              aria-label="add-to-cart"
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "40px",
                bgcolor: "#f6f7f8",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  bgcolor: "#ff5400",
                },
                "&:hover > svg": {
                  stroke: "#fff",
                },
              }}
            >
              <svg
                style={{ transition: "all 0.3s ease-in-out" }}
                widths={20}
                height={20}
                stroke="#000"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1={3} y1={6} x2={21} y2={6} />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </IconButton>
            <IconButton
              aria-label="add-to-cart"
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "40px",
                bgcolor: "#f6f7f8",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  bgcolor: "#ff5400",
                },
                "&:hover > svg": {
                  fill: "#fff",
                },
              }}
            >
              <svg
                style={{ transition: "all 0.3s ease-in-out" }}
                widths={20}
                height={20}
                fill="#000"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
              </svg>
            </IconButton>
          </Box>
        </>
      ) : (
        <>
          <Box height={"65%"} mb={2}>
            <img
              src={imgs[0]}
              alt={title}
              className="rounded-20px"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Box>
          <Box textAlign={{ xs: "center", sm: "start" }}>
            <Typography
              variant="body2"
              fontWeight={500}
              color="black"
              m={"0 !important"}
              height={"40px"}
            >
              {sliceTitle(title)}
            </Typography>
            <Typography
              variant="caption"
              color="black"
              sx={{ color: colors.grey[500] }}
            >
              <i>by: {by}</i>
            </Typography>
            <Typography variant="body2" fontWeight={500} color="black">
              {price}
            </Typography>
          </Box>
          <Box
            bgcolor={"#000000b3"}
            width={"40%"}
            borderRadius={"50px"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            left={"50%"}
            top={"10%"}
            sx={{ transform: "translateX(-50%)" }}
            display={"flex"}
            gap={"12px"}
            height={"60px"}
            zIndex={3}
          >
            <IconButton
              aria-label="add-to-cart"
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "40px",
                bgcolor: "#f6f7f8",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  bgcolor: "#ff5400",
                },
                "&:hover > svg": {
                  stroke: "#fff",
                },
              }}
            >
              <svg
                style={{ transition: "all 0.3s ease-in-out" }}
                widths={20}
                height={20}
                stroke="#000"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1={3} y1={6} x2={21} y2={6} />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </IconButton>
            <IconButton
              aria-label="add-to-cart"
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "40px",
                bgcolor: "#f6f7f8",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  bgcolor: "#ff5400",
                },
                "&:hover > svg": {
                  fill: "#fff",
                },
              }}
            >
              <svg
                style={{ transition: "all 0.3s ease-in-out" }}
                widths={20}
                height={20}
                fill="#000"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
              </svg>
            </IconButton>
          </Box>
        </>
      )}
    </Grid>
  );
};

export default TrendingsProduct;
