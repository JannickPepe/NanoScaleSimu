
import React, { useState } from 'react';
import { db } from "../../db/firebaseConfig";
import { addDoc, collection } from "firebase/firestore"; // Firebase props

import { Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function SignUp() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     // Make constructors where you create name, email and message onto setStateActions with setName and then have it to be in a useState method
    // You can now make event target handlers in the render
    const [name, setName] = useState();
    const [email, setEmail] = useState();


    const userCollectionRef = collection(db, "signupdata");

    const handleSubmit = () => {
        addDoc(userCollectionRef, {
            name: name,
            email: email
        }).then(()=>{
            if(!alert("Free version sign up succeded!!"))document.location = 'http://localhost:3000/'
        }).catch((error) =>{
            alert(error.message)
        })
    }

    return (

        <Container>

            <div className='signup-body'>
                <InputGroup className="mb-3">
                    <SplitButton className='' variant="outline-secondary" title="Sign Up" onClick={handleShow} >
                    <Dropdown.ItemText>Læs Om:</Dropdown.ItemText>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Premium version</Dropdown.Item>
                    <Dropdown.Item href="#">Free version</Dropdown.Item>
                    </SplitButton>
                </InputGroup>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Free version</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Her kan du sign up til vores frie version.<br/>
                        Du kan også henvende dig til vores pris liste i vores dropdown.<br/>
                        Hvor bl.a Premium version kan købes.
                    </Modal.Body>
                    <Container>
                        <Form>
                            <Form.Group className=" mb-3">
                                <Form.Label>Fulde Navn</Form.Label>
                                <Form.Control type="text" placeholder="Fornavn og efternavn her" onChange={(event) => { setName(event.target.value) }} />
                            </Form.Group>

                            <Form.Group className=" mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" onChange={(event) => { setEmail(event.target.value) }} />
                            </Form.Group>
                        </Form>
                    <Button className='mb-4' variant="primary" type="submit" onClick={handleSubmit}>Sign up</Button>
                    </Container>
                </Modal>
            </div>

        </Container>

    );
}

