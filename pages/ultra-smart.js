import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/ultrasmart.webp";


import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";

import Footer from "../components/footer";

const ultrasmart = () => {
  return (
    <Layout pageTitle="ultra-smart">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Ultra-smart" crumbTitle="ultra-smart" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper pb-40 pt-40">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*====================  Star Smart Classic Section-1 content ====================*/}
                      <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>ULTRA™ Smart</h2>
                          <strong>Smart Ultra™ ist ein revolutionäres neues Terrassenprofil für Ihr Deck, das leicht und langlebig ist und Ihrem Garten ein elegantes Aussehen verleiht. Dieses neue Profil verfügt über mehrere Eigenschaften, die man von einem idealen Terrassensystem erwarten würde, wie kratzfest, wasserdicht, feuerbeständig, kein Farbverblassen, mit  Klicksystem bzw. Nut & Feder und 30-jährige Garantie. Kurz gesagt, Smart Ultra™ ist ein innovatives Produkt, das eine optimale Lösung für alle ist, die ein Profil mit einem edlen und dennoch frischen Look suchen, das zudem langlebig ist.</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <p>Es besteht aus Schaum-PVC und Holzfasern und ist in zwei Farben erhältlich: Coffee & Nordic Sand. Zwei volle Farben, die der aktuellen Nachfrage auf dem Markt entsprechen und die meisten Menschen auf den ersten Blick ansprechen. Smart Ultra™ hat eine ASA-Beschichtung, ein thermoplastischer Kunststoff, der eine unglaublich starke Witterungsbeständigkeit aufweist, wodurch Smart Ultra™ auch kratzfest wird. Sonnenlicht beeinflusst die Farbe des Profils in keiner Weise, oder besser gesagt, die Farbe von Smart Ultra™ ist in der Lage, mehreren unglücklichen Ereignissen wie dem Verschütten von Wein, Ölkaffee oder anderen Flüssigkeiten standzuhalten. Wie bei jedem anderen Green Plank Smart Produkt ist die Verlegung aufgrund der Nut und Feder ein Kinderspiel, im Vergleich zu anderen Verbunddielen ist die Verlegung von Smart Ultra™ 60 % schneller. Für die Installation von Smart Ultra™ wird ein 50 cm c/c verwendet. Sobald es installiert ist, verriegeln sich die Dielen miteinander, was eine feste und stabilere  Oberfläche ergibt. Somit gibt es nur wenige Profile, die so robust und langlebig sind wie das Smart Ultra™. Sie müssen es also nur noch installieren und haben dann sehr lange Freude an einem schönen Deck. Es wird eine 30-jährige Garantie angeboten, wenn ein Problem wie Verschleiß auftritt, können Sie die Garantie in Anspruch nehmen.</p>
                              <p>Gut zu wissen, dass Smart Ultra™ außerdem vollständig  wasser- und feuerfest ist, was bedeutet, dass dieses Terrassenprofil an verschiedenen Orten wie rund um Schwimmbädern, oder  Plätze mit viel Personen Verkehr verwendet werden kann. Schließlich lässt sich Smart Ultra™ in 3 Worten zusammenfassen: elegant, langlebig und intelligent, selbstvärständlich!</p>
                              <div>
                                <ul>
                                  <li>ASA-beläggning gör den reptålig och färgfast.</li>
                                  <li>Inget underhåll brandmotstånd.</li>
                                  <li>Hög halksäkerhet och vi erbjuder 30 års garanti för slitage.</li>
                                  <li>Färgen bleknar inte med solljus och blir inte färgad av vin, olja, kaffe eller andra vätskor.</li>
                                </ul>
                                <p>Eftersom detta är en Green Plank Smart-produkt erbjuder den ett sömlöst utseende med tunga och spår som gör installationer upp till 60% snabbare än normalt kompositdäck.
                                  Den är installerad med 50 cm c/c och ger en mycket solid yta eftersom den låser ihop brädorna.</p>
                                <p>Ultra erbjuder en mycket halksäker yta och är helt vattentät vilket gör den mycket lämplig för våta områden som runt pooler eller nära vattendrag.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-1 content  ====================*/}

                      {/*====================  Star Smart Classic Section-2 content  ====================*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">
                                  <img src={Image11} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information">
                                <h3>Produktinformation</h3>
                                <table width="100%">
                                  <tbody>
                                    <div class="et_pb_text_inner">
                                      <div class="ce_text block">
                                        <div>
                                          <p>Green Planks neues Profil*</p>
                                          <p>Solides Profil mit allen Vorteile des Smart Systems, dazu noch leichter mit Holzoptik in zwei Farben:</p>
                                          <p>Coffee und Nordic Sand mit den folgenden Eigenschaften:</p>
                                          <ul>
                                            <li>Klicksystem mit Nut & Feder, Garantie 30 Jahre</li>
                                            <li>Feuerfest</li>
                                            <li>Leichtgewichtig, und solid</li>
                                            <li>Farbstabilität, die 25 Jahre anhält</li>
                                            <li>Fleckenabweisend, hauptsächlich Wein, Kaffee und Öl</li>
                                            <li>Kratzfest: bei normalen Anwendungen.</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </tbody>
                                </table>
                              </div>

                            </div>

                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-2 content  ====================*/}

                      {/*====================  Star Smart Classic Section-4 content ====================*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 mt-20"><strong>Weitere Eigenschaften und Vorteile
                                </strong></h2>
                                <ul>
                                  <li><strong>1. </strong>Lückenlose, gleichmäßige Oberfläche, die es für Familien mit Kindern und Haustieren sicherer und komfortabler macht.</li>
                                  <li><strong>2. </strong>Die mehrfarbigen Streifen auf jedem Brett erzeugen ein authentisches Masernmuster und laden Sie ein, sich zu entspannen und Ihr persönliches tropisches Paradies zu genießen.</li>
                                  <li><strong>3. </strong>Markantes Inlay-Design, Stil und Farboptionen</li>
                                  <li><strong>4. </strong>Kein jährliches Streichen, Versiegelung oder Lackierung erforderlich</li>
                                  <li><strong>5. </strong>Außergewöhnliche Beständigkeit gegen UV-Licht und Farbverblassen</li>
                                  <li><strong>6. </strong>Hohe Rutschfestigkeit sorgt für eine sichere Oberfläche, auch bei Nässe</li>
                                  <li><strong>7. </strong>Keine Befestigungsklammern erforderlich</li>
                                  <li><strong>8. </strong>Frei von giftigen Zusätzen</li>
                                  <li><strong>9. </strong>Geeignet für den öffentlichen und privaten Bereich</li>
                                  <li><strong>10. </strong>Bis zu 60% schnellere Installation</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 mt-20"><strong>WPC Terrassendiele / Ultra Smart Coffee / mit Ummantelung
                                </strong></h2>
                                <ul>
                                  <li><strong>1. </strong>30 Jahre Garantie</li>
                                  <li><strong>2. </strong>Leicht und solid</li>
                                  <li><strong>3. </strong>Fleckenabweisend, hauptsächlich von Wein und Kaffee</li>
                                  <li><strong>4. </strong>Lückenlose Oberfläche</li>
                                  <li><strong>5. </strong>Kein jährliches Streichen, Beizen oder Ölen</li>
                                  <li><strong>6. </strong>Beständigkeit gegen UV-Licht & Farbverblassen</li>
                                  <li><strong>7. </strong>Frei von giftigen Zusatzstoffen</li>
                                  <li><strong>8. </strong>60% schnellere Installation</li>
                                  <li><strong>9. </strong>WPC- Holzmaserung</li>
                                  <li><strong>10. </strong>Wählen Sie das perfekte Produkt</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-4 content  ====================*/}

                    </div>
                  </div>
                </div>
                {/*Projects section end*/}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default ultrasmart;
