import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <p className="footer-text">Inspiration comes from within yourself, keep on "Inspiring"!</p>
          </Col>
        </Row>
      </Container>
      {/* <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col xs={12} className="text-center">
            <p className="footer-text">Inspiration comes from within yourself, keep on "Inspiring"!</p>
          </Col>
        </Row>
      </Container> */}
    </footer>
  );
}
