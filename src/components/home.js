import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import '../components/style.css';
import Profile from '../img/home_img.png';
//import Profile from '../img/dragon-ball-z-goku.gif';

function Home() {
    return (
        <section className="homepage py-3" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={4} lg={4} className="p-5 p-md-4 p-lg-4 text-center">
                        <Image fluid roundedCircle src={Profile}></Image>                                                           
                    </Col>
                    <Col xs={12} md={8} lg={8} className="text-center text-md-start">
                        <h3 className="text-white font-weight-normal mb-md-3 ">Hi! I'm</h3>
                        <h1 className="display-3 text-uppercase mb-md-3">Kalaimani Kannan</h1>
                        <TypeAnimation
                            sequence={[
                                'Web Developer', 
                                5000,
                                'Web Designer',
                                5000,
                                'Frontend Developer',
                                5000,
                                () => {
                                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '2em' }}
                    />
                        <button className="vvd1 mt-3 mt-md-4" onClick={() => console.log('connect')}>Download CV <ArrowRightCircle className="ms-3" size={25}/></button>
                    </Col> 
                </Row>
            </Container>
        </section>
    );
}

export default Home;