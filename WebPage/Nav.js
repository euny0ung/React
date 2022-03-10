import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation(){
    return (
        <div className="Navigation">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#research">Research</Nav.Link>
                        <Nav.Link href="#Admin">Admin</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}


export default Navigation;