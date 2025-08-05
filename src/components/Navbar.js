import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const colourset = {
    light: {
      background: "#cdcdcdff",
      text: "#000000",
    },
    dark: {
      background: "#151515ff",
      text: "#ffffff",
    },
    Green: {
      background: "#002412ff",
      text: "#dffff1ff",
    },
    Red: {
      background: "#4f0007ff",
      text: "#ffd7daff",
    },
    Yellow: {
      background: "#5d4700ff",
      text: "#e2e2e2ff",
    },
  };

  const theme = colourset[props.darkMode] || colourset.light;

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: theme.text }}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="text-decoration-none m-3"
                to="/About"
                style={{ color: theme.text }}
              >
                {props.aboutext}
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <button
              type="button"
              className="btn btn-light mx-1"
              onClick={props.toggleMode1}
            >
              Light
            </button>
            <button
              type="button"
              className="btn btn-dark mx-1"
              onClick={props.toggleMode2}
            >
              Dark
            </button>
            <button
              type="button"
              className="btn btn-success mx-1"
              onClick={props.toggleMode3}
            >
              Green
            </button>
            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={props.toggleMode4}
            >
              Red
            </button>
            <button
              type="button"
              className="btn btn-warning mx-1"
              onClick={props.toggleMode5}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutext: PropTypes.string,
  darkMode: PropTypes.string.isRequired,
  toggleMode1: PropTypes.func.isRequired,
  toggleMode2: PropTypes.func.isRequired,
  toggleMode3: PropTypes.func.isRequired,
  toggleMode4: PropTypes.func.isRequired,
  toggleMode5: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "My App",
  aboutext: "About",
};
