import { Box, Typography } from "@mui/material";
import { TestimonialCardTypeProps } from "../../@types/TestimonialCard.types";

const TestimonialCard = ({
  testimonial: { name, role, testimonialContent },
}: TestimonialCardTypeProps) => {
  return (
    <Box
      pt={"70px"}
      px={3}
      pb={2}
      position={"relative"}
      sx={{
        boxShadow: 1,
        "&:hover svg ": {
          fill: "#fff",
        },
        "&:hover .svgContainer ": {
          bgcolor: "#ff5400",
        },
      }}
      borderRadius={3}
      bgcolor={"white"}
      overflow={"visible"}
    >
      <Box
        position={"absolute"}
        left={"50%"}
        top={"20px"}
        sx={{ transform: "translateX(-50%)", boxShadow: 3 }}
        width={"60px"}
        height={"60px"}
        bgcolor={"white"}
        borderRadius={"30px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"-47px"}
        className={"svgContainer"}
      >
        <svg
          fill="#ff5400"
          strokeWidth={0}
          version="1.1"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z" />
        </svg>
      </Box>
      <Typography
        variant="body1"
        color="#0a2748b0"
        m={0}
        textAlign={"justify"}
        height={"150px"}
        sx={{ overflowY: "scroll" }}
        p={"5px"}
      >
        {testimonialContent}
      </Typography>
      <Typography variant="h6" color="black" mt={3} textAlign={"center"}>
        {name}
      </Typography>
      <Typography variant="body1" color="#0a2748b0" m={0} textAlign={"center"}>
        {role}
      </Typography>
    </Box>
  );
};

export default TestimonialCard;
