import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../components/style.css';
import { RecordCircle } from 'react-bootstrap-icons';

function Education() {
    return (
        <section className="bg-light py-5" id="education">
            <Container>
                <span className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white">Edu & Exp</h1>
                    <h1 className="position-absolute text-uppercase text-primary mb-0">EDUCATION & EXPERICENCE</h1>
                </span>
                <Row className="">
                    <Col xs={12} md={6} lg={6}>
                        <h3 className="mb-4">My Education</h3>
                        <div className="border-start border-primary pt-4 ps-4 ms-2">
                            <div class="position-relative mb-4"> 
                                <RecordCircle className="recordcircle text-primary position-absolute" size={15} />
                                <h5 class="font-weight-bold mb-1">Bachelor In CSE</h5>
                                <p class="mb-2"><strong>Anna University</strong> | <small>2015 - 2019</small></p>
                                <p>Studied at Anna University, UCE, Panruti and scrored <strong>62%</strong> of GPA.</p>
                            </div>
                        
                            <div class="position-relative mb-4">
                                <RecordCircle className="recordcircle text-primary position-absolute" size={15} />
                                <h5 class="font-weight-bold mb-1">Higher Secondary</h5>
                                <p class="mb-2"><strong>State Board</strong> | <small>2014 - 2015</small></p>
                                <p>Studied at Kuyilappalayam Hr.Sec.School, Auroville and scrored <strong>84.6%</strong> of Marks in HSC.</p>
                            </div>
                        
                            <div class="position-relative mb-4">
                                <RecordCircle className="recordcircle text-primary position-absolute" size={15} />
                                <h5 class="font-weight-bold mb-1">SSLC</h5>
                                <p class="mb-2"><strong>State Board</strong> | <small>2012 - 2013</small></p>
                                <p>Studied at Kuyilappalayam Hr.Sec.School, Auroville and scrored <strong>90%</strong> of Marks in SSLC.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <h3 className="mb-4">My Expericence</h3>
                        <div className="border-start border-primary pt-4 ps-4 ms-2">
                            <div class="position-relative mb-4">
                                <RecordCircle className="recordcircle text-primary position-absolute" size={15} />
                                <h5 class="font-weight-bold mb-1">Net Access India Limited</h5>
                                <p class="mb-2"><strong>Software Engineer </strong> | <small> 27 September, 2021 - Present</small></p>
                                <ul>
                                    <li>Ensure user satisfaction by providing responsive tech support.</li>
                                    <li>Collaborate with other developers to update the website and create new features.</li>
                                </ul>
                            </div>

                            <div class="position-relative mb-4">
                                <RecordCircle className="recordcircle text-primary position-absolute" size={15} />
                                <h5 class="font-weight-bold mb-1">QPay India Private Limited</h5>
                                <p class="mb-2"><strong>UI Designer</strong> | <small>07 January 2020 - 31 May 2021</small></p>
                                <ul>
                                    <li>Worked with other developers to ensure that the website is visually appealing</li>
                                    <li>Plan the layout of the website from end to end.</li>
                                    <li>Developed Responsive web pages using modern frameworks like Bootstrap, etc.</li>
                                    <li>Renewed old web application to Latest UI practices.</li>
                                </ul>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Education;