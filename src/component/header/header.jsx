import React from "react";
import style from "./header.module.css";
import logo from "./logo.png";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "../style_custom/Link_custom";

function header() {
  return (
    <>
      <Navbar className={style.nav}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav>
            <div className={style.navbold}>
              <Link href="/">Home</Link>
              <Link href="/vehicle">Vehicle Type</Link>
              <Link href="/history">History</Link>
              <Link href="/about">About</Link>
                <Button variant="outline-warning" size="sm" className={style.button1}>
                  Login
                </Button>{" "}
                <Button variant="warning" size="sm" className={style.button1}>
                  Register
                </Button>{" "}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default header;