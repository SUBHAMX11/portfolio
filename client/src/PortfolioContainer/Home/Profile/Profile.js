import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../Utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/subham.rath.750">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/subham-rath011">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://instagram.com/cyber_worrier_?igshid=YmMyMTA2M2Y">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/SubhamR44428992">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text"></span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🔴 ",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Developer 😎",
                    1000,
                  ]}
                />
              </h1>
              <h1>
                <span className="profile-role-tagline">
                  knack of buildig applications with front and back end
                  operations.
                </span>
              </h1>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => {
                ScrollService.scrollHandler.scrollToHireMe();
              }}
            >
              hire Me
            </button>
            <a href="CV-NEW.pdf" download="my CV-NEW.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
