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
        <section className="about-two pt-120 pb-120">

            <Container>
                <Row>
                    <Col xl={6}>
                        <section className="video-card">
                            {/* <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="fe51I1VJEFs"
                                onClose={() => setOpen(false)}
                            /> */}
                            <div
                                className="video-card__bg"
                                style={{ backgroundImage: `url(${bgImage})` }}
                            ></div>
                            <Container className=" text-center pt-60 pb-60">

                                <h3>
                                    Vor- und Nachteile<br /> von <br />
                                </h3>
                                <div className="video-card__btn-block">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0SVm4TDGoz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </Container>
                        </section>
                    </Col>
                    <Col xl={6}>
                        <div className="about-two__content">
                            <div className="block-title">
                                <h3>Design in Schweden Getestet von SP.
                                    Innovative und leistungsstarke
                                    Smart Terrassendielen</h3>
                            </div>
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
