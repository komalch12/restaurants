import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg'; // Ensure the correct path to your logo image
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/Header.css'; // Import custom styles for the header

function Header() {
    return (
        <Navbar expand="lg" style={styles.navbar}>
            <Container style={styles.container}>
                {/* Logo and Brand Name */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src={logo} alt="Urban Bites Logo" className="logo-img" style={styles.logo} />
                    <span style={styles.brandText}>Urban Bites</span>
                </Navbar.Brand>

                {/* Navigation Links */}
                <Nav className="me-auto" style={styles.nav}>
                    <Nav.Link as={Link} to="/" style={styles.navLink}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" style={styles.navLink}>About Us</Nav.Link>
                    <Nav.Link as={Link} to="/menu" style={styles.navLink}>Menu</Nav.Link>
                    <Nav.Link as={Link} to="/services" style={styles.navLink}>Services</Nav.Link>
                </Nav>

                {/* Search Form */}
                <Form className="d-flex" style={styles.searchForm}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        style={styles.searchInput}
                    />
                    <Button variant="outline-light" style={styles.searchButton}>Search</Button>
                </Form>

                {/* Login Link */}
                <Nav>
                    <Nav.Link as={Link} to="/login" style={styles.navLink}>
                        <AccountCircleIcon /> Login
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#D2691E', // Chocolate color
        color: '#FAFAD2', // Light goldenrod yellow color
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px', // Reduce container padding
    },
    logo: {
        width: '30px', // Reduce logo size
        height: '30px',
    },
    brandText: {
        color: '#FAFAD2', // Light goldenrod yellow color
        fontSize: '20px', // Reduce font size
        fontWeight: 'bold',
        marginLeft: '5px', // Reduce margin
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
    },
    navLink: {
        color: '#FAFAD2', // Light goldenrod yellow color
        marginLeft: '10px', // Reduce margin
        fontSize: '14px', // Reduce font size
    },
    searchForm: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px', // Reduce margin
    },
    searchInput: {
        backgroundColor: '#FAFAD2',
        color: '#D2691E',
        fontSize: '14px', // Reduce font size
        padding: '5px', // Reduce padding
    },
    searchButton: {
        color: 'white',
        borderColor: '#FAFAD2',
        fontSize: '14px', // Reduce font size
        padding: '5px 10px', // Reduce padding
    },
};

export default Header;
