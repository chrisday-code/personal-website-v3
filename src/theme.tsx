import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//typescript will see this and just add them in because its a thing of beauty
// I'm going to change the theme options in here so I can set multiple backgrounds
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  //these are called as partials so you don't need to make them optional ( I think )
  interface TypeBackground {
    basic: string;
    hero: string;
    heroGradient: string;
    about: string;
    aboutGradient: string;
    experience: string;
    experienceGradient: string;
    projects: string;
    projectsGradient: string;
    contact: string;
    contactGradient: string;
    navbar: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    round: true;
  }
}

export const darkTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          // marginBottom: "1em",
        },
      },
    },
    MuiButton: {
      // styleOverrides: {
      //   root: {
      //     "&::after": {
      //       fontFamily: "Arimo",
      //       fontWeight: "700",
      //       fontSize: "1em",
      //       transform: "translate(-.3rem, -.3rem);",
      //       transition: "0.1s",
      //       position: "absolute",
      //       width: "100%",
      //       height: "100%",
      //       padding: "0.7em 2em",
      //       backgroundColor: "#F5F5F5",
      //       content: `attr(data-content)`,
      //       color: "#1e1e1e",
      //     },
      //     "&:hover::after": {
      //       // Style for hover
      //       transform: "translate(0rem, 0rem)", // Example change on hover
      //     },
      //   },
      // },
      variants: [
        {
          props: { variant: "round" },
          style: {
            fontFamily: "Arimo",
            fontWeight: "400",
            fontSize: "1em",
            textTransform: "none",
            padding: "0.7em 2em",
            border: "1px solid",
            margin: ".3rem .3rem",
            borderRadius: "0px",
            backgroundColor: "#1e1e1e",
            // boxShadow: "5px 5px",
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontFamily: "Alegreya Sans",
    },
    h2: {
      fontFamily: "Arimo",
      fontWeight: "600",
    },
    h3: {
      fontFamily: "Arimo",
      fontWeight: "600",
    },
    h4: {
      fontFamily: "Arimo",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#F5F5F5",
    },
    background: {
      basic: "#1e1e1e",
      hero: "#091d2c",
      heroGradient: "#030B11",
      about: "#293c51",
      aboutGradient: "#37506D",
      experience: "#2a092c",
      experienceGradient: "#511155",
      projects: "#5b0b1a",
      projectsGradient: "#7F1024",
      contact: "#002223",
      contactGradient: "#001414", // this is a bit darker, I think its nicer to go a bit darker on these
      navbar: "#030B11",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   main: "#F5F5F5",
    // },
    // background: {
    //   basic: "#1e1e1e",
    //   hero: "#091d2c",
    //   heroGradient: "#113655",
    //   about: "#293c51",
    //   aboutGradient: "#37506D",
    //   experience: "#2a092c",
    //   experienceGradient: "#511155",
    //   projects: "#5b0b1a",
    //   projectsGradient: "#7F1024",
    //   contact: "#002223",
    //   contactGradient: "",
    //   navbar: "#091d2c",
    // },
  },
});
