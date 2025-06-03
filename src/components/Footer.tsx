
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../images/logo.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="footer">

      <Container>
        <Row>
          <Col lg="3">
            <div className="footer_logo">
              <img src={Logo} alt="" />
            </div>
          </Col>
          <Col lg="3">
            <div className="contact_wrap">
              <h5>D-Web</h5>
              <p>Graaf florisstraat 22A, Canada.</p>
            </div>
          </Col>
          <Col lg="3">
            <div className="contact_wrap">
              <h5>Contact Us</h5>
              <p>Interested in working with us?</p>
              <ul>
                <li><Link to="mailto:Hello@dweb.com">Hello@dweb.com</Link></li>
                <li><Link to="tel:0123-456-789">0123-456-789</Link></li>
              </ul>
            </div>
          </Col>
          <Col lg="3">
             <div className="contact_wrap">
              <h5>Quick Links</h5>
              <ul>
                <li><Link to="/">Privacy policy</Link></li>
                <li><Link to="/">Terms and conditions</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="copyright_wrapper mt70">
        <Container>
          <p className='text-center'>© 2025 D-Web. All Right Reserved.</p>
        </Container>
      </div>

    </footer>
  );
};

export default Footer;
