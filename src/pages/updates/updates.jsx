import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import style from "./updates.module.css";
import useApi from "../../helpers/useApi";
import withAuth from "../../helpers/withAuth";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";

function Updates() {
  const [data, setData] = useState({});
  const [vehicle, setVehicle] = useState({
    name: "",
    location: "",
    status: "",
    description: "",
    category: "",
    price: "",
    stock: 0,
  });

  const params = useParams();
  const navigate = useNavigate();
  const api = useApi();

  const calcPlus = () => {
    const data = { ...vehicle };
    vehicle.stock += 1;
    data.stock = vehicle.stock;
    setVehicle(data);
  };

  const calcMin = () => {
    const data = { ...vehicle };
    if (vehicle.stock === 0) {
      data.stock = vehicle.stock;
      setVehicle(data);
    } else {
      vehicle.stock -= 1;
      data.stock = vehicle.stock;
      setVehicle(data);
    }
  };

  const onChangeInput = (e) => {
    e.preventDefault();
    const data = { ...vehicle };
    data[e.target.name] = e.target.value;
    setVehicle(data);
  };

  const update = () => {
    api
      .requests({
        method: "PUT",
        url: `/vehicle/update?id=${params.id}`,
        data: vehicle,
      })
      .then(() => {
        navigate(`/detail/${params.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataID = () => {
    api
      .requests({
        method: "GET",
        url: `/vehicle/product?id=${params.id}`,
      })
      .then((res) => {
        const { data } = res.data;
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const deleted = async (id) => {
  //   axios
  //     .delete(`${baseURL}/vehicle/delete/${id}`)
  //     .then(() => {
  //       //redirect
  //       navigate(`/vehicle`);
  //     })
  //     .catch((err) => {
  //       //assign validation on state
  //       // setValidation(error.response.data);
  //       console.log("🚀 ~ file: detail.jsx ~ line 16 ~ axios.get ~ err", err);
  //     });
  // };

  useEffect(() => {
    getDataID();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="sub">
          <h2>Edit Item</h2>
        </div>

        <div className={style.content}>
          <img
            value={data.image}
            src={data.image}
            alt={data.name}
            className={style.image}
          />
          <div className={style.rightside}>
            <Form className={style.formParent}>
              <Form.Group
                onChange={onChangeInput}
                className={style.form}
                id="name"
              >
                <Form.Control
                  className={style.value}
                  type="text"
                  name="name"
                  plaintext
                  defaultValue={data.name}
                />
              </Form.Group>
              <Form.Group
                onChange={onChangeInput}
                className={style.form}
                id="location"
              >
                <Form.Control
                  className={style.value}
                  type="text"
                  name="location"
                  plaintext
                  defaultValue={data.location}
                />
              </Form.Group>
              <Form.Group
                onChange={onChangeInput}
                className={style.form}
                id="description"
              >
                <Form.Control
                  className={style.value}
                  type="text"
                  name="description"
                  plaintext
                  defaultValue={data.description}
                />
              </Form.Group>
              <Form.Group onChange={onChangeInput} id="price">
                <Form.Label className={style.label}>Price :</Form.Label>
                <Form.Control
                  className={style.value2}
                  type="text"
                  name="price"
                  defaultValue={data.price}
                />
              </Form.Group>
              <Form.Group id="status">
                <Form.Label className={style.label}>Status :</Form.Label>
                <Form.Select
                  onChange={onChangeInput}
                  name="status"
                  className={style.value2}
                >
                  <option value="" selected disabled hidden>
                    {data.status}
                  </option>
                  <option>Available</option>
                  <option>No Prepayment</option>
                </Form.Select>
              </Form.Group>
              <Form.Group id="status">
                <Form.Label className={style.label}>Stock :</Form.Label>
              </Form.Group>
            </Form>
          </div>
          <Row xs={1} md={2}>
            {Array.from({ length: 2 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img
                    className={style.dispimage}
                    variant="top"
                    src={data.image}
                  />
                </Card>
              </Col>
            ))}
          </Row>
          <div className={style.stock}>
            <Button
              onClick={calcPlus}
              variant="warning"
              size="sm"
              className={style.button1}
            >
              +
            </Button>{" "}
            <h3 name="stock">
              {vehicle.stock}
            </h3>
            <Button
              onClick={calcMin}
              variant="outline"
              size="sm"
              className={style.button1}
            >
              -
            </Button>{" "}
          </div>
          <div className={style.newdiv}>
            <Form.Select
              onChange={onChangeInput}
              name="category"
              className={style.selData}
            >
              <option>Add item to</option>
              <option>Cars</option>
              <option>Motorbike</option>
              <option>Bike</option>
            </Form.Select>
            <Button
              onClick={update}
              variant="warning"
              size="sm"
              className={style.btn2}
            >
              Save Change
            </Button>{" "}
            <Button variant="dark" size="sm" className={style.btn3}>
              Delete
            </Button>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withAuth(Updates);
