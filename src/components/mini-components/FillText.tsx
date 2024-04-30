// import { Typography} from '@mui/material';
import { useState, useEffect } from "react";

interface FillTextProps {
  text: string;
  textColor: string;
  type: string;
  change: (value: boolean, text: string) => void;
}

export const FillText = (props: FillTextProps) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState(false);

  // function that calls the filter

  const checkChanges = (myValue: boolean) => {
    props.change(myValue, props.type);
    setValue(myValue);
  };

  useEffect(() => {
    if (value) {
      if (clicked) {
        // checkChanges(false);
        return;
      }
      if (hovered) {
        // checkChanges(true);
        return;
      }
      checkChanges(false);
      return;
    }
    if (!value) {
      if (clicked) {
        checkChanges(true);
        return;
      }
      if (hovered) {
        checkChanges(true);
        return;
      }
    }
  }, [hovered, clicked]);

  return (
    <span
      onClick={() => {
        setClicked(!clicked);
      }}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      style={{
        cursor: "pointer",
        WebkitTextFillColor: value ? props.textColor : "rgb(0, 0, 0, 0)",
        WebkitTextStrokeWidth: value ? "0" : "0.08rem",
      }}
    >
      {props.text}
    </span>
  );
};
