import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import style from "./updates.module.css";
import axios from "axios";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";

function Updates() {
  const [data, setData] = useState({});
  const [stock, setStock] = useState(0);
  const [name, setName] = useState("");
  const [loc, setLoc] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const params = useParams();
  const navigasi = useNavigate();
  const baseURL = process.env.REACT_APP_BASEURL

  const calcPlus = () => {
    setStock(stock + 1);
  };

  const calcMin = () => {
    if (stock === 0) {
      setStock(0);
    } else {
      setStock(stock - 1);
    }
  };

  const update = async (e) => {
    e.preventDefault();

    axios
      .put(
        `${baseURL}/vehicle/update?id=${params.id}`,
        {
          name: name,
          location: loc,
          description: desc,
          price: price,
          status: status,
          stock: stock,
          category: category,
        }
      )
      .then(() => {
        //redirect
        navigasi(`/detail/${params.id}`);
      })
      .catch((err) => {
        //assign validation on state
        // setValidation(error.response.data);
        console.log("🚀 ~ file: detail.jsx ~ line 16 ~ axios.get ~ err", err);
      });
  };

  const deleted = async (id) => {
    axios
      .delete(`${baseURL}/vehicle/delete/${id}`)
      .then(() => {
        //redirect
        navigasi(`/vehicle`);
      })
      .catch((err) => {
        //assign validation on state
        // setValidation(error.response.data);
        console.log("🚀 ~ file: detail.jsx ~ line 16 ~ axios.get ~ err", err);
      });
  };

  useEffect(() => {
    axios
      .get(
        `${baseURL}/vehicle/product?id=${params.id}`
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("🚀 ~ file: detail.jsx ~ line 16 ~ axios.get ~ err", err);
      });
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={style.form}
                id="name"
              >
                <Form.Control
                  className={style.value}
                  type="text"
                  plaintext
                  defaultValue={data.name}
                />
              </Form.Group>
              <Form.Group
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                className={style.form}
                id="location"
              >
                <Form.Control
                  className={style.value}
                  type="text"
                  plaintext
                  defaultValue={data.location}
                />
              </Form.Group>
              <Form.Group
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className={style.form}
                id="description"
              >
                <Form.Control
                  className={style.value}
                  type="text"
                  plaintext
                  defaultValue={data.description}
                />
              </Form.Group>
              <Form.Group
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
              >
                <Form.Label className={style.label}>Price :</Form.Label>
                <Form.Control
                  className={style.value2}
                  type="text"
                  defaultValue={data.price}
                />
              </Form.Group>
              <Form.Group id="status">
                <Form.Label className={style.label}>Status :</Form.Label>
                <Form.Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
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
            <h3 value={stock} onChange={(e) => setStock(e.target.value)}>
              {stock}
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            <Button
              onClick={deleted}
              variant="dark"
              size="sm"
              className={style.btn3}
            >
              Delete
            </Button>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Updates;
