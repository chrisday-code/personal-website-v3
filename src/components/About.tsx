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
import { IconContext } from "react-icons";
import { Element } from "react-scroll";
import { Skill, SkillIcon } from "../components/Skill";
import { FillText } from "./mini-components/FillText";
import { motion, AnimatePresence, useInView } from "framer-motion";

const skillHeight = "40px";
const skillWidth = "40px";

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
  const [baseSkills, setBaseSkills] = useState<Array<Skill>>(skills);
  const [filteredSkills, setFilteredSkills] = useState<Array<Skill>>(skills);
  const [filter, setFilter] = useState<Array<string>>([]);
  // const filter: string[] = [];
  const [rerender, setRerender] = useState(false);

  const count = useRef(0);

  const headingRef = useRef(null);
  const headingIsInView = useInView(headingRef);

  useEffect(() => {
    if (filter.length === 0) {
      setFilteredSkills(baseSkills);
      return;
    }
    const newSkills: Skill[] = [];
    for (const filterItem of filter) {
      for (const skill of baseSkills) {
        if (newSkills.includes(skill)) {
          continue;
        }
        if (skill.type && skill.type.includes(filterItem)) {
          newSkills.push(skill);
        }
      }
    }
    setFilteredSkills(newSkills);
  }, [filter]);

  const changeFilter = (value: boolean, type: string) => {
    if (value) {
      setFilter([...filter, type]);
      return;
    }
    if (!value) {
      setFilter(filter.filter((item) => item !== type));
    }
  };

  // TODO use variants to gain access to some interesting props
  const renderSkills = (skills: Skill[]) => {
    return (
      <AnimatePresence mode="sync">
        {skills.map(({ name, Icon, size }: Skill, index) => {
          count.current = count.current + 1;
          return (
            <SkillIcon
              key={name}
              delay={index}
              name={name}
              size={size}
              Icon={Icon}
            />
          );
        })}
      </AnimatePresence>
    );
  };

  return (
    <Element id="About" name="About">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="4em"
        sx={{
          minHeight: "105vh",
          paddingBottom: "5vh",
          paddingTop: "10vh",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          backgroundImage: `linear-gradient(to top, ${theme.palette.background.about}, ${theme.palette.background.aboutGradient})`,
        }}
        bgcolor={theme.palette.background.about}
      >
        {/* <Grid item xs={12}> */}
        <Typography
          variant="h1"
          ref={headingRef}
          style={{
            transform: headingIsInView ? "none" : "translateX(-400px)",
            opacity: headingIsInView ? 1 : 0,
            filter: headingIsInView ? "blur(0)" : "blur(5px)",
            transition: "1s",
          }}
        >
          About Me
        </Typography>
        {/* </Grid> */}
        <Grid
          container
          columnSpacing={{ xs: 0, md: 6 }}
          rowSpacing={{ xs: 6, md: 0 }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontSize="2.3rem">
              Hi, I'm Chris. I'm a developer with{" "}
              <FillText
                textColor={theme.palette.background.hero}
                text="front"
                type="FE"
                change={changeFilter}
              />{" "}
              &{" "}
              <FillText
                textColor={theme.palette.background.hero}
                text="back"
                type="BE"
                change={changeFilter}
              />{" "}
              end experience, as well as a variety of development{" "}
              <FillText
                textColor={theme.palette.background.hero}
                text="tools"
                type="Dev"
                change={changeFilter}
              />
            </Typography>
            {/* <Typography variant="body1">
              I have a BEng in Computer & Electrical Engineering from the
              University of Queensland 🇦🇺
            </Typography>
            <Typography variant="body1">
              My main focus these days is making beautiful, functional websites
            </Typography> */}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            // sx={{
            //   flexGrow: "2",
            // }}
          >
            <Typography
              variant="h2"
              sx={{ textAlign: "center", marginBottom: "30px" }}
              onClick={() => {
                const newItems = [...filteredSkills];
                // removeItem(newItems, id);
                newItems.shift();
                setFilteredSkills(newItems);
              }}
            >
              Skills
            </Typography>
            {/* {testPopLayout()} */}
            <Grid component={motion.div} layout container spacing={2}>
              {renderSkills(filteredSkills)}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
};
