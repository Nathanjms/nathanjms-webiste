import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function Education() {
    return (
        <div className="container">
            <div className="intro-section">

                <h1>Education</h1>
                <div className="education-card">
                    <div className="university-sub-header">
                        <h3>Integrated Master's in Mathematics</h3>
                        <p>1st Class, University of Nottingham</p>
                    </div>
                    <p>
                        Integrated Master's in Mathematics, with a particular focus on Applied Mathematics; such as Mathematical Biology and Computational Mathematics.
                    </p>
                    <Accordion defaultActiveKey="0">
                        <div>
                            <div className="edu-accord-header">
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    <strong>Dissertation:</strong> <i>Chemokine Gradient and Dendritic Cell Migration in Lymphatic Interstitium</i>
                                </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Hello! I'm the body
                                </Card.Body>
                            </Accordion.Collapse>
                        </div>
                        <div>
                            <div className="edu-accord-header">
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                    <strong>Project:</strong> <i>The Geometrical Theory of Diffraction</i>
                                </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Hello! I'm another body
                                </Card.Body>
                            </Accordion.Collapse>
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Education;