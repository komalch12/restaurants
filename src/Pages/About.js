import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';
import chefImage from '../images/chef.jpg';
import interiorImage from '../images/interior.jpg';
import ingredientsImage from '../images/ingredients.jpg';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-section text-center">
        <Container>
          <h1>About Urban Bites</h1>
          <p>Discover our story and meet the people who make it all happen.</p>
        </Container>
      </section>
      
      <section className="story-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={chefImage} alt="Chef" className="img-fluid rounded centered-image" />
            </Col>
            <Col md={6}>
              <div className="text-center">
                <h2>Our Story</h2>
                <p>Urban Bites was founded with the vision of creating a unique dining experience. Our passion for culinary excellence and dedication to using the finest ingredients has made us a favorite destination for food enthusiasts.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="team-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} order={2}>
              <div className="text-center">
                <h2>Meet Our Team</h2>
                <p>Our talented team of chefs and staff are committed to providing you with the best dining experience. Each member of their team brings a wealth of experience and creativity to the table.</p>
              </div>
            </Col>
            <Col md={6} order={1}>
              <img src={interiorImage} alt="Restaurant Interior" className="img-fluid rounded centered-image" />
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="ingredients-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={ingredientsImage} alt="Ingredients" className="img-fluid rounded centered-image" />
            </Col>
            <Col md={6}>
              <div className="text-center">
                <h2>Quality Ingredients</h2>
                <p>We believe that great dishes start with the best ingredients. We source our produce, meats, and seafood from trusted suppliers to ensure that every meal is of the highest quality.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
