import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LightDarkSwitch } from "../styled-components/light-dark-switch";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import SwipeableDrawer from "@mui/material/Drawer";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Logo } from "../images/svg-animations/Logo/Logo";

interface NavbarProps {
  toggleTheme: () => void; // Define the type of the onData prop
}

const navItems = ["About", "Experience", "Projects", "Contact"];

export const Navbar = ({ toggleTheme }: NavbarProps) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const links = (mobile: boolean) => {
    return (
      <List
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around", // Evenly space elements
          height: { xs: "80vh", sm: "inherit" }, // Set width to 100%
        }}
      >
        {navItems.map((item, index) => (
          <ScrollLink
            key={index}
            onClick={
              mobile
                ? handleDrawerToggle
                : () => {
                    return;
                  }
            }
            to={item}
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            style={{ cursor: "pointer" }}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <Typography variant="h5" sx={{ margin: "auto" }}>
                  {item}
                </Typography>
              </ListItemButton>
            </ListItem>
          </ScrollLink>
        ))}
      </List>
    );
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        background: theme.palette.background.navbar,
        textAlign: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            margin: 0,
            padding: 0,
          }}
        >
          <ScrollLink
            onClick={handleDrawerToggle}
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            style={{ cursor: "pointer" }}
          >
            Chris Day
          </ScrollLink>
        </Typography>
      </Box>
      <Divider />
      {links(true)}
    </Box>
  );

  //wow

  //scroll items across this part

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: "4",
      }}
      bgcolor={theme.palette.background.navbar}
    >
      <AppBar
        component="nav"
        position="static"
        elevation={1}
        sx={{
          background: theme.palette.background.navbar,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: { xs: "10vh", sm: "inherit" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1em",
            }}
          >
            <ScrollLink
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              style={{ cursor: "pointer", height: "100%", paddingTop: "0.8vh" }}
            >
              <Logo
                height="6vh"
                stroke={theme.palette.text.primary}
                strokeWidth={6}
              />
            </ScrollLink>
            <LightDarkSwitch defaultChecked onChange={toggleTheme} />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {links(false)}
          </Box>
          <IconButton
            onClick={handleDrawerToggle}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <SwipeableDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            background: theme.palette.background.navbar,
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100vw",
              height: "100vh",
            },
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </nav>
    </Box>
  );
};
