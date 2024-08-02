import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../styles/Order.css'; // Ensure correct CSS file path and name

const initialOrders = [
  { id: 1, name: 'Bruschetta', price: '$5.99', quantity: 2, status: 'Pending' },
  { id: 2, name: 'Margherita Pizza', price: '$11.99', quantity: 1, status: 'Completed' },
  { id: 3, name: 'Tiramisu', price: '$6.99', quantity: 3, status: 'Pending' },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [newOrder, setNewOrder] = useState({ name: '', price: '', quantity: '', status: 'Pending' });

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  // Function to add a new order
  const handleAddOrder = () => {
    setOrders([...orders, { ...newOrder, id: orders.length + 1 }]);
    setNewOrder({ name: '', price: '', quantity: '', status: 'Pending' });
  };

  // Function to handle status change of an order
  const handleStatusChange = (id, status) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status } : order));
  };

  return (
    <Container className="orders-page">
      <h1 className="text-center my-5">Orders</h1>
      
      {/* Add New Order Section */}
      <section className="add-order-section">
        <h2>Add New Order</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Dish Name</Form.Label>
              <Form.Control type="text" name="name" value={newOrder.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" value={newOrder.price} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="text" name="quantity" value={newOrder.quantity} onChange={handleInputChange} />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" onClick={handleAddOrder}>Add Order</Button>
        </Form>
      </section>

      {/* Orders List Section */}
      <section className="orders-list">
        <h2>Order List</h2>
        <Row>
          {orders.map(order => (
            <Col key={order.id} md={4} className="mb-4">
              <Card className="order-card">
                <Card.Body>
                  <Card.Title>{order.name}</Card.Title>
                  <Card.Text>Price: {order.price}</Card.Text>
                  <Card.Text>Quantity: {order.quantity}</Card.Text>
                  <Card.Text>Status: {order.status}</Card.Text>
                  {/* Buttons to change order status */}
                  <Button 
                    variant={order.status === 'Pending' ? "success" : "warning"}
                    onClick={() => handleStatusChange(order.id, order.status === 'Pending' ? 'Completed' : 'Pending')}
                  >
                    {order.status === 'Pending' ? 'Mark as Completed' : 'Mark as Pending'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Orders;
