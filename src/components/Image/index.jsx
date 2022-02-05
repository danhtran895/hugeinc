import React from "react";

const Image = ({ refs, ...rest }) => (
  <img loading="lazy" ref={refs} {...rest} />
);

export default Image;
