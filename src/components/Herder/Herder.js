import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Herder = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <li className='mx-2'><Link to="/">Home</Link></li>
                        <Link to="/cart">Cart</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Herder;