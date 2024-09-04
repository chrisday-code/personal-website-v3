import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Job } from "./Job";
import { Element } from "react-scroll";
import { JobInterface } from "../interfaces";

export const Experience = (props: any) => {
  const jobs: JobInterface[] = [
    {
      position: "Software Engineer",
      company: "Transport for New South Wales - Transport Connect",
      start: "August 2021",
      end: "Present",
      description: [
        "Building and maintaining front & back end components for the Transport connect system." +
          "Working closely with product teams to implement new features and improve products ",
      ],
      link: "https://connect.transportnsw.info/",
      skills: [
        "React",
        "Angular",
        "NodeJS",
        "AWS",
        "SQL",
        "Javascript",
        "Typescript",
      ],
    },
    {
      position: "Graduate Engineer",
      company: "Transport for New South Wales",
      start: "January 2020",
      end: "August 2021",
      description: [
        "Creating projects that streamline work for teams across transport. Created sensors form monitoring track faults at central station, automated a manual process with VBA, created a test board",
      ],
      link: "https://transportnsw.info/",
      skills: [
        "Python",
        "Javascript",
        "Rasperry Pi",
        "Signal Engineering",
        "VBA",
      ],
    },
    {
      position: "Intern",
      company: "G.James Glass & Aluminium",
      start: "January 2016",
      end: "December 2019",
      description: [
        "Fixing PCBs and updating code on factory machinery. Writing python scripts to interpret sensor data & soldering new capacitors into circuit boards.",
      ],
      link: "https://gjames.com/",
      skills: ["Python", "Wiring", "VBA", "Soldering"],
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
