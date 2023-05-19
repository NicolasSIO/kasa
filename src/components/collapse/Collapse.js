import React, { useState } from "react";

import "./collapse.css";

const Collapse = (props) => {
  const [collapsed, setCollapse] = useState(true);

  const toggle = () => {
    setCollapse(!collapsed);
  };

  return (
    <div className="Collapse" onClick={toggle}>
      <div className="collapse-header">
        <h2 className="collapse-title">{props.title}</h2>
        <span className={collapsed ? "collapse-arrow" : "reverse-arrow"}>
          ^
        </span>
      </div>
      <div className={`collapse-content ${collapsed ? "collapsed" : ""}`}>
        <p className="collapse-text">{props.content}</p>
      </div>
    </div>
  );
};

export default Collapse;
