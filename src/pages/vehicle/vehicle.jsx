import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import style from "./vehicle.module.css";
import axios from "axios";
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
  const baseURL = process.env.REACT_APP_BASEURL

  const goSearch = () => {
    navigasi(`/search/${name}/${location}`);
  };

  const getDataProd = async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}/vehicle/popular?rating=5`
      );
      setProd(data.data);
    } catch (error) {
      console.log("🚀 ~ file: home.jsx ~ line 14 ~ getDataProd ~ error", error);
    }
  };

  const getDataCars = async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}/vehicle/sort?category=Cars`
      );
      setCars(data.data);
    } catch (error) {
      console.log("🚀 ~ file: home.jsx ~ line 14 ~ getDataProd ~ error", error);
    }
  };

  const getDataMBike = async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}/vehicle/sort?category=Motorbike`
      );
      setMBike(data.data);
    } catch (error) {
      console.log("🚀 ~ file: home.jsx ~ line 14 ~ getDataProd ~ error", error);
    }
  };

  const getDataBike = async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}/vehicle/sort?category=Bike`
      );
      setBike(data.data);
    } catch (error) {
      console.log("🚀 ~ file: home.jsx ~ line 14 ~ getDataProd ~ error", error);
    }
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

export default Vehicle;
