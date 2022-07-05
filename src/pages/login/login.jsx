import React, {useState} from "react";
import style from "./login.module.css";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { Body, Flex } from "../../component/style_custom/Body_custom";

function Login() {
  const navigasi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = process.env.REACT_APP_BASEURL

  const register = () => {
    navigasi("/register");
  };

  const loginGoogle = () => {
    alert("Semangat Google");
  };

  const login = async (e) => {
    e.preventDefault();

    axios
      .post(
        `${baseURL}/auth/`,
        {
          email: email,
          password: password
        }
      )
      .then(() => {
        //redirect
        // navigasi(`/detail/${params.id}`);
        alert(`email : ${email}, password : ${password} anda berhasil login`)
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
                <Button onClick={register} variant="dark" className={style.btn}>
                  SignUp
                </Button>{" "}
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className={style.line}>
                <Form.Group className={style.parent2} id="email" name="email">
                  <Form.Control
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className={style.form}
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  className={style.parent2}
                  id="password"
                  name="password"
                >
                  <Form.Control
                    className={style.form}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group className={style.parent2}>
                  <Form.Text className={style.forgot2}>
                    Forgot password?
                  </Form.Text>
                </Form.Group>

                <Form.Group className={style.parent2}>
                  <Button onClick={login} variant="warning" className={style.btn2}>
                    Login
                  </Button>{" "}
                </Form.Group>

                <Form.Group className={style.parent2}>
                  <Button onClick={loginGoogle} variant="light" className={style.btn2}>
                    Login With Google
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

export default Login;
