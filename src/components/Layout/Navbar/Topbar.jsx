import React from "react";

const Topbar = () => {
  return (
    <>
      <div className="topbar-container">
        <h6>
          {" "}
          <i className="fa-solid fa-phone-volume"></i> Emergency Call :
          1800-123-456
        </h6>
        <h6>
          {" "}
          <i className="fa-solid fa-clock"></i> 24*7 Hour
        </h6>
        <h6>
          {" "}
          <i className="fa-solid fa-envelope"></i> help@kalyanihospital.com
        </h6>
        <h6>
          {" "}
          <i className="fa-solid fa-caret-down"></i> English
        </h6>
      </div>
    </>
  );
};

export default Topbar;
