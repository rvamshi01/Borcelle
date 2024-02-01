import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary bg-white text-black">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              A brief description of your company or website. You can add details about your mission, values, etc.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>123 Street, City</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; Copyright 2023, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer