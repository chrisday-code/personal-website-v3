import { Typography } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { ReactComponent as Laptop } from "../images/icons/laptop.svg";
import { ReactComponent as Moon } from "../images/icons/moon.svg";
import { Iconbar } from "./Iconbar";
import { Element } from "react-scroll";
// import {SpinningCircle} from '../images/framer-motion/spinning-circle';
// import { motion } from "framer-motion";
import { Triangles } from "../images/svg-animations/Triangles/Triangles";
import { Laptop } from "../images/svg-animations/Laptop/Laptop";
import { Logo } from "../images/svg-animations/Logo/Logo";

export const Hero = (props: any) => {
  const theme = useTheme();
  return (
    <Element name="Home" id="Home">
      <Box
        sx={{
          minHeight: "100vh",
          paddingBottom: "10vh",
          paddingTop: "10vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `linear-gradient(to top, ${theme.palette.background.hero}, ${theme.palette.background.heroGradient})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            maxWidth: "1500px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "80vh",
              padding: "0 10% 0 10%",
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: { xs: "center" },
              gap: { xs: "10em", lg: "4em" },
            }}
          >
            <Box
              sx={{
                flex: { lg: 1 },
                display: "flex",
                flexDirection: "column",
                paddingBottom: { xs: "0", lg: "20vh" },
                alignItems: "center",
                justifyContent: { xs: "center" },
              }}
            >
              <Typography variant="h1">Hi, I'm Chris.</Typography>
              <Typography variant="h4">
                I'm a software engineer and I love making stuff
              </Typography>
            </Box>
            <Box
              sx={{
                flex: { xs: 0, lg: 1 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Laptop />
            </Box>
          </Box>

          <Iconbar />
        </Box>
      </Box>
    </Element>
  );
};
