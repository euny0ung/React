import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation(){
    return(
        <div className="Navigation">

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/home">Home</Navbar.Brand>
                        <Nav className="ml-auto">
                        <NavDropdown title="Member" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/committee">Committee</NavDropdown.Item>
                            <NavDropdown.Item href="/gradstu">Graduate student</NavDropdown.Item>
                            <NavDropdown.Item href="/researcher">Researcher</NavDropdown.Item>
                        </NavDropdown>
                            <Nav.Link href="/research">Research</Nav.Link>
                            <Nav.Link href="/publications">Publications</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

        </div>
    )
}

export default Navigation;
