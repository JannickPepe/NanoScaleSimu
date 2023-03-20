
import {Col, Container, Image, Row } from "react-bootstrap";

import '../styles/Projects.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BsInfoSquareFill } from "react-icons/bs";




function Projects() {

    const now = 100;

    return (
        <div className="projecta">    
            <Container>
                
                <div className="projecta-section-title">
                    <Row>
                        <Col>
                            <h1>Digitial Reality</h1>
                        </Col>
                    </Row>
                </div>

                <div className="projecta-section-intro">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Image fluid className='projecta-img' alt="vision" src={require('../img/galleri6.jpg')} style={{height:500}} />
                        </Col>
                        <Col s={12} sm={12} md={6} lg={6} xl={6} style={{}}>
                            <h5>Status:</h5>
                                <ProgressBar variant="success" now={now} label={`${now}%`} style={{width:300, marginBottom:15}} />
                            <p>Afsluttet</p>
                            <h5>Tema</h5>
                            <div className="projecta-intro-tema" style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                                <Image alt="vision" src={require('../img/ar-glasses.png')} style={{height:60, marginTop:8, marginBottom:8, marginLeft:8}}/>
                                <p>VR Teknologier</p>
                            </div>
                            <hr></hr>
                            <div className="projecta-intro-slut">
                                <BsInfoSquareFill size={30}></BsInfoSquareFill>
                                <p>Projektet havde til hensigt at øge kendskabet til XR-teknologier og indfri teknologiernes potentiale.</p>
                                <p>Der rettede sig mod effektivisering og forbedring af produktionen samt muliggøre nye typer services til kunder.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            
                <div className="projecta-metode-effekt-section">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h3>METODE</h3>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h3>EFFEKT</h3>
                        </Col>
                    </Row>
                </div>
        
                <div className="projecta-data-section">
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        </Col>
                    </Row>
                </div>
        
                <div className="projecta-contact">
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        </Col>
                    </Row>
                </div>
        
            </Container>    
        </div>
    );
}


export default Projects;