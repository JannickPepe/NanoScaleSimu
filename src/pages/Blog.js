
import React from 'react';
import { motion} from "framer-motion";
// import { db } from "../db/firebaseConfig";
// import { collection, getDocs, where, query, limit } from "firebase/firestore";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import RecipeReviewCard from '../components/Blog/blogOne';

import '../styles/Blog.css';
import RecipeReviewCardTwo from '../components/Blog/blogTwo';
import RecipeReviewCardThree from '../components/Blog/blogThree';



// const q = query(colRef, where('label', '==', 1,), limit(3))


function Blog() {
    


    return (
        <div className="blog my-4">   
            <Container>     
                <h1 className="text-center">Blog</h1>
                <hr></hr>
                <div className="hero-section-blog">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4}> 
                            <motion.div
                                whileHover={{ scale: 0.9}}
                            >
                                <Image rounded className='hero-blog-img' alt="vision" src={require('../img/galleri6.jpg')} style={{}} />
                            </motion.div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                            <Card className='shadow-lg'>
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
                                        <h1>Spread Cheer with AR Christmas Cards that Stand Out</h1>
                                        </motion.div>
                                    </div>
                                    <div className="hero-mellemtitel-blog">
                                    <motion.div
                                        animate={{ x: [1, 50, 1], opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 3,
                                            delay: 0.3,
                                            ease: [0.5, 0.71, 1, 1.5],
                                        }}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                    >
                                        <h3>Learn how to create, print and send engaging AR christmas cards with Hololink</h3>
                                        </motion.div>
                                    </div>
                                    <div className="hero-tekst-blog mt-4">
                                        <motion.div
                                        whileHover={{ scale: 1.3}}>
                                        <p>Jens Bäckvall, PM @ Hololink NOVEMBER 15, 2022</p>
                                        </motion.div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>


                <Row>
                    <Col>
                        <div className='blog-mellemtitel-section'>
                            <h2>Følg med i vores spændende blogs!</h2>
                            <hr></hr>
                        </div>
                    </Col>
                </Row>


                <div className="blog-section-one my-4">
                    <Row xs={1} md={2} lg={3} xl={3} className="g-4 px-4">
                        <Col>
                            <RecipeReviewCard/>
                        </Col>
                        <Col>
                            <RecipeReviewCardTwo/>            
                        </Col>
                        <Col>
                            <RecipeReviewCardThree/>    
                        </Col>
                    </Row>
            
                </div>


                <div className="blog-section-two my-4">
                    
                </div>

            </Container>
        </div>
    );
}


export default Blog;