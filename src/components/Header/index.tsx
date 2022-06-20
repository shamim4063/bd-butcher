import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

import "./index.scss";

const Header: React.FC<any> = (props: any) => {
  return (
    <> 
    <Navbar expand="lg" fixed="top" className="butcher-header"> 
        <Navbar.Brand href="/">
          <Image src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="butcher-header-link" id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <Nav.Link href="/frozen-chicken">Frozen Chicken</Nav.Link>
            <Nav.Link href="/frozen-beef">Frozen Beef</Nav.Link>
            <Nav.Link href="/frozen-mutton">Frozen Mutton</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link> 
          </Nav>
        </Navbar.Collapse> 
    </Navbar>
    </>
  );
};

export default Header;
