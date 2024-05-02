import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Iconbar } from "./Iconbar";
import { Element } from "react-scroll";
import { Laptop } from "../images/svg-animations/Laptop/Laptop";

export const Hero = (props: any) => {
  const theme = useTheme();
  return (
    <Element name="Home" id="Home">
      <Box
        sx={{
          minHeight: "100vh",
          height: "100%",
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
            justifyContent: { xs: "center", lg: "space-between" },
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
              alignItems: { xs: "", lg: "center" },
              gap: { xs: "4em", lg: "4em" },
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
                height: { xs: "50%", lg: "80%" },
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
