import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocalStorage } from 'react-use';
import '../styles/MenuPage.css'; // Ensure correct path to your CSS file
import bruschetta from '../images/bruschetta.jpg';
import stuffedMushrooms from '../images/stuffed-mushrooms.jpg';
import margheritaPizza from '../images/margherita-pizza.jpg';
import spaghettiCarbonara from '../images/spaghetti-carbonara.jpg';
import tiramisu from '../images/tiramisu.jpg';
import pannaCotta from '../images/panna-cotta.jpg';

const menu = {
  starters: [
    { name: 'Bruschetta', description: 'Grilled bread with garlic, tomatoes, olive oil.', price: '$5.99', image: bruschetta },
    { name: 'Stuffed Mushrooms', description: 'Mushrooms filled with cheese and garlic.', price: '$6.99', image: stuffedMushrooms },
  ],
  mains: [
    { name: 'Margherita Pizza', description: 'Classic pizza with tomatoes, mozzarella, and basil.', price: '$11.99', image: margheritaPizza },
    { name: 'Spaghetti Carbonara', description: 'Pasta with eggs, cheese, pancetta, and pepper.', price: '$13.99', image: spaghettiCarbonara },
  ],
  desserts: [
    { name: 'Tiramisu', description: 'Coffee-flavored Italian dessert.', price: '$6.99', image: tiramisu },
    { name: 'Panna Cotta', description: 'Creamy dessert topped with berries.', price: '$5.99', image: pannaCotta },
  ],
};

const Menu = () => {
  const [wishlist, setWishlist] = useLocalStorage('wishlist', []);

  const handleAddToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  return (
    <Container className="menu-page">
      <h1 className="text-center my-5">Our Menu</h1>
      
      <Row>
        <Col md={6} className="mb-4">
          <h2 className="section-title">Starters</h2>
          {menu.starters.map((item, index) => (
            <Card key={index} className="menu-card">
              <Card.Img variant="top" src={item.image} className="card-img-top" />
              <Card.Body>
                <Card.Title className="card-title">{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="price">{item.price}</Card.Text>
                {/* <Button variant="primary" onClick={() => handleAddToWishlist(item)}>Add to Wishlist</Button> */}
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col md={6} className="mb-4">
          <h2 className="section-title">Main Courses</h2>
          {menu.mains.map((item, index) => (
            <Card key={index} className="menu-card">
              <Card.Img variant="top" src={item.image} className="card-img-top" />
              <Card.Body>
                <Card.Title className="card-title">{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="price">{item.price}</Card.Text>
                {/* <Button variant="primary" onClick={() => handleAddToWishlist(item)}>Add to Wishlist</Button> */}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <h2 className="section-title">Desserts</h2>
          {menu.desserts.map((item, index) => (
            <Card key={index} className="menu-card">
              <Card.Img variant="top" src={item.image} className="card-img-top" />
              <Card.Body>
                <Card.Title className="card-title">{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="price">{item.price}</Card.Text>
                {/* <Button variant="primary" onClick={() => handleAddToWishlist(item)}>Add to Wishlist</Button> */}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
