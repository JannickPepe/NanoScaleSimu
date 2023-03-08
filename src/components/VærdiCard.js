import { db } from "../db/firebaseConfig";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Card, Col, Row } from "react-bootstrap";

import { motion } from "framer-motion";

import "../styles/Home.css"


const ValueCard = () => {

     // State to store data todos
    const [todos, setTodos] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "værdisæt"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);                
            }
        )
    }
    useEffect(()=>{
        fetchPost();
    }, [])



    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "[Læs Mere]" : " [Vis Mindre]"}
                </span>
            </p>
        );
    };

    
    return (
        <Row xs={1} md={1} lg={3} xl={3} className="g-4 px-4">
            {
                todos?.map((todo,i)=>(
                    <div key={i}>
                        <Col style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >

                            <Card className="shadow-lg" style={{borderRadius:25, width:400}}> 
                                <div className="card-img">
                                    <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 3 }} 
                                    >
                                        <Card.Img style={{borderTopRightRadius:25, borderTopLeftRadius:25}}  variant="top" src={todo.image} alt="Description"/>
                                    </motion.div>
                                </div>
                                <Card.Body>
                                    <div className="valuetitletekst px-2 pb-4">
                                        <Card.Title className="text-center"><h4>{todo.titel}</h4></Card.Title>
                                        <hr></hr>
                                        <Card.Text style={{zIndex:9}}><ReadMore >{todo.tekst}</ReadMore></Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                                
                        </Col>
                    </div>

                ))
            }
        </Row>
    );

}

export default ValueCard;
