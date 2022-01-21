import React from "react";

function Location() {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5525645527473!2d84.25755141486096!3d25.218307383886337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d9fd29f204379%3A0x73dca863571fba4d!2sAWADH%20MEDICARE!5e0!3m2!1sen!2sin!4v1642743099078!5m2!1sen!2sin" style={{
    // position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    border: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    height: "100vh" }} loading="lazy"></iframe>
    </div>
  );
}

export default Location;
