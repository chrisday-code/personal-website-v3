import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
// import { ButtonProps } from "@mui/material/Button";
// import { Button } from "@mui/base/Button";
import { purple } from "@mui/material/colors";
import { Box } from "@mui/material";
// import { ButtonHTMLAttributes } from "react";

// interface FloatingButtonProps extends ButtonProps {
//   dataContent?: JSX.Element;
// }

export const FloatingButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontFamily: "Arimo",
  fontWeight: "700",
  fontSize: "1em",
  transform: "translate(-.3rem, -.3rem);",
  transition: "0.1s",
  // position: "absolute",
  width: "100%",
  height: "100%",
  padding: "0.7em 2em",
  backgroundColor: "#F5F5F5",
  color: "#1e1e1e",
  zIndex: "4",
  opacity: "1",
  "&::after": {
    opacity: "1",
    content: `"Read this -"`,
    transform: "translate(0.3rem, 0.3rem);",
    backgroundColor: "purple",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: "-1",
  },
  "&:hover::after": {
    // Style for hover
    transform: "translate(0.3rem, 0.3rem)", // Example change on hover
  },
  "&:hover": {
    // Style for hover
    transform: "translate(0rem, 0rem)", // Example change on hover
  },
}));

export const ShadowButton = () => {
  return (
    <Box>
      <FloatingButton>wow</FloatingButton>
    </Box>
  );
};
