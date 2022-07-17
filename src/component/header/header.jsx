import React from "react";
import style from "./header.module.css";
import logo from "./logo.png";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
// import { Link } from "../style_custom/Link_custom";
import { Link } from "react-router-dom";

function header(props) {
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
              <Link to={"/"} className={style.a}>Home</Link>
              <Link to={"/vehicle"} className={style.a}>Vehicle Type</Link>
              <Link to={"/history"} className={style.a}>History</Link>
              <Link to={"/about"} className={style.a}>About</Link>
              <Link to={"/login"} className={style.a}>
                <Button
                  variant="outline-warning"
                  size="sm"
                  className={style.button1}
                >
                  Login
                </Button>{" "}
              </Link>
              <Link to={"/register"} className={style.a}>
              <Button variant="warning" size="sm" className={style.button1}>
                Register
              </Button>{" "}
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default header;
