import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/space-mono";

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
        gutterBottom: {},
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "round" },
          style: {
            fontFamily: "Arimo",
            fontWeight: "400",
            fontSize: "0.9em",
            textTransform: "none",
            padding: "0.7em 2em",
            border: "1px solid",
            margin: ".3rem .3rem",
            borderRadius: "1rem",
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontFamily: "Alegreya Sans",
      fontSize: "4em",
      textAlign: "center",
    },
    h2: {
      fontSize: "3em",
      paddingTop: "0",
      fontFamily: "Arimo",
      fontWeight: "600",
    },
    h3: {
      fontSize: "2em",
      fontFamily: "Arimo",
      fontWeight: "400",
    },
    h4: {
      fontFamily: "Arimo",
      textAlign: "center",
    },
    h5: {
      fontFamily: "Space Mono",
      fontSize: "2em",
    },
    caption: {
      fontFamily: "Arimo",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#F5F5F5",
      contrastText: "#c3012f",
    },
    background: {
      basic: "#1e1e1e",
      hero: "#091d2c",
      heroGradient: "#030B11",
      about: "#1F1F1F",
      aboutGradient: "#141414",
      experience: "#293C51",
      experienceGradient: "#223244",
      projects: "#1F1F1F", //"#7F1024",
      projectsGradient: "#141414", //"#5b0b1a",
      contact: "#002223",
      contactGradient: "#001414", // this is a bit darker, I think its nicer to go a bit darker on these
      navbar: "#030B11",
    },
  },
});

export const lightTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {},
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "round" },
          style: {
            fontFamily: "Arimo",
            fontWeight: "400",
            fontSize: "0.9em",
            textTransform: "none",
            padding: "0.7em 2em",
            border: "1px solid",
            margin: ".3rem .3rem",
            borderRadius: "1rem",
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontFamily: "Alegreya Sans",
      fontSize: "4em",
      textAlign: "center",
    },
    h2: {
      fontSize: "3em",
      paddingTop: "0",
      fontFamily: "Arimo",
      fontWeight: "600",
    },
    h3: {
      fontSize: "2em",
      fontFamily: "Arimo",
      fontWeight: "400",
    },
    h4: {
      fontFamily: "Arimo",
      textAlign: "center",
    },
    h5: {
      fontFamily: "Space Mono",
      fontSize: "2em",
    },
    caption: {
      fontFamily: "Arimo",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#42a5f5",
      contrastText: "#e3f2fd",
    },
    background: {
      basic: "#42a5f5",
      hero: "#CBC0D3",
      heroGradient: "#CBC0D3",
      about: "#8E9AAF",
      aboutGradient: "#8E9AAF",
      experience: "#DEE2FF",
      experienceGradient: "#DEE2FF",
      projects: "#EFD3D7",
      projectsGradient: "#EFD3D7",
      contact: "#D6FEFF",
      contactGradient: "#D6FEFF",
      navbar: "#030B11",
    },
  },
});
