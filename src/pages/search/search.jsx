import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import style from "./search.module.css";
import useApi from "../../helpers/useApi";
import withAuth from "../../helpers/withAuth";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Card from "../../component/cards/cards";

function Search() {
  const [prod, setProd] = useState([]);
  const params = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  const api = useApi();

  const goSearch = () => {
    navigate(`/search/${name}/${location}`);
    window.location.reload(false);
  };

  const getDataProd = () => {
    api
      .requests({
        method: "GET",
        url: `/vehicle/search?name=${params.name}&location=${params.location}`,
      })
      .then((res) => {
        const { data } = res.data;
        setProd(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // didmount
  useEffect(() => {
    getDataProd();
  }, []);

  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.search}>
          <Form>
            <Row>
              <Col>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder="Vehicle Name" />
              </Col>
              <Col>
                <Form.Control value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
              </Col>
              <Col>
                <Button onClick={goSearch} variant="warning" size="sm" className={style.button1}>
                  Search
                </Button>{" "}
              </Col>
            </Row>
          </Form>
        </div>
        <div className="sub">
          <h2>Result</h2>
          <a href="/vehicle">view all {">"} </a>
        </div>

        <div className="content">
          {prod.map((v) => {
            return (
              <Card
                key={v.vehicle_id}
                id={v.vehicle_id}
                title={v.name}
                image={v.image}
                city={v.location}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withAuth(Search);
