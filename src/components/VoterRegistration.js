import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const VoterRegistration = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} xs={12}>
          <h3 className="text-center mb-4">Voter Registration</h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default VoterRegistration;
