import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Navbr = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Contacts</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">about us</Nav.Link>
          <Nav.Link href="#pricing">Contact us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </header>
  );
};

export default Navbr;
