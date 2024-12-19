import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Element } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../styles/carousel.css";
// import Nintendo from "../images/projects/Nintendo.png";
import PersonalWebsite from "../images/projects/personal-website.png";
import MovieClub from "../images/projects/movie-club.png";
import ChemistryHelper from "../images/projects/chemistry-helper.png";
import { Skill } from "../components/Skill";
import { ReactComponent as JavascriptIcon } from "../images/icons/javascript-icon.svg";
import { ReactComponent as ReactIcon } from "../images/icons/react-icon.svg";
import { ReactComponent as TypescriptIcon } from "../images/icons/typescript-icon.svg";
import { ProjectTile } from "./ProjectTile";

interface ProjectType {
  name: string;
  about: string;
  github: string;
  live: string;
  image?: string;
  skills: Array<Skill>;
}

export const Projects = (props: any) => {
  const theme = useTheme();

  const skillHeight = "30px";
  const skillWidth = "30px";

  const projectsArray: ProjectType[] = [
    {
      name: "Personal Website",
      about: "React website",
      github: "https://github.com/chrisday-code/personal-website-v3",
      live: "https://github.com/chrisday-code",
      skills: [
        {
          name: "Javascript",
          Icon: <JavascriptIcon height={skillHeight} width={skillWidth} />,
        },
        {
          name: "React",
          Icon: <ReactIcon height={skillHeight} width={skillWidth} />,
        },
        {
          name: "Typescript",
          Icon: <TypescriptIcon height={skillHeight} width={skillWidth} />,
        },
      ],
      image: PersonalWebsite,
    },
    {
      name: "Movie club",
      about: "React project for my movie club",
      github: "https://github.com/chrisday-code/movie-club-v3",
      live: "https://harc-movie-club.com",
      skills: [
        {
          name: "Javascript",
          Icon: <JavascriptIcon height={skillHeight} width={skillWidth} />,
        },
        {
          name: "React",
          Icon: <ReactIcon height={skillHeight} width={skillWidth} />,
        },
        {
          name: "Typescript",
          Icon: <TypescriptIcon height={skillHeight} width={skillWidth} />,
        },
        {
          name: "NodeJS",
          Icon: <TypescriptIcon height={skillHeight} width={skillWidth} />,
        },
        {
          name: "APIs",
          Icon: <TypescriptIcon height={skillHeight} width={skillWidth} />,
        },
      ],
      image: MovieClub,
    },
    {
      name: "Chemistry Helper",
      about: "Project 3",
      github: "https://github.com/chrisday-code",
      live: "https://github.com/chrisday-code",
      skills: [
        {
          name: "Javascript",
          Icon: <JavascriptIcon height={skillHeight} width={skillWidth} />,
        },
        {
          name: "React",
          Icon: <ReactIcon height={skillHeight} width={skillWidth} />,
        },
        {
          name: "Typescript",
          Icon: <TypescriptIcon height={skillHeight} width={skillWidth} />,
        },
      ],
      image: ChemistryHelper,
    },
  ];

  const renderProjects = (projects: ProjectType[]) => {
    return projects.map((project: ProjectType, index) => {
      return <ProjectTile key={index} {...project} />;
    });
  };

  return (
    <Element id="Projects" name="Projects">
      <Box
        sx={{
          minHeight: "100vh",
          paddingBottom: "5vh",
          paddingTop: "10vh",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundImage: `linear-gradient(to top, ${theme.palette.background.projects}, ${theme.palette.background.projectsGradient})`,
        }}
        bgcolor={theme.palette.background.projects}
      >
        <Typography variant="h1" sx={{ flex: 1 }}>
          Projects
        </Typography>
        <Box
          sx={{
            flexGrow: 3,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {renderProjects(projectsArray)}
        </Box>
      </Box>
    </Element>
  );
};
