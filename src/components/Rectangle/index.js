import React from "react";
import "./_rectangle.scss";

const Rectangle = ({ value, style }) => {
  return <div className="rectangle" value={value} style={style} />;
};

export default Rectangle;
