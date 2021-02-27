import React from 'react';
import skillsData from './SkillsData.json';
import Swal from 'sweetalert2';

function SkillsInfo(skillName, desc) {
    Swal.fire({
        title: skillName,
        text: desc
    })
}

function SkillsList() {

    return (
        <div className="container">
            <div className="row justify-content-center">
                {skillsData.languages.map(element => (

                    <div key={element.id} className="col-md-4 col-lg-3 col-sm-6 mb-1">
                        <div className="rating-card" onClick={() => SkillsInfo(element.name, element.description)} data-id="0">
                            <h3>{element.name}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: (element.rating * 10) + "%" }}>
                                    <span className="sr-only">70% Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

function AdditionalSkillsList() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {skillsData.additional.map(element => (

                    <div key={element.id} className="col-md-4 col-lg-3 col-sm-6 ">
                        <div className="rating-card" onClick={() => SkillsInfo(element.name, element.description)} data-id="0">
                            <h3>{element.name}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: (element.rating * 10) + "%" }}>
                                    <span className="sr-only">70% Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { AdditionalSkillsList };

export default SkillsList;