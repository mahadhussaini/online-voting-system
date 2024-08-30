import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-5 py-3">
      <Container>
        <Row>
          <Col>
            <p className="text-center mb-0">
              &copy; 2024 VoteNow. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
