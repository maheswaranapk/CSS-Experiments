import "./index.scss";
import Head from "next/head";

export default function GooglePhotosNewLogo() {
  return (
    <div
      id="google-photos-new-logo-container"
      className="d-flex align-items-center justify-content-center"
    >
      <Head>
        <title>Google Photos New Logo</title>
      </Head>

      <div className="old-logo-parent position-relative">
        <div className="box" />
        <div className="support-box left-box position-absolute" />
        <div className="support-box top-box position-absolute" />
        <div className="support-box right-box position-absolute" />
        <div className="support-box bottom-box position-absolute" />
        <span>&#10022;</span>
      </div>
      <div className="courtesy position-absolute m-3">
        <div>
          Design Inspiration from{" "}
          <a href="https://twitter.com/googlephotos/status/1276169983660142593" target="_blank" title="Google Photos Tweet">
          Google Photos Tweet
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
