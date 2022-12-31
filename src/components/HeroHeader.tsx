import {
  Box,
  colors,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { HeroSectionBG } from "../images";

const HeroHeader = () => {
  return (
    <Stack
      px={{ xs: 2, sm: 3, md: 4, lg: 8, xl: 10 }}
      direction={"column"}
      height={"550px"}
      spacing={2}
      sx={{
        background: `url('${HeroSectionBG}') center no-repeat`,
        backgroundSize: "cover",
      }}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Typography
        component={"h1"}
        mb={"-25px"}
        textAlign={"center"}
        variant="h4"
        fontWeight={"500"}
        color="black"
      >
        Over{" "}
        <Typography
          variant="h4"
          fontWeight={"500"}
          component={"span"}
          color="primary"
        >
          6,500
        </Typography>{" "}
        Curated Design
      </Typography>
      <Typography
        textAlign={"center"}
        variant="h4"
        fontWeight={"500"}
        color="black"
      >
        Resources,
        <Typography
          variant="h4"
          fontWeight={"500"}
          component={"span"}
          color="primary"
        >
          Graphic & Website
        </Typography>{" "}
        Templates
      </Typography>
      <Typography
        variant="subtitle1"
        color={colors.grey[500]}
        sx={{ my: "30px !important" }}
        textAlign={"center"}
      >
        High-quality Design Themes for personal or commercial use contains 6k+
        items in 100 categories.
      </Typography>
      <Box
        width={{ xs: "90%", sm: "85%", ld: "60%" }}
        maxWidth={"650px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        m={"0 !important"}
      >
        <form method="get" className="fullWidth">
          <TextField
            fullWidth
            required
            type={"text"}
            id="outlined-basic"
            label="Search Products..."
            variant="outlined"
            sx={{ my: "0 !important", bgcolor: "white" }}
          />
          <IconButton
            sx={{
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            type="submit"
            aria-label="saerch"
          >
            <svg
              width={25}
              height={25}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </IconButton>
        </form>
      </Box>
      <Typography
        textAlign={"center"}
        variant="subtitle1"
        color={colors.grey[500]}
        mt="3px !important"
      >
        Examples: Mockup, PSD, Theme Design, Image…
      </Typography>
    </Stack>
  );
};

export default HeroHeader;
