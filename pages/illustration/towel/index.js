import "./index.scss";
import Head from "next/head";
export default function MovieReel() {
  return (
    <div
      id="towel-container"
      className="d-flex align-items-center justify-content-center"
    >
      <Head>
        <title>Towel</title>
      </Head>
      <div className="towel-parent position-relative">
        <div className="position-relative handle">
          <div className="handle-joint float-left" />
          <div className="handle-joint float-right" />
          <div className="handle-bar" />
          <div className="handle-bolt" />
          <div className="handle-bolt right" />
        </div>
        <div className="towel">
          <div className="first">
            <div className="bar" />
          </div>
          <div className="last">
            <div className="bar" />
          </div>
          <div className="middle">
            <div className="bar" />
          </div>
          <div className="shawdow-1"></div>
          <div className="shawdow-2"></div>
        </div>
      </div>
      <div className="courtesy position-absolute m-3">
        <div>
          Design Courtesy{" "}
          <a href="https://dribbble.com/IvanDubovik" title="Ivan Dubovik">
            Ivan Dubovik
          </a>{" "}
          from{" "}
          <a href="https://dribbble.com/shots/14217803-Towel" title="Towel">
            Towel
          </a>
        </div>
      </div>
    </div>
  );
}
