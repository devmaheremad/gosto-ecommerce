import { Box, Button, colors, Stack, Typography } from "@mui/material";
import { trendingsProducts } from "../json/trendingsProducts";
import { HeadingSection } from "./index";
import TrendingsProduct from "./TrendingsProducts/TrendingsProduct";

const TopSellingProducts = () => {
  return (
    <Stack
      direction={"column"}
      mb={6}
      maxWidth={"2500px"}
      mx={"auto"}
      px={{ xs: 2, sm: 3, md: 4, lg: 8, xl: 10 }}
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
        mt={4}
        gap={"25px"}
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {trendingsProducts.map((product, i) => {
          return <TrendingsProduct product={product} key={i} />;
        })}
      </Box>
    </Stack>
  );
};

export default TopSellingProducts;
