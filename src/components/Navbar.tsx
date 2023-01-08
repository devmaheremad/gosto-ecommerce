import {
  AppBar,
  Badge,
  Box,
  Drawer,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isDrawerCartOpen, setIsDrawerCartOpen] = useState<boolean>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        data-aos="zoom-in-down"
        className="mainNavbar"
        position="static"
        color="transparent"
        sx={{
          boxShadow: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "85px",
        }}
      >
        <Box maxWidth={"2000px"} width={"100%"}>
          <Toolbar sx={{ px: { xs: 2, sm: 3, md: 4, lg: 8, xl: 10 } }}>
            <Box mr={3} display={{ xs: "none", md: "block" }}>
              <Link to="/gosto-ecommerce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="100px"
                  height="25px"
                  viewBox="0 0 588.667 150.667"
                  enableBackground="new 0 0 588.667 150.667"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fill="#0E2748"
                      d="M126.831,78.358H90.473c-2.366,0-4.485,0.887-6.136,2.583c-1.645,1.693-2.479,3.725-2.479,6.027   c0,2.375,0.84,4.434,2.479,6.123c1.639,1.688,3.764,2.586,6.136,2.586h26.064c-1.112,3.604-2.622,6.959-4.495,9.992   c-2.404,3.893-5.424,7.276-8.964,10.047c-3.554,2.77-7.655,4.932-12.196,6.428c-4.573,1.502-9.617,2.262-14.993,2.262   c-6.64,0-12.918-1.248-18.662-3.715c-5.769-2.48-10.843-5.902-15.084-10.174c-4.251-4.279-7.664-9.381-10.142-15.146   c-2.467-5.746-3.714-12.023-3.714-18.665c0-6.701,1.281-13.017,3.803-18.788c2.537-5.797,6.008-10.894,10.317-15.146   c4.305-4.243,9.395-7.621,15.142-10.038C68.771,28,81.927,27.84,93.946,32.659c5.865,2.338,11.228,5.886,15.943,10.534   c1.665,1.671,3.767,2.558,6.245,2.558h0.01c2.368-0.053,4.403-0.912,6.095-2.607c1.619-1.705,2.463-3.723,2.506-6.002   c0.046-2.34-0.887-4.49-2.646-6.156c-6.427-6.43-13.657-11.315-21.499-14.545c-13.279-5.447-28.839-6.301-42.363-2.498   c-5.547,1.564-10.781,3.803-15.56,6.658c-4.776,2.854-9.186,6.32-13.103,10.301c-3.911,3.971-7.292,8.43-10.055,13.257   c-2.75,4.803-4.902,10.038-6.396,15.546c-1.496,5.518-2.254,11.271-2.254,17.1c0,5.973,0.776,11.795,2.302,17.309   c1.525,5.506,3.712,10.73,6.499,15.543c2.786,4.809,6.186,9.252,10.1,13.199c3.908,3.941,8.319,7.381,13.107,10.207   c4.775,2.818,10.009,5.022,15.568,6.561c5.559,1.523,11.395,2.301,17.352,2.301c8.037,0,15.646-1.406,22.616-4.168   c6.952-2.764,13.151-6.637,18.429-11.512c5.273-4.873,9.613-10.699,12.904-17.313c3.293-6.638,5.34-13.904,6.079-21.769   c0.087-2.592-0.839-4.813-2.681-6.418C131.433,79.25,129.343,78.452,126.831,78.358z"
                    />
                    <path
                      fill="#0E2748"
                      d="M252.048,30.743c-5.881-5.876-12.84-10.57-20.693-13.951c-13.131-5.65-28.813-6.617-42.721-2.811   c-5.553,1.537-10.789,3.743-15.563,6.564c-4.793,2.828-9.203,6.261-13.109,10.199c-3.898,3.932-7.299,8.355-10.091,13.15   c-2.794,4.775-4.985,9.992-6.507,15.494c-1.53,5.515-2.301,11.34-2.301,17.313c0,5.973,0.771,11.813,2.301,17.35   c1.52,5.539,3.713,10.775,6.5,15.553c2.787,4.779,6.183,9.22,10.092,13.188c3.926,3.994,8.338,7.429,13.127,10.22   c4.787,2.795,10.018,4.996,15.531,6.547c5.559,1.563,11.402,2.358,17.373,2.358c5.964,0,11.807-0.795,17.362-2.358   c5.518-1.553,10.743-3.754,15.542-6.547c4.778-2.783,9.219-6.213,13.199-10.203c3.986-3.98,7.421-8.426,10.207-13.203   c2.795-4.793,4.996-10.018,6.543-15.537c1.566-5.557,2.363-11.396,2.363-17.366c0-8.958-1.738-17.483-5.174-25.337   C262.614,43.549,257.907,36.61,252.048,30.743z M253.683,76.707c0,6.633-1.251,12.918-3.717,18.665   c-2.477,5.767-5.902,10.854-10.18,15.144c-4.279,4.274-9.375,7.701-15.136,10.178c-11.554,4.959-25.8,4.912-37.233,0   c-5.767-2.48-10.836-5.902-15.082-10.174c-4.258-4.289-7.672-9.385-10.14-15.146c-2.467-5.746-3.714-12.031-3.714-18.665   c0-6.573,1.247-12.802,3.714-18.515c2.468-5.73,5.882-10.808,10.14-15.104c4.248-4.281,9.327-7.703,15.082-10.175   c5.744-2.466,12.021-3.716,18.662-3.716c6.57,0,12.814,1.25,18.571,3.712c5.755,2.478,10.847,5.901,15.136,10.185   c4.277,4.283,7.703,9.363,10.18,15.098C252.432,63.905,253.683,70.134,253.683,76.707z"
                    />
                    <path
                      fill="#0E2748"
                      d="M351.078,77.372c-3.66-2.814-7.899-5.225-12.607-7.16c-4.575-1.879-9.311-3.588-14.234-5.109   c-3.027-0.756-6.223-1.625-9.581-2.612c-3.182-0.923-6.139-2.151-8.796-3.644c-2.537-1.428-4.643-3.185-6.275-5.244   c-1.479-1.861-2.203-4.188-2.203-7.114c0-2.841,0.644-5.256,1.955-7.376c1.365-2.195,3.137-4.04,5.27-5.48   c2.223-1.498,4.727-2.654,7.445-3.433c7.742-2.229,15.601-1.267,21.617,1.325c3.805,1.641,7.465,4.598,10.889,8.779l0.447,0.434   c1.896,1.447,4.011,2.062,6.078,1.826c1.998-0.217,3.686-0.948,5.104-2.247c0.989-0.995,1.757-2.308,2.278-3.891   c0.623-1.919,0.367-3.891-0.695-5.639c-1.807-3.19-4.096-6.022-6.79-8.406c-2.655-2.35-5.663-4.354-8.944-5.964   c-3.244-1.588-6.775-2.805-10.479-3.609c-8.354-1.822-17.416-1.666-25.889,1.18c-4.736,1.592-9.055,3.899-12.829,6.854   c-3.826,2.996-6.948,6.695-9.28,10.995c-2.384,4.377-3.591,9.336-3.591,14.75c0,5.396,1.229,10.169,3.646,14.181   c2.34,3.895,5.452,7.288,9.242,10.076c3.687,2.721,7.933,4.998,12.627,6.779c4.547,1.721,9.239,3.158,13.739,4.215   c3.488,1.139,6.947,2.325,10.379,3.569c3.249,1.166,6.197,2.599,8.773,4.246c2.426,1.555,4.394,3.428,5.85,5.58   c1.365,2.024,2.031,4.534,2.031,7.67c0,3.502-0.726,6.603-2.164,9.226c-1.467,2.688-3.422,4.971-5.797,6.788   c-2.422,1.845-5.191,3.248-8.23,4.171c-6.075,1.86-12.411,1.797-18.191,0.35c-2.836-0.701-5.494-1.732-7.908-3.062   c-2.385-1.307-4.561-2.918-6.461-4.784c-1.854-1.83-3.336-3.902-4.401-6.154l-0.313-0.51c-1.742-2.209-3.461-3.603-5.256-4.258   c-2.024-0.74-4.254-0.496-6.375,0.694c-1.771,0.976-3.123,2.42-4.029,4.282c-1.041,2.13-0.904,4.63,0.375,7.361   c1.52,3.525,3.737,6.865,6.588,9.92c2.82,3.025,6.152,5.674,9.909,7.871c3.717,2.18,7.844,3.928,12.262,5.199   c4.443,1.279,9.115,1.932,13.888,1.932c5.718,0,11.261-0.942,16.479-2.795c5.248-1.863,9.924-4.547,13.896-7.977   c3.989-3.445,7.213-7.637,9.576-12.453c2.374-4.861,3.584-10.34,3.584-16.281c0-5.625-1.188-10.557-3.521-14.647   C357.892,83.776,354.832,80.276,351.078,77.372z"
                    />
                    <path
                      fill="#0E2748"
                      d="M455.671,21.263c0-2.347-0.857-4.469-2.48-6.139c-1.65-1.683-3.77-2.574-6.133-2.574H374.72   c-2.393,0-4.442,0.84-6.1,2.506c-1.646,1.641-2.509,3.754-2.509,6.108c0,2.334,0.854,4.459,2.479,6.124   c1.645,1.691,3.77,2.58,6.127,2.58h27.171v102.095c0,2.352,0.794,4.398,2.331,6.064c1.583,1.729,3.685,2.643,6.089,2.643   c2.468,0,4.567-0.867,6.237-2.578c1.619-1.664,2.479-3.781,2.479-6.125V29.87h28.031c2.363,0,4.402-0.816,6.088-2.436   C454.798,25.822,455.671,23.686,455.671,21.263z"
                    />
                    <circle fill="#C12926" cx="512.732" cy="76.81" r="49.414" />
                    <circle
                      fill="#F04F35"
                      cx="494.744"
                      cy="76.809"
                      r="45.857"
                    />
                    <path
                      fill="#0E2748"
                      d="M572.625,51.37c-3.412-7.821-8.117-14.76-13.977-20.627c-5.885-5.876-12.846-10.57-20.695-13.951   c-13.137-5.65-28.814-6.617-42.719-2.811c-5.557,1.537-10.791,3.743-15.564,6.564c-4.791,2.828-9.201,6.261-13.111,10.199   c-3.896,3.932-7.297,8.355-10.092,13.15c-2.795,4.775-4.986,9.992-6.506,15.494c-1.529,5.515-2.301,11.34-2.301,17.313   c0,5.973,0.771,11.813,2.301,17.35c1.52,5.539,3.711,10.775,6.502,15.553c2.781,4.777,6.186,9.22,10.092,13.188   c3.928,3.994,8.338,7.429,13.127,10.22c4.789,2.795,10.02,4.996,15.531,6.547c5.557,1.563,11.398,2.358,17.373,2.358   c5.965,0,11.803-0.795,17.361-2.358c5.52-1.553,10.742-3.754,15.541-6.547c4.775-2.783,9.225-6.213,13.201-10.203   c3.984-3.98,7.422-8.426,10.199-13.203c2.803-4.793,4.998-10.018,6.547-15.537c1.57-5.557,2.363-11.396,2.363-17.366   C577.8,67.749,576.064,59.223,572.625,51.37z M560.285,76.707c0,6.633-1.25,12.918-3.717,18.665   c-2.479,5.767-5.9,10.854-10.182,15.144c-4.277,4.274-9.369,7.701-15.137,10.178c-11.543,4.951-25.793,4.912-37.234,0   c-5.768-2.48-10.836-5.902-15.082-10.174c-4.258-4.289-7.672-9.385-10.141-15.146c-2.465-5.746-3.715-12.031-3.715-18.665   c0-6.573,1.25-12.802,3.715-18.515c2.469-5.73,5.883-10.808,10.141-15.104c4.248-4.281,9.328-7.703,15.082-10.175   c5.748-2.466,12.023-3.716,18.666-3.716c6.568,0,12.811,1.25,18.568,3.712c5.758,2.478,10.846,5.901,15.137,10.185   c4.279,4.283,7.703,9.363,10.182,15.098C559.029,63.905,560.285,70.134,560.285,76.707z"
                    />
                    <g>
                      <path
                        fill="#FFFFFF"
                        d="M488.41,99.16c-4.113-6.715-6.293-14.438-6.293-22.343c-0.004-5.362,0.973-10.594,2.916-15.557    c0.803-2.057,3.133-3.062,5.172-2.27c2.063,0.805,3.078,3.123,2.271,5.184c-1.568,4.028-2.369,8.275-2.363,12.636    c0,6.434,1.77,12.715,5.115,18.164c1.152,1.888,0.563,4.345-1.314,5.498c-0.656,0.402-1.375,0.595-2.088,0.595    C490.482,101.067,489.166,100.388,488.41,99.16z M498.269,48.341c-1.334-1.757-0.99-4.264,0.77-5.599    c1.557-1.177,3.205-2.26,4.904-3.219c1.924-1.081,4.357-0.395,5.441,1.519c1.084,1.927,0.408,4.363-1.52,5.446    c-1.387,0.78-2.729,1.666-3.998,2.625c-0.719,0.549-1.57,0.808-2.406,0.808C500.246,49.921,499.052,49.382,498.269,48.341z"
                      />
                    </g>
                  </g>
                </svg>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Box onClick={handleOpenNavMenu} sx={{ cursor: "pointer" }}>
                <svg
                  width={"25px"}
                  height={"25px"}
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Box minWidth={"150px"}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      to="/gosto-ecommerce"
                      color={"black"}
                      className="textDecoration"
                    >
                      <Typography
                        variant="body1"
                        fontWeight={"600"}
                        color="black"
                      >
                        Home
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/shop" color={"black"} className="textDecoration">
                      <Typography
                        variant="body1"
                        fontWeight={"600"}
                        color="black"
                      >
                        Shop
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      to="/about"
                      color={"black"}
                      className="textDecoration"
                    >
                      <Typography
                        variant="body1"
                        fontWeight={"600"}
                        color="black"
                      >
                        About us
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/blog" color={"black"} className="textDecoration">
                      <Typography
                        variant="body1"
                        fontWeight={"600"}
                        color="black"
                      >
                        Blog
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      to="/contact"
                      color={"black"}
                      className="textDecoration"
                    >
                      <Typography
                        variant="body1"
                        fontWeight={"600"}
                        color="black"
                      >
                        Contact us
                      </Typography>
                    </Link>
                  </MenuItem>
                </Box>
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none", flexGrow: 1 } }}>
              <Link to="/gosto-ecommerce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="100px"
                  height="25px"
                  viewBox="0 0 588.667 150.667"
                  enableBackground="new 0 0 588.667 150.667"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fill="#0E2748"
                      d="M126.831,78.358H90.473c-2.366,0-4.485,0.887-6.136,2.583c-1.645,1.693-2.479,3.725-2.479,6.027   c0,2.375,0.84,4.434,2.479,6.123c1.639,1.688,3.764,2.586,6.136,2.586h26.064c-1.112,3.604-2.622,6.959-4.495,9.992   c-2.404,3.893-5.424,7.276-8.964,10.047c-3.554,2.77-7.655,4.932-12.196,6.428c-4.573,1.502-9.617,2.262-14.993,2.262   c-6.64,0-12.918-1.248-18.662-3.715c-5.769-2.48-10.843-5.902-15.084-10.174c-4.251-4.279-7.664-9.381-10.142-15.146   c-2.467-5.746-3.714-12.023-3.714-18.665c0-6.701,1.281-13.017,3.803-18.788c2.537-5.797,6.008-10.894,10.317-15.146   c4.305-4.243,9.395-7.621,15.142-10.038C68.771,28,81.927,27.84,93.946,32.659c5.865,2.338,11.228,5.886,15.943,10.534   c1.665,1.671,3.767,2.558,6.245,2.558h0.01c2.368-0.053,4.403-0.912,6.095-2.607c1.619-1.705,2.463-3.723,2.506-6.002   c0.046-2.34-0.887-4.49-2.646-6.156c-6.427-6.43-13.657-11.315-21.499-14.545c-13.279-5.447-28.839-6.301-42.363-2.498   c-5.547,1.564-10.781,3.803-15.56,6.658c-4.776,2.854-9.186,6.32-13.103,10.301c-3.911,3.971-7.292,8.43-10.055,13.257   c-2.75,4.803-4.902,10.038-6.396,15.546c-1.496,5.518-2.254,11.271-2.254,17.1c0,5.973,0.776,11.795,2.302,17.309   c1.525,5.506,3.712,10.73,6.499,15.543c2.786,4.809,6.186,9.252,10.1,13.199c3.908,3.941,8.319,7.381,13.107,10.207   c4.775,2.818,10.009,5.022,15.568,6.561c5.559,1.523,11.395,2.301,17.352,2.301c8.037,0,15.646-1.406,22.616-4.168   c6.952-2.764,13.151-6.637,18.429-11.512c5.273-4.873,9.613-10.699,12.904-17.313c3.293-6.638,5.34-13.904,6.079-21.769   c0.087-2.592-0.839-4.813-2.681-6.418C131.433,79.25,129.343,78.452,126.831,78.358z"
                    />
                    <path
                      fill="#0E2748"
                      d="M252.048,30.743c-5.881-5.876-12.84-10.57-20.693-13.951c-13.131-5.65-28.813-6.617-42.721-2.811   c-5.553,1.537-10.789,3.743-15.563,6.564c-4.793,2.828-9.203,6.261-13.109,10.199c-3.898,3.932-7.299,8.355-10.091,13.15   c-2.794,4.775-4.985,9.992-6.507,15.494c-1.53,5.515-2.301,11.34-2.301,17.313c0,5.973,0.771,11.813,2.301,17.35   c1.52,5.539,3.713,10.775,6.5,15.553c2.787,4.779,6.183,9.22,10.092,13.188c3.926,3.994,8.338,7.429,13.127,10.22   c4.787,2.795,10.018,4.996,15.531,6.547c5.559,1.563,11.402,2.358,17.373,2.358c5.964,0,11.807-0.795,17.362-2.358   c5.518-1.553,10.743-3.754,15.542-6.547c4.778-2.783,9.219-6.213,13.199-10.203c3.986-3.98,7.421-8.426,10.207-13.203   c2.795-4.793,4.996-10.018,6.543-15.537c1.566-5.557,2.363-11.396,2.363-17.366c0-8.958-1.738-17.483-5.174-25.337   C262.614,43.549,257.907,36.61,252.048,30.743z M253.683,76.707c0,6.633-1.251,12.918-3.717,18.665   c-2.477,5.767-5.902,10.854-10.18,15.144c-4.279,4.274-9.375,7.701-15.136,10.178c-11.554,4.959-25.8,4.912-37.233,0   c-5.767-2.48-10.836-5.902-15.082-10.174c-4.258-4.289-7.672-9.385-10.14-15.146c-2.467-5.746-3.714-12.031-3.714-18.665   c0-6.573,1.247-12.802,3.714-18.515c2.468-5.73,5.882-10.808,10.14-15.104c4.248-4.281,9.327-7.703,15.082-10.175   c5.744-2.466,12.021-3.716,18.662-3.716c6.57,0,12.814,1.25,18.571,3.712c5.755,2.478,10.847,5.901,15.136,10.185   c4.277,4.283,7.703,9.363,10.18,15.098C252.432,63.905,253.683,70.134,253.683,76.707z"
                    />
                    <path
                      fill="#0E2748"
                      d="M351.078,77.372c-3.66-2.814-7.899-5.225-12.607-7.16c-4.575-1.879-9.311-3.588-14.234-5.109   c-3.027-0.756-6.223-1.625-9.581-2.612c-3.182-0.923-6.139-2.151-8.796-3.644c-2.537-1.428-4.643-3.185-6.275-5.244   c-1.479-1.861-2.203-4.188-2.203-7.114c0-2.841,0.644-5.256,1.955-7.376c1.365-2.195,3.137-4.04,5.27-5.48   c2.223-1.498,4.727-2.654,7.445-3.433c7.742-2.229,15.601-1.267,21.617,1.325c3.805,1.641,7.465,4.598,10.889,8.779l0.447,0.434   c1.896,1.447,4.011,2.062,6.078,1.826c1.998-0.217,3.686-0.948,5.104-2.247c0.989-0.995,1.757-2.308,2.278-3.891   c0.623-1.919,0.367-3.891-0.695-5.639c-1.807-3.19-4.096-6.022-6.79-8.406c-2.655-2.35-5.663-4.354-8.944-5.964   c-3.244-1.588-6.775-2.805-10.479-3.609c-8.354-1.822-17.416-1.666-25.889,1.18c-4.736,1.592-9.055,3.899-12.829,6.854   c-3.826,2.996-6.948,6.695-9.28,10.995c-2.384,4.377-3.591,9.336-3.591,14.75c0,5.396,1.229,10.169,3.646,14.181   c2.34,3.895,5.452,7.288,9.242,10.076c3.687,2.721,7.933,4.998,12.627,6.779c4.547,1.721,9.239,3.158,13.739,4.215   c3.488,1.139,6.947,2.325,10.379,3.569c3.249,1.166,6.197,2.599,8.773,4.246c2.426,1.555,4.394,3.428,5.85,5.58   c1.365,2.024,2.031,4.534,2.031,7.67c0,3.502-0.726,6.603-2.164,9.226c-1.467,2.688-3.422,4.971-5.797,6.788   c-2.422,1.845-5.191,3.248-8.23,4.171c-6.075,1.86-12.411,1.797-18.191,0.35c-2.836-0.701-5.494-1.732-7.908-3.062   c-2.385-1.307-4.561-2.918-6.461-4.784c-1.854-1.83-3.336-3.902-4.401-6.154l-0.313-0.51c-1.742-2.209-3.461-3.603-5.256-4.258   c-2.024-0.74-4.254-0.496-6.375,0.694c-1.771,0.976-3.123,2.42-4.029,4.282c-1.041,2.13-0.904,4.63,0.375,7.361   c1.52,3.525,3.737,6.865,6.588,9.92c2.82,3.025,6.152,5.674,9.909,7.871c3.717,2.18,7.844,3.928,12.262,5.199   c4.443,1.279,9.115,1.932,13.888,1.932c5.718,0,11.261-0.942,16.479-2.795c5.248-1.863,9.924-4.547,13.896-7.977   c3.989-3.445,7.213-7.637,9.576-12.453c2.374-4.861,3.584-10.34,3.584-16.281c0-5.625-1.188-10.557-3.521-14.647   C357.892,83.776,354.832,80.276,351.078,77.372z"
                    />
                    <path
                      fill="#0E2748"
                      d="M455.671,21.263c0-2.347-0.857-4.469-2.48-6.139c-1.65-1.683-3.77-2.574-6.133-2.574H374.72   c-2.393,0-4.442,0.84-6.1,2.506c-1.646,1.641-2.509,3.754-2.509,6.108c0,2.334,0.854,4.459,2.479,6.124   c1.645,1.691,3.77,2.58,6.127,2.58h27.171v102.095c0,2.352,0.794,4.398,2.331,6.064c1.583,1.729,3.685,2.643,6.089,2.643   c2.468,0,4.567-0.867,6.237-2.578c1.619-1.664,2.479-3.781,2.479-6.125V29.87h28.031c2.363,0,4.402-0.816,6.088-2.436   C454.798,25.822,455.671,23.686,455.671,21.263z"
                    />
                    <circle fill="#C12926" cx="512.732" cy="76.81" r="49.414" />
                    <circle
                      fill="#F04F35"
                      cx="494.744"
                      cy="76.809"
                      r="45.857"
                    />
                    <path
                      fill="#0E2748"
                      d="M572.625,51.37c-3.412-7.821-8.117-14.76-13.977-20.627c-5.885-5.876-12.846-10.57-20.695-13.951   c-13.137-5.65-28.814-6.617-42.719-2.811c-5.557,1.537-10.791,3.743-15.564,6.564c-4.791,2.828-9.201,6.261-13.111,10.199   c-3.896,3.932-7.297,8.355-10.092,13.15c-2.795,4.775-4.986,9.992-6.506,15.494c-1.529,5.515-2.301,11.34-2.301,17.313   c0,5.973,0.771,11.813,2.301,17.35c1.52,5.539,3.711,10.775,6.502,15.553c2.781,4.777,6.186,9.22,10.092,13.188   c3.928,3.994,8.338,7.429,13.127,10.22c4.789,2.795,10.02,4.996,15.531,6.547c5.557,1.563,11.398,2.358,17.373,2.358   c5.965,0,11.803-0.795,17.361-2.358c5.52-1.553,10.742-3.754,15.541-6.547c4.775-2.783,9.225-6.213,13.201-10.203   c3.984-3.98,7.422-8.426,10.199-13.203c2.803-4.793,4.998-10.018,6.547-15.537c1.57-5.557,2.363-11.396,2.363-17.366   C577.8,67.749,576.064,59.223,572.625,51.37z M560.285,76.707c0,6.633-1.25,12.918-3.717,18.665   c-2.479,5.767-5.9,10.854-10.182,15.144c-4.277,4.274-9.369,7.701-15.137,10.178c-11.543,4.951-25.793,4.912-37.234,0   c-5.768-2.48-10.836-5.902-15.082-10.174c-4.258-4.289-7.672-9.385-10.141-15.146c-2.465-5.746-3.715-12.031-3.715-18.665   c0-6.573,1.25-12.802,3.715-18.515c2.469-5.73,5.883-10.808,10.141-15.104c4.248-4.281,9.328-7.703,15.082-10.175   c5.748-2.466,12.023-3.716,18.666-3.716c6.568,0,12.811,1.25,18.568,3.712c5.758,2.478,10.846,5.901,15.137,10.185   c4.279,4.283,7.703,9.363,10.182,15.098C559.029,63.905,560.285,70.134,560.285,76.707z"
                    />
                    <g>
                      <path
                        fill="#FFFFFF"
                        d="M488.41,99.16c-4.113-6.715-6.293-14.438-6.293-22.343c-0.004-5.362,0.973-10.594,2.916-15.557    c0.803-2.057,3.133-3.062,5.172-2.27c2.063,0.805,3.078,3.123,2.271,5.184c-1.568,4.028-2.369,8.275-2.363,12.636    c0,6.434,1.77,12.715,5.115,18.164c1.152,1.888,0.563,4.345-1.314,5.498c-0.656,0.402-1.375,0.595-2.088,0.595    C490.482,101.067,489.166,100.388,488.41,99.16z M498.269,48.341c-1.334-1.757-0.99-4.264,0.77-5.599    c1.557-1.177,3.205-2.26,4.904-3.219c1.924-1.081,4.357-0.395,5.441,1.519c1.084,1.927,0.408,4.363-1.52,5.446    c-1.387,0.78-2.729,1.666-3.998,2.625c-0.719,0.549-1.57,0.808-2.406,0.808C500.246,49.921,499.052,49.382,498.269,48.341z"
                      />
                    </g>
                  </g>
                </svg>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Box display={"flex"} flexDirection={"row"} gap={"35px"}>
                <Link
                  to="/gosto-ecommerce"
                  color={"black"}
                  className="textDecoration"
                >
                  <Typography variant="body1" fontWeight={"600"} color="black">
                    Home
                  </Typography>
                </Link>
                <Link to="/shop" color={"black"} className="textDecoration">
                  <Typography variant="body1" fontWeight={"600"} color="black">
                    Shop
                  </Typography>
                </Link>
                <Link to="/about" color={"black"} className="textDecoration">
                  <Typography variant="body1" fontWeight={"600"} color="black">
                    About us
                  </Typography>
                </Link>
                <Link to="/blog" color={"black"} className="textDecoration">
                  <Typography variant="body1" fontWeight={"600"} color="black">
                    Blog
                  </Typography>
                </Link>
                <Link to="/contact" color={"black"} className="textDecoration">
                  <Typography variant="body1" fontWeight={"600"} color="black">
                    Contact us
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Stack direction={"row"} spacing={2} sx={{ flexGrow: 0 }}>
              <Link to={"/profile"}>
                <svg
                  width={"25px"}
                  height={"25px"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#000"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Link>
              <Link to={"/favorite"}>
                <svg
                  width={"25px"}
                  height={"25px"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#000"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
              <Box
                className="cursorPointer"
                onClick={() => setIsDrawerCartOpen(true)}
              >
                <Badge badgeContent={1} color="primary">
                  <svg
                    width={"25px"}
                    height={"25px"}
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
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </Badge>
              </Box>
            </Stack>
          </Toolbar>
        </Box>
      </AppBar>
      <Drawer
        anchor={"right"}
        open={isDrawerCartOpen}
        onClose={() => setIsDrawerCartOpen(false)}
      >
        test
      </Drawer>
    </>
  );
};

export default Navbar;
