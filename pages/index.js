import Link from "next/link";
import "./index.scss";

const list = [
  {
    name: "Linear Reveal",
    path: "/linear-reveal",
  },
  {
    name: "Hover Flip",
    path: "/hover-flip",
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
          <div className="mt-3 px-2 col-12 col-xl-6">
            <Link href={item.path} key={item.name} prefetch={true}>
              <a className="card cursor-pointer">
                <div className="card-body">{item.name + " Demo"}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
