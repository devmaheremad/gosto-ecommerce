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
        variant="h4"
        fontWeight={500}
        textAlign={
          textAlign === "start" ? "start" : { xs: "center", lg: "start" }
        }
        color={h4WordsColor}
      >
        {h4Words}
      </Typography>
      <Typography
        variant="subtitle1"
        color={colors.grey[500]}
        textAlign={
          textAlign === "start" ? "start" : { xs: "center", lg: "start" }
        }
      >
        {subtitle1Words}
      </Typography>
    </>
  );
};

export default HeadingSection;
