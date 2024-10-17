// pages/index.tsx
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import '../style.css'; // Import your custom styles
import { Navbar, Nav, NavDropdown, Container, Row, Col, Button, Image } from "react-bootstrap";
import {  Instagram } from 'react-bootstrap-icons';

const Home = () => {
  return (
    <main>
      {/* Navbar */}
      <Navbar className="mainHeader" expand="lg">
        <Container>
          <Navbar.Brand>
                  <Image
                      className="palacelogo img-fluid"
                      src="//images.squarespace-cdn.com/content/v1/63b710806ca7781c56e98fc8/c7f02361-07e1-478b-8959-bfac5e48aaa9/IP+Logo+2x3+Transparent.png?format=1500w"
                      alt="Ice Palace Logo"
                  />
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><strong className="text-white">Home</strong></Nav.Link>
            <Nav.Link><strong className="text-white">Rates</strong></Nav.Link>
            <NavDropdown  title={<strong className="text-white">Public Skate </strong>}>
              <NavDropdown.Item>Skate Hours</NavDropdown.Item>
              <NavDropdown.Item>FAQ</NavDropdown.Item>
              <NavDropdown.Item>Rink Rules</NavDropdown.Item>
              <NavDropdown.Item>Snack Bar Menu</NavDropdown.Item>
            </NavDropdown>

            
            <NavDropdown title={<strong className="text-white">Birthdays & Rink Rentals</strong>} >
              <NavDropdown.Item className="text-white">Birthday Parties</NavDropdown.Item>
              <NavDropdown.Item className="text-white">Private Rink Rentals</NavDropdown.Item>
            </NavDropdown>

            
            <NavDropdown title={<strong className="text-white">Learn to Skate</strong>}>
              <NavDropdown.Item className="text-white">Skate School</NavDropdown.Item>
              <NavDropdown.Item className="text-white">Freestyle Sessions</NavDropdown.Item>
              <NavDropdown.Item className="text-white">What to Expect</NavDropdown.Item>
              <NavDropdown.Item className="text-white">Coaches</NavDropdown.Item>
            </NavDropdown>

            
            <NavDropdown title={<strong className="text-white">Hockey</strong>}>
              <NavDropdown.Item className="text-white">Youth Hockey</NavDropdown.Item>
              <NavDropdown.Item className="text-white">Adult Hockey</NavDropdown.Item>
            </NavDropdown>

            
            <NavDropdown title={<strong className="text-white">About</strong>}>
              <NavDropdown.Item className="text-white">Contact</NavDropdown.Item>
              <NavDropdown.Item className="text-white">Our Story</NavDropdown.Item>
              <NavDropdown.Item className="text-white">Address</NavDropdown.Item>
              <NavDropdown.Item className="text-white">Employment</NavDropdown.Item>
              <NavDropdown.Item className="text-white">ProShop</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="justify-content-end text-white">
            <Nav.Link className="d-flex align-items-center">
              <Instagram className="fs-4 text-white" style={{ marginTop: '0' }} />
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center">
              <Image
                src="https://cdn2.nbcuni.com/NBCUniversal/2023-08/brands_sports_engine_clr.png?VersionId=YJ8m9MGOSL0NYwMWKzb9pqA9vJDSkEMP"
                alt="Sports Engine"
                style={{ filter: 'brightness(0) invert(1)', maxWidth: '50px' }}
              />
            </Nav.Link>
          </Nav>

        </Container>
      </Navbar>

      {/* Middle Section */}
      <div className="pt-5 pb-5 text-center middleDiv">
        <Container>
          <h1 className="text-white py-2"><strong>PUBLIC SKATE CALENDAR</strong></h1>
          <Row className="justify-content-center">
            <Col sm={5}>
              <a href="https://images.squarespace-cdn.com/content/v1/63b710806ca7781c56e98fc8/1dc13b88-da38-449d-8335-4e0c9314bd45/Public+Skate+Oct+2024.png?format=1500w" target="_blank" rel="noopener noreferrer">
                <Image
                  className="img-fluid rounded"
                  src="https://images.squarespace-cdn.com/content/v1/63b710806ca7781c56e98fc8/1dc13b88-da38-449d-8335-4e0c9314bd45/Public+Skate+Oct+2024.png?format=1500w"
                  alt="schedule"
                />
              </a>
            </Col>
          </Row>
          <div className="fst-italic pt-3">
            <p>
              Hours also reflected on <a href="https://google.com" className="text-decoration-underline text-warning">Google</a> and <a className="text-decoration-underline text-warning">Public Hours</a>.
            </p>
          </div>
          <Button className="btn btn-dark text-white justify-content-center">
            <p className="text-center text-white px-5 pt-1">SEE ADMISSION RATES →</p>
          </Button>
        </Container>
      </div>

      {/* Video Section */}
<div className="container-fluid video-section">
  <Row className="g-0">
    <Col className="col-4">
      <video autoPlay loop muted playsInline className="img-fluid w-100" style={{ opacity: 0.5 }}>
        <source src="/skateVid.mp4" type="video/mp4" />
      </video>
    </Col>
    <Col className="col-4">
      <video autoPlay loop muted playsInline className="img-fluid w-100">
        <source src="/skateVid.mp4" type="video/mp4" />
      </video>
    </Col>
    <Col className="col-4">
      <video autoPlay loop muted playsInline className="img-fluid w-100" style={{ opacity: 0.5 }}>
        <source src="/skateVid.mp4" type="video/mp4" />
      </video>
    </Col>
  </Row>
</div>

      {/* Tagline Section */}
      <div className="text-center sinceDiv">
        <h2 className="text-white pt-5 pb-2"><strong>🌺 “Hawaii’s Ice Skating Arena Since 1982” 🌴</strong></h2>
      </div>

      {/* Footer */}
      <footer className="bg-transparent">
        <Container>
          <Row className="py-3 text-white">
            <hr />
            <Col>
              <h3>SUPPORT</h3>
              <div>Terms and Conditions</div>
              <div>Private Policy</div>
              <div>FAQs</div>
            </Col>
            <Col>
              <h3>CONTACT</h3>
              <div>808-487-9921</div>
              <div>info@icepalacehawaii.com</div>
            </Col>
            <Col>
              <div>Skate School:</div>
              <div>skateschooldirector@icepalacehawaii.com</div>
            </Col>
          </Row>
        </Container>
      </footer>
    </main>
  );
};

export default Home;
