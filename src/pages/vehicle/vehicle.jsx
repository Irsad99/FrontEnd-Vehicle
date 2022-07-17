import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import style from "./vehicle.module.css";
import useApi from "../../helpers/useApi";
import withAuth from "../../helpers/withAuth";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Card from "../../component/cards/cards";

function Vehicle() {
  const [prod, setProd] = useState([]);
  const [cars, setCars] = useState([]);
  const [mbike, setMBike] = useState([]);
  const [bike, setBike] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const navigasi = useNavigate();
  const api = useApi();

  const goSearch = () => {
    navigasi(`/search/${name}/${location}`);
  };

  const getDataProd = () => {
    api
      .requests({
        method: "GET",
        url: "/vehicle/popular?rating=5",
      })
      .then((res) => {
        const { data } = res.data;
        setProd(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataCars = () => {
    api
      .requests({
        method: "GET",
        url: "/vehicle/sort?category=Cars",
      })
      .then((res) => {
        const { data } = res.data;
        setCars(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataMBike = () => {
    api
      .requests({
        method: "GET",
        url: "/vehicle/sort?category=Motorbike",
      })
      .then((res) => {
        const { data } = res.data;
        setMBike(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataBike = () => {
    api
      .requests({
        method: "GET",
        url: "/vehicle/sort?category=Bike",
      })
      .then((res) => {
        const { data } = res.data;
        setBike(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // didmount
  useEffect(() => {
    getDataProd();
  }, []);

  useEffect(() => {
    getDataCars();
  }, []);

  useEffect(() => {
    getDataMBike();
  }, []);

  useEffect(() => {
    getDataBike();
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
                <Button
                  onClick={goSearch}
                  variant="warning"
                  size="sm"
                  className={style.button1}
                >
                  Search
                </Button>{" "}
              </Col>
            </Row>
          </Form>
        </div>
        <div className="sub">
          <h2>popular in towns</h2>
          <a href="#viewall">view all {">"} </a>
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

        <div className="sub">
          <h2>Cars</h2>
          <a href="#viewall">view all {">"} </a>
        </div>

        <div className="content">
          {cars.map((v) => {
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

        <div className="sub">
          <h2>Motorbike</h2>
          <a href="#viewall">view all {">"} </a>
        </div>

        <div className="content">
          {mbike.map((v) => {
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

        <div className="sub">
          <h2>Bike</h2>
          <a href="#viewall">view all {">"} </a>
        </div>

        <div className="content">
          {bike.map((v) => {
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

export default withAuth(Vehicle);
