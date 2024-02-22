import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchInput from '../input/SearchInput';

const Navigation = ({ onSearchChange }) => { // Assicurati di ricevere onSearchChange come prop
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    
                    <SearchInput onSearchChange={onSearchChange} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;