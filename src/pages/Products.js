import React from "react";
import { Col, Row, Container, Image, Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import HeroVideo from "../components/produkter/produktVideo";
import Mor from '../components/produkter/forløbGuide'
import Far from "../components/produkter/forløbInfo";
import VerticalTabs from "../components/produkter/produktSektion";
import { BsDot, BsArrowRight } from "react-icons/bs";
import SimpleBottomNavigation from "../components/produkter/iconBar";



function Products() {
    return (
        <div className="Products">     
            <Container fluid>   
                
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12}>
                        <div className='hero-video text-center'>
                            <div class="row my-4 mb-lg-5">
                                <div class="col-lg-9 mx-auto text-center">
                                    <div class="lc-block mb-4">
                                        <div editable="rich">
                                            <h1 class="display-3">Discover <span style={{color:'#3C9FE1'}}>NanoScale</span><br/>
                                            Your integrated platform for molecular</h1>
                                        </div>
                                    </div>

                                    <div class="lc-block mb-2">
                                        <div editable="rich">
                                            <p class="text-muted lead">Med vores gennemførende VR teknologi, vil alt indlæring være muligt!</p>
                                        </div>
                                    </div>
                                    <div class="lc-block d-grid d-lg-block gap-2 mt-4 py-2">
                                        <SimpleBottomNavigation/>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2 ">
                                <div class="col-12 mx-auto text-center">
                                <HeroVideo/>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
    
                <Row>
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

                    <div class="container p-5 bg-light">
                        <div class="row">
                            <div class="col-md-4 align-self-center">
                                <div class="lc-block border-end border-2">
                                    <div editable="rich">
                                        <p class="display-4 text-dark text-center">Project XY</p>
                                        <div className="text-center">
                                            <Image roundedCircle alt="vision" src={require('../img/galleri6.jpg')} style={{height:200}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="lc-block ">
                                    <div editable="rich">
                                        <p class="display-4" style={{color:'#3C9FE1'}}>Showcase our Project XY in Zealand Campus, Roskilde</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-9 offset-md-1">
                                <div class="lc-block mt-5">
                                    <div editable="rich">
                                        <p class="lead text-secondary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat. In pellentesque scelerisque auctor.&nbsp;</p>
                                    </div>
                                </div>
                                <Card.Link className="text-start" href="/projekter">
                                    <p>Læs mere</p>
                                </Card.Link>
                            </div>
                        </div>
                        <Row>
                            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div className="vide-mere-ekstra text-center mt-4 pt-4 pb-4" style={{backgroundColor:'white', padding:10, maxWidth:600, borderRadius:30}}>
                                    <p style={{fontWeight:'bold', padding:10}}>Er du ikke helt sikker på hvad vores projekter kan udføre? </p>
                                    <p>Få afklaret dine svar her: <a href="/about"><span>Schedule a live demo.</span></a></p>
                                </div>
                            </Col>
                        </Row>
                    </div>      
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
                                    <Col sm={{span:12, offset:0}} md={{span:6, offset:0}} lg={{span:6, offset:0}} xl={{span:6, offset:0}}>
                                        <div className="prem">
                                            <Card style={{borderTopRightRadius:20, borderTopLeftRadius:20}}>
                                                <div className="bg-info" style={{height:15, borderTopRightRadius:20, borderTopLeftRadius:20}}></div>
                                                <div className="prem-img text-center" style={{height:150, display: "flex", justifyContent: "center", alignItems: "center"}}>
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
                                                    <div className="bg-info" style={{height:3, width:250}}></div>
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
                                                    <div className="prem-policy text-center">
                                                        <ListGroup >
                                                            <ListGroupItem className="text-secondary"><BsArrowRight/> For government and academic labs only</ListGroupItem>
                                                        </ListGroup>
                                                    </div>
                                                </Card.Body>
                                                <div className="product-btn text-center mb-3">
                                                    <Button className="prem-btn" style={{}}>Anmod om køb</Button>
                                                </div>
                                            </Card>
                                        </div>
                                    </Col>

                                    <Col sm={{span:12, offset:0}} md={{span:6, offset:0}} lg={{span:6, offset:0}} xl={{span:6, offset:0}}>
                                        <div className="prem">
                                            <Card style={{borderTopRightRadius:20, borderTopLeftRadius:20}}>
                                                <div className="bg-info" style={{height:15, borderTopRightRadius:20, borderTopLeftRadius:20}}></div>
                                                <div className="prem-img text-center" style={{height:150, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                    <Image roundedCircle alt="2pacShakur" src={require('../img/research.jpg')} style={{height:130}}></Image>
                                                </div>
                                                <Card.Title className="text-center text-info">
                                                    <h5>Research</h5>
                                                </Card.Title>
                                                <Card.Subtitle className="text-center mt-2">
                                                    <p>2 User Licenses</p>
                                                    <p>$299/6md</p>
                                                </Card.Subtitle>
                                                <Card.Text style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                    <div className="bg-info" style={{height:3, width:250}}></div>
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
                                                    <div className="prem-policy text-center">
                                                        <ListGroup >
                                                            <ListGroupItem className="text-secondary">
                                                            <BsArrowRight/> For non-commercial use only</ListGroupItem>
                                                        </ListGroup>
                                                    </div>
                                                </Card.Body>
                                                <div className="product-btn text-center mb-3">
                                                    <Button className="prem-btn" style={{}}>Anmod om køb</Button>
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
                                            <div className="fri-policy text-center">
                                                <ListGroup >
                                                    <ListGroupItem className="text-secondary"><BsArrowRight/> For students and schools</ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </Card.Body>
                                        <div className="product-btn text-center mb-3">
                                            <Button className="fri-btn" style={{}}>Anmod om køb</Button>
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