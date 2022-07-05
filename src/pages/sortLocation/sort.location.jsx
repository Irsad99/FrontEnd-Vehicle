import React, { useState, useEffect } from "react";
import style from "./sort.module.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Card from "../../component/cards/cards";
import { Body, Flex, Button } from "../../component/style_custom/Body_custom";

function Home() {
  const [locations, setLocation] = useState([]);

  const [loc, setLoc] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const navigasi = useNavigate();
  const params = useParams();
  const baseURL = process.env.REACT_APP_BASEURL

  const explore = () => {
    if (loc !== ""){
      navigasi(`/sortlocation/${loc}`)
    } if (price !== ""){
      navigasi(`/sortprice/${price}`)
    } if (type !== ""){
      navigasi(`/sorttype/${type}`)
    }
  };

  // didmount
  useEffect(() => {
        axios
      .get(
        `${baseURL}/vehicle/sort?location=${params.location}`
      )
      .then((res) => {
        setLocation(res.data.data);
      })
      .catch((err) => {
        console.log("🚀 ~ file: detail.jsx ~ line 16 ~ axios.get ~ err", err);
      });
    } , []);

  return (
    <>
      <Header />
      <Body>
        <Container>
          <h1>Explore and Travel</h1>
          <p>Vehicle Finder</p>
          <Flex>
            <select
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              name="location"
              id="location"
            >
              <option value="" selected disabled hidden>
                Location
              </option>
              <option value="Kalimantan">Kalimantan</option>
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Malang">Malang</option>
              <option value="Jakarta">Jakarta</option>
            </select>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              name="cars"
              id="cars"
            >
              <option value="" selected disabled hidden>
                Type
              </option>
              <option value="Cars">Cars</option>
              <option value="Motorbike">Motorbike</option>
              <option value="Bike">Bike</option>
            </select>
          </Flex>
          <Flex>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              id="price"
            >
              <option value="" selected disabled hidden>
                Payment
              </option>
              <option value="50000"> {">"} 50.000 </option>
              <option value="100000"> {">"} 100.000 </option>
              <option value="200000"> {">"} 200.000 </option>
              <option value="400000"> {">"} 400.000 </option>
            </select>
            <select name="date" id="date">
              <option value="" selected disabled hidden>
                Date
              </option>
              <option value="Januari">Januari</option>
              <option value="Februari">Februari</option>
              <option value="Maret">Maret</option>
              <option value="April">April</option>
              <option value="Mei">Mei</option>
              <option value="Juni">Juni</option>
              <option value="Juli">Juli</option>
              <option value="Agustus">Agustus</option>
              <option value="September">September</option>
              <option value="Oktober">Oktober</option>
              <option value="November">November</option>
              <option value="Desember">Desember</option>
            </select>
          </Flex>
          <Button onClick={explore}>explore</Button>
        </Container>
      </Body>
      <div className={style.container}>
        <div className="sub">
          <h2>Result</h2>
          <a href="/vehicle">view all {">"} </a>
        </div>

        <div className="content">
          {locations.map((v) => {
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

export default Home;
