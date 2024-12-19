import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Job } from "./Job";
import { Element } from "react-scroll";
import { JobInterface } from "../interfaces";

export const Experience = (props: any) => {
  const jobs: JobInterface[] = [
    {
      position: "Staff Software Engineer",
      company: "Transport for New South Wales - Transport Connect",
      start: "August 2022",
      end: "Present",
      description: [
        "Automated a new payment review process saving customers thousands of dollars in incorrect charges and decreasing ticket volume by ~30%",
        "Developed GraphQL backend cursor pagination which greatly improved load times and database performance",
        "Built reusable UI components and custom hooks for user and activity pages for a React project",
        "Designed and built config for fare free days for Trip Planner",
        "Trained and mentored junior developers in React, SQL and Angular",
      ],
      link: "https://connect.transportnsw.info/",
      skills: [
        "React",
        "React Native",
        "NodeJS",
        "AWS",
        "SQL",
        "Javascript",
        "Typescript",
        "NextJS",
        "Angular",
      ],
    },
    {
      position: "Graduate Software Engineer",
      company: "Transport for New South Wales - Transport Connect",
      start: "August 2021",
      end: "August 2022",
      description: [
        "Redesigned and built user activities display, added granularity to search functionality and redesigned user pages for Angular site",
        "Created monitoring & alerting for financial data in Sumologic & NewRelic  that integrates with OpsGenie, Slack and OTConnect",
        "Built and maintained front & back end components for the Transport connect system.",
      ],
      link: "https://connect.transportnsw.info/",
      skills: [
        "React",
        "Javascript",
        "Typescript",
        "Angular",
        "NodeJS",
        "AWS",
        "SQL",
      ],
    },
    {
      position: "Graduate Engineer",
      company: "Transport for New South Wales",
      start: "January 2020",
      end: "August 2021",
      description: [
        "Reduced test case creation time by 90% with VBA script",
        "Reduced maintenance time on platform 23 on central station by 2 hours by creating a firmware logging box & python script",
      ],
      link: "https://transportnsw.info/",
      skills: ["Python", "VBA", "Rasperry Pi", "Signal Engineering"],
    },
    {
      position: "Intern",
      company: "G.James Glass & Aluminium",
      start: "January 2016",
      end: "December 2019",
      description: [
        "Wrote python scripts to automate data entry",
        "Soldered replacement capacitors a new control box for the glass cutting machine",
      ],
      link: "https://gjames.com/",
      skills: ["Python", "Soldering"],
    },
  ];

  const renderJobs = (jobs: JobInterface[]) => {
    return jobs.map((job: JobInterface, index) => {
      return <Job key={index} {...job} />;
    });
  };

  const theme = useTheme();
  return (
    <Element id="Experience" name="Experience">
      <Box
        sx={{
          backgroundImage: `linear-gradient(to top, ${theme.palette.background.experience}, ${theme.palette.background.experienceGradient})`,
          minHeight: "100vh",
          paddingBottom: "5vh",
          paddingTop: "10vh",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            maxWidth: "1500px",
          }}
        >
          <Typography variant="h1" sx={{ marginBottom: "3vh" }}>
            Experience
          </Typography>
          {renderJobs(jobs)}
        </Box>
      </Box>
    </Element>
  );
};
