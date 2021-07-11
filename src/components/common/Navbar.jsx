import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    const { value, name, onChange } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid text-white">
          <Link className="navbar-brand text-white" to="/">
            ABE
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse text-white" id="navbarNav">
            <ul className="navbar-nav text-white d-flex align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Our Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <input
                  type="text"
                  className="form-control form-control-sm col-2"
                  value={value}
                  onChange={onChange}
                  name={name}
                  placeholder="Search Product"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
