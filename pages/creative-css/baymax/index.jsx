import "./index.scss";
import Head from "next/head";

export default function Dice() {
  return (
    <div
      id="baymax-container"
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <Head>
        <title>Baymax</title>
      </Head>

      <div className="baymax-parent position-relative h-auto">
        <div className="head"></div>
        <div className="body">
          <div className="chest" />
          <div className="belly" />
          <div className="link" />
        </div>
      </div>
    </div>
  );
}
