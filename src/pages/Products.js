import React from "react";
import { Col, Row, Container, Image, Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import HeroVideo from "../components/produkter/produktVideo";
import Mor from '../components/produkter/forløbGuide'
import Far from "../components/produkter/forløbInfo";
import VerticalTabs from "../components/produkter/produktSektion";
import { BsDot, BsArrowRight } from "react-icons/bs";



function Products() {
    return (
        <div className="Products">     
            <Container fluid>   
                
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12}>
                        <div className='hero-video text-center'>
                            <h1>Discover <span>NanoScale</span>, your integrated platform for molecular </h1>
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
                        <Col sm={12} md={8} lg={8} xl={8} >
                            <div className="prem-sektion">
                                <div className="prem-sektion-titel text-center">
                                    <h3>Premium versioner</h3>
                                </div>
                                <Row style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Col sm={{span:12, offset:0}} md={{span:6, offset:0}} lg={{span:4, offset:0}} xl={{span:4, offset:0}}>
                                        <div className="prem-one">
                                            <Card style={{borderTopRightRadius:20, borderTopLeftRadius:20}}>
                                                <div className="bg-info" style={{height:15, borderTopRightRadius:20, borderTopLeftRadius:20}}></div>
                                                <div className="prem-one-img text-center" style={{height:150, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                    <Image roundedCircle alt="2pacShakur" src={require('../img/academic.jpg')} style={{height:130}}></Image>
                                                </div>
                                             
                                                    <Card.Title className="text-center text-info">
                                                        <h5>Academic</h5>
                                                    </Card.Title>
                                          
                                                <Card.Subtitle className="text-center mt-2">
                                                    <p>2 User Licenses</p>
                                                    <p>$299/6md</p>
                                                </Card.Subtitle>
                                                <Card.Text style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                    <div className="bg-info" style={{height:3, width:200}}></div>
                                                </Card.Text>
                                                <Card.Body>
                                                <ListGroup>
                                                    <ListGroupItem><BsDot/> structures from RCSB</ListGroupItem>
                                                    <ListGroupItem><BsDot/>Host public workspaces</ListGroupItem>
                                                    <ListGroupItem><BsDot/>Join public workspaces</ListGroupItem>
                                                    <ListGroupItem><BsDot/>Basic molecular views</ListGroupItem>
                                                    <ListGroupItem><BsDot/>Basic editing features</ListGroupItem>
                                                    <ListGroupItem><BsDot/>Load up to 2 molecules at a time</ListGroupItem>
                                                </ListGroup>
                                                </Card.Body>
                                                <Card.Body>
                                                <div className="prem-two-policy text-center">
                                                        <ListGroup >
                                                            <ListGroupItem className="text-secondary"><BsArrowRight/> For government and academic labs only</ListGroupItem>
                                                        </ListGroup>
                                                    </div>
                                                </Card.Body>
                                                <div className="prem-two-btn text-center mb-3">
                                                    <Button>Anmod om køb</Button>
                                                </div>
                                            </Card>
                                        </div>
                                    </Col>

                                    <Col sm={{span:12, offset:0}} md={{span:6, offset:0}} lg={{span:4, offset:1}} xl={{span:4, offset:1}}>
                                        <div className="prem-two">
                                            <Card style={{borderTopRightRadius:20, borderTopLeftRadius:20}}>
                                            <div className="bg-info" style={{height:15, borderTopRightRadius:20, borderTopLeftRadius:20}}></div>
                                            <div className="prem-two-img text-center" style={{height:150, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                <Image roundedCircle alt="2pacShakur" src={require('../img/research.jpg')} style={{height:130}}></Image>
                                            </div>
                                                <Card.Title className="text-center text-info">
                                                        <h5>Researcher</h5>
                                                    </Card.Title>
                                                <Card.Subtitle className="text-center mt-2">
                                                    <p>2 User Licenses</p>
                                                    <p>$299/6md</p>
                                                </Card.Subtitle>
                                                <Card.Text style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                    <div className="bg-info" style={{height:3, width:200}}></div>
                                                </Card.Text>
                                                <Card.Body>
                                                    <ListGroup>
                                                        <ListGroupItem><BsDot/> structures from RCSB</ListGroupItem>
                                                        <ListGroupItem><BsDot/>Host public workspaces</ListGroupItem>
                                                        <ListGroupItem><BsDot/>Join public workspaces</ListGroupItem>
                                                        <ListGroupItem><BsDot/>Basic molecular views</ListGroupItem>
                                                        <ListGroupItem><BsDot/>Basic editing features</ListGroupItem>
                                                        <ListGroupItem><BsDot/>Load up to 2 molecules at a time</ListGroupItem>
                                                    </ListGroup>
                                                </Card.Body>
                                                <Card.Body>
                                                <div className="prem-two-policy text-center">
                                                        <ListGroup >
                                                            <ListGroupItem className="text-secondary"><BsArrowRight/> For non-commercial use only</ListGroupItem>
                                                        </ListGroup>
                                                    </div>
                                                </Card.Body>
                                                <div className="prem-two-btn text-center mb-3">
                                                    <Button>Anmod om køb</Button>
                                                </div>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span:12, offset: 0}} md={{span: 4, offset: 0}} lg={{span: 4, offset:0}} xl={{span: 4, offset:0}}>
                            <div className="fri-sektion">
                                <div className="fri-sektion-titel text-center">
                                    <h3>Gratis version</h3>
                                </div>
                                <div className="fri-sektion-data">
                                    <Card style={{borderTopRightRadius:20, borderTopLeftRadius:20}}>
                                        <div className="bg-dark" style={{height:15, borderTopRightRadius:20, borderTopLeftRadius:20}}></div>
                                        <div className="fri-img text-center" style={{height:150, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Image roundedCircle alt="2pacShakur" src={require('../img/free.jpg')} style={{height:140}}></Image>
                                        </div>
                                        
                                            <Card.Title className="text-center text-info">
                                                <h5>Personal</h5>
                                            </Card.Title>
                                        
                                        <Card.Subtitle className="text-center mt-2">
                                                    <p>2 User Licenses</p>
                                                    <p>$299/6md</p>
                                                </Card.Subtitle>
                                                <Card.Text style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                    <div className="bg-dark" style={{height:3, width:200}}></div>
                                                </Card.Text>
                                                <Card.Body>
                                                    <ListGroup>
                                                        <ListGroupItem><BsDot/> structures from RCSB</ListGroupItem>
                                                        <ListGroupItem><BsDot/>Host public workspaces</ListGroupItem>
                                                        <ListGroupItem><BsDot/>Join public workspaces</ListGroupItem>
                                                        <ListGroupItem><BsDot/>Basic molecular views</ListGroupItem>
                                                        <ListGroupItem><BsDot/>Basic editing features</ListGroupItem>
                                                        <ListGroupItem><BsDot/>Load up to 2 molecules at a time</ListGroupItem>
                                                    </ListGroup>
                                                </Card.Body>
                                                <Card.Body>
                                                <div className="prem-two-policy text-center">
                                                        <ListGroup >
                                                            <ListGroupItem className="text-secondary"><BsArrowRight/> For students and schools</ListGroupItem>
                                                        </ListGroup>
                                                    </div>
                                                </Card.Body>
                                                <div className="prem-two-btn text-center mb-3">
                                                    <Button>Anmod om køb</Button>
                                                </div>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
}


export default Products;