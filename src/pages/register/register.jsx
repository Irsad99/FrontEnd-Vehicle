import React, { useState } from "react";
import style from "./register.module.css";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { Body, Flex } from "../../component/style_custom/Body_custom";

function Register() {
  const navigasi = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = process.env.REACT_APP_BASEURL

  const login = async () => {
    navigasi("/login");
  };

  const signupGoogle = () => {
    alert("Semangat Google");
  };

  const signup = async (e) => {
    e.preventDefault();

    axios
      .post(`${baseURL}/user/register`, {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        //redirect
        // navigasi(`/detail/${params.id}`);
        alert(`name: ${name}, email : ${email}, password : ${password} data berhasil ditambah`);
      })
      .catch((err) => {
        //assign validation on state
        // setValidation(error.response.data);
        alert(err)
      });
  };

  return (
    <>
      <Header />
      <Body>
        <Container>
          <h1>Let's Explore The World</h1>
          <Flex>
            <Form className={style.parent}>
              <Form.Group>
                <Form.Text className={style.forgot}>
                  Don't have account?
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Button onClick={login} variant="dark" className={style.btn}>
                  Login
                </Button>{" "}
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className={style.line}>
                <Form.Group className={style.parent2} id="name" name="name">
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={style.form}
                    type="name"
                    placeholder="Name"
                  />
                </Form.Group>

                <Form.Group className={style.parent2} id="email" name="email">
                  <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={style.form}
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group
                  className={style.parent2}
                  id="password"
                  name="password"
                >
                  <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={style.form}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group className={style.parent2}>
                  <Button
                    onClick={signup}
                    variant="warning"
                    className={style.btn2}
                  >
                    Sign Up
                  </Button>{" "}
                </Form.Group>

                <Form.Group className={style.parent2}>
                  <Button onClick={signupGoogle} variant="light" className={style.btn2}>
                    Sign Up With Google
                  </Button>{" "}
                </Form.Group>
              </Form.Group>
            </Form>
          </Flex>
        </Container>
      </Body>
      <Footer />
    </>
  );
}

export default Register;
