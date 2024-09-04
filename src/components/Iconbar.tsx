import { Box } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "@mui/material";
import { IconContext } from "react-icons";
import { useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { useTheme } from "@mui/material/styles";
import { IoDocumentTextOutline } from "react-icons/io5";

interface Icon {
  baseColor?: string;
  highlightColor: string;
  link: string;
  Icon: JSX.Element;
}

export const Iconlink = ({ highlightColor, link, Icon }: Icon) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={link}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <IconContext.Provider
        value={{
          color: isHovered ? highlightColor : theme.palette.primary.main,
          size: "30px",
        }}
      >
        {Icon}
      </IconContext.Provider>
    </Link>
  );
};

export const IconDownload = ({ highlightColor, Icon }: any) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const pdfPath = "Christopher Day - Resume.pdf";
  const handleClick = () => {
    // Programmatically trigger the download
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Christopher Day - Resume.pdf"; // Optional: Specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box
      style={{ cursor: "pointer" }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <IconContext.Provider
        value={{
          color: isHovered ? highlightColor : theme.palette.primary.main,
          size: "30px",
        }}
      >
        {Icon}
      </IconContext.Provider>
    </Box>
  );
};

export const Iconbar = (props: any) => {
  const icons: Icon[] = [
    {
      highlightColor: "#4cba18",
      link: "https://github.com/chrisday-code",
      Icon: <FaGithub height="20px" width="20px" />,
    },
    {
      highlightColor: "#0b66c2",
      link: "https://www.linkedin.com/in/christopher-day-046/",
      Icon: <FaLinkedin height="20px" width="20px" />,
    },
    {
      highlightColor: "#ffc01e",
      link: "https://leetcode.com/ChrisDay/",
      Icon: <SiLeetcode height="20px" width="20px" />,
    },
  ];

  const renderIcons = (icons: Icon[]) => {
    return icons.map((icon, index) => {
      return (
        <Iconlink
          key={index}
          highlightColor={icon.highlightColor}
          link={icon.link}
          Icon={icon.Icon}
        />
      );
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "2em",
      }}
    >
      {renderIcons(icons)}
      <IconDownload
        highlightColor="#b9ad99"
        Icon={<IoDocumentTextOutline height="20px" width="20px" />}
      />
    </Box>
  );
};
