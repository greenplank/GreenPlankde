import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/staket_system/Modern/image.webp";
import Image1 from "../assets/images/products/innerPages/staket_system/Modern/image4.webp";
import Image2 from "../assets/images/products/innerPages/staket_system/Modern/image3.webp";
import Image3 from "../assets/images/products/innerPages/staket_system/Modern/image1.webp";
import Image4 from "../assets/images/products/innerPages/staket_system/Modern/image2.webp";

import Imagecolor1 from "../assets/images/colors/novofence-modern/Beach-Grey.png";
import Imagecolor2 from "../assets/images/colors/novofence-modern/Charcoal.png";

import Head from "next/head";
import Imagesurface from "../assets/images/surface/Novoclad-8.png";
import Imagesurface2 from "../assets/images/surface/Novofence-Modern-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";

import Footer from "../components/footer";

const kompositstaketmodern = () => {
  return (
    <Layout pageTitle="NOVOFENCE™ Zaunsystem Modern™">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="NOVOFENCE™ Zaunsystem Modern™" crumbTitle="NOVOFENCE™ Modern™" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper section-space--inner--120">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*====================  Star Staket Modern Section-1 content ============*/}
                      <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>NOVOFENCE™ Zaunsystem Modern™</h2>
                          <strong>Ein einfach zu bauender, wartungsfreier, hochwertiger, maßgeschneiderter Zaun, der Ihren spezifischen Anforderungen entspricht. Diese horizontal gelattete Abschirmung / Umzäunung in modernem Stil schafft eine atemberaubende zeitgemäße Grenze zu Ihrem Eigentum.</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">
                              <p>
                                Gute Zäune sind gute Nachbarn. Novofence™ Modern™ ist ein langlebiger horizontaler Lattenrost / Zaun, der Ihren Garten aufwerten und den Wert und die Attraktivität Ihres Hauses verbessern wird. Modern™ Lattenrost- / Zaunelemente sind eine ideale Alternative zu massiven Zaunelementen in Gebieten mit starkem Wind, da sie Luft durchlassen.
                              </p>
                              <p>
                                Das Novofence™ Modern™ Zaunsystem ist äußerst vielseitig und kann in Wohn- und Gewerbegebieten im Freien entweder als subtile Ergänzung oder als Statement-Element eingesetzt werden. Die Fähigkeit unserer Zaunsystem, den härtesten Wetterbedingungen standzuhalten, und Termiten widerstehen, macht es auch zu einer fantastischen, kostengünstigen Alternative zur Verwendung von Naturholzgittern und Zaunprodukten.
                              </p>
                              <p>
                                Der moderne™ Zaunsystem ist eine schöne, einzigartige und wartungsarme Alternative zu Holz- und Vinylzäunen. Unsere Zaunsystembretter und -pfosten sind kunstvoll so konstruiert, dass sie wie echtes Holz aussehen, ohne dass Ölen, Malen oder Verstemmen erforderlich sind.
                              </p>

                              <div>
                                <ul>
                                  <li><strong>Premium Qualität</strong> – Bewährte Terrassendielen in nordischer Qualität für raues Wetter und ein umweltfreundlicheres Leben.</li>
                                  <li><strong>Geringer Wartungsaufwand</strong> –   Im Laufe der Zeit erfordert der Green Plank-Zaun weniger Wartung und Produktaustausch als Holz oder Vinyl.</li>
                                  <li><strong>Verstärkte Pfosten</strong>–  Hochwertiger, wartungsarmer stabiler Rahmen aus Aluminium + Verbundpfosten und horizontalen Edelstahl + Verbundschienen.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Staket Modern Section-1 content  ===========*/}

                      {/*====================  Star Staket Modern Section-2 content  =============*/}
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
                              <div className="project-information mb-30">
                                <h3>Produktinformation</h3>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left"><strong>Oberfläche:</strong></td>
                                      <td align="left">Gerillt, gebürstet mit holzfarbenen und luxuriösen, bunten Farben</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Größe:</strong></td>
                                      <td align="left">ca. 25 * 135 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Länge:</strong></td>
                                      <td align="left">ca. 1.8 m,   3.6 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Bedarf:</strong></td>
                                      <td align="left">12 Bretter (1,8 m lang) für 1,8 m²</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Gewicht:</strong></td>
                                      <td align="left">ca. 2.66 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Max Abstand:</strong></td>
                                      <td align="left">60 cm c / c für Wohnanwendungen *</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* </div> */}
                              <div className="row mt-20 mb-20">

                                <Grid container spacing={2}>
                                  <Grid item xs={6} sm={4}>
                                    <img src={Imagesurface} />
                                  </Grid>
                                  <Grid item xs={6} sm={4}>
                                    <img src={Imagesurface2} />
                                  </Grid>
                                </Grid>

                              </div>
                              <div className="row section-space--top--60">

                                <Grid container spacing={3}>
                                  <Grid item xs={6} sm={4} lg={6}>
                                    <a target="_blank" href="/bestall-prov" className="thm-btn" >Muster bestellen</a>
                                  </Grid>

                                </Grid>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/*====================  End of Staket Modern Section-2 content  ============*/}

                      {/*=============  Star Staket Modern Section-3 content  ====================*/}
                      <div className="col-12 mb-80">
                        <h3>FARBENTRENDS ANZEIGEN – tief verwurzelt mit natürlichem und unverwechselbarem Charakter</h3>
                        <hr />
                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor1} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Beach Grey</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor2} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Charcoal</h4>
                            </div>
                          </Grid>

                        </Grid>
                      </div>
                      {/*====================  End of Staket Modern Section-3 content  ===========*/}

                      {/*====================  Star Staket Modern Section-4 content ==========*/}
                      <div className="col-12 mb-80">
                        <h2>ZAUNTEILE</h2>
                        <hr />
                        <p className="mb-40">Green Plank NOVOFENCE™ Composite-Zaunzubehör erweitert Ihren Horizont noch weiter und lässt Sie unverwechselbare und reizvolle Merkmale in Ihre NOVOFENCE integrieren Zaunsystem, der sowohl seine Schönheit als auch Funktionalität verbessert. Von Aluminiumpfosten, Pfostenhüten, Schienen bis hin zu Pfostenfüßen, Zaunhalterungen usw. sind hier alle Zäune Teile, die Sie benötigen, um Ihre zu vervollständigen NOVOFENCE™ zuan project.</p>


                      </div>
                      {/*==============  End of Star Staket Modern Section-4 content  =========*/}

                      {/*====================  Start of Tillbehor Section-4.1 content =========*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">
                                  <img src={Image1} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information mb-20">
                                <ul>
                                  <li>
                                    <strong>1.</strong>
                                    Pulverbeschichtete Pfostenkappen
                                  </li>
                                  <li>
                                    <strong>2.</strong>Aluminium + Verbundpfostenhülse
                                  </li>
                                  <li>
                                    <strong>3.</strong>Metallpfosten-Grundplatten
                                  </li>
                                  <li>
                                    <strong>4.</strong>Verbundzaunbretter / Lamellen
                                  </li>
                                  <li>
                                    <strong>5.</strong>Endkappen für Verbundzaunbretter / -latten
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/*====================  End of Tillbehor Section-4.1 content =========*/}

                      {/*====================  Start of Tillbehor Section-4.2 content =========*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information mb-20">
                                <ul>
                                  <li>
                                    <strong>Nutzen:</strong>
                                    Endkappen werden verwendet, um die Enden
                                    von Hohlkern-Zaunbrettern abzudichten, um Ihrem
                                    Modern™ Composite-Fechten für einen professionellen Look.
                                    Endkappen schützen Zaunbretter vor eindringendem Schmutz.
                                  </li>
                                  <li>
                                    <strong>Verpackung:</strong>Box
                                  </li>
                                  <li>
                                    <strong>Inhalt:</strong>25 Endkappen
                                  </li>
                                  <li>
                                    <strong>Material:</strong>Composite Endkappen für Hohlzaunbretter
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">
                                  <img src={Image2} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Tillbehor Section-4.2 content =========*/}

                      {/*====================  Start of Tillbehor Section-4.3 content =========*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">
                                  <img src={Image3} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information mb-20">
                                <ul>
                                  <li>
                                    <strong>Nutzen:</strong>
                                    Mit der Schönheit von Holz und der Langlebigkeit von
                                    Aluminium + Verbundwerkstoff, Traditional? fence post sleeve
                                    ensures lasting durability with low-maintenance.
                                  </li>
                                  <li>
                                    <strong>Größe:</strong>ca. 80 * 80 mm
                                  </li>
                                  <li>
                                    <strong>Längd:</strong>ca. 2.0 m
                                  </li>
                                  <li>
                                    <strong>Oberfläche:</strong>Gerillt, gebürstet mit holzfarbenen und luxuriösen, bunten Farben
                                  </li>
                                  <li>
                                    <strong>Gewicht:</strong>ca. 2.34 kg / m
                                  </li>
                                  <li>
                                    <strong>Material:</strong>Robuste Verbundhülse über Aluminiumhülse
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Tillbehor Section-4.3 content =========*/}

                      {/*====================  Start of Tillbehor Section-4.4 content =========*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information mb-20">
                                <ul>
                                  <li>
                                    <strong>Nutzen:</strong>
                                    Metallpfosten-Grundplatten sind in zwei Ausführungen erhältlich
                                    und bieten sichere Befestigungsmöglichkeiten für den
                                    Novofence Traditional™ System.
                                    Die Ankerplatte verfügt
                                    über ein betoniertes Bein, das sich unterhalb des
                                    Flansches befindet, um beim Gießen von Fundamenten in Beton
                                    einzusteigen. Die Grundplatte ist durch vier Schraubenlöcher befestigt und
                                    kann auf Beton- und Holztischen, Terrassen usw. montiert werden.
                                  </li>
                                  <li>
                                    <strong>Größe 1:</strong>ca. 86*86*400 mm
                                  </li>
                                  <li>
                                    <strong>Größe 2:</strong>ca. 86*86*700 mm
                                  </li>
                                  <li>
                                    <strong>Gewicht:</strong>ca. 1.70 kg / pc,   ca. 2.70 kg / pc
                                  </li>
                                  <li>
                                    <strong>Material:</strong>Robuster pulverbeschichteter Edelstahl
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">

                                  <img src={Image4} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Tillbehor Section-4.4 content =========*/}


                      {/*==========  Star Staket Modern Section-5 content ================*/}
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
                                  <li><strong>1. </strong>Echter Vollsichtschutzzaun mit satten natürlichen Farben</li>
                                  <li><strong>2. </strong>Holzgetönte Farben erzeugen ein authentisches Masernmuster, sodass Sie stolz darauf sind, ein haltbares und nachhaltiges Material für Ihr Projekt zu wählen.</li>
                                  <li><strong>3. </strong>Board-on-Board-Stil bietet ästhetische Anziehungskraft</li>
                                  <li><strong>4. </strong>Kein jährliches Streichen, Versiegelung oder Lackierung erforderlich</li>
                                  <li><strong>5. </strong>Außergewöhnliche Beständigkeit gegen UV-Licht und Farbverblassen</li>
                                  <li><strong>6. </strong>Nachbarschaftsfreundliches Design, beliebt für gemeinsam genutzte Leitungen</li>
                                  <li><strong>7. </strong>Extrem geringe Wasseraufnahme</li>
                                  <li><strong>8. </strong>Frei von giftigen Zusätzen</li>
                                  <li><strong>9. </strong>Splittert, verrottet oder verzieht sich nicht</li>
                                  <li><strong>10. </strong>Geeignet für den öffentlichen und privaten Bereich</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*===========  End of Staket Modern Section-5 content  ===============*/}



                      {/*==============  Star Staket Modern Section-7 content  ============*/}
                      <div className="col-12 mb-30 mt-40" >
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
                            <a target="_blank" href="/pdfs/green-plank-modern-fence-installation-guide-2019.pdf">
                              <img src={pdfimg3} className="img-fluid" alt="" />
                            </a>
                          </Grid>

                          <Grid item xs={6} sm={2}>

                          </Grid>

                        </Grid>
                      </div>
                      {/*==============  End of Staket Modern Section-7 content  ============*/}


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

export default kompositstaketmodern;
