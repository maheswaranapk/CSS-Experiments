import "./index.scss";
import Head from "next/head";

export default function Planet() {
  const onClick = () => {
    let dayNightSwitchContainer = document.getElementById(
      "day-night-switch-container"
    );
    if (dayNightSwitchContainer.classList.contains("switched")) {
      dayNightSwitchContainer.classList.remove("switched");
    } else {
      dayNightSwitchContainer.classList.add("switched");
    }
  };

  return (
    <div
      id="day-night-switch-container"
      className="d-flex align-items-center justify-content-center"
    >
      <Head>
        <title>Day Night Switch</title>
      </Head>

      <div className="switch position-relative" onClick={onClick}>
        <div className="indicator position-absolute"></div>
        <div className="moon-shadow position-absolute"></div>
      </div>

      <div className="courtesy position-absolute m-3">
        <div>
          Design Courtesy{" "}
          <a href="https://dribbble.com/bgdnv" title="Maxim">
            Andrey Bogdanov
          </a>{" "}
          from{" "}
          <a
            href="https://dribbble.com/shots/6844698-Dark-theme-switch-animation"
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
