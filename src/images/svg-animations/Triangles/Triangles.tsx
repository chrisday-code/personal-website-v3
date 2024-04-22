import * as React from "react";
import { SVGProps } from "react";
import { useState, useRef } from "react";
import "./Triangles.css";

export const Triangles = (props: SVGProps<SVGSVGElement>) => {
  const svg = document.getElementById("triangles");
  if (svg) {
    svg.onclick = (e) => {
      const colors = ["red", "blue", "green", "orange", "pink", "purple"];
      const rando = () => colors[Math.floor(Math.random() * colors.length)];
      document.documentElement.style.cssText = `
                --dark-color: ${rando()};
                --light-color: ${rando()};
                `;
    };
  }

  const trianglesRef = useRef<SVGSVGElement>(null);

  const clickEvent = () => {
    const colors = ["red", "blue", "green", "orange", "pink", "purple"];
    const rando = () => colors[Math.floor(Math.random() * colors.length)];
    if (!trianglesRef.current) {
      return;
    }
    trianglesRef.current.style.cssText = `
          --dark-color: ${rando()};
          --light-color: ${rando()};
          `;
  };

  return (
    <div className="triangle">
      <div>triangles</div>
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={clickEvent}
      >
        <g id="triangles" clipPath="url(#clip0_1_3)" ref={trianglesRef}>
          <g id="redGroup">
            <path
              id="red2"
              d="M35 49.768C36.3333 50.5378 36.3333 52.4622 35 53.232L8.75 68.3875C7.41666 69.1573 5.75 68.195 5.75 66.6554L5.75 36.3445C5.75 34.8049 7.41667 33.8427 8.75 34.6125L35 49.768Z"
              fillOpacity={0.68}
            />
            <path
              id="red1"
              d="M42 49.768C43.3333 50.5378 43.3333 52.4622 42 53.232L15.75 68.3875C14.4167 69.1573 12.75 68.195 12.75 66.6554L12.75 36.3445C12.75 34.8049 14.4167 33.8427 15.75 34.6125L42 49.768Z"
              fillOpacity={0.68}
            />
          </g>
          <g id="greenGroup">
            <path
              id="green1"
              d="M35 49.768C36.3333 50.5378 36.3333 52.4622 35 53.232L8.75 68.3875C7.41666 69.1573 5.75 68.195 5.75 66.6554L5.75 36.3445C5.75 34.8049 7.41667 33.8427 8.75 34.6125L35 49.768Z"
              fillOpacity={0.73}
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_3">
            <rect width={120} height={100} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
