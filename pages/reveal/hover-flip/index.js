import "./index.scss";
import Head from "next/head";

export default function CardFlip() {
  return (
    <div className="hover-flip-container">
      <Head>
        <title>Hover Flip</title>
      </Head>
      <div className="container d-flex align-items-center justify-content-around">
        <div className="flip-card">
          <div class="front giraffee" />
          <div class="back">Giraffe</div>
        </div>
        <div className="d-none d-md-block flip-card">
          <div class="front zebra" />
          <div class="back">Zebra</div>
        </div>
        <div className="d-none d-lg-block flip-card">
          <div class="front deer" />
          <div class="back">Deer</div>
        </div>
      </div>
      <div className="courtesy m-3">
        Photo by <b>Public Domain Pictures</b>, <b>Jean van der Meulen</b>,{" "}
        <b>Frans Van Heerden</b> from <b>Pexels</b>
      </div>
    </div>
  );
}
