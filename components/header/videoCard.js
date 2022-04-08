import React, { useState } from "react";
import Link from "next/link";
// import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/video-cta.webp";

import Icon1 from "../../assets/images/backgrounds/alll-icons-01.png";
import Icon2 from "../../assets/images/backgrounds/alll-icons-02.png";
import Icon3 from "../../assets/images/backgrounds/alll-icons-03.png";
import Icon4 from "../../assets/images/backgrounds/alll-icons-04.png";
import Icon5 from "../../assets/images/backgrounds/alll-icons-05.png";
import Icon6 from "../../assets/images/backgrounds/alll-icons-06.png";
import Icon7 from "../../assets/images/backgrounds/alll-icons-07.png";
import Icon8 from "../../assets/images/backgrounds/alll-icons-08.png";

const VideoCard = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="about-two pt-60 pb-40">

            <Container>
                <Row>
                <Col xl={12}>
                    <div className="text-center block-title">
                    <h1>Design in Schweden Getestet von SP.<br/>
                                    Innovative und leistungsstarke
                                    Smart Terrassendielen</h1>
                    </div>
                    </Col>
                    <Col xl={6}>
                        <section className="video-card">
                           
                            <div
                                className="video-card__bg"
                                style={{ backgroundImage: `url(${bgImage})` }}
                            ></div>
                            <Container className=" text-center pt-60 pb-60">

                                <div className="video-card__btn-block">
                                    <iframe width="560" height="300" src="https://www.youtube.com/embed/0SVm4TDGoz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </Container>
                        </section>
                    </Col>
                    <Col xl={6}>
                        <div className="about-two__content">
                           
                            <Row>
                                <Col md={6}>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon7} alt="" /> <span >Gut mit 50 ccm</span>
                                        </p>
                                    </div>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon8} alt="" /> <span>Hohe Leistung bei Premiumqualität</span>
                                        </p>
                                    </div>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon2} alt="" /> <span>Kosteneffizient</span>
                                        </p>
                                    </div>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon3} alt="" /> <span>Klick System</span>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon6} alt="" /> <span>Standard-Hilfsrahmen</span>
                                        </p>
                                    </div>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon5} alt="" /> <span>
                                                Natürliche Farben</span>
                                        </p>
                                    </div>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon1} alt="" /> <span>
                                                60% weniger Arbeit</span>
                                        </p>
                                    </div>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon4} alt="" /> <span>
                                                Spaltfreie glatte Oberfläche</span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VideoCard;
