import "./index.scss";
import Head from "next/head";

export default function Planet() {
  return (
    <div className="planet-container d-flex flex-column align-items-center justify-content-center">
      <Head>
        <title>Planet</title>
      </Head>
      <div class="planet-parent">
          <div class="sun" />
        <div class="planet-1" />
        <div class="planet-2" />
        <div class="planet-3" />
      </div>

      <div className="courtesy position-absolute m-3">
        <div>
          Design Courtesy{" "}
          <a href="https://dribbble.com/wildflowwer" title="Maxim">
            Maxim
          </a>{" "}
          from{" "}
          <a href="https://dribbble.com/shots/9179175-Funny-Shape-Orbits" title="dribbble">
            {" "}
            Dribbble
          </a>
        </div>
      </div>
    </div>
  );
}
