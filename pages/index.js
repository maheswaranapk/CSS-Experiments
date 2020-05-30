import Link from "next/link";
import "./index.scss";
import { Fragment } from "react";

const list = [
  {
    categoryName: "Screen",
    categoryList: [
      {
        name: "Day Night",
        path: "/day-night",
      },
      {
        name: "Planet",
        path: "/planet"
      }
    ],
  },
  {
    categoryName: "Reveal",
    categoryList: [
      {
        name: "Envelope Reveal",
        path: "/reveal/envelope",
      },
      {
        name: "Linear Reveal",
        path: "/linear-reveal",
      },
      {
        name: "Hover Flip",
        path: "/hover-flip",
      },
      {
        name: "Text Push",
        path: "/text-push",
      }, 
    ],
  },
  {
    categoryName: "Component",
    categoryList: [
      {
        name: "Day Night Switch",
        path: "/day-night-switch",
      }
    ],
  },
  // {
  //   categoryName: "Creative CSS",
  //   categoryList: [
  //     {
  //       name: "Envelope",
  //       path: "/creative-css/envelope",
  //     }
  //   ],
  // },
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
        {list.map((category) => (
          <Fragment>
            <h4 className="col-12 mt-3">{category.categoryName}</h4>
            {category.categoryList.map((item) => (
              <div className="mt-3 px-2 col-12 col-md-4 col-lg-3">
                <Link href={item.path} key={item.name} prefetch={true}>
                  <a className="card cursor-pointer">
                    <div className="card-body">{item.name + " Demo"}</div>
                  </a>
                </Link>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}