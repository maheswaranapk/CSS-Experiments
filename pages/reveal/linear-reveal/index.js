import "./index.scss";
import Head from "next/head";

export default function LinearReveal() {
  return (
    <div className="linear-reveal-container">    <div className="linear-reveal-parent position-relative d-flex flex-column align-items-center justify-content-center">
      <Head>
        <title>Linear Reveal</title>
      </Head>
      <div className="reveal-anim-container mb-3">
        <div className="reveal-text mx-2">Explore</div>{" "}
        <div className="reveal-box" />
      </div>
      <div className="reveal-anim-container">
        <div className="reveal-text mx-2">Unknown World</div>{" "}
        <div className="reveal-box" />
      </div>
      <div className="courtesy mb-3">
        Photo by <b>Tom Fisk</b> from <b>Pexels</b>
      </div>
    </div>
    </div>
  );
}
