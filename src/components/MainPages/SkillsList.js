import React from "react";
import Swal from "sweetalert2";

function SkillsInfo(skillName, desc) {
  Swal.fire({
    title: skillName,
    text: desc,
    timer: 6000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}

function SkillsList({ skillsData, columnClass = 'col-lg-6' }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {skillsData.map((element) => (
          <div key={element.id} className={`mb-1 ${columnClass}`}>
            <div
              className="rating-card"
              onClick={() => SkillsInfo(element.name, element.description)}
              data-id="0"
            >
              <h5>{element.name}</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: element.rating * 10 + "%" }}
                >
                  <span className="sr-only">
                    Rating: {element.rating} out of 10.
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsList;
