import React, { useState } from "react";
import style from "./register.module.css";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { Body, Flex } from "../../component/style_custom/Body_custom";
import useApi from "../../helpers/useApi";
import { addUsers } from "../../store/reducer/user";

function Register() {
  const navigate = useNavigate();
  const [Users, setUsers] = useState({ email: "email", password: "password" });

  const api = useApi();
  const dispatch = useDispatch();

  const login = async () => {
    navigate("/login");
  };

  const signupGoogle = () => {
    alert("Semangat Google");
  };

  const onChangeInput = (e) => {
    e.preventDefault();
    const data = { ...Users };
    data[e.target.name] = e.target.value;
    setUsers(data);
  };

  const signup = () => {
    api
      .requests({
        method: "POST",
        url: "/user/register",
        data: Users,
      })
      .then((res) => {
        dispatch(addUsers(res.data))
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
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
                    onChange={onChangeInput}
                    className={style.form}
                    type="name"
                    name="name"
                    placeholder="Name"
                  />
                </Form.Group>

                <Form.Group className={style.parent2} id="email" name="email">
                  <Form.Control
                    onChange={onChangeInput}
                    className={style.form}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group
                  className={style.parent2}
                  id="password"
                  name="password"
                >
                  <Form.Control
                    onChange={onChangeInput}
                    className={style.form}
                    type="password"
                    name="password"
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
                  <Button
                    onClick={signupGoogle}
                    variant="light"
                    className={style.btn2}
                  >
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
