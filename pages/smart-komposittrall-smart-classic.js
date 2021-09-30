import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/smartclassic/smart_classic.jpg";

import Imagecolor1 from "../assets/images/colors/smart_classic/Smart-Cloudy-Grey.png";
import Imagecolor2 from "../assets/images/colors/smart_classic/Smart-Ipe.png";
import Imagecolor3 from "../assets/images/colors/smart_classic/Smart-Walnut.png";
import Imagecolor4 from "../assets/images/colors/smart_classic/Classic-Beach-Grey.png";
import Imagecolor5 from "../assets/images/colors/smart_classic/Classic-Chocolate.png";


import Imagesurface from "../assets/images/surface/smart_classic/Smart-Classic.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";

import Footer from "../components/footer";

const smartclassic = () => {
  return (
    <Layout pageTitle="SMART™ wpc terrassendielen – Smart Classic™">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="SMART™ wpc terrassendielen – Smart Classic™" crumbTitle=" Smart Classic™" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper section-space--inner--120">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*====================  Star Smart Classic Section-1 content ====================*/}
                      <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>SMART™ wpc terrassendielen – Smart Classic™</h2>
                          <strong>Unglaubliche Auswahl mit unglaublicher Schönheit</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>Dank des einzigartigen Verriegelungssystems und der spaltfreien Oberfläche ist das SMART™ Terrassen System ist eine gute Wahl für Familien. Es ist für maximale Haltbarkeit ausgelegt. Es widersteht dem Ausbleichen, Flecken, Schimmel und verrottet, knackt oder verzieht sich nicht. Es ist ebenfalls insektensicher und splitterfrei, was es für Familien mit Kindern und Haustieren sicherer und komfortabler macht.</strong>
                              Unser SMART Classic™ Terrassendielen ist inspiriert von natürlichen Mineralien und Erdpigmenten, mit einer ästhetischen Ausstrahlung von durchgehenden und strukturierten Rillen. Die Farbpalette ist reich und lebendig und wird von Hausbesitzern und Architekten gegenüber anderen Terrassenmaterialien bevorzugt. Jede sorgfältig zusammengestellte Nuance enthält attraktive mehrfarbige Töne und Streifen. SMART Classic™ Terrassendielen aus Verbundwerkstoff sind mit barfuß begehbar.
                              <p>SMART Classic™ Verbundplatten werden ohne Clips installiert und mit Schrauben durch die vorgefertigten langen Befestigungs- und Drainagelöcher an den Trägern befestigt.</p>
                              <p>Durch die Verwendung von SMART™ Terrassendielen System können Sie eine vollständig geschlossene Terrassenfläche schaffen, auf der kein Schmutz herabfallen oder Unkraut wachsen kann.</p>
                              <div>
                                <ul>
                                  <li><strong>Premium Qualität</strong> – Bewährte Terrassendielen in nordischer Qualität für raues Wetter und ein umweltfreundlicheres Leben.</li>
                                  <li><strong>Keine Clips</strong> – Sie benötigen keine Deckbefestigungsklammern, um unsere wpc terrassendielen mit Nut und Feder zu befestigen.</li>
                                  <li><strong>Gleichmäßigkeit </strong>– Unser wpc terrassendielen mit Nut und Feder Verbindung sorgt für sehr gleichmäßige und glatte Oberflächen.</li>
                                  <li><strong>Erleichterte Installation</strong> – Die Installation unserer Verbundplatten mit Nut und Feder ist ebenfalls einfach. Die Platte lässt sich leicht einrasten, ohne dass der Abstand zwischen den Platten beeinträchtigt wird.</li>
                                  <li><strong>Vorgefertigte Löcher </strong> Unsere Nut- und Federböden werden mit vorgefertigten Löchern geliefert, sodass Sie die Bretter einfach und problemlos an ihrem Platz befestigen können, ohne dass das Risiko einer Verlagerung oder Bewegung besteht.</li>
                                  <li><strong>Ergänzendes Zubehör </strong> Vervollständigen Sie Ihr Traumterrassendesign mit unseren belüfteten Zierleisten und Abdeckungen – die perfekte Ergänzung für Ihren leistungsstarken SMART Decking.</li>
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
                                      <td align="left">Rutschhemmende, gerippte, kräftige, mehrfarbige Farben</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Größe:</strong></td>
                                      <td align="left">ca. 22 * 152 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Länge:</strong></td>
                                      <td align="left">ca. 2.8 m | 3.8 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Bedarf:</strong></td>
                                      <td align="left">Ca. 6,5 Meter für 1 m²</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Gewicht:</strong></td>
                                      <td align="left">ca. 3.45 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Balkenspannung:</strong></td>
                                      <td align="left">50 cm c / c für Wohnanwendungen *</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* </div> */}
                              <div className="row mt-40 mb-30">

                                <div className="row" style={{ marginTop: ".5em", marginRight: "8px", marginLeft: "4px" }}>
                                  <img src={Imagesurface} />
                                </div>


                              </div>
                              <div className="row mt-60">

                                <Grid container spacing={3}>
                                  <Grid item xs={6} sm={3} lg={4}>
                                    <a target="_blank" href="/bestall-prov" className="thm-btn" >Muster bestellen</a>
                                  </Grid>
                                  <Grid item xs={6} sm={3} lg={6}>
                                    <a target="_blank" href="/pdfs/smart-classic-deck-german.pdf" className="thm-btn"  >Installationsanleitung</a>
                                  </Grid>
                                  <Grid item xs={8} sm={6} lg={8}>
                                    <a target="_blank" href="/pdfs/smart-classic-deck.pdf" className="thm-btn" >Aluminiuminstallation</a>
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
                              <h4 className="mt-20 text-center">Molnigt Grått</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor2} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Ipé</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor3} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Amerikansk valnöt</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor4} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Strandgrå</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project">
                              <div className="single-gallery-project__image">
                                <img src={Imagecolor5} className="img-fluid" alt="" />
                                <h4 className="mt-20 text-center">Choklad</h4>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
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
                                <h2 className="mb-40 mt-20"><strong>Sei smart – Kauf SMART</strong></h2>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-4 content  ====================*/}

                      {/*====================  Star Smart Classic Section-5 content ====================*/}
                      <div className="col-12 mb-80">
                        <h3>WPC Terrassendielen-Zubehör</h3>
                        <hr />
                        <p className="mb-40">Green Plank SMART Terrassenzubehör erweitert Ihren Horizont noch weiter und lässt Sie unverwechselbare und reizvolle Funktionen in Ihren SMART Deck integrieren, wodurch sich sowohl seine Schönheit als auch Funktionalität verbessert. Von F-Blenden und L-Blenden bis hin zu Riser-Brettern, belüfteten Aluminiumblenden, Decksockeln, Balken usw. finden Sie hier alle Deckteile aufgeführt, die Sie zur Vervollständigung Ihres SMART Decks benötigen.</p>

                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/2CtOcT9Bf9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/oSyrH7w1qA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          {/* <Grid item xs={12} sm={4}>
                          </Grid> */}
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
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/smart-classic-deck-german.pdf">
                              <img src={pdfimg2} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="pdfs/green-plank-montageanleitung-fur-smart-terrassendielen-2019.pdf">
                              <img src={pdfimg3} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/smart-classic-deck.pdf">
                              <img src={pdfimg4} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/datenblatt-smart-classic-terrassendiele-wpc-bpc-greenplank.pdf">
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

export default smartclassic;
