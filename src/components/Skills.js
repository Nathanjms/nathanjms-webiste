import React from 'react';
import SkillsList, { AdditionalSkillsList } from './SkillsList'

function Skills() {
    return (
        <div className="container">
            <div className="intro-section">
                <div>
                    <h1>Skills</h1>
                    <p>Click any of the ratings below to see a bit more information about my experience with each language!</p>
                    <SkillsList />
                </div>
                <div className="pt-5">
                    <h3 className="pb-3">Additional Skills</h3>
                    <AdditionalSkillsList />
                </div>
            </div>
        </div>
    );
}

export default Skills;