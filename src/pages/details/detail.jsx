import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import style from "./detail.module.css";
import useApi from "../../helpers/useApi";
import withAuth from "../../helpers/withAuth";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";

function Details() {
  const [prod, setProd] = useState([]);
  const [stock, setStock] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  const api = useApi()

  const goUpdate = () => {
    navigate(`/update/${params.id}`);
  }

  const notice = () => {
    alert("Semangat")
  }

  const calcPlus = () => {
    if (stock !== prod.stock) {
      setStock(stock + 1);
    } else {
      if (stock === prod.stock) {
        setStock(prod.stock);
      }
    }
  };

  const calcMin = () => {
    if (prod.stock === 0) {
      setStock(prod.stock);
    } else {
      if (stock !== 0) {
        setStock(stock - 1);
      } else {
        setStock(0);
      }
    }
  };

  const getDataID = () => {
    api
      .requests({
        method: "GET",
        url: `/vehicle/product?id=${params.id}`,
      })
      .then((res) => {
        const { data } = res.data;
        setProd(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataID()
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="sub">
          <h2>Detail</h2>
        </div>

        <div className={style.content}>
          <img src={prod.image} alt={prod.name} className={style.image} />
          <div className={style.rightside}>
            <h4>{prod.name}</h4>
            <h5>{prod.location}</h5>

            <div className={style.status}>
              <p className={style.ava}>{prod.status}</p>
            </div>

            <div className={style.desc}>
              <p>Capacity: {prod.description}</p>
              <p>Type: {prod.category}</p>
              <p>Reservation : {prod.description} </p>
            </div>

            <p className={style.price}>Rp. {prod.price}/day</p>
          </div>
          <Row xs={1} md={2}>
            {Array.from({ length: 2 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img
                    className={style.dispimage}
                    variant="top"
                    src={prod.image}
                  />
                </Card>
              </Col>
            ))}
          </Row>
          <div className={style.stock}>
            <Button
              disabled
              onClick={calcPlus}
              variant="warning"
              size="sm"
              className={style.button1}
            >
              + 
            </Button>{" "}
            <h3>{prod.stock}</h3>
            <Button
              disabled
              onClick={calcMin}
              variant="outline"
              size="sm"
              className={style.button1}
            >
              -
            </Button>{" "}
          </div>
          <div className={style.newdiv}>
            <Button onClick={goUpdate} variant="dark" size="sm" className={style.btn1}>
              Edit Item
            </Button>{" "}
            <Button onClick={notice} variant="warning" size="sm" className={style.btn2}>
              Reservation
            </Button>{" "}
            <Button onClick={notice} variant="dark" size="sm" className={style.btn3}>
              Like
            </Button>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withAuth(Details);
