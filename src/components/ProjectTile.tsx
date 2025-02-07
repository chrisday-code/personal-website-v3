import { Box, Typography, Chip, IconButton } from "@mui/material";
import { Skill } from "../components/Skill";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectType {
  name: string;
  about: string;
  github: string;
  live: string;
  image?: string;
  skills: Array<Skill>;
}

export const ProjectTile = (project: ProjectType) => {
  const renderSkills = (skills: Skill[]) => {
    return skills.map((skill: Skill, index) => {
      return (
        <Chip
          key={index}
          variant="outlined"
          label={skill.name}
          sx={{ marginRight: "1%" }}
        />
      );
    });
  };
  const [hovered, setHovered] = useState(false);
  // eslint-disable-next-line
  const theme = useTheme();

  return (
    <Box
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "500px",
        borderStyle: "solid",
        height: "100%",
        borderColor: hovered ? "#FFFFFF" : "#333333",
        padding: "1%",
        margin: "1%",
        borderRadius: "10px",
        transition: "0.5s",
        flexShrink: 1,
      }}
    >
      <img
        src={project.image}
        width="100%"
        alt={project.name}
        style={{ borderRadius: "10px" }}
      />
      <Box
        sx={{
          padding: "2% 5% 0 5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-around",
          gap: "0.5em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {renderSkills(project.skills)}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "left" }}>
            {project.name}
          </Typography>
          <Box>
            <IconButton target={"_blank"} href={project.github} color="primary">
              <FaGithub />
            </IconButton>
            <IconButton target={"_blank"} href={project.live} color="primary">
              <FaExternalLinkAlt />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
