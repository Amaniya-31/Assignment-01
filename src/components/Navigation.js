import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Logo from '../oncoin.png';

function Navigation() {
    return (
        <div>
            <Container className="page-tp-mgn">
                <Navbar collapseOnSelect expand="lg" >
                    <Navbar.Brand className="oncoin float-left text-brand" href="#home">
                        <img src={Logo} width="90" height="90" className="display-inline align-top" alt="" />
                    </Navbar.Brand>
                    <Navbar.Brand className="oncoin float-left text-brand align-top" href="#home">
                        oncoin
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-line">
                            <Nav.Link className="text-link" href="#platform">Platform</Nav.Link>
                            <Nav.Link className="text-link" href="#features">Features</Nav.Link>
                            <Nav.Link className="text-link" href="#company">Company</Nav.Link>
                            <Nav.Link className="text-link" href="#blog">Blog</Nav.Link>
                            <Nav.Link className="text-link" href="#contact-us">Contact us</Nav.Link>
                        </Nav>
                        <Nav className="nav-line float-right margin-right">
                            <Nav.Link className="text-link" href="#sign-in">Sign in</Nav.Link>
                            <Nav.Link className="text-link" href="#sign-up">
                                <Button className="su-btn">Sign up</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navigation;
