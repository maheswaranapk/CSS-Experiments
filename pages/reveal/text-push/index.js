import "./index.scss";
import Head from "next/head";

export default function TextPush() {
  return (
    <div className="text-push-container d-flex flex-column align-items-center justify-content-center">
      <Head>
        <title>Text Push</title>
      </Head>
      <div className="text-parent position-relative d-none d-md-block ">
        <span className="main-text position-relative mr-2">
          That’s what I do.
        </span>
        <span className="sec-text position-relative">
          I drink and I know things
        </span>
      </div>
      <div className="name-text  d-none d-md-block mt-4">
        Tyrion Lannister
      </div>
      <div className="d-block d-md-none text-white">Open in Desktop</div>
    </div>
  );
}
