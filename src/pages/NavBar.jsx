import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-light shadow mb-0 position-sticky">
            <Container>
                <Navbar.Brand as={Link} to={'/'} className='text-decoration-none text-danger'>
                    <FontAwesomeIcon icon={faShop} className='me-2 text-danger' />
                    Maahi-Store
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={'/gallery'} className=' text-decoration-none text-dark'>
                            Gallery
                        </Nav.Link>
                        <Nav.Link as={Link} to={'/contact'} className=' text-decoration-none text-dark'>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar







