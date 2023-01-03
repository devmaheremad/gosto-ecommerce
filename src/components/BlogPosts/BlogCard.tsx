import { Box, Stack, Typography } from "@mui/material";
import { BlogCardTypeProps } from "../../@types/BlogCard.types";

const BlogCard = ({ blog: { postDate, title, img } }: BlogCardTypeProps) => {
  return (
    <Box
      height={"100%"}
      className="rounded-20px"
      sx={{
        background: `url(${img}) center no-repeat`,
        backgroundSize: "cover",
      }}
      display={"flex"}
      alignItems={"center"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box
        position={"absolute"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        bgcolor={"#00000087"}
        zIndex={1}
      ></Box>
      <Stack direction={"column"} p={4} position={"relative"} zIndex={2}>
        <Typography variant="h5" color="white">
          {title}
        </Typography>
        <Typography variant="caption" color="#d4cfcf">
          Post Date: {postDate}
        </Typography>
      </Stack>
    </Box>
  );
};

export default BlogCard;
