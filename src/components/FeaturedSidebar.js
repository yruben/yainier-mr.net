import React from "react";
import PropTypes from "prop-types";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Tags from "./Tags";

const FeaturedSidebar = ({ items }) => {
  return (
    <div className="sticky">
      <h4 className="spanborder">
        <span className="has-text-weight-bold">Featured</span>
      </h4>
      <ol className="list-clean">
        {items &&
          items.map(({ node: item }) => (
            <li className="ml-3 mb-4" key={item.id}>
              <span>
                <h6 className="has-text-weight-bold">
                  <OutboundLink
                    target="_blank"
                    className="has-text-dark"
                    href={item.url}
                  >
                    {item.title}
                  </OutboundLink>
                </h6>

                <Tags tags={item.tags} />
              </span>
            </li>
          ))}
      </ol>
    </div>
  );
};

FeaturedSidebar.propTypes = {
  items: PropTypes.array
};

export default FeaturedSidebar;
