import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


export const NavbarMain: React.FC = () => (
    <React.Fragment>
        <Navbar bg="light">
            <Navbar.Brand href="/">Developers Guild</Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/contributing">Contributing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" href="/contact" >Contact Us</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    </React.Fragment>
);
