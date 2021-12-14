import React from "react";
import Layout from "../components/layout";
import Grid from "@material-ui/core/Grid"
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Garantien = () => {
  return (
    <>
      <Head>
        <title>Garantien</title>
        <meta name="title" content="Garantien - GreenPlank.de" />
        <meta name="description" content="Alla komposit produkter från Green Plank har branschledande garantitäckning. Se nivåerna av stöd som varje produkt har här.." />
      </Head>
      <Layout pageTitle="Garantien">
        <HeaderTwo />
        <PageHeader title="Garantien" crumbTitle="Garantien" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2 className="block_title">Leistung, auf die Sie zählen können!</h2>
                <div className="mb-30">
                  <p className="mt-30 mb-30">Mit den branchenführenden Garantien von Green Plank können Sie sicher sein, dass der schöne Außenbereich Ihres Kunden auch so bleibt.
                  </p>
                  <h3 className="mt-30 mb-30">Green Plank Eingeschränkte Garantie für Wohnanlagen
                  </h3>
                  <p className="mt-30 mb-30">Green Plank ist stolz auf unsere Naturfaserverbundprodukte und wir haben keine Angst davor, dies zu zeigen. Alle Green Plank-Produkte – Terrassendielen, Fassadenverkleidungen und Zäune – unterliegen einer eingeschränkten Wohngarantie zum Schutz vor Termiten, Splittern, Fäulnis, Fäulnis und Splittern.</p>
                  <div className="row mt-30">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={8}>
                        <a href="/pdfs/greenplank-composite-products-residential-limited-warranty.pdf" target="_blank" className="thm-btn" >RESIDENTIAL GARANTIE HERUNTERLADEN</a>
                      </Grid>
                    </Grid>
                  </div>
                  <h3 className="mb-30 mt-30">Green Plank’s Eingeschränkte Garantie auf Flecken und Verblassen
                  </h3>
                  <p className="mb-30 mt-30">Neben der Wohngarantie gelten für coextrudierte Verbunddecks von Green Plank und mit ASA beschichtete Fassadenverkleidungsprodukte 25 Jahre Garantie auf die Leistung von Stain & Fade. Die Stain & Fade-Garantie bietet zusätzliche Sicherheit, dass die angegebenen Produkte bei ordnungsgemäßer Installation Flecken und Verblassen widerstehen.</p>
                  <div className="row mt-30">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={8}>
                        <a href="/pdfs/greenplank-composite-products-stain-and-fade-resistance-limited-warranty.pdf" target="_blank" className="thm-btn" >DOWNLOAD DER FLECK- UND FADE-GARANTIE</a>
                      </Grid>
                    </Grid>
                  </div>
                  <h3 className="mb-30 mt-30">Green Plank’s Eingeschränkte Garantie für gewerbliche Einrichtungen
                  </h3>
                  <p className="mb-30 mt-30">Diese Garantie gilt für Terrassendielen und Fassaden von Green Plank, die für gewerbliche Zwecke verwendet werden.</p>
                  <div className="row section-space--top--30">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={8}>
                        <a href="/pdfs/greenplank-composite-products-commercial-limited-warranty.pdf" target="_blank" className="thm-btn" >KOMMERZIELLE GARANTIE HERUNTERLADEN</a>
                      </Grid>
                    </Grid>
                  </div>
                  <p className="mb-30 mt-30">FÜR TECHNISCHE UNTERSTÜTZUNGS- ODER GARANTIEFRAGEN:</p>
                  <p className="mb-30 mt-30">Email: <a href="mailto:info@greenplank.de">info@greenplank.de</a></p>
                  <p>Tel:<a href="tel:+46 40 450 560"> +46 40 450 560</a></p>
                  <p className="mb-30 mt-30">Denken Sie bitte immer daran, dass Sie eine Kopie Ihres Kaufbelegs aufbewahren müssen, um einen Anspruch geltend machen zu können.</p>
                  <h3 className="mb-30 mt-30">GARANTIEREGISTRIERUNG
                  </h3>
                  <p className="mb-30 mt-30">Um Ihre Garantie zu validieren, müssen Sie das Formular (<a href="/pdfs/GREEN-PLANK-WARRANTY-REGISTRATION-CARD.pdf" target="_blank">DOWNLOAD REGISTRTION CARD</a>)  und per Post innerhalb von 90 Tagen nach der Installation versenden. Eine Kopie der Quittung von einem autorisierten Green Plank AB, Green Plank® Decking-Händler oder Auftragnehmer sowie ein Foto des Projekts sind erforderlich.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default Garantien;
