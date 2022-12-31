import { Box, Button, colors, Stack, Typography } from "@mui/material";
import { BestProducts1, BestProducts2 } from "../images";

const BestProducts = () => {
  return (
    <Stack
      spacing={2}
      px={{ xs: 2, sm: 3, md: 4, lg: 8, xl: 10 }}
      sx={{ flexGrow: 1 }}
      maxWidth={"2500px"}
      mx={"auto"}
      direction={{ xs: "column", lg: "row" }}
    >
      <Box
        height={"300px"}
        width={"100%"}
        className="rounded-20px"
        sx={{
          background: `url(${BestProducts1}) center no-repeat`,
          backgroundSize: "cover",
        }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"stretch"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          zIndex={1}
          bgcolor={"#00000063"}
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
          className="rounded-20px"
        ></Box>
        <Box
          position={"relative"}
          zIndex={2}
          textAlign={{ xs: "center", sm: "start" }}
          ml={{ xs: 0, sm: 4 }}
        >
          <Typography
            variant="h5"
            fontWeight={500}
            color="white"
            mb={1}
            sx={{ mb: 2 }}
          >
            UI Design <br /> Mockups Design PSD, Ai, EPS
          </Typography>
          <Typography
            variant="body1"
            color="black"
            sx={{ color: colors.grey[500], mb: "10px" }}
          >
            <i>Sale 30% Off For Members</i>
          </Typography>
          <Button
            className="rounded-50px"
            sx={{ textTransform: "uppercase" }}
            variant="contained"
            color="primary"
          >
            shop now
          </Button>
        </Box>
      </Box>
      <Box
        height={"300px"}
        width={"100%"}
        className="rounded-20px"
        sx={{
          background: `url(${BestProducts2}) center no-repeat`,
          backgroundSize: "cover",
        }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"stretch"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          zIndex={1}
          bgcolor={"#00000063"}
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
          className="rounded-20px"
        ></Box>
        <Box
          position={"relative"}
          zIndex={2}
          textAlign={{ xs: "center", sm: "start" }}
          ml={{ xs: 0, sm: 4 }}
        >
          <Typography
            variant="h5"
            fontWeight={500}
            color="white"
            mb={1}
            sx={{ mb: 2 }}
          >
            Site Templates <br /> the best design you will see
          </Typography>
          <Typography
            variant="body1"
            color="black"
            sx={{ color: colors.grey[500], mb: "10px" }}
          >
            <i>Sale 30% Off For Members</i>
          </Typography>
          <Button
            className="rounded-50px"
            sx={{ textTransform: "uppercase" }}
            variant="contained"
            color="primary"
          >
            shop now
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default BestProducts;
