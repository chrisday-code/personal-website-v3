import { Typography } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as AngularIcon } from "../images/icons/angular-icon.svg";
import { ReactComponent as BitBucketIcon } from "../images/icons/bitbucket-icon.svg";
import { ReactComponent as CssIcon } from "../images/icons/css-icon.svg";
import { ReactComponent as GitIcon } from "../images/icons/git-icon.svg";
import { ReactComponent as HtmlIcon } from "../images/icons/html-icon.svg";
import { ReactComponent as JavascriptIcon } from "../images/icons/javascript-icon.svg";
import { ReactComponent as NodeJsIcon } from "../images/icons/nodejs-icon.svg";
import { ReactComponent as PostgreSQLIcon } from "../images/icons/postgresql-icon.svg";
import { ReactComponent as ReactIcon } from "../images/icons/react-icon.svg";
import { ReactComponent as TypescriptIcon } from "../images/icons/typescript-icon.svg";
import { FcCommandLine } from "react-icons/fc";
import { FaCogs } from "react-icons/fa";
import { ReactComponent as SassIcon } from "../images/icons/sass-icon.svg";
import { ReactComponent as AwsIcon } from "../images/icons/aws-icon.svg";
import { ReactComponent as ConfluenceIcon } from "../images/icons/confluence-icon.svg";
import { Element } from "react-scroll";
import { Skill, SkillIcon } from "../components/Skill";
import { FillText } from "./mini-components/FillText";
import { AnimatePresence } from "framer-motion";

const skillHeight = "50px";
const skillWidth = "50px";

const skills: Skill[] = [
  {
    name: "cmd",
    Icon: <FcCommandLine />,
    size: skillHeight,
    type: ["Dev"],
  },
  {
    name: "APIs",
    Icon: <FaCogs />,
    size: skillHeight,
    type: ["FE", "BE"],
  },

  {
    name: "Sass",
    Icon: <SassIcon height={skillHeight} width={skillWidth} />,
    type: ["FE"],
  },
  {
    name: "AWS",
    Icon: <AwsIcon height={skillHeight} width={skillWidth} />,
    type: ["BE"],
  },
  {
    name: "Confluence",
    Icon: <ConfluenceIcon height={skillHeight} width={skillWidth} />,
    type: ["Dev"],
  },
  {
    name: "Angular",
    Icon: <AngularIcon height={skillHeight} width={skillWidth} />,
    type: ["FE"],
  },
  {
    name: "Bitbucket",
    Icon: <BitBucketIcon height={skillHeight} width={skillWidth} />,
    type: ["Dev"],
  },
  {
    name: "CSS3",
    Icon: <CssIcon height={skillHeight} width={skillWidth} />,
    type: ["FE"],
  },
  {
    name: "Git",
    Icon: <GitIcon height={skillHeight} width={skillWidth} />,
    type: ["Dev"],
  },
  {
    name: "HTML5",
    Icon: <HtmlIcon height={skillHeight} width={skillWidth} />,
    type: ["FE"],
  },
  {
    name: "Javascript",
    Icon: <JavascriptIcon height={skillHeight} width={skillWidth} />,
    type: ["FE", "BE"],
  },
  {
    name: "NodeJS",
    Icon: <NodeJsIcon height={skillHeight} width={skillWidth} />,
    type: ["BE"],
  },
  {
    name: "PostgreSQL",
    Icon: <PostgreSQLIcon height={skillHeight} width={skillWidth} />,
    type: ["BE"],
  },
  {
    name: "React",
    Icon: <ReactIcon height={skillHeight} width={skillWidth} />,
    type: ["FE"],
  },
  {
    name: "Typescript",
    Icon: <TypescriptIcon height={skillHeight} width={skillWidth} />,
    type: ["FE", "BE"],
  },
];

export const About = (props: any) => {
  const theme = useTheme();
  const [baseSkills] = useState<Array<Skill>>(skills);
  const [filteredSkills, setFilteredSkills] = useState<Array<Skill>>(skills);
  const [filter, setFilter] = useState<Array<string>>([]);

  const count = useRef(0);

  const headingRef = useRef(null);

  //I think that when this gets interupted filtered skills doesn't get set correctly
  useEffect(() => {
    if (filter.length === 0) {
      setFilteredSkills(baseSkills);
      return;
    }
    const newSkills: Skill[] = [];
    for (const filterItem of filter) {
      // console.log("filterItem:", filterItem);
      for (const skill of baseSkills) {
        if (newSkills.includes(skill)) {
          // console.log("already in:", skill);
          continue;
        }
        if (filter.length === 0) {
          newSkills.push(skill);
        }
        if (skill.type && skill.type.includes(filterItem)) {
          newSkills.push(skill);
        }
      }
    }
    console.log("newSkills:", newSkills);
    setFilteredSkills([...newSkills]);
  }, [filter, baseSkills]);

  //call this when filter changes
  useEffect(() => {
    console.log("filteredSkills changed: ", filteredSkills);
    // setFilteredSkills([...filteredSkills]);
  }, [filteredSkills]);

  const changeFilter = (value: boolean, type: string) => {
    if (value) {
      setFilter([...filter, type]);
      return;
    }
    if (!value) {
      setFilter(filter.filter((item) => item !== type));
    }
  };

  const variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };
  const renderSkills = (skills: Skill[]) => {
    return (
      <AnimatePresence initial={false} mode="popLayout">
        {skills.map(({ name, Icon, size }: Skill, index) => {
          count.current = count.current + 1;
          return (
            <SkillIcon
              key={name}
              name={name}
              Icon={Icon}
              size={size}
            ></SkillIcon>
          );
        })}
      </AnimatePresence>
    );
  };

  return (
    <Element id="About" name="About">
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "10vh",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          backgroundImage: `linear-gradient(to top, ${theme.palette.background.about}, ${theme.palette.background.aboutGradient})`,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          gap="1em"
          sx={{
            maxWidth: "1500px",
            height: "100%",
          }}
        >
          <Typography
            variant="h1"
            sx={{ marginBottom: { xs: "3vh", md: "10vh" } }}
            ref={headingRef}
          >
            About Me
          </Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ paddingBottom: "3vh" }}>
                Hi, I'm Chris. I'm a developer with{" "}
                <FillText
                  textColor={theme.palette.primary.contrastText}
                  text="front"
                  type="FE"
                  change={changeFilter}
                />{" "}
                &{" "}
                <FillText
                  textColor={theme.palette.primary.contrastText}
                  text="back"
                  type="BE"
                  change={changeFilter}
                />{" "}
                end experience, as well as a variety of development{" "}
                <FillText
                  textColor={theme.palette.primary.contrastText}
                  text="tools"
                  type="Dev"
                  change={changeFilter}
                />
              </Typography>
              <Typography variant="h3" sx={{ paddingBottom: "3vh" }}>
                I have a BEng in Computer & Electrical Engineering from the
                University of Queensland 🇦🇺
              </Typography>
              <Typography variant="h3" sx={{ paddingBottom: "3vh" }}>
                My main focus these days is making beautiful, functional
                websites
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {renderSkills(filteredSkills)}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Element>
  );
};
