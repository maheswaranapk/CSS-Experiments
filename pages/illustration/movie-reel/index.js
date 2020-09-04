import "./index.scss";
import Head from "next/head";

const DIAMETER = 360;
const RADIUS = DIAMETER / 2;

const MINOR_RADIUS = 45;
const INNER_PANEL_RADIUS = 110;
const REEL_RADIUS = 120;
const HOLE_RADIUS = 30;

export default function MovieReel() {
  const centerList = [20, 80, 140, 200, 260, 320].map((angle) => {
    return {
      x: INNER_PANEL_RADIUS * Math.sin((Math.PI * 2 * angle) / 360),
      y: INNER_PANEL_RADIUS * Math.cos((Math.PI * 2 * angle) / 360),
    };
  });
  return (
    <div
      id="reel-container"
      className="d-flex align-items-center justify-content-center"
    >
      <Head>
        <title>Movie Reel</title>
      </Head>
      <div className="reel-parent position-relative">
        <svg height={DIAMETER} width={DIAMETER}>
          <circle cx={RADIUS} cy={RADIUS} r={REEL_RADIUS} fill="#F45E23" />
          <mask id="reel-mask">
            <circle cx={RADIUS} cy={RADIUS} r={RADIUS} fill="white" />
            {centerList.map((center) => (
              <circle
                cx={RADIUS + center.x}
                cy={RADIUS + center.y}
                r={MINOR_RADIUS}
                fill="black"
              />
            ))}
          </mask>
          <rect
            mask="url(#reel-mask)"
            fill="#BEBEBE"
            width="100%"
            height="100%"
            fill-opacity="0.3"
          />
          <circle cx={RADIUS} cy={RADIUS} r={HOLE_RADIUS} fill="#FFF" />
        </svg>
      </div>
      <div className="courtesy position-absolute m-3">
        <div>
          Design Courtesy{" "}
          <a
            href="https://dribbble.com/ArtBauer"
            title="Arthur Bauer"
          >
            Arthur Bauer
          </a>{" "}
          from{" "}
          <a
            href="https://dribbble.com/shots/14110165-smoovie-macOS-app-icon"
            title="smoovie macOS app icon"
          >
            smoovie macOS app icon
          </a>
        </div>
      </div>
    </div>
  );
}
