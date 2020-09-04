import Link from "next/link";
import "./index.scss";
import { Fragment } from "react";

const list = [
  {
    categoryName: "Screen",
    categoryList: [
      {
        name: "Day Night",
        path: "/screen/day-night",
      },
      {
        name: "Planet",
        path: "/screen/planet"
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
        name: "Dribbble Reveal",
        path: "/reveal/dribbble-logo",
      },
      {
        name: "Google Photos Logo",
        path: "/reveal/google-photos-new-logo",
      },
      {
        name: "Text Push",
        path: "/reveal/text-push",
      }, 
      {
        name: "Linear Reveal",
        path: "/reveal/linear-reveal",
      },
      {
        name: "Hover Flip",
        path: "/reveal/hover-flip",
      },
    ],
  },
  {
    categoryName: "Component",
    categoryList: [
      {
        name: "Day Night Switch",
        path: "/component/day-night-switch",
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