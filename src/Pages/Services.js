import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Service.css'; // Ensure correct path to your CSS file
import cateringImage from '../images/catering.jpg';
import deliveryImage from '../images/delivery.jpg';
import eventImage from '../images/event.jpg';

const services = [
  {
    title: 'Catering Services',
    description: 'We offer exceptional catering services for all types of events, ensuring a memorable dining experience for you and your guests.',
    image: cateringImage
  },
  {
    title: 'Home Delivery',
    description: 'Enjoy our delicious dishes in the comfort of your home with our fast and reliable home delivery service.',
    image: deliveryImage
  },
  {
    title: 'Event Hosting',
    description: 'Host your special events at Urban Bites. Our team will make sure your event is perfect, down to the last detail.',
    image: eventImage
  }
];

const Services = () => {
  return (
    <Container className="services-page">
      <h1 className="text-center my-5">Our Services</h1>
      
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
            <Card className="service-card">
              <Card.Img variant="top" src={service.image} className="card-img-top" />
              <Card.Body>
                <Card.Title className="card-title">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
