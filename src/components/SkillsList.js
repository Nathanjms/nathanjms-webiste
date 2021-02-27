import React from 'react';
// import skillsData from './SkillsData.json';

function skillsList() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 col-lg-3 col-sm-6 ">
                    <div className="rating-card" data-id="0">
                        <h3>PHP</h3>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: "10%" }}>
                                <span className="sr-only">70% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default skillsList;