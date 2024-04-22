import { Paper, Typography, Button } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as Laptop } from "../images/icons/laptop.svg";
import { ReactComponent as Moon } from "../images/icons/moon.svg";
import { Iconbar } from "./Iconbar";
import { FaGithub } from "react-icons/fa";
import { FloatingButton } from "../styled-components/floating-button";
import { Element } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../styles/carousel.css";
// import Nintendo from "../images/projects/Nintendo.png";
import PersonalWebsite from "../images/projects/personal-website.png";
import MovieClub from "../images/projects/movie-club.png";
import ChemistryHelper from "../images/projects/chemistry-helper.png";
import { Skill, SkillIcon } from "../components/Skill";
import { ReactComponent as JavascriptIcon } from "../images/icons/javascript-icon.svg";
import { ReactComponent as NodeJsIcon } from "../images/icons/nodejs-icon.svg";
import { ReactComponent as PostgreSQLIcon } from "../images/icons/postgresql-icon.svg";
import { ReactComponent as ReactIcon } from "../images/icons/react-icon.svg";
import { ReactComponent as TypescriptIcon } from "../images/icons/typescript-icon.svg";
import { FaExternalLinkAlt } from "react-icons/fa";

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
      image: PersonalWebsite,
    },
    {
      name: "Movie club",
      about: "React website",
      github: "https://github.com/chrisday-code",
      live: "https://github.com/chrisday-code",
      skills: [],
      image: MovieClub,
      //   image: <img src={Nintendo} alt="Nintento" />,
    },
    {
      name: "Chemistry Helper",
      about: "Project 3",
      github: "https://github.com/chrisday-code",
      live: "https://github.com/chrisday-code",
      skills: [],
      image: ChemistryHelper,
      //   image: <img src={Nintendo} alt="Nintento" />,
    },
  ];

  const renderSkills = (skills: Skill[]) => {
    return skills.map(({ name, Icon, size }: Skill, index) => {
      return <div key={index}>{name}</div>;
      // return <SkillIcon key={index} name={""} size={size} Icon={Icon} />;
    });
  };

  const renderProjects = (projects: ProjectType[]) => {
    return projects.map((myProject: ProjectType, index) => {
      return (
        <div key={index}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              width: { xs: "100%", sm: "40%" },
              minHeight: "70vh",
              maxHeight: "70vh",
              background: theme.palette.background.hero,
            }}
          >
            <Typography variant="h4">{myProject.name}</Typography>
            <img src={myProject.image} alt={myProject.name} width="80%" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                minHeight: "20vh",
                background: theme.palette.background.hero,
              }}
            >
              <Typography variant="body1">{myProject.about}</Typography>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                {renderSkills(myProject.skills)}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <FloatingButton
                  // href={myProject.github}
                  variant="outlined"
                  color="primary"
                  endIcon={<FaGithub />}
                  data-content={`Github`}
                >
                  GitHub
                </FloatingButton>
                <Button
                  // href={myProject.live}
                  variant="outlined"
                  endIcon={<FaExternalLinkAlt />}
                >
                  Live Demo
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      );
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Element id="Projects" name="Projects">
      <Box
        sx={{
          minHeight: "100vh",
          paddingBottom: "5vh",
          paddingTop: "5vh",
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
        <Typography variant="h2">Projects</Typography>
        <Box sx={{ marginTop: "3vh", width: "90%" }}>
          <div className="slider-container">
            <Slider {...settings}>{renderProjects(projectsArray)}</Slider>
          </div>
        </Box>
      </Box>
    </Element>
  );
};
