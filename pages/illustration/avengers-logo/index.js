import "./index.scss";
import Head from "next/head";

export default function MovieReel() {
  return (
    <div
      id="avenger-logo-container"
      className="d-flex align-items-center justify-content-center"
    >
      <Head>
        <title>Avengers Logo</title>
      </Head>
      <div className="avenger-logo-parent position-relative">
        <div className="circle" />
        <div className="a-1" />
        <div className="a-2" />
        <div className="arrow-bg" />
        <div className="arrow" />
        <div className="a-3" />
        <div className="a-bg" />
      </div>
    </div>
  );
}
