import "./index.scss";
import Head from "next/head";

export default function Dice() {
  return (
    <div
      id="dribbble-logo-reveal-container"
      className="d-flex flex-column align-items-center justify-content-center position-relative "
    >
      <Head>
        <title>Dribble Logo Reveal</title>
      </Head>

      <div className="dribbble-logo-reveal-parent">
        <svg id="svg-main-circle" height="400" width="400">
          <circle
            id="main-circle"
            cx="200"
            cy="200"
            r="150"
            stroke-linecap="round"
          />
        </svg>
        <svg id="svg-main-axis" height="900" width="900">
          <circle
            id="main-axis"
            cx="400"
            cy="400"
            r="400"
            stroke-linecap="round"
          />
        </svg>
        <svg id="svg-axis-1" height="400" width="400">
          <circle
            id="axis-1"
            cx="200"
            cy="200"
            r="150"
            stroke-linecap="round"
          />
        </svg>
        <svg id="svg-axis-2" height="400" width="400">
          <circle
            id="axis-2"
            cx="200"
            cy="200"
            r="150"
            stroke-linecap="round"
          />
        </svg>
        <div className="dribbble-text"> Dribbble</div>
      </div>
      <div className="courtesy position-absolute m-3">
        <div>
          Design By{" "}
          <a href="https://dribbble.com/nikolarajic" title="Nikola Rajic">
            Nikola Rajic
          </a>{" "}
          from{" "}
          <a
            href="https://dribbble.com/shots/6550145-Hi-everyone"
            title="Hi everyone! 😄"
          >
            {" "}
            Hi everyone! 😄
          </a>
        </div>
        <div>
          Reference{" "}
          <a
            href="https://glennmccomb.com/articles/building-a-pure-css-animated-svg-spinner/"
            title="Building a pure CSS animated SVG spinner"
          >
            Building a pure CSS animated SVG spinner
          </a>
        </div>
      </div>
    </div>
  );
}
