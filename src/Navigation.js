import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ selected }) => {
  useLayoutEffect(() => {
    const selected = document.querySelector(".selected");
    const partialline = document.querySelector(".partialline");
  });

  return (
    <div className="container">
      <div className="menu">
        <ul>
          <li>
            <Link className={selected === "home" ? "selected" : null} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link
              className={selected === "gallery" ? "selected" : null}
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={selected === "about" ? "selected" : null}
              to="/about"
            >
              About
            </Link>{" "}
          </li>
          <li>
            <Link
              className={selected === "contact" ? "selected" : null}
              to="/contact"
            >
              Contact
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="partialline" />
    </div>
  );
};

export default Navigation;
