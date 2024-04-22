import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as Laptop } from "../images/icons/laptop.svg";
import { ReactComponent as Moon } from "../images/icons/moon.svg";
import { Iconbar } from "./Iconbar";

export const Footer = (props: any) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "10vh",
        paddingTop: "4svh",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      bgcolor={theme.palette.background.paper}
    >
      <Typography variant="caption">Copyright © 2024 | Chris Day</Typography>
    </Box>
  );
};
