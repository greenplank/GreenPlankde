import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Batgolv/GP709/image.webp";

import Head from "next/head";
import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";

import Footer from "../components/footer";

const naturplankkompositplankagp709 = () => {
  return (
    <Layout pageTitle="NATURPLANK™ Composite Plank – GP709">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="NATURPLANK™ Composite Plank – GP709" crumbTitle="gp709" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
            <div className="page-wrapper pt-40 pb-40">
                    {/*Smart Classic section start*/}
                    <div className="project-section">
                        <div className="container">
                            <div className="row">

                                {/*==============  Star Naturplank  Section-1 content ====================*/}
                                <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                                    <div className="project-details">
                                        <h2>
                                        NATURPLANK™ Composite Plank – GP709 – Die grüne Alternative</h2>
                                        <strong>Nachhaltige Holzalternative mit unendlichen Gestaltungsmöglichkeiten – PVC frei!</strong>
                                        <div class="et_pb_text_inner">
                                            <div class="ce_text block">

                                                <strong>Schön realistisch und äußerst praktisch mit einer zeitlosen Qualität NATURPLANK ™ Verbunddielen sind eine ideale Wahl für Landschaftsarchitekten und Bauherren, um die Lebensdauer der Elemente in der Landschaft zu maximieren.</strong>
                                                <p>
                                                Green Plank NATURPLANK ™ Hochleistungs-Naturfaser-Verbunddiele GP709 ist ideal für verschiedene Außenanwendungen wie Handläufe, Terrassen-, Terrassen- und Gartenmöbel, Parkbänke, Tische, Mülleimer und Aufbewahrung.
                                                </p>
                                                <p>
                                                Diese extrem haltbare Verbundplatte, die ausschließlich von Green Plank vertrieben wird und auch als WPC, Holz-Kunststoff-Verbund, Naturfaser-Verbund oder Verbund bezeichnet wird, besteht aus natürlichen Holz- / Reisschalenfasern und Polymeren (recycelte Kunststoffe), um einen Verbund zu erhalten mit größerer Festigkeit und Haltbarkeit als herkömmliches Holz. Dies verleiht ihm eine hervorragende Beständigkeit gegen Sonne, Frost, Regen und plötzliche Temperaturschwankungen.
                                                </p>
                                                <p>
                                                Unsere NATURPLANK ™ Vierkant-Verbunddielen GP709 können wie echte Holzbretter in jede gewünschte Form geschliffen oder gesägt werden, ohne das Echtholz-Erscheinungsbild der Verbundplatte zu verlieren.
                                                </p>
                                                <div>
                                                    <ul>
                                                        <li><strong>Premium-Qualität</strong> –   Bewährte nordische Qualitätsdielen für raues Wetter und umweltbewusstes Wohnen.</li>
                                                        <li><strong>Praktisch </strong> –   Perfekte Kombination aus Ästhetik und Funktionalität mit einem natürlichen Holz-Look.</li>
                                                        <li><strong>Außergewöhnlich wartungsarm</strong> – Ideal für nordische Wetterbedingungen mit minimalem Verblassen, langer Lebensdauer und minimaler Wartung.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============  End of Naturplank Section-1 content  =================*/}

                                {/*==============  Star Naturplank Section-2 content  ====================*/}
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
                                                <div className="project-information" style={{ color: "" }}>
                                                    <h3>Produktinformation</h3>
                                                    <table width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td align="left"><strong>Oberfläche:</strong></td>
                                                                <td align="left"> Rutschhemmende, glatte Oberfläche, auffällige Optik, die exotische tropische Harthölzer nachahmt; Wendebretter.</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>Abmessungen:</strong></td>
                                                                <td align="left">ca. 10 * 80 mm</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>Länge:</strong></td>
                                                                <td align="left">ca. 2.4 m</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>Gewicht:</strong></td>
                                                                <td align="left">ca. 1.05 kg / m</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="row mt-60">
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
                                {/*===============  End of Naturplank Section-2 content  =============*/}



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

export default naturplankkompositplankagp709;
