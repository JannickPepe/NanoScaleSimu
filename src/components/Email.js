
import React from "react";
import { db } from "../db/firebaseConfig";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore"; // Firebase props

import "../styles/Email.css";

import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function Email() {

    // Make constructors where you create name, email and message onto setStateActions with setName and then have it to be in a useState method
    // You can now make event target handlers in the render
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    // This const userCollectionRef connects to your collection in firebase and goes into db and create "contactdata"
    const userCollectionRef = collection(db, "contactdata");

    const handleSubmit = () => {
        addDoc(userCollectionRef, {
            name: name,
            email: email,
            message: message
        }).then(()=>{
            if(!alert("The mail got send!!"))document.location = 'http://localhost:3000/'
        }).catch((error) =>{
            alert(error.message)
        })
    }

    return (
        <div className="outer-container">
            <h3>Udfyld formularen</h3>

            <Container>

                <Form>
                    <Form.Group className="contactform mb-3">
                        <Form.Label>Fulde Navn</Form.Label>
                        <Form.Control type="text" placeholder="Fornavn og efternavn" onChange={(event) => { setName(event.target.value) }} />
                    </Form.Group>

                    <Form.Group className="contactform mb-3">
                        <Form.Label>Email addresse</Form.Label>
                        <Form.Control type="email" placeholder="Barack@Obama.com" onChange={(event) => { setEmail(event.target.value) }} />
                        <Form.Text className="text-muted">
                            <p>We'll never share your email with anyone else.</p>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="contactform mb-3">
                        <Form.Label>Læg venligst en kommentar</Form.Label>
                        <Form.Control type="text" placeholder="kommentar..." onChange={(event) => { setMessage(event.target.value) }} />
                    </Form.Group>
                </Form>
                <Button variant="primary" type="submit" onClick={ handleSubmit }>Submit</Button>

            </Container>

        </div>
    )

}


