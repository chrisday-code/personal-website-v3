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
      company: "TfNSW",
      start: "August 2021",
      description:
        "Working on a cat, looking at a picture of a dog and doing a great job with it really",
      end: "Current",
      link: "https://connect.transportnsw.info/",
      skills: ["Javascript", "Typescript"],
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
          minHeight: "105vh",
          paddingBottom: "5vh",
          paddingTop: "10vh",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundImage: `linear-gradient(to top, ${theme.palette.background.experience}, ${theme.palette.background.experienceGradient})`,
        }}
        bgcolor={theme.palette.background.experience}
      >
        <Typography variant="h2">Experience</Typography>
        <Typography variant="h4">Places I've worked</Typography>
        {renderJobs(jobs)}
      </Box>
    </Element>
  );
};
