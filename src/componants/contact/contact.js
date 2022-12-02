import React from "react";
import Footer from "../footer/Footer";

function Contact() {
  return (
    <>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <h5 className="my-4">
          If you have questions about anything Home Shop - from where is your
          order,
          <br />
          to exchanging your fresh threads, head on over to our
          <a href="/">Help Centre</a>.
        </h5>
        <h5 className="my-4">
          This is where you'll find all the answers you need, you’ll even be
          able to speak to one of our friendly support heroes!
        </h5>
        <button className="btn btn-danger my-4">Contact Support Now</button>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
