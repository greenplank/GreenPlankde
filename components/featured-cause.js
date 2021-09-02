import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import causeImage from "../assets/images/resources/1.webp";
const FeaturedCause = () => {
  return (
    <section className="about-two pt-120 pb-120 featured-cause"> 
      <Container>
        <div className="inner-container background-secondary ">
          <Row>
            <Col lg={4}>
              <img src={causeImage} className="img-fluid" alt="" />
            </Col>
            <Col lg={8} className=" d-flex">
              <div className="my-auto" >
                <h6 style={{marginBottom:"1em",color:"white"}}>SONDERARTIKEL </h6>
                <h3>Test verschiedener Materialien für Anlegestellen am Öresund</h3>
                <p style={{color:"white"}}>
                Leistung verschiedener auf dem Markt erhältlicher Terrassenmaterialien – konserviertes Holz, modifiziertes Holz, naturbelassenes Holz, recycelte Kunststoffe und Holz-Kunststoff-Verbundwerkstoffe (WPCs), die in zwei Stegen in der Nähe der Öresundbrücke südlich von Malmö in Schweden installiert sind.
                </p>
                <h8 style={{marginBottom:"1em",color:"white"}}>Der Bericht wurde vom Schwedischen ins Deutsch übersetzt. Alle Rechte liegen bei SP / RISE.</h8>
                <Link href="/artiklar">
                <a className="thm-btn p-2 ml-2" style={{background:"black"}}>WEITERLESEN</a>
              </Link>
              </div>
             
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCause;
