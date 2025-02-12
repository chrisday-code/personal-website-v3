import { IconContext } from "react-icons";
import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { forwardRef, Ref } from "react";

export interface Skill {
  name: string;
  Icon: JSX.Element;
  size?: string;
  type?: string[];
  delay?: number;
  id?: number;
  duration?: number;
}
export const SkillIcon = forwardRef(
  (
    { name, Icon, size, delay = 0, id, duration = 0.4 }: Skill,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <Grid
        item
        xs={3}
        component={motion.div}
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        exit={{ scale: 0 }}
        layout
        transition={{ type: "spring", duration: duration }}
        ref={ref}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <IconContext.Provider value={{ size: size }}>
          {Icon}
        </IconContext.Provider>
        <Typography variant="caption"> {name} </Typography>
      </Grid>
    );
  }
);
