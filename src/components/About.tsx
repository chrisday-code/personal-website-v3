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
import { ReactComponent as GraphQL } from "../images/icons/graphql-icon.svg";
import { ReactComponent as Expo } from "../images/icons/expo-icon.svg";
import { FcCommandLine } from "react-icons/fc";
import { FaCogs } from "react-icons/fa";
import { ReactComponent as SassIcon } from "../images/icons/sass-icon.svg";
import { ReactComponent as AwsIcon } from "../images/icons/aws-icon.svg";
import { ReactComponent as ConfluenceIcon } from "../images/icons/confluence-icon.svg";
import { ReactComponent as NextJSIcon } from "../images/icons/nextjs-icon.svg";
import { ReactComponent as TailwindIcon } from "../images/icons/tailwind-icon.svg";
import { Element } from "react-scroll";
import { Skill, SkillIcon } from "../components/Skill";
import { FillText } from "./mini-components/FillText";
import { AnimatePresence } from "framer-motion";

const baseSkillHeight = 50;
const skillHeight = "50px";
const skillWidth = "50px";

const skills: Skill[] = [
  {
    name: "React",
    Icon: <ReactIcon height={skillHeight} width={skillWidth} />,
    type: ["FE"],
  },
  {
    name: "NodeJS",
    Icon: <NodeJsIcon height={skillHeight} width={skillWidth} />,
    type: ["BE"],
  },
  {
    name: "GraphQL",
    Icon: <GraphQL height={skillHeight} width={skillWidth} />,
    type: ["BE"],
  },
  {
    name: "Expo",
    Icon: <Expo height={skillHeight} width={skillWidth} />,
    type: ["FE"],
  },
  {
    name: "Javascript",
    Icon: <JavascriptIcon height={skillHeight} width={skillWidth} />,
    type: ["FE", "BE"],
  },
  {
    name: "PostgreSQL",
    Icon: <PostgreSQLIcon height={skillHeight} width={skillWidth} />,
    type: ["BE"],
  },
  {
    name: "Typescript",
    Icon: <TypescriptIcon height={skillHeight} width={skillWidth} />,
    type: ["FE", "BE"],
  },
  {
    name: "NextJS",
    Icon: <NextJSIcon height={skillHeight} width={skillWidth} />,
    type: ["FE"],
  },
  {
    name: "AWS",
    Icon: <AwsIcon height={skillHeight} width={skillWidth} />,
    type: ["BE"],
  },
  {
    name: "Tailwind",
    Icon: <TailwindIcon height={skillHeight} width={skillWidth} />,
    type: ["FE"],
  },
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
];

interface FilterType {
  type: string;
  name: string;
}

export const About = (props: any) => {
  const theme = useTheme();
  const [baseSkills] = useState<Array<Skill>>(skills);
  const [filteredSkills, setFilteredSkills] = useState<Array<Skill>>(skills);
  const [filter, setFilter] = useState<Array<string>>([]);

  const count = useRef(0);

  const headingRef = useRef(null);

  const setFilteredHelper = (customFilter: string[]) => {
    const newSkills: Skill[] = [];
    for (const filterItem of customFilter) {
      for (const skill of baseSkills) {
        if (newSkills.includes(skill)) {
          continue;
        }
        if (customFilter.length === 0) {
          newSkills.push(skill);
        }
        if (skill.type && skill.type.includes(filterItem)) {
          newSkills.push(skill);
        }
      }
    }
    setFilteredSkills([...newSkills]);
  };

  //I think that when this gets interupted filtered skills doesn't get set correctly
  useEffect(() => {
    setCounter(3);
    if (filter.length === 0) {
      setFilteredSkills(baseSkills);
      return;
    }
    setFilteredHelper(filter);
  }, [filter, baseSkills]);

  const changeFilter = (value: boolean, type: string) => {
    if (value) {
      setFilter([...filter, type]);
      return;
    }
    if (!value) {
      setFilter(filter.filter((item) => item !== type));
    }
  };

  const types: FilterType[] = [
    { name: "front", type: "FE" },
    { name: "back", type: "BE" },
    { name: "tools", type: "Dev" },
  ];

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (filter.length === 0) {
      if (counter !== 3) {
        setFilteredHelper([types[counter].type]);
        return;
      }
      setFilteredSkills(baseSkills);
    }
  }, [counter]);

  const renderSkills = (skills: Skill[], duration: number) => {
    return (
      <AnimatePresence initial={false} mode="popLayout">
        {skills.map(({ name, Icon, size }: Skill, index) => {
          count.current = count.current + 1;
          return (
            <SkillIcon
              duration={duration}
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
          paddingBottom: {
            xs: "10vh",
            md: 0,
          },
          backgroundImage: `linear-gradient(to top, ${theme.palette.background.about}, ${theme.palette.background.aboutGradient})`,
        }}
      >
        <Box
          display="flex"
          gap="1em"
          sx={{
            flexDirection: "column",
            alignItems: { sm: "flex-start", md: "center" },
            maxWidth: "1500px",
            height: "100%",
          }}
        >
          <Typography
            variant="h1"
            sx={{ marginBottom: { xs: "3vh", md: "10vh" }, paddingLeft: 0 }}
            ref={headingRef}
          >
            About Me
          </Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h3"></Typography>
              <Typography variant="h3" sx={{ paddingBottom: "3vh" }}>
                I have 4 years of experience as a software engineer.
              </Typography>
              <Typography variant="h3" sx={{ paddingBottom: "3vh" }}>
                I have excellent{" "}
                <FillText
                  textColor={theme.palette.primary.contrastText}
                  text="front"
                  type="FE"
                  change={changeFilter}
                  isSelected={
                    // filter.length === 0 &&
                    counter !== 3 && types[counter].name === "front"
                  }
                />{" "}
                &{" "}
                <FillText
                  textColor={theme.palette.primary.contrastText}
                  text="back"
                  type="BE"
                  change={changeFilter}
                  isSelected={
                    filter.length === 0 &&
                    counter !== 3 &&
                    types[counter].name === "back"
                  }
                />{" "}
                end knowledge. I'm also familiar with most industry standard{" "}
                <FillText
                  textColor={theme.palette.primary.contrastText}
                  text="tools"
                  type="Dev"
                  change={changeFilter}
                  isSelected={
                    filter.length === 0 &&
                    counter !== 3 &&
                    types[counter].name === "tools"
                  }
                />
              </Typography>
              <Typography variant="h3" sx={{ paddingBottom: "3vh" }}>
                I have a Bachelor of Engineering (honours) in Computer &
                Electrical Engineering from the University of Queensland 🇦🇺
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                container
                spacing={2}
                sx={{ minHeight: `${baseSkillHeight * 4}px` }}
              >
                {renderSkills(filteredSkills, filter.length === 0 ? 1 : 0.4)}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Element>
  );
};
