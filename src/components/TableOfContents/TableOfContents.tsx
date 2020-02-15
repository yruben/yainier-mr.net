import Slugger from "github-slugger";
import React from "react";

export default ({ headings }) => {
  const slugger = new Slugger();

  //   console.log(headings);
  return (
    <nav id="anchors" className="ar-anchors is-active">
      <p className="ar-anchors-title">On this page</p>
      <ul className="ar-anchors-list">
        {headings
          .filter(heading => heading.depth !== 1)
          .map(heading => (
            // className="is-current"
            <li key={heading.value}>
              <a href={"#" + slugger.slug(heading.value)}>{heading.value}</a>
            </li>
          ))}
        <li>
          <a>Back to top</a>
        </li>
      </ul>
    </nav>
  );
};
