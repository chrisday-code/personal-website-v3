import * as React from "react";
import { SVGProps } from "react";
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

// TODO import theme to this guy
// TODO Scrolling animations?
// TODO add a mask
// website and to stack overflow, use a mask to keep the content in place them just move it up and down with translate, add a scrollbar

// TODO maximise the images
export const Laptop = (props: SVGProps<SVGSVGElement>) => {
  useEffect(() => {
    anime({
      targets: "#tab-name_2",
      x2: 26,
      // y2: 90,
      easing: "easeInOutQuad",
      duration: 1500,
    });
    anime({
      targets: "#code line",
      x2: [76, 126], // Expand the lines out to x-coordinate 200
      // width: "100%",
      easing: "easeInOutSine",
      duration: 1000,
      delay: anime.stagger(1000), // Add a stagger effect for each line
    });
    anime({
      targets: "#files line",
      x2: [55, 66], // Expand the lines out to x-coordinate 200
      easing: "easeInOutSine",
      duration: 1000,
      // delay: anime.stagger(1000), // Add a stagger effect for each line
    });
    anime({
      targets: "#d-screen-left",
      transformOrigin: "50, 50",
      opacity: [0, 1], // End scaleX value
      scaleX: [0, 1], // End scaleX value
      scaleY: [0, 1], // End scaleX value
      easing: "easeOutQuad", // Easing function
      duration: 500, // Duration of the animation in milliseconds
      begin: () => {
        // Adjust transform-origin to bottom right
        const element = document.getElementById("d-screen-left");
        if (element) {
          element.style.transformOrigin = "bottom right";
        }
      },
    });
    anime({
      targets: "#d-screen-right",
      opacity: [0, 1], // End scaleX value
      scaleX: [0, 1], // End scaleX value
      scaleY: [0, 1], // End scaleX value
      easing: "easeOutQuad", // Easing function
      duration: 500, // Duration of the animation in milliseconds
      begin: () => {
        // Adjust transform-origin to bottom right
        const element = document.getElementById("d-screen-right");
        if (element) {
          element.style.transformOrigin = "bottom left";
        }
      },
    });
  }, []);

  return (
    <svg
      // height={props.height} set size here if you want
      viewBox="0 0 215 193"
      fill="none"
      style={{ maxHeight: "500px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="215" height="193" />
      <g id="Frame 1">
        <rect width="215" height="193" />
        <g id="desktop-monitor">
          <rect
            id="desktop-frame"
            width="212"
            height="90"
            fill="#777474"
            rx="0.5"
          />
          <rect
            id="desktop-stand"
            x="18"
            y="102"
            width="175"
            height="21"
            fill="#514D4D"
          />
          <rect
            id="desktop-stand-connector"
            x="101"
            y="90"
            width="9"
            height="11"
            fill="#777474"
          />
          <g id="desktop-screen">
            <rect
              id="desktop-screen-background"
              x="2"
              y="2"
              width="208"
              height="86"
              fill="#252525"
            />
            <g id="d-screen-right">
              <rect
                id="left-chrome-tab"
                x="106"
                y="3"
                width="102"
                height="83"
                rx="4"
                fill="#263238"
              />
              <g id="chrome-controls">
                <circle
                  id="maximise"
                  cx="112.5"
                  cy="4.5"
                  r="0.5"
                  fill="#04CA4E"
                />
                <circle
                  id="minimize"
                  cx="110.5"
                  cy="4.5"
                  r="0.5"
                  fill="#FFBD44"
                />
                <circle id="close" cx="108.5" cy="4.5" r="0.5" fill="#DD1533" />
                <circle
                  id="new-tab"
                  cx="130.5"
                  cy="4.5"
                  r="0.5"
                  fill="#D9D9D9"
                />
                <line
                  id="tab-name"
                  x1="116"
                  y1="4.5"
                  x2="129"
                  y2="4.5"
                  stroke="white"
                />
                <circle id="refresh" cx="113" cy="8" r="1" fill="#D9D9D9" />
              </g>
              <rect
                id="stack-overflow-background-top"
                x="106"
                y="18"
                width="102"
                height="47"
                fill="white"
              />
              <rect
                id="stack-overflow-background-bottom"
                x="106"
                y="57"
                width="102"
                height="29"
                rx="4"
                fill="white"
              />
              <rect
                id="search bar"
                x="117"
                y="6"
                width="80"
                height="4"
                rx="1"
                fill="#D9D9D9"
              />
              <rect
                id="navbar"
                x="105.95"
                y="11.95"
                width="102.1"
                height="6.1"
                fill="white"
                stroke="black"
                stroke-width="0.1"
              />
              <rect
                id="stack-logo"
                x="107"
                y="13"
                width="4"
                height="4"
                fill="#F48024"
              />
              <rect
                id="stack-search"
                x="134.05"
                y="13.05"
                width="68.9"
                height="3.9"
                rx="0.45"
                fill="white"
                stroke="black"
                stroke-width="0.1"
              />
              <g id="question links">
                <rect
                  id="question-links"
                  x="186"
                  y="60"
                  width="20"
                  height="22"
                  fill="#D9D9D9"
                />
                <path id="issue 1" d="M188 62H192V64H188V62Z" fill="#16874C" />
                <path id="issue 2" d="M188 66H192V68H188V66Z" fill="#16874C" />
                <path id="issue 5" d="M188 78H192V80H188V78Z" fill="#16874C" />
                <path id="issue 4" d="M188 74H192V76H188V74Z" fill="#16874C" />
                <path id="issue 3" d="M188 70H192V72H188V70Z" fill="#16874C" />
                <path id="link 1" d="M193 63H203" stroke="#1B75D0" />
                <path id="link 2" d="M193 67H203" stroke="#1B75D0" />
                <path id="link 3" d="M193 71H203" stroke="#1B75D0" />
                <path id="link 4" d="M193 75H203" stroke="#1B75D0" />
                <path id="link 5" d="M193 79H203" stroke="#1B75D0" />
              </g>
              <g id="answer">
                <g id="upvote">
                  <circle
                    id="upvote-circle"
                    cx="129"
                    cy="64"
                    r="2"
                    fill="#D9D9D9"
                  />
                  <path
                    id="upvote-triangle"
                    d="M129 63L129.866 64.5H128.134L129 63Z"
                    fill="black"
                  />
                </g>
                <g id="downvote">
                  <circle
                    id="downvote-circle"
                    cx="129"
                    cy="69"
                    r="2"
                    fill="#D9D9D9"
                  />
                  <path
                    id="downvote-triangle"
                    d="M129 70L128.134 68.5H129.866L129 70Z"
                    fill="black"
                  />
                </g>
                <rect
                  id="answer-code"
                  x="134"
                  y="62"
                  width="50"
                  height="10"
                  fill="#D9D9D9"
                />
                <line
                  id="answer-text"
                  x1="134"
                  y1="59.5"
                  x2="159"
                  y2="59.5"
                  stroke="black"
                />
                <g id="outer-tag-close">
                  <line
                    x1="136"
                    y1="69.5"
                    x2="140"
                    y2="69.5"
                    stroke="#C72C2C"
                  />
                  <line
                    x1="136"
                    y1="69.5"
                    x2="140"
                    y2="69.5"
                    stroke="#C72C2C"
                  />
                  <line
                    x1="136"
                    y1="69.5"
                    x2="140"
                    y2="69.5"
                    stroke="#C72C2C"
                  />
                </g>
                <g id="outer-tag-open">
                  <line
                    x1="136"
                    y1="64.5"
                    x2="140"
                    y2="64.5"
                    stroke="#C72C2C"
                  />
                  <line
                    x1="136"
                    y1="64.5"
                    x2="140"
                    y2="64.5"
                    stroke="#C72C2C"
                  />
                  <line
                    x1="136"
                    y1="64.5"
                    x2="140"
                    y2="64.5"
                    stroke="#C72C2C"
                  />
                </g>
                <path
                  id="inner-tag-open"
                  d="M140 65.5H153.5"
                  stroke="#63A9E9"
                />
                <path id="inner-tag-close" d="M140 67H148" stroke="#63A9E9" />
                <path
                  id="tick"
                  d="M127.5 73.5L129 75L132 72"
                  stroke="#16874C"
                />
              </g>
              <g id="question">
                <g id="upvote_2">
                  <circle
                    id="upvote-circle_2"
                    cx="129"
                    cy="30"
                    r="2"
                    fill="#D9D9D9"
                  />
                  <path
                    id="upvote-triangle_2"
                    d="M129 29L129.866 30.5H128.134L129 29Z"
                    fill="black"
                  />
                </g>
                <g id="downvote_2">
                  <circle
                    id="downvote-circle_2"
                    cx="129"
                    cy="35"
                    r="2"
                    fill="#D9D9D9"
                  />
                  <path
                    id="downvote-triangle_2"
                    d="M129 36L128.134 34.5H129.866L129 36Z"
                    fill="black"
                  />
                </g>
                <rect
                  id="question-code"
                  x="134"
                  y="28"
                  width="50"
                  height="10"
                  fill="#D9D9D9"
                />
                <line
                  id="question-text"
                  x1="134"
                  y1="25.5"
                  x2="179"
                  y2="25.5"
                  stroke="black"
                />
                <g id="outer-tag-close_2">
                  <line
                    x1="136"
                    y1="35.5"
                    x2="140"
                    y2="35.5"
                    stroke="#C72C2C"
                  />
                  <line
                    x1="136"
                    y1="35.5"
                    x2="140"
                    y2="35.5"
                    stroke="#C72C2C"
                  />
                  <line
                    x1="136"
                    y1="35.5"
                    x2="140"
                    y2="35.5"
                    stroke="#C72C2C"
                  />
                </g>
                <g id="outer-tag-open_2">
                  <line
                    x1="136"
                    y1="30.5"
                    x2="140"
                    y2="30.5"
                    stroke="#C72C2C"
                  />
                  <line
                    x1="136"
                    y1="30.5"
                    x2="140"
                    y2="30.5"
                    stroke="#C72C2C"
                  />
                  <line
                    x1="136"
                    y1="30.5"
                    x2="140"
                    y2="30.5"
                    stroke="#C72C2C"
                  />
                </g>
                <path
                  id="inner-tag-open_2"
                  d="M140 31.5H153.5"
                  stroke="#63A9E9"
                />
                <path id="inner-tag-close_2" d="M140 33H148" stroke="#63A9E9" />
                <rect
                  id="questioner"
                  x="168"
                  y="41"
                  width="16"
                  height="4"
                  fill="#EDF5FD"
                />
                <path
                  id="question-header"
                  d="M132.5 21.5H155"
                  stroke="#272828"
                />
                <rect
                  id="ask-button"
                  x="196"
                  y="20"
                  width="11"
                  height="3"
                  rx="0.5"
                  fill="#1B76CF"
                />
              </g>
              <rect
                id="blog-links"
                x="187"
                y="24"
                width="20"
                height="20"
                fill="#FBEBC7"
              />
              <g id="stack-sidebar">
                <g id="stack-sidebar_2">
                  <mask id="path-54-inside-1_0_1" fill="white">
                    <path d="M109 18H122V86H109V18Z" />
                  </mask>
                  <path d="M109 18H122V86H109V18Z" fill="white" />
                  <path
                    d="M122 18H122.1V17.9H122V18ZM109 18.1H122V17.9H109V18.1ZM121.9 18V86H122.1V18H121.9Z"
                    fill="black"
                    mask="url(#path-54-inside-1_0_1)"
                  />
                </g>
                <path id="stack-nav-l-1" d="M109 22H119" stroke="#272828" />
                <path id="stack-nav-l-3" d="M109 28H119" stroke="#272828" />
                <path id="stack-nav-l-4" d="M109 34H119" stroke="#272828" />
                <path id="stack-nav-l-2" d="M109 25H119" stroke="#272828" />
                <path id="stack-nav-l-5" d="M109 37H119" stroke="#272828" />
                <path id="stack-nav-l-6" d="M109 43H119" stroke="#272828" />
                <rect
                  id="explore-button"
                  x="109"
                  y="50"
                  width="10"
                  height="2"
                  fill="#F48024"
                />
              </g>
            </g>
            <g id="d-screen-left">
              <rect
                id="left-chrome-tab_2"
                x="3.0097"
                y="3"
                width="102"
                height="83"
                rx="4"
                fill="#263238"
              />
              <g id="chrome-controls_2">
                <circle
                  id="maximise_2"
                  cx="9.5097"
                  cy="4.5"
                  r="0.5"
                  fill="#04CA4E"
                />
                <circle
                  id="minimize_2"
                  cx="7.5097"
                  cy="4.5"
                  r="0.5"
                  fill="#FFBD44"
                />
                <circle
                  id="close_2"
                  cx="5.5097"
                  cy="4.5"
                  r="0.5"
                  fill="#DD1533"
                />
                <circle
                  id="new-tab_2"
                  cx="27.5097"
                  cy="4.5"
                  r="0.5"
                  fill="#D9D9D9"
                />
                <line
                  id="tab-name_2"
                  x1="13.0097"
                  y1="4.5"
                  x2="26.0097"
                  y2="4.5"
                  stroke="white"
                />
                <circle
                  id="refresh_2"
                  cx="10.0097"
                  cy="8"
                  r="1"
                  fill="#D9D9D9"
                />
              </g>
              <rect
                id="website-background-top"
                x="3.0097"
                y="24"
                width="102"
                height="47"
                fill="#04121D"
              />
              <rect
                id="website-background-bottom"
                x="3.0097"
                y="57"
                width="102"
                height="29"
                rx="4"
                fill="#04121D"
              />
              <rect
                id="search bar_2"
                x="14.0097"
                y="6"
                width="80"
                height="4"
                rx="1"
                fill="#D9D9D9"
              />
              <rect
                id="navbar_2"
                x="3.0097"
                y="12"
                width="102"
                height="13"
                fill="black"
              />
              <g id="navbar-text">
                <line
                  id="navbar-text-main"
                  x1="5.0097"
                  y1="17.5"
                  x2="21.0097"
                  y2="17.5"
                  stroke="white"
                />
                <line
                  id="navbar-sub-1"
                  x1="61.0097"
                  y1="17.5"
                  x2="71.0097"
                  y2="17.5"
                  stroke="white"
                />
                <line
                  id="navbar-sub-2"
                  x1="75.0097"
                  y1="17.5"
                  x2="85.0097"
                  y2="17.5"
                  stroke="white"
                />
                <line
                  id="navbar-sub-3"
                  x1="91.0097"
                  y1="17.5"
                  x2="101.01"
                  y2="17.5"
                  stroke="white"
                />
              </g>
              <rect
                id="image"
                x="66.0097"
                y="45"
                width="34"
                height="18"
                rx="6"
                fill="#D9D9D9"
              />
              <g id="heading">
                <rect
                  id="heading-box"
                  x="9.5097"
                  y="38.5"
                  width="39"
                  height="38"
                  rx="6.5"
                  stroke="#D9D9D9"
                />
                <line
                  id="heading-sub-3"
                  x1="17.0097"
                  y1="61.5"
                  x2="35.0097"
                  y2="61.5"
                  stroke="white"
                />
                <line
                  id="heading-sub-2"
                  x1="17.0097"
                  y1="57.5"
                  x2="35.0097"
                  y2="57.5"
                  stroke="white"
                />
                <line
                  id="heading-sub-1"
                  x1="17.0097"
                  y1="53.5"
                  x2="35.0097"
                  y2="53.5"
                  stroke="white"
                />
                <line
                  id="heading-title"
                  x1="15.0097"
                  y1="47.5"
                  x2="40.0097"
                  y2="47.5"
                  stroke="white"
                />
              </g>
            </g>
          </g>
          <path id="Rectangle 1" d="M195 67H199V69H195V67Z" fill="#16874C" />
        </g>
        <g id="laptop">
          <rect
            id="laptop-frame"
            x="44"
            y="101"
            width="120"
            height="75"
            rx="3"
            fill="#D9D9D9"
          />
          <rect
            id="laptop-screen-background"
            x="47"
            y="104"
            width="114"
            height="69"
            rx="3"
            fill="#252525"
          />
          <rect
            id="keyboard"
            x="42"
            y="176"
            width="125"
            height="8"
            fill="#D9D9D9"
          />
          <g id="laptop-screen">
            <rect
              id="vs-code-nav"
              x="50"
              y="107"
              width="21"
              height="63"
              fill="#302E2E"
            />
            <rect
              id="vs-code-inactive-tab"
              x="84"
              y="107"
              width="12"
              height="6"
              fill="#555151"
            />
            <rect
              id="vs-code-active-tab"
              x="71"
              y="107"
              width="12"
              height="6"
              fill="#423F3F"
            />
            <rect
              id="vs-code-files"
              x="71"
              y="113"
              width="87"
              height="57"
              fill="#423F3F"
            />
            <g id="code">
              <line
                id="Code 1"
                x1="76"
                y1="119.5"
                x2="126"
                y2="119.5"
                stroke="white"
              />
              <line
                id="Code 2"
                x1="76"
                y1="125.5"
                x2="126"
                y2="125.5"
                stroke="white"
              />
              <line
                id="Code 3"
                x1="76"
                y1="131.5"
                x2="126"
                y2="131.5"
                stroke="white"
              />
              <line
                id="Code 4"
                x1="76"
                y1="137.5"
                x2="126"
                y2="137.5"
                stroke="white"
              />
              <line
                id="Code 5"
                x1="76"
                y1="143.5"
                x2="126"
                y2="143.5"
                stroke="white"
              />
              <line
                id="Code 6"
                x1="76"
                y1="149.5"
                x2="126"
                y2="149.5"
                stroke="white"
              />
            </g>
            <g id="files">
              <line
                id="Files 1"
                x1="55"
                y1="117.5"
                x2="66"
                y2="117.5"
                stroke="#BBB4B4"
              />
              <line
                id="Files 2"
                x1="55"
                y1="122.5"
                x2="66"
                y2="122.5"
                stroke="#BBB4B4"
              />
              <line
                id="Files 3"
                x1="55"
                y1="127.5"
                x2="66"
                y2="127.5"
                stroke="#BBB4B4"
              />
              <line
                id="Files 4"
                x1="55"
                y1="132.5"
                x2="66"
                y2="132.5"
                stroke="#BBB4B4"
              />
              <line
                id="Files 5"
                x1="55"
                y1="137.5"
                x2="66"
                y2="137.5"
                stroke="#BBB4B4"
              />
              <line
                id="Files 6"
                x1="55"
                y1="142.5"
                x2="66"
                y2="142.5"
                stroke="#BBB4B4"
              />
              <line
                id="Files 7"
                x1="55"
                y1="147.5"
                x2="66"
                y2="147.5"
                stroke="#BBB4B4"
              />
              <line
                id="Files 8"
                x1="55"
                y1="152.5"
                x2="66"
                y2="152.5"
                stroke="#BBB4B4"
              />
              <line
                id="Files 9"
                x1="55"
                y1="157.5"
                x2="66"
                y2="157.5"
                stroke="#BBB4B4"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
