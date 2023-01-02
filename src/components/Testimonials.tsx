import { Box } from "@mui/material";
import { HeadingSection } from "./index";

const Testimonials = () => {
  return (
    <Box mb={6}>
      <HeadingSection
        textAlign="center"
        h4Words="Testimonials"
        subtitle1Words="Looking for some reassurance before making a purchase? Check out testimonials for genuine customer feedback."
        h4WordsColor="black"
      />
    </Box>
  );
};

export default Testimonials;
