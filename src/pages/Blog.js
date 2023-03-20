
import React from 'react';
import { motion} from "framer-motion";
// import { db } from "../db/firebaseConfig";
// import { collection, getDocs, where, query, limit } from "firebase/firestore";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import RecipeReviewCard from '../components/Blog/blogOne';

import '../styles/Blog.css';
import RecipeReviewCardTwo from '../components/Blog/blogTwo';
import RecipeReviewCardThree from '../components/Blog/blogThree';

import ListGroup from 'react-bootstrap/ListGroup';

// const q = query(colRef, where('label', '==', 1,), limit(3))


function Blog() {
    


    return (
        <div className="blog">   
            <Container>     
                <div className="hero-section-blog">
                    <Row>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Card className='shadow-lg' style={{borderRadius:30}}>
                                <Card.Body>
                                    <div className="hero-title-blog">
                                    <motion.div
                                        animate={{ x: [1, 50, 1], opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 2,
                                            delay: 0.2,
                                            ease: [0.5, 0.71, 1, 1.5],
                                        }}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                    >
                                        <h1>Er Du Nysgerrig Efter Hvad Vi Har Lavet?</h1>
                                        </motion.div>
                                    </div>
                                    <div className="hero-mellemtitel-blog">
                                    <motion.div
                                        animate={{ x: [1, 50, 1], opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 2,
                                            delay: 0.2,
                                            ease: [0.5, 0.71, 1, 1.5],
                                        }}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                    >
                                        <h3>Her Hos NanoScaleSolutions - Har Vi Spændende Blogs Klar!</h3>
                                        </motion.div>
                                    </div>
                                    <div className="hero-tekst-blog mt-4">
                                        <motion.div
                                        whileHover={{ scale: 1.1}}>
                                            {['sm'].map((breakpoint) => (
                                                <ListGroup style={{display: "flex", justifyContent: "center", alignItems: "center"}} key={breakpoint} horizontal={breakpoint} className="my-2">
                                                <ListGroup.Item style={{borderRadius:20}}><p>Læs Om Vores Platform I Ingeniøren</p></ListGroup.Item>
                                                <ListGroup.Item style={{border:'none'}}><Button className='text-light' href="#" size="lg" variant="info">Klik Her</Button>{' '}</ListGroup.Item>
                                                </ListGroup>
                                            ))}
                                        </motion.div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}> 
                            <motion.div
                                whileHover={{ scale: 0.9}}
                            >
                                <Image fluid roundedCircle className='hero-blog-img' alt="vision" src={require('../img/galleri6.jpg')} style={{height:'auto', width:'auto',}} />
                            </motion.div>
                        </Col>
                    </Row>
                </div>


                <Row>
                    <Col>
                        <div className='blog-mellemtitel-section'>
                            <h2>Følg med i vores nyeste blogs!</h2>
                            <hr></hr>
                        </div>
                    </Col>
                </Row>



                <div className="blog-section-two pt-4 px-4">
                    <Row>
                        <Col xs={{span:12, offset:0}} md={{span:6, offset:0}} lg={{span:5, offset:1}} xl={{span:5, offset:1}} >
                            <div className='blog-section-two-cardone'>
                                <RecipeReviewCard/>
                            </div>
                        </Col>
                        <Col xs={{span:12, offset:0}} md={{span:6, offset:0}} lg={{span:5, offset:0}} xl={{span:5, offset:0}}>
                            <div className='blog-section-two-cardtwo'>
                                <RecipeReviewCardTwo/>
                            </div>            
                        </Col>
                    </Row>
                </div>



                <Row>
                    <Col>
                        <div className='blog-mellemtitel-section'>
                            <h2>Andre blogs!</h2>
                            <hr></hr>
                        </div>
                    </Col>
                </Row>


                <div className="blog-section-one py-4">
                    <Row xs={1} md={2} lg={3} xl={3} className="g-4 px-4">
                        <Col>
                            <div className='blog-section-two-cardthree'>
                                <RecipeReviewCard/>
                            </div>
                        </Col>
                        <Col>
                            <div className='blog-section-two-cardfour'>
                                <RecipeReviewCardTwo/>            
                            </div>
                        </Col>
                        <Col>
                            <div className='blog-section-two-cardfive mb-4'>
                                <RecipeReviewCardThree/>    
                            </div>
                        </Col>
                    </Row>
                </div>


            </Container>
        </div>
    );
}


export default Blog;