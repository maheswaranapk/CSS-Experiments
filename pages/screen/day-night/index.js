import "./index.scss";
import Head from "next/head";

export default function DayNight() {

  const onClick = () => {
    let dayNightDocument = document.getElementById("day-night");
    if (dayNightDocument.classList.contains("night")) {
      dayNightDocument.classList.remove("night");
    } else {
      dayNightDocument.classList.add("night");
    }
  };

  return (
    <div
      id="day-night"
      className="day-night-container d-flex flex-column justify-content-center align-items-center"
    >
      <Head>
        <title>Day Night</title>
      </Head>
      <div className="day-night-parent position-relative">
        <div className="land" />
        <div className="sun position-relative">
          <div className="outer-ray position-absolute" />
          <div className="inner-ray position-absolute" />
          <div className="main position-absolute" />
        </div>
        <div className="moon">
          <div className="dot-1" />
          <div className="dot-2" />
          <div className="dot-3" />
          <div className="dot-4" />
        </div>
        <div className="stars">
          <div className="star-1" />
          <div className="star-2" />
          <div className="star-3" />
          <div className="star-4" />
        </div>
        <div className="birds">
          <img src="/icon/bird-fly.png" className="bird-1" />
          <img src="/icon/bird-fly.png" className="bird-2" />
          <img src="/icon/bird-fly.png" className="bird-3" />
          <img src="/icon/bird-fly.png" className="bird-4" />
        </div>
      </div>
      <button type="button" class="btn btn-primary my-5" onClick={onClick}>
        Click To Change Day & Night
      </button>
      <div className="courtesy position-absolute m-3">
        <div>
          Design By{" "}
          <a href="https://www.uplabs.com/pilcrowd" title="Pilcrowd">
            Pilcrowd
          </a>{" "}
          from{" "}
          <a href="https://www.uplabs.com/posts/day-night-icons" title="uplabs">
            {" "}
            uplabs
          </a>
        </div>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
}
