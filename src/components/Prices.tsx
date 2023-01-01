import { Box, Button, colors, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Prices = () => {
  return (
    <Box
      py={10}
      mb={6}
      bgcolor={"#0a2748"}
      px={{ xs: 2, sm: 3, md: 4, lg: 8, xl: 10 }}
      minHeight={"850px"}
    >
      <Box maxWidth={"2500px"} mx={"auto"}>
        <Typography
          variant="h4"
          fontWeight={500}
          textAlign={"center"}
          color="white"
        >
          Top Selling Products
        </Typography>
        <Typography
          variant="subtitle1"
          color={colors.grey[500]}
          textAlign={"center"}
        >
          Meet our newbies! The latest templates uploaded to the marketplace.
        </Typography>
        <Grid2 container spacing={2} mt={5} justifyContent={"center"}>
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
              color={colors.yellow[500]}
              fontWeight={600}
              mb={2}
            >
              Free Trial
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
                0
              </Typography>
              <Typography
                variant="subtitle1"
                component={"span"}
                color="#6c8eb6"
              >
                /user per month
              </Typography>
            </Box>
            <Typography mt={2} mb={6} variant="subtitle2" color={"#6c8eb6c2"}>
              Beautifully simple project planning, 14 days of free trial.
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
              </svg>
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
              </svg>
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
              </svg>
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
              </svg>
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
                30 Days Money Back
              </Typography>
            </Typography>
          </Grid2>
          <Grid2
            sx={{ position: "relative" }}
            bgcolor={"#0a2b52"}
            p={{ xs: 5, lg: 7 }}
            borderRadius={2}
            maxWidth={"350px !important"}
            xs={12}
            md={6}
            lg={4}
            overflow={"hidden"}
          >
            <Box
              position={"absolute"}
              right={"-57px"}
              top={"25px"}
              p={"8px"}
              width={"200px"}
              bgcolor={"#bd3f99"}
              sx={{ transform: "rotate(45deg)" }}
            >
              <Typography
                textAlign={"center"}
                variant="subtitle1"
                color="white"
                fontWeight={600}
                textTransform={"uppercase"}
              >
                POPULAR
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{ textTransform: "capitalize" }}
              color={colors.amber[500]}
              fontWeight={600}
              mb={2}
            >
              Premium
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
                26
              </Typography>
              <Typography
                variant="subtitle1"
                component={"span"}
                color="#6c8eb6"
              >
                /user per month
              </Typography>
            </Box>
            <Typography mt={2} mb={6} variant="subtitle2" color={"#6c8eb6c2"}>
              Declutter your mind and save time with Premium.
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
              </svg>
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
              </svg>
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
                30 Days Money Back
              </Typography>
            </Typography>
          </Grid2>
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
              <Typography
                variant="subtitle1"
                component={"span"}
                color="#6c8eb6"
              >
                /user per month
              </Typography>
            </Box>
            <Typography mt={2} mb={6} variant="subtitle2" color={"#6c8eb6c2"}>
              Declutter your mind and save time with Premium.
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
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
              <Typography
                ml={1}
                component={"span"}
                textTransform={"capitalize"}
              >
                30 Days Money Back
              </Typography>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Prices;
