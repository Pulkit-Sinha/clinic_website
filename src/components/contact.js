import React from "react";
import whatsapp from "./assets/Whatsapp.png";

function Contact() {
  return (
    <div>
      <h5 style={{ padding: 10 }}>Email: Awadhmedicare.care@gmail.com</h5>
      <h5 style={{ padding: 10 }}>Phone: +91 99317 18795</h5>
      <h5><img src = {whatsapp} height = "44px" style = {{padding: 10}}></img>: +91 70043 93268</h5>
      <h5 style={{ padding: 10 }}>Location: Ara-Sasaram Rd, Shanti Nagar, Bikramganj, Bihar - 802212 (to see on map, go to Clinic Locator section)</h5>
    </div>
  );
}

export default Contact;