import "./index.scss";
import Head from "next/head";

export default function Dice() {
  return (
    <div
      id="envelope-container"
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <Head>
        <title>Envelope</title>
      </Head>

      <div className="envelope-parent position-relative h-auto">
        <div className="envelope-back">
          <div className="cover" />
          <div className="background" />
        </div>
        <div className="card posi d-flex align-items-center justify-content-center">
          <div className="head" />
          <div className="body-parent">
            <div className="body" />
          </div>
          <div className="add-button text-center">
            <div>+</div>
          </div>
        </div>
        <div className="envelope-side-cover" />
        <div className="envelope-front" />
      </div>
      <div className="envelope-shadow" />
      <div className="courtesy position-absolute m-3">
        <div>
          Design Courtesy{" "}
          <a href="https://dribbble.com/paulgernale" title="Paul Gernale">
            Paul Gernale
          </a>{" "}
          from{" "}
          <a
            href="https://dribbble.com/shots/3847897-Invite-a-Friend"
            title="dribbble"
          >
            {" "}
            Dribbble
          </a>
        </div>
      </div>
    </div>
  );
}
