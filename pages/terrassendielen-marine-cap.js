import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/marinecap/BalticGrey_thumbnail.webp";

import Imagecolor1 from "../assets/images/colors/marine_cap/Baltic-Brown.png";
import Imagecolor2 from "../assets/images/colors/marine_cap/Baltic-Grey.png";


import Imagesurface from "../assets/images/surface/marine_cap/MarineCap-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";

import Footer from "../components/footer";

const marinecapkomposittrall = () => {
  return (
    <Layout pageTitle="MARINE CAP™">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="MARINE CAP™" crumbTitle="MARINE CAP™" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper pt-40 pb-40">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*====================  Star Smart Classic Section-1 content ====================*/}
                      <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>MARINE CAP™ Composite Premium Terrassendielen mit Schutzummantelung</h2>
                          <strong>Qualität ist unsere oberste Priorität</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>Mit MARINE CAP™ Naturfasern bedeckte Composite-Terrassendielen heben sich dank ihres revolutionären Extrusionsverfahrens von der Konkurrenz ab. Die coextrudierte Verbundtechnologie ist nicht nur erstaunlich realistisch, sondern hält auch in einigen der rauesten Klimazonen der Welt stand.</strong>
                              <p>
                                Mit Green Plank MARINE CAP™ beschichtete Terrassendielen sind keine gewöhnlichen Terrassendielen. Die revolutionäre 360 ° -Capping-Technologie schützt vor Schimmel, Feuchtigkeit und schlammigen Wanderschuhen. Diese hochmodernen coextrudierten Verbundplatten sind kratz-, fleck- und verwindungssteif, sodass der makellose Zustand Ihres kleinen Paradieses erhalten bleibt.
                              </p>
                              <p>Die tiefe Holzmaserung für rutschhemmende Oberflächen sorgt für eine gute Traktion in nassen Bereichen, z. B. in der Nähe von Schwimmbecken.</p>
                              <div>
                                <ul>
                                  <li><strong>Premium Qualität</strong> – Bewährte Terrassendielen in nordischer Qualität für raues Wetter und ein umweltfreundlicheres Leben.</li>
                                  <li><strong>Gleichmäßigkeit</strong> – HidLoc – Verdeckte Deckbefestigungen sorgen für eine glatte und gleichmäßige Oberfläche, auf der Sie sicher gehen können.</li>
                                  <li><strong>Ergänzendes Zubehör</strong>– Vervollständigen Sie Ihr Traumterrassendesign mit unseren Blenden und Abdeckungen – die perfekte Ergänzung für Ihre leistungsstarke MARINE CAP™ Terrasse.</li>
                                </ul>
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
                                  {/* <img src="assets/img/projects/img12.PNG" className="img-fluid" alt="" /> */}
                                  <img src={Image11} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information">
                                <h3>Produktinformation</h3>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left"><strong>Oberfläche:</strong></td>
                                      <td align="left">Rutschhemmende tiefe Holzmaserung mit planer Oberfläche
                                        auf der Rückseite, exotische Holztöne; Wendebretter</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Größe:</strong></td>
                                      <td align="left">ca. 19.5 * 140 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Länge:</strong></td>
                                      <td align="left">ca. 4.8 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Bedarf:</strong></td>
                                      <td align="left">Ca. 7,00 Meter für 1 m²</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Gewicht:</strong></td>
                                      <td align="left">ca. 3.50 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Balkenspannung:</strong></td>
                                      <td align="left">40 cm c / c für Wohnanwendungen *</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* </div> */}
                              <div className="row section-space--top--40 mb-30">

                                <div className="row" style={{ marginTop: ".5em", marginRight: "8px", marginLeft: "4px" }}>
                                  <img src={Imagesurface} />
                                </div>


                              </div>
                              <div className="row mt-60">

                                <Grid container spacing={3}>
                                  <Grid item xs={6} sm={3} lg={4}>
                                    <a target="_blank" href="/muster-bestellen" className="thm-btn" >Muster bestellen</a>
                                  </Grid>
                                  {/* <Grid item xs={6} sm={3}>
                                                        <a target="_blank" href={`${process.env.PUBLIC_URL}/assets/pdfs/smart-classic-deck-swedish.pdf`} className="thm-btn"  >installationsguide</a>
                                                        </Grid> */}
                                  <Grid item xs={8} sm={6} lg={6}>
                                    <a target="_blank" href="/pdfs/marine-capped-german-with-aluminum.pdf" className="thm-btn" >Aluminiuminstallation</a>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-2 content  ====================*/}

                      {/*====================  Star Smart Classic Section-3 content  ====================*/}

                      <div className="col-12 mb-80">
                        <h3>FARBENTRENDS ANZEIGEN – tief verwurzelt mit natürlichem und unverwechselbarem Charakter</h3>
                        <hr />
                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor1} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Baltic Brown</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor2} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Baltic Grey</h4>
                            </div>
                          </Grid>
                        </Grid>
                      </div>

                      {/*====================  End of Smart Classic Section-3 content  ====================*/}

                      {/*====================  Star Smart Classic Section-4 content ====================*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                            <div className="project-details">
                                  <h2 className="mb-40 mt-20"><strong>Produktinformation</strong></h2>
                                  <h3>Farbauswahl</h3>
                                  <p>
                                    Studiofotografie und / oder Ihr Browsing-Gerät geben möglicherweise keine genaue Darstellung der Farben. Um die Farben persönlich zu sehen, fordern Sie bitte kostenlose Muster an.
                                  </p>
                                  <h3>Natürliche Schönheit</h3>
                                  <p>
                                    Unsere Produkte sehen aus wie Naturholz und können von Karton zu Karton leichte Farb- / Textur- und Schattierungsabweichungen aufweisen. Die Farbabweichung beeinträchtigt in keiner Weise die Leistung des Produkts.</p>
                                  <h3>Erhalten Sie die Schönheit</h3>
                                  <p>
                                    Alle Außenflächen sammeln Schmutz, Staub und Verunreinigungen und müssen gereinigt werden. Es ist notwendig, Ihren Zaunsystem regelmäßig zu reinigen, um ihn so schön wie am Tag der Installation zu erhalten.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 mt-20"><strong>Zuverlässige Haltbarkeit, überlegene Qualität</strong></h2>
                                <ul>
                                  <li><strong>1. </strong>Mit HidLoc™ verdeckte Befestigungselemente installiert für eine gleichmäßige Oberfläche, die es für Familien mit Kindern und Haustieren sicherer und komfortabler macht.</li>
                                  <li><strong>2. </strong>Die mehrfarbigen Streifen auf jedem Brett erzeugen ein authentisches Masernmuster und laden Sie ein, sich zu entspannen und Ihr persönliches tropisches Paradies zu genießen.</li>
                                  <li><strong>3. </strong>Markantes Inlay-Design, Stil und Farboptionen</li>
                                  <li><strong>4. </strong>Kein jährliches Streichen, Versiegelung oder Lackierung erforderlich</li>
                                  <li><strong>5. </strong>Außergewöhnliche Beständigkeit gegen UV-Licht und Farbverblassen</li>
                                  <li><strong>6. </strong>Hohe Rutschfestigkeit sorgt für eine sichere Oberfläche, auch bei Nässe</li>
                                  <li><strong>7. </strong>Extrem geringe Wasseraufnahme</li>
                                  <li><strong>8. </strong>Frei von giftigen Zusätzen</li>
                                  <li><strong>9. </strong>Geeignet für den öffentlichen und privaten Bereich</li>
                                  <li><strong>10. </strong>Splittert, spaltet, verfault oder kriegt nicht</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-4 content  ====================*/}

                      {/*====================  Star Smart Classic Section-5 content ====================*/}
                      <div className="col-12 mb-80">
                        <h3>Terrassendielen-Zubehör</h3>
                        <hr />
                        <p className="mb-40">Das Green Plank MARINE CAP™-Zubehör für Terrassendielen erweitert Ihren Horizont noch weiter und lässt Sie unverwechselbare und reizvolle Merkmale in Ihr MARINE CAP™-Terrassendielen integrieren, die sowohl seine Schönheit als auch seine Funktionalität verbessern. Von F-Borten und L-Borten bis hin zu Riser-Brettern, belüfteten Aluminium-Borten, Decksockeln, Unterzügen usw. finden Sie hier alle Deckteile, die Sie benötigen, um Ihr MARINE CAP™-Deckprojekt abzuschließen.</p>

                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/sYQVb4_tHoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/oSyrH7w1qA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                          </Grid>
                        </Grid>
                      </div>
                      {/*====================  End of Star Smart Classic Section-5 content  ===============*/}

                      {/*====================  Star Smart Classic Section-6 content  ====================*/}
                      <div className="col-12 mb-30 mt-80" >
                        <h3>
                          Ladda ner Pdfs</h3>
                        <hr />

                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/green-plank-nfc-wpc-terrassendielen-broschure-2020.pdf">
                              <img src={pdfimg1} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          {/* <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/smart-regular-german-.pdf">
                              <img src={pdfimg2} className="img-fluid" alt="" />
                            </a>
                          </Grid> */}
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/greenplank-wpc-nfc-terrassendielen-Installationsanleitung.pdf">
                              <img src={pdfimg3} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/marine-capped-german-with-aluminum.pdf">
                              <img src={pdfimg4} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/datenblatt-marinecap-terrassendiele-wpc-bpc-greenplank.pdf">
                              <img src={pdfimg5} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>

                          </Grid>

                        </Grid>
                      </div>
                      {/*====================  End of Smart Classic Section-6 content  ====================*/}


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

export default marinecapkomposittrall;