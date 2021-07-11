import React from "react";
import { DemoRequest } from ".";

const AboutContent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center about">
      <div className="about-text col-md-8 mt-3 px-2">
        <p>
          Since its foundation in 2006, ABE Digital Solutions LTD has been
          selling high quality POS hardware along with their surppoted software
          to different clients in Kenya.
        </p>
        <p>
          Some of the harware we provide include thermal printers, etr machines,
          desktops, laptops, barcode scanner and much more POS related devices.
          Our POS software include Mango Hotel Management System (PoS), Wine &
          Spirit software, Kazinet Business Management System, and DawaSoft
          Business Management System (for pharmacy/chemist) which are used all
          over Kenya with most of well known companies.
        </p>
        <p>
          <button
            className="btn btn-sm btn-success"
            data-bs-toggle="modal"
            data-bs-target="#demoRequest"
          >
            Request For System Demo
          </button>
          <DemoRequest />
        </p>
        <p>
          We aim at providing best services to our clients since we believe
          'Quality is remembered long after the price is forgotten.' We pride
          ourselves in attaining numerous milestones by offering cutting-edge
          POS technology for our customers and offering one-stop shop for all
          POS related devices & software.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
