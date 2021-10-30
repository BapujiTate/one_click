import React from "react";

function Footer() {
  return (
    <div className="footer" id="Footer">
      <div className="row">
        <div className="footer-div col-md-6">
          <h3>About</h3>
          <p>
            A web application is the life of 65+ years old people by just one
            click. We help them to live healthy and better life with emerging
            technologies. We together make it easy for elderly peoples.
          </p>
        </div>
        <div className="footer-div col-md-3">
          <h3>Social</h3>
          <p>You can contact us on sicial media</p>
          <div className="row">
            <a href="https://www.instagram.com">
              <i className=" col-sm-2 fab fa-instagram favicon"></i>
            </a>
            <a href="http://www.facebook.com">
              <i className=" col-sm-2 fab fa-facebook favicon"></i>
            </a>
            <a href="http://www.twitter.com">
              <i className=" col-sm-2 fab fa-twitter favicon"></i>
            </a>
          </div>
        </div>
        <div className="footer-div col-md-3">
          <h3>Email</h3>
          <p>For any queries mail to: help@oneclick.com</p>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>copyrigth &copy; 2022</p>
    </div>
  );
}

export default Footer;
