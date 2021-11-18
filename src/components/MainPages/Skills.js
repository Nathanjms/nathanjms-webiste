import React from "react";
import SkillsList from "./SkillsList";
import skillsData from "../../data/SkillsData.json";

function Skills() {
  return (
    <div className="container">
      <div className="intro-section">
        <div>
          <h1>Skills</h1>
          <p>
            Click any of the ratings below to see a bit more information about
            my experience with each!
          </p>
        </div>
        <div className="row">
          <div className="pt-5 col-md-6">
            <h3 className="pb-3">Web Development</h3>
            <SkillsList skillsData={skillsData.languages.web} />
          </div>
          <div className="pt-5 col-md-6">
            <h3 className="pb-3">Programming</h3>
            <SkillsList skillsData={skillsData.languages.other} />
          </div>
        </div>
        <div className="row">
          <div className="pt-5 col-md-12">
            <h3 className="pb-3">Additional Skills</h3>
            <SkillsList skillsData={skillsData.additional} columnClass={"col-sm-6 col-lg-3"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
