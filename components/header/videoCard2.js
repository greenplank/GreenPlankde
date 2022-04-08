import React, { useState } from "react";
import Link from "next/link";
// import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/video-cta.webp";

const VideoCard2 = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="about-two pt-120 pb-60">

            <Container>
                <Row>
                    <Col xl={6}>
                        <section className="video-card">
                            {/* <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="u5aosoMYRt4"
                                onClose={() => setOpen(false)}
                            /> */}
                            <div
                                className="video-card__bg"
                                style={{ backgroundImage: `url(${bgImage})` }}
                            ></div>
                            <Container className=" text-center pt-120 pb-120">

                                <h3>
                                Regelmäßige Reinigung
                                </h3>
                                <div className="video-card__btn-block">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/r3_wZfovSw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </Container>
                        </section>
                    </Col>
                    <Col xl={6}>

                        <div>
                            <h2>Regelmäßige Reinigung</h2>
                            <p>Alle Außenflächen sammeln Schmutz, Staub und Verunreinigungen und müssen gereinigt werden. Sie müssen regelmäßig gereinigt werden, damit sie gut aussehen. Green Plank®-Verbundwerkstoffe sind wartungsarme Produkte, keine wartungsfreien Produkte. Die periodische Reinigung von Green Plank®-Verbundwerkstoffen wird empfohlen. Auch wenn sie sauber erscheinen, ist es wichtig, die Bildung von Pollen / Ablagerungen zu verhindern, die Schimmel verursachen können Wir empfehlen eine Grundreinigung mit einem Verbunddeckreiniger oder einer Kombination aus Seife (Geschirrspülmittel), heißem Wasser und einer weichen Borstenbürste. Nach der Reinigung gründlich ausspülen. Wenn Sie sich nicht sicher sind, welches Produkt zum Reinigen / Entfernen von Flecken von Ihrem Deck verwendet wird, sollten Sie einen kleinen Bereich an einer unauffälligen Stelle testen, um festzustellen, ob das Produkt unerwünschte Verfärbungen verursacht. Das gesamte Deck mit einem Gartenschlauch und nicht mit einem Hochdruckreiniger abspritzen. Der Hochdruckreiniger sprüht Seifenpartikel auf andere Oberflächen und verursacht möglicherweise Flecken. Die Verwendung eines Gartenschlauchs ist eine bessere Methode, um hausgemachten Reiniger vorsichtig abzuspülen und alle Wasserflecken zu entfernen. Haushaltsdruckreiniger mit Sprühdüse können verwendet werden, um Flecken, Schmutz oder Schimmel zu entfernen, es besteht jedoch die Gefahr, dass Seifenpartikel auf andere Oberflächen gesprüht werden.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VideoCard2;
