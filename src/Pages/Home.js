import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Ensure Button is imported
import '../styles/Home.css';
import heroImage from '../images/hero.jpg';
import bruschetta from '../images/bruschetta.jpg';
import margheritaPizza from '../images/margherita-pizza.jpg';
import tiramisu from '../images/tiramisu.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-image-container text-center">
          <img src={heroImage} alt="Urban Bites" className="hero-image" />
          <div className="hero-text">
            <h1>Welcome to Urban Bites</h1>
            <p>Experience the best culinary delights</p>
            <Button variant="primary">Explore Menu</Button>
          </div>
        </div>
      </section>

      <section className="about-section py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h2>About Us</h2>
              <p>Urban Bites is a place where taste meets the myth. Our culinary experts prepare the best dishes for you to enjoy with your family and friends.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="menu-highlights py-5">
        <Container>
          <h2 className="text-center mb-5">Menu Highlights</h2>
          <Row className="justify-content-center text-center">
            <Col md={4} className="mb-4">
              <Card className="menu-card">
                <Card.Img variant="top" src={bruschetta} />
                <Card.Body>
                  <Card.Title>Bruschetta</Card.Title>
                  <Card.Text>Grilled bread with garlic, tomatoes, olive oil.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="menu-card">
                <Card.Img variant="top" src={margheritaPizza} />
                <Card.Body>
                  <Card.Title>Margherita Pizza</Card.Title>
                  <Card.Text>Classic pizza with tomatoes, mozzarella, and basil.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="menu-card">
                <Card.Img variant="top" src={tiramisu} />
                <Card.Body>
                  <Card.Title>Tiramisu</Card.Title>
                  <Card.Text>Coffee-flavored Italian dessert.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
