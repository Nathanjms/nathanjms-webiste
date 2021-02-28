import React from 'react';
import SkillsList from './SkillsList';
import skillsData from '../data/SkillsData.json';

function Skills() {
    return (
        <div className="container">
            <div className="intro-section">
                <div>
                    <h1>Skills</h1>
                    <p>Click any of the ratings below to see a bit more information about my experience with each language!</p>
                    <SkillsList skillsData={skillsData.languages} />
                </div>
                <div className="pt-5">
                    <h3 className="pb-3">Additional Skills</h3>
                    <SkillsList skillsData={skillsData.additional} />
                </div>
            </div>
        </div>
    );
}

export default Skills;