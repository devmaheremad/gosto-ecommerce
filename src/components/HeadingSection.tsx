import { colors, Typography } from "@mui/material";
import { HeadingSectionTypeProps } from "../@types/HeadingSection.types";

const HeadingSection = ({
  h4Words,
  subtitle1Words,
  h4WordsColor,
  textAlign,
}: HeadingSectionTypeProps) => {
  return (
    <>
      <Typography
        data-aos="fade-up"
        data-aos-offset="50"
        variant="h4"
        fontWeight={500}
        textAlign={
          textAlign === "center" ? "center" : { xs: "center", lg: "start" }
        }
        color={h4WordsColor}
      >
        {h4Words}
      </Typography>
      <Typography
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="250"
        maxWidth={"500px"}
        mx={"auto"}
        variant="subtitle1"
        color={colors.grey[500]}
        textAlign={
          textAlign === "center" ? "center" : { xs: "center", lg: "start" }
        }
      >
        {subtitle1Words}
      </Typography>
    </>
  );
};

export default HeadingSection;
