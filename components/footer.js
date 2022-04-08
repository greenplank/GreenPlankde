import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import vilma from "../assets/images/vilma-1-200x200.png";
import sundahus from "../assets/images/sundahus-1-200x200.png";


const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={2} md={6} sm={12} >
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Kundenservice</h3>
                <ul className="list-unstyled" >
                  <li>
                    <Link href="/groshandler" >
                      <a style={{ color: "white" }}>Händler</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/verkaufsbedingungen">
                      <a style={{ color: "white" }}>Allgemein Verkaufsbedingungen (AGB)</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/nutzungsbedingungen">
                      <a style={{ color: "white" }}>Nutzungsbedingungen</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/datenschutzbestimmungen">
                      <a style={{ color: "white" }}>Datenschutzbestimmungen</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/integritatspolitik">
                      <a style={{ color: "white" }}>Integritätspolitik </a>
                    </Link>
                  </li>

                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} style={{ paddingLeft: "3em" }}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Unternehmensinformation</h3>
                <ul className="list-unstyled" >
                  <li>
                    <Link href="/uber-uns" >
                      <a style={{ color: "white" }}>Über uns</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/karriere">
                      <a style={{ color: "white" }}>Karriere</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/handler-werden">
                      <a style={{ color: "white" }}>Händler werden</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/werden-sie-ein-green-monteur">
                      <a style={{ color: "white" }}>Werden Sie ein Green-Monteur</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reinigung">
                      <a style={{ color: "white" }}>Reinigung</a>
                    </Link>
                  </li>

                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} sm={12} style={{ paddingLeft: "3em" }}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Ressourcen
                </h3>
                <ul className="list-unstyled" >
                  {/* <li>
                    <Link  href="https://storage.googleapis.com/greenplankdata1/Teknisk-Brochyr-ver-1.3.pdf"  >
                      <a target="_blank" style={{color:"white"}}>Technische Broschüre</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/installation-und-wartung">
                      <a style={{ color: "white" }}>Installation und Wartung</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs">
                      <a style={{ color: "white" }}>Faqs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/garantien">
                      <a style={{ color: "white" }}>Garantien</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/artiklar">
                      <a style={{ color: "white" }}>Artikel</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressourcen">
                      <a style={{ color: "white" }}>Ressourcen</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/bibliotek">
                      <a style={{color:"white"}}>Bücherei</a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </Col>

            <Col lg={2} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <h3 className="footer-widget__title">folgen Sie uns
                </h3>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="tel:+49 17680726891">
                      <i className="azino-icon-telephone"></i>+49 17680726891
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@greenplank.de">
                      <i className="azino-icon-email"></i>info@greenplank.de
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://goo.gl/maps/PbFoAPxjz9atGPbW6">
                      <i className="azino-icon-pin"></i>Sadelgatan 9, SE-213 77 Malmö, Sweden
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <h3 className="footer-widget__title">Zertifiziert
                </h3>
                <Row>
                  <a aria-label="logo image">
                    <img
                      src={vilma}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </a>
                  <a aria-label="logo image">
                    <img
                      src={sundahus}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </a>

                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>© Copyright 2020 by <a href="https://www.ecomin.se/">Ecomin.se</a></p>
          <div className="footer-social">

            <a href="https://www.facebook.com/GreenplankSweden" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/greenplank/?hl=en" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/greenplank" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCxWdmtRk1tZ-lbHd0zpcQ6g" aria-label="youtube">
              <i className="fab fa-youtube"></i>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
