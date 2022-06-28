import React from 'react';
import { Container } from 'react-bootstrap';
import { Body, Flex, Button } from '../style_custom/Body_custom';

function body() {
  return (
    <>
      <Body>
        <Container> 
          <h1>Explore and Travel</h1>
          <p>Vehicle Finder</p>
          <Flex>
            <select name="cars" id="cars">
              <option value="" selected disabled hidden>
                Location
              </option>
              <option value="Kalimantan">Kalimantan</option>
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Malang">Malang</option>
              <option value="Jakarta">Jakarta</option>
            </select>
            <select name="cars" id="cars">
              <option value="" selected disabled hidden>
                Type
              </option>
              <option value="Cars">Cars</option>
              <option value="Motorbike">Motorbike</option>
              <option value="Bike">Bike</option>
            </select>
          </Flex>
          <Flex>
            <select name="cars" id="cars">
              <option value="" selected disabled hidden>
                Payment
              </option>
              <option value="50.000"> {'>'} 50.000 </option>
              <option value="100.000"> {'>'} 100.000 </option>
              <option value="200.000"> {'>'} 200.000 </option>
              <option value="400.000"> {'>'} 400.000 </option>
            </select>
            <select name="cars" id="cars">
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
          <Button>explore</Button>
        </Container>
      </Body>
    </>
  );
}

export default body;
