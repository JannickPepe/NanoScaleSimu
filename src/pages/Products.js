import React from "react";
import { Col, Row, Container, Image, Card } from "react-bootstrap";
import HeroVideo from "../components/produkter/produktVideo";
import Mor from '../components/produkter/forløbGuide'
import Far from "../components/produkter/forløbInfo";
import VerticalTabs from "../components/produkter/produktSektion";



function Products() {
    return (
        <div className="Products">     
            <Container fluid>   
                
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12}>
                        <div className='hero-video text-center'>
                            <h1>Discover <span>NanoScale,</span> your integrated platform for molecular </h1>
                            <HeroVideo/>
                        </div>
                    </Col>
                </Row>
    
                <Row className="">
                    <div className="produkt-forløb-titel text-center">
                        <h2>Vores Projekt Forløb</h2>
                        <hr></hr>
                    </div>
                    <Col className="" sm={{span:12, offset:0}} md={{span:4, offset:0}} lg={{span:3, offset:1}} xl={{span:3, offset:1}} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div className="produkt-forløb-left text-center">
                            <h3 className="">Projekt Forløb Info</h3>
                            <Far/>
                        </div>
                    </Col>
                    <Col sm={12} md={8} lg={8} xl={8}>
                        <div className="produkt-forløb-right text-center">
                            <h3 className="">Projekt Forløb Proces</h3>
                            <Mor/>
                        </div>
                    </Col>
                </Row>

                <div className="produkt-sektion">
                    <Row>
                        <Col>
                            <div className="produkt-sektion-titel text-center">
                                <h2>Vores Produkter</h2>
                                <hr></hr>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <VerticalTabs/>
                        </Col>
                    </Row>
                </div>



                <div className="vide-mere-sektion">
                    <Row>
                        <Col>
                            <div className="vide-mere-titel text-center">
                                <h2>Vide mere om vores projekter?</h2>
                                <hr></hr>
                            </div>
                        </Col>
                    </Row>

                    <Container>
                        <Row style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Col sm={12} md={9} lg={9} xl={9} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div className="vide-mere-body" style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                                    <div className="vide-mere-img" style={{}}>
                                        <Image roundedCircle alt="vision" src={require('../img/galleri6.jpg')} style={{height:130}} />
                                    </div>
                                    <div className="vide-mere-tekst" style={{}}>
                                        <Card.Body>
                                            <Card.Title>
                                                <h4>Project XY, At Roskilde campus</h4>
                                            </Card.Title>
                                            <Card.Link href="/projekter">
                                                Læs mere
                                            </Card.Link>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <div className="vide-mere-ekstra text-center" style={{}}>
                                    <p style={{fontWeight:'bold'}}>Er du ikke helt sikker på hvad vores projekter kan udføre? </p>
                                    <p>Få afklaret dine svar her: <a href="/about"><span>Schedule a live demo.</span></a></p>
                                </div>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>




                <div className="ydelser-sektion">
                    <div className="ydelser-titel text-center">
                        <Row>
                            <Col>
                                <h2>Hvad kan vi tilbyde af ydelser?</h2>
                                <hr></hr>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col>
                            <div className="prem-sektion">
                                
                            </div>
                        </Col>
                        <Col>
                            <div className="fri-sektion">

                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
}


export default Products;