import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CgPhone } from "react-icons/cg";
import "./css/footer.css";

function Footer() {
  return (
    <footer className="mt-5 footer1">
      <Container>
        <Row className="footerRow">
          <Col md={4}>
            <h4>Ambulance Number:</h4>
            <p> <CgPhone />  123-456-7890</p>
          </Col>
          <Col md={4}>
            <h4>Police Number:</h4>
            <p> <CgPhone />  555-555-5555</p>
          </Col>
          <Col md={4}>
            <h4>Proctor Number:</h4>
           <p> <CgPhone />  111-222-3333</p>
          </Col>
         
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
