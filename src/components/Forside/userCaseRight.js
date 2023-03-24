import { db } from "../../db/firebaseConfig";
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where} from "firebase/firestore";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";

import '../../styles/Home.css';


const UserCaseRight = () => {

    // State to store data to the 2x different usercase collections
    const [usercase, setUsercase] = useState([]);


    // collection ref
    const colRef = collection(db, 'usercase')


    // queries
    const q = query(colRef, where('titel', '==', 'usercaseRight'))




    const fetchPost = async () => {
        await getDocs(q)
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id}));
            setUsercase(newData);
        })
    }
    useEffect(() => {
        fetchPost();
    })


    
    return (
        <div className="usercase my-4">
            

            <Container>
                <div className="usercase-wrapper2 my-4">
                    {
                        usercase?.map((usercase, i)=>(
                            <Card className="shadow-lg" style={{borderRadius:20}}>
                                    <Row key={i}>
                                        <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1, offset:3}} lg={{span: 8, order: 1, offset:0}}>
                                            <Image className="p-4" src={usercase.image} alt="llalal" style={{maxHeight:500}}></Image>
                                        </Col>
                                        <Col xs={{span: 12, order: 2}} md={{span: 12, order: 2}} lg={{span: 4, order: 2, offset:0}}>
                                            <div className="usercase-info p-4">
                                                <h4>{usercase.titel}</h4>
                                                <hr></hr>
                                                <h5>Beskrivelse:</h5>
                                                <p>{usercase.tekst}</p>
                                                <hr></hr>
                                                <ListGroup horizontal>
                                                    <ListGroup.Item>Jannick Pedersen</ListGroup.Item>
                                                    <ListGroup.Item>Dato: 24-03-2023</ListGroup.Item>
                                                </ListGroup>
                                            </div>
                                        </Col>
                                    </Row>
                                
                            </Card>
                        ))
                    }
                </div>
            </Container>


    
        
        </div>
    );

}

export default UserCaseRight;
