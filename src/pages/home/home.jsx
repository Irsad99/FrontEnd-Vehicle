import React, { useState, useEffect } from "react";
import style from "./home.module.css";
import axios from "axios";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Body from "../../component/body/body";
import Card from "../../component/cards/cards";

function Home() {
  const [prod, setProd] = useState([]);

  const getDataProd = async () => {
    try {
      const { data } = await axios.get(
        "https://myrentalbackend.herokuapp.com/vehicle/popular?rating=5"
      );
      setProd(data.data);
    } catch (error) {
      console.log("🚀 ~ file: home.jsx ~ line 14 ~ getDataProd ~ error", error);
    }
  };

  // didmount
  useEffect(() => {
    getDataProd();
  }, []);

  return (
    <>
      <Header />
      <Body />
      <div className={style.container}>
        <div className="sub">
          <h2>popular in towns</h2>
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

        <div className={style.sub}>
          <h2>testimonials</h2>
        </div>

        <div className="testimoni">
          <div>
            "it was the right decision to rent vehicle here, I spent less money
            and enjoy the trip. It was an amazing experience to have a ride for
            wildlife trip!"
            <span className="name">
              <br />
              <br /> Moh. Irsad
            </span>
            <br /> Founder YokNgoding
          </div>
          <Card backdrop="https://res.cloudinary.com/dsifbeghc/image/upload/v1656311817/go_image/Irsad_Foto_zkbwak.jpg" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
