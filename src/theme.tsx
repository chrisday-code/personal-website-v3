import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/space-mono";

//typescript will see this and just add them in because its a thing of beauty
// I'm going to change the theme options in here so I can set multiple backgrounds

//shut up errors
interface VsCodeColors {
  codeBackground?: string;
  codeText?: string;
  fileBackground?: string;
  fileText?: string;
  inactiveTab?: string;
}

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

  interface Palette {
    vsCodeColors: VsCodeColors;
  }

  interface PaletteOptions {
    vsCodeColors?: VsCodeColors;
  }
  //these are called as partials so you don't need to make them optional ( I think )
  interface TypeBackground {
    basic: string;
    hero: string;
    heroGradient: string;
    job: string;
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
      fontSize: "5em",
      textAlign: "center",
      fontWeight: "600",
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
    vsCodeColors: {
      codeBackground: "#423F3F",
      codeText: "#FFFFFF",
      fileBackground: "#302E2E",
      fileText: "#BBB4B4",
      inactiveTab: "#555151",
    },
    mode: "dark",
    text: {
      primary: "#F5F5F5",
    },
    primary: {
      main: "#F5F5F5",
      contrastText: "#c3012f",
    },
    background: {
      paper: "#121212",
      basic: "#1e1e1e",
      job: "#1e1e1e",
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
      fontSize: "5em",
      textAlign: "center",
      fontWeight: "600",
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
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
    vsCodeColors: {
      codeBackground: "#FFFFFF",
      codeText: "#000000",
      fileBackground: "#ecedef",
      fileText: "#6dbcf4",
      inactiveTab: "#F5F5F5",
    },
    primary: {
      main: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    background: {
      paper: "#121212",
      basic: "#4A94FC",
      job: "#1e1e1e",
      hero: "#4A94FC",
      heroGradient: "#249adf",
      about: "#525252",
      aboutGradient: "#474747",
      experience: "#446488",
      experienceGradient: "#446488",
      projects: "#525252",
      projectsGradient: "#474747",
      contact: "#006366",
      contactGradient: "#004F52",
      navbar: "#249adf",
    },
  },
});
