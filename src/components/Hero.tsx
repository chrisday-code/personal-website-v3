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
          minHeight: "105vh",
          paddingBottom: "10vh",
          paddingTop: "5vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundImage: `linear-gradient(to top, ${theme.palette.background.hero}, ${theme.palette.background.heroGradient})`,
        }}
        bgcolor={theme.palette.background.hero}
      >
        <Grid
          container
          spacing={8}
          sx={{
            width: "100vw",
            height: "80vh",
            padding: "5svh 5vh 2vh 5vh",
          }}
        >
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h2">Hi, I'm Chris.</Typography>
            <Typography variant="h4">
              I'm a software engineer and I love making stuff
            </Typography>
          </Grid>
          {/* <Grid item xs={2}></Grid> */}
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Laptop />
          </Grid>
        </Grid>

        <Iconbar />
      </Box>
    </Element>
  );
};
