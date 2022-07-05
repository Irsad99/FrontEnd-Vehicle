import React from "react";
import style from "./body_login.module.css";
import { Container, Form } from "react-bootstrap";
import { Body, Flex, Button2 } from "../style_custom/Body_custom";

function body_login() {
  return (
    <>
      <Body>
        <Container>
          <h1>Let's Explore The World</h1>
          <Flex>
            {/* <select name="cars" id="cars">
              <option value="" selected disabled hidden>
                Location
              </option>
              <option value="Kalimantan">Kalimantan</option>
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Malang">Malang</option>
              <option value="Jakarta">Jakarta</option>
            </select>
            <select name="cars" id="cars">
              <option value="" selected disabled hidden>
                Type
              </option>
              <option value="Cars">Cars</option>
              <option value="Motorbike">Motorbike</option>
              <option value="Bike">Bike</option>
            </select> */}
            <Form>
              <Form.Group id="email" name="email">
                <Form.Control className={style.form} type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group id="password" name="password">
                <Form.Control className={style.form} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className={style.forgot}>
                  Forgot password ?
                </Form.Text>
              </Form.Group>
            </Form>
          </Flex>
          <Button2>Login</Button2>
        </Container>
      </Body>
    </>
  );
}

export default body_login;
