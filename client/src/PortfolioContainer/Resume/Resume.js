import React from "react";
import { useState, useEffect } from 'react';
import ScrollService from "../../Utilities/ScrollService";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import Animations from "../../Utilities/Animation";
import './Resume.css'

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 65 },
    { skill: "Express JS", ratingPercentage: 75 },
    { skill: "Node JS", ratingPercentage: 75 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Online Chat-App",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A real time online chat-bot Web-app ",
      subHeading: "Technologies Used:  JS, NodeJs, Socket.io",
    },
    {
      title: "SR Tours & Travels",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Online Tours and Travels website for searching for an holiday tour with best avaliable hotels",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"BACHELOR OF TECHNOLOGY(UG)"}
        subHeading={"IIIT Bhubaneswar, Odisha"}
        fromDate={"2020"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"Senior Secondary Schooling"}
        subHeading={"DAV Public School, Pokhariput, Odisha"}
        fromDate={"2018"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"DAV Public School, NTPC/TTPS, Odisha"}
        fromDate={"2006"}
        toDate={"2018"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Techsnap"}
          subHeading={"FRONT-END DEVELOPER INTERN"}
          fromDate={"2021"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            - Developed different Web-pages for the Organisation
          </span>
          <br />
          <span className="resume-description-text">
            - Completed Various tasks and it was my first experience of work
            culture in an enterprise.
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports & E-games"
        description="Apart from being a tech enthusiast , i also love to play Sports like Cricket & Badminton along with other Egames."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop & Lofi songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Travelling"
        description="As a hobby, travelling keeps me busy during leisure; it is the best method to utilise time."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container "
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
