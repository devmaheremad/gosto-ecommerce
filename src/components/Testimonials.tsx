import { Box } from "@mui/material";
import { HeadingSection } from "./index";

const Testimonials = () => {
  return (
    <Box
      mb={10}
      maxWidth={"2500px"}
      mx={"auto"}
      px={{ xs: 2, sm: 3, md: 4, lg: 8, xl: 10 }}
    >
      <Box>
        <HeadingSection
          textAlign="center"
          h4Words="Testimonials"
          subtitle1Words="Looking for some reassurance before making a purchase? Check out testimonials for genuine customer feedback."
          h4WordsColor="black"
        />
      </Box>
      <Box mt={6}>test</Box>
    </Box>
  );
};

export default Testimonials;
