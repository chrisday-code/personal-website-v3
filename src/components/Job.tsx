import { Typography, Chip } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { JobInterface } from "../interfaces";
import { useTheme } from "@mui/material/styles";

//#1A3820 hover colour

export const Job = ({
  position,
  company,
  start,
  description,
  end,
  link,
  skills,
}: JobInterface) => {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();

  const renderSkills = (skills: Array<string>) => {
    return skills.map((skill: string, index) => {
      return (
        <Chip
          key={index}
          variant="outlined"
          label={skill}
          sx={{ marginRight: "1%" }}
        />
      );
    });
  };

  const renderDescription = (description: Array<string>) => {
    return description.map((line: string, index) => {
      return (
        <Typography
          key={index}
          variant="body2"
          paddingBottom="1em"
          sx={{ color: "white" }}
        >
          {line}
        </Typography>
      );
    });
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Box
      onClick={() => {
        openInNewTab(link);
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: !hovered
          ? theme.palette.background.job
          : theme.palette.background.hero,
        padding: "1em",
        margin: "0.5em",
        borderRadius: "0.5em",
        cursor: "pointer",
        transition: "0.2s ease-in-out",
        width: { xs: "100%", sm: "95%", md: "90%" },
      }}
    >
      <Box display={"flex"} flexDirection={"column"} width={"100%"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="body2" sx={{ margin: 0 }}>
            {start} — {end}
          </Typography>
          <Typography variant="h6" sx={{ margin: 0 }}>
            {position}
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ margin: 0 }}>
          {company}
        </Typography>
        {renderDescription(description)}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyItems={"flex-start"}
          flexWrap={"wrap"}
          gap={"0.2em"}
        >
          {renderSkills(skills)}
        </Box>
      </Box>
    </Box>
  );
};
