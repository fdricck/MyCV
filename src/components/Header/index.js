import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Header = () => {
    const [header, setHeader] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark page-navbar gradient">
          <div className="container">
      <a className="navbar-brand logo" href="#">{header.logo}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item item">
          </li><li className="nav-item item">
            <a className="nav-link" href="#portofolio">{header.menu}</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link" href="#education">{header.menu1}</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link" href="#skills">{header.menu2}</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link" href="#hobbies">{header.menu3}</a>
          </li>
        </ul>
      </div>
      <a href="#" className="btn btn-success download-template" role="button" aria-disabled="true">{header.btn}</a>
    </div>
  </nav>
    </div>
  );
};

export default Header;