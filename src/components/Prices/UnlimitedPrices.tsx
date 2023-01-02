import { Box, Button, colors, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const UnlimitedPrices = () => {
  return (
    <Grid2
      p={{ xs: 5, lg: 7 }}
      maxWidth={"350px !important"}
      xs={12}
      md={6}
      lg={4}
    >
      <Typography
        variant="h5"
        sx={{ textTransform: "capitalize" }}
        color={colors.orange[500]}
        fontWeight={600}
        mb={2}
      >
        Unlimited Access
      </Typography>
      <Box>
        <Typography
          variant="h2"
          color="white"
          component={"p"}
          display={"inline-block"}
          fontWeight={500}
        >
          <Typography variant="h4" component={"sup"}>
            $
          </Typography>
          49
        </Typography>
        <Typography variant="subtitle1" component={"span"} color="#6c8eb6">
          /user per month
        </Typography>
      </Box>
      <Typography mt={2} mb={6} variant="subtitle2" color={"#6c8eb6c2"}>
        Declutter your mind and save time with Unlimited.
      </Typography>
      <Button
        className="rounded-50px"
        sx={{
          textTransform: "uppercase",
          minWidth: "170px",
          flexShrink: 0,
          height: "45px",
        }}
        variant="contained"
        color="primary"
      >
        GET STATRED
      </Button>
      <Typography
        mt={6}
        variant="subtitle1"
        color="white"
        textTransform={"capitalize"}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 48 48"
          enableBackground="new 0 0 48 48"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fill="#43A047"
            points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
          />
        </svg>
        <Typography ml={1} component={"span"} textTransform={"capitalize"}>
          Demo Content Install
        </Typography>
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        color="white"
        textTransform={"capitalize"}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 48 48"
          enableBackground="new 0 0 48 48"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fill="#43A047"
            points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
          />
        </svg>
        <Typography ml={1} component={"span"} textTransform={"capitalize"}>
          Theme Updates
        </Typography>
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        color="white"
        textTransform={"capitalize"}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 48 48"
          enableBackground="new 0 0 48 48"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fill="#43A047"
            points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
          />
        </svg>
        <Typography ml={1} component={"span"} textTransform={"capitalize"}>
          Support And Updates
        </Typography>
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        color="white"
        textTransform={"capitalize"}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 48 48"
          enableBackground="new 0 0 48 48"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fill="#43A047"
            points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
          />
        </svg>
        <Typography ml={1} component={"span"} textTransform={"capitalize"}>
          Access All Themes
        </Typography>
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        color="white"
        textTransform={"capitalize"}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 48 48"
          enableBackground="new 0 0 48 48"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fill="#43A047"
            points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
          />
        </svg>
        <Typography ml={1} component={"span"} textTransform={"capitalize"}>
          All Themes For Life
        </Typography>
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        color="white"
        textTransform={"capitalize"}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 48 48"
          enableBackground="new 0 0 48 48"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fill="#43A047"
            points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
          />
        </svg>
        <Typography ml={1} component={"span"} textTransform={"capitalize"}>
          30 Days Money Back
        </Typography>
      </Typography>
    </Grid2>
  );
};

export default UnlimitedPrices;
