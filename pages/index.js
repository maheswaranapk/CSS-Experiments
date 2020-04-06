import Link from "next/link";
import "./index.scss";

const list = [
  {
    name: "Linear Reveal",
    path: "/linear-reveal",
  },
];

export default function Index() {
  return (
    <div className="container demo-list-container">
      <div className="row">
        <div className="col-12 mb-2 d-flex align-items-center flex-column">
          <h3 className="my-3">CSS Experiments</h3>
          <Link
            href="https://github.com/maheswaranapk/CSS-Experiments"
            prefetch={false}
          >
            Source Code here
          </Link>
        </div>
        {list.map((item) => (
          <Link href={item.path} key={item.name}>
            <a className="col-12">
              <div className="card cursor-pointer mt-3 col-xl-6">
                <div className="card-body">{item.name + " Demo"}</div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
