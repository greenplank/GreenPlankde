import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BrandCarousel from "../components/brand-carousel";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const BliCertifieradHantverkare = () => {
  return (
    <>
      <Head>
        <title>Bli en Green Plank certifierad</title>
           <link rel="canonical" href="/werden-sie-ein-green-monteur" />
        <meta name="title" content="Werden Sie ein zertifizierter GreenPlank-Handwerker - GreenPlank.de
" />
        <meta name="description" content="Werden Sie ein zertifizierter GreenPlank-Handwerker - GreenPlank.de
" />
      </Head>
      <Layout pageTitle="Werden Sie ein zertifizierter GreenPlank-Handwerker - GreenPlank.de
">
        <HeaderTwo />
        <PageHeader title="Werden Sie ein Green Monteur" crumbTitle="bli-en-certifierad" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>Treten Sie unserem Team zertifizierter Monteure bei</h2>
                <div className="mb-30">
                  <p>Bei Green Plank geht es um Partnerschaft. Unser Geschäft baut Sie auf!</p>
                  <p className="mb-30 mt-30">Entdecken Sie, wie Green Plank Ihr Unternehmen und Ihren Marktanteil mit unseren hochmodernen Marketing-Tools, praktischen Schulungen und Support stärken kann. Werden Sie noch heute zum Komposit-Profi in Ihrer Umgebung!</p>
                  <h3 className="mb-30 mt-30">Ein Treueprogramm, das Ihrem Unternehmen tatsächlich hilft</h3>
                  <p className="mb-30 mt-30">Green Plank ist eine der weltweit führenden Marken für Verbundwerkstoffe und bietet seinen gut qualifizierten Partnern Belohnungen für den Geschäftsaufbau. Green PlankPro findet einen Monteur in Ihrer Nähe und macht es einfach, die Präsenz Ihres Unternehmens mit einem anpassbaren Marketingprogramm zu erhöhen und Kunden mit unseren umweltfreundlichen, hochwertigen und langlebigen Produkten mit geringem Wartungsaufwand zu überzeugen.</p>
                  <p className="mb-30 mt-30">Fünf einfache Schritte, um ein zertifizierter Monteur für Green Plank zu werden.</p>

                  <strong>1. </strong>Senden Sie uns Ihre Kontaktdaten über das Bewerbungsformular
                  <br />
                  <strong>2. </strong>Nehmen Sie an einer Schulung zum Treueprogramm des Green Plank Green Installer teil
                  <br />
                  <strong>3. </strong>Installieren Sie innerhalb von 12 Monaten nach Einreichung Ihres Antrags drei Green Plank-Terrassendecks und registrieren Sie diese Projekte auf GreenPro.GreenPlank.de
                  <br />
                  <strong>4. </strong>Ein Vertreter von Green Plank wird eines der letzten drei Projekte auf die ordnungsgemäße Installation von Green Plank-Produkten untersuchen.
                  <strong>5. </strong>Ihre Unternehmenskontaktinformationen werden auf unserer Website “Monteur finden” veröffentlicht.
                  <br />


                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mb-30 mt-30">
                        <h3 className="mb-30 mt-30 text-center">Silver</h3>
                        <p className="text-center">Erstellen Sie innerhalb von 12 Monaten nach Einreichung Ihrer Bewerbung 3 Green Plank-Decks und registrieren Sie diese Projekte auf GreenPro.GreenPlank.de</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mb-30 mt-30">
                        <h3 className="mb-30 mt-30 text-center">Gold</h3>
                        <p className="text-center">Bauen Sie innerhalb von 12 Monaten nach Einreichung Ihres Antrags 6 Green Plank-Terrassendecks und registrieren Sie diese Projekte bei GreenPro.GreenPlank.de
                          Nehmen Sie an einem kostenlosen Training teil</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mb-30 mt-30">
                        <h3 className="mb-30 mt-30 text-center">Platinum</h3>
                        <p className="text-center">Bauen Sie innerhalb von 12 Monaten nach Einreichung Ihres Antrags 12 Green Plank-Decks und registrieren Sie diese Projekte bei GreenPro.GreenPlank.de
                          Nehmen Sie an einem kostenlosen Training teil</p>
                      </blockquote>
                    </Grid>
                  </Grid>


                  <p className="mb-30 mt-30">* Nehmen Sie alle zwei Jahre an einer kostenlosen Produktschulung teil, um die Mitgliedschaftsstufe aufrechtzuerhalten. Um ein Green Installer zu werden, benötigen Sie eine Haftpflichtversicherung und unterzeichnen den Green Installer-Vertrag.</p>

                  <div >
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Vorteile des Green Plank Treuprogramms *</th>
                          <th>Silver</th>
                          <th>Guld</th>
                          <th>Platinum</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Vorrangiger Anruf vom Green Plank-Kundendienst</td>
                          <td>Nächster Tag</td>
                          <td>Nächster Tag</td>
                          <td>Gleicher Tag</td>
                        </tr>
                        <tr>
                          <td>Vorrangiger technischer Support</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Einfache Registrierung der Garantie</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Installationshinweise finden Sie auf den Green Plank-Websites **</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>Premium Platz</td>
                        </tr>
                        <tr>
                          <td>Treuepunkte für jedes Projekt, das Sie registrieren</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Zugelassene Arbeitskleidung für Installateure</td>
                          <td></td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Rabatt</td>
                          <td>10%</td>
                          <td>15%</td>
                          <td>20%</td>
                        </tr>
                        <tr>
                          <td>Kostenlose Autodekoration mit Logo</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Monatlicher Newsletter und Angebote</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <strong>1.</strong>* Es gelten die Bedingungen.
                  <strong>2.</strong>* Mindestens 3 Projekte mit Green Plank-Produkten müssen pro Jahr durchgeführt werden und alle zwei Jahre an einer kostenlosen Produktschulung teilnehmen.
                  <br />

                  <h3 className="mb-30 mt-30">Möchten Sie ein Green Plank-zertifizierter <strong>”Green Installer”?</strong> werden?
                  </h3>
                  <p className="mb-30 mt-30">Wir würden uns freuen, Sie in unserem Team zu haben! Klicken Sie auf die Schaltfläche unten und füllen Sie das Registrierungsformular zusammen mit einer kurzen Zusammenfassung Ihrer Person und Ihrer Erfahrung mit Außendecks, Zäunen und Fassadenkonstruktionen aus.</p>

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

export default BliCertifieradHantverkare;
