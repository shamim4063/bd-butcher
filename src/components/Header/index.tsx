import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

import "./index.scss";

const Header: React.FC<any> = (props: any) => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="butcher-header">
        <Navbar.Brand>
          <Link to="/">
            <Image src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="butcher-header-link" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/frozen-chicken"> Frozen Chicken</Link>
            <Link to="/frozen-beef">Frozen Beef</Link>
            <Link to="/frozen-mutton">Frozen Mutton</Link>
            <Link to="/contact-us">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
