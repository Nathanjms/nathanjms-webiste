import React from 'react';
import skillsData from './SkillsData.json';

function skills() {
    console.log(skillsData);
    return (
        <div className="container">
            <div className="intro-section">
                <h1>Nathan James.</h1>
                <p>
                    Coming Soon...
                </p>
                <button className="btn btn-primary">Click Me</button>
            </div>
        </div>
    );
}

export default skills;