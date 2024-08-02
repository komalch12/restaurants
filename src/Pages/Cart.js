import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Cart.css';

const initialCartItems = [
  { id: 1, name: 'Bruschetta', price: 5.99, quantity: 2 },
  { id: 2, name: 'Margherita Pizza', price: 11.99, quantity: 1 },
  { id: 3, name: 'Tiramisu', price: 6.99, quantity: 3 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <Container className="cart-page">
      <h1 className="text-center my-5">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cartItems.map(item => (
              <Col key={item.id} md={4} className="mb-4">
                <Card className="cart-item">
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Price: ${item.price.toFixed(2)}</Card.Text>
                    <Card.Text>Quantity: {item.quantity}</Card.Text>
                    <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mt-4">
            <Col className="text-right">
              <h4>Total: ${calculateTotal()}</h4>
              <Button variant="danger" onClick={handleClearCart}>Clear Cart</Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Cart;
