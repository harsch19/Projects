import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam felis eu nisi ultricies, at iaculis massa dapibus.</p>
          </div>
          <div className="col-md-6 col-12">
            <h5>Contact Us</h5>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
