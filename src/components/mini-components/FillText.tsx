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

  useEffect(() => {
    const checkChanges = (myValue: boolean) => {
      props.change(myValue, props.type);
      setValue(myValue);
    };
    if (value) {
      if (clicked) {
        return;
      }
      if (hovered) {
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
  }, [hovered, clicked, value, props]);

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
