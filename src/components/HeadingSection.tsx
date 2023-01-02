import { colors, Typography } from "@mui/material";
import { HeadingSectionTypeProps } from "../@types/HeadingSection.types";

const HeadingSection = ({
  h4Words,
  subtitle1Words,
  h4WordsColor,
}: HeadingSectionTypeProps) => {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={500}
        textAlign={"center"}
        color={h4WordsColor}
      >
        {h4Words}
      </Typography>
      <Typography
        variant="subtitle1"
        color={colors.grey[500]}
        textAlign={"center"}
      >
        {subtitle1Words}
      </Typography>
    </>
  );
};

export default HeadingSection;
