import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col} from "react-bootstrap";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";
import axios from "axios";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";

function Details() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://myrentalbackend.herokuapp.com/vehicle/product?id=${params.id}`
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
          <h2>Detail</h2>
        </div>

        <div className={style.content}>
          <img src={data.image} alt={data.name} className={style.image} />
          <div className={style.rightside}>
            <h4>{data.name}</h4>
            <h5>{data.location}</h5>

            <div className={style.status}>
              <p className={style.ava}>{data.status}</p>
            </div>

            <div className={style.desc}>
              <p>Capacity: {data.description}</p>
              <p>Type: {data.category}</p>
              <p>Reservation : {data.description} </p>
            </div>

            <p className={style.price}>Rp. {data.price}/day</p>
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
            <Button variant="warning" size="sm" className={style.button1}>
              +
            </Button>{" "}
            <h3>{data.stock}</h3>
            <Button variant="outline" size="sm" className={style.button1}>
              -
            </Button>{" "}
          </div>
          <div className={style.newdiv}>
            <Button variant="dark" size="sm" className={style.btn1}>
              Chat Admin
            </Button>{" "}
            <Button variant="warning" size="sm" className={style.btn2}>
              Reservation
            </Button>{" "}
            <Button variant="dark" size="sm" className={style.btn3}>
              Like
            </Button>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
