import React from "react";
import ContactMessage from "../components/Static/ConatctMessage/ContactMessage";

const Contact = () => {
  return (
    <>
      <div className="d-flex mt-5 justify-content-center">
        <h6>
          <i className="fa-solid fa-phone-volume ms-3"></i> Emergency Call :
          1800-123-456
        </h6>
        <h6>
          <i className="fa-solid fa-clock ms-3"></i> 24*7 Hours
        </h6>
        <h6>
          <i className="fa-solid fa-envelope ms-3"></i> help@kalyanihospital.com
        </h6>
      </div>
      <ContactMessage />
    </>
  );
};

export default Contact;
