import { Box, Button, Grid, Stack } from "@mui/material";
import { trendingsProducts } from "../data/trendingsProducts";
import { HeadingSection } from "./index";
import TrendingsProduct from "./TrendingsProducts/TrendingsProduct";

const TopSellingProducts = () => {
  return (
    <Stack
      component={"section"}
      direction={"column"}
      mb={10}
      maxWidth={{ xs: "95%", md: "90%", lg: "1550px" }}
      mx={"auto"}
      p={2}
    >
      <Box
        gap={"40px"}
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <Box minWidth={{ lg: "580px" }}>
          <HeadingSection
            textAlign="centerStart"
            h4Words="Top Selling Products"
            subtitle1Words="Stay ahead of the curve and shop the Top Selling Products"
            h4WordsColor="black"
          />
        </Box>
        <Box
          height={"55px"}
          flexGrow={1}
          display={"flex"}
          gap={"10px"}
          flexWrap={"nowrap"}
          sx={{ overflowX: "scroll" }}
        >
          <Button
            className="rounded-50px"
            sx={{
              textTransform: "capitalize",
              minWidth: "170px",
              flexShrink: 0,
              height: "45px",
            }}
            variant="contained"
            color="primary"
          >
            WordPress Themes
          </Button>
          <Button
            className="rounded-50px"
            sx={{
              textTransform: "capitalize",
              minWidth: "170px",
              flexShrink: 0,
              height: "45px",
            }}
            variant="contained"
            color="primary"
          >
            eCommerce Templates
          </Button>
          <Button
            className="rounded-50px"
            sx={{
              textTransform: "capitalize",
              minWidth: "170px",
              flexShrink: 0,
              height: "45px",
            }}
            variant="contained"
            color="primary"
          >
            Site Templates
          </Button>
          <Button
            className="rounded-50px"
            sx={{
              textTransform: "capitalize",
              minWidth: "170px",
              flexShrink: 0,
              height: "45px",
            }}
            variant="contained"
            color="primary"
          >
            CMS Templates
          </Button>
          <Button
            className="rounded-50px"
            sx={{
              textTransform: "capitalize",
              minWidth: "170px",
              flexShrink: 0,
              height: "45px",
            }}
            variant="contained"
            color="primary"
          >
            UI Design
          </Button>
          <Button
            className="rounded-50px"
            sx={{
              textTransform: "capitalize",
              minWidth: "170px",
              flexShrink: 0,
              height: "45px",
            }}
            variant="contained"
            color="primary"
          >
            3D Models
          </Button>
          <Button
            className="rounded-50px"
            sx={{
              textTransform: "capitalize",
              minWidth: "170px",
              flexShrink: 0,
              height: "45px",
            }}
            variant="contained"
            color="primary"
          >
            Image Stock
          </Button>
          <Button
            className="rounded-50px"
            sx={{
              textTransform: "capitalize",
              minWidth: "170px",
              flexShrink: 0,
              height: "45px",
            }}
            variant="contained"
            color="primary"
          >
            Mockup Design
          </Button>
        </Box>
      </Box>
      <Box
        mt={6}
        gap={"25px"}
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid container mt={6} spacing={"15px"}>
          {trendingsProducts.map((product, i) => {
            return <TrendingsProduct product={product} key={i} />;
          })}
        </Grid>
      </Box>
    </Stack>
  );
};

export default TopSellingProducts;
