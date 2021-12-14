import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BrandCarousel from "../components/brand-carousel";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const BliAterforsaljare = () => {
  return (
    <>
      <Head>
        <title>Händler werden</title>
        <meta name="title" content="Bli distributör för komposit produkter i världsklass - GreenPlank.se" />
        <meta name="description" content="Bli distributör eller återförsäljare av Green Plank Premium Quality hållbar komposittrall, fasadbeklädnad, staket, plankor, plattor etc.Bli distributör eller återförsäljare av Green Plank Premium Quality hållbar komposittrall, fasadbeklädnad, staket, plankor, plattor etc." />
      </Head>
      <Layout pageTitle="Händler werden">
        <HeaderTwo />
        <PageHeader title="Händler werden" crumbTitle="Händler werden" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>Werden Sie Händler oder Wiederverkäufer von nachhaltigen Green Plank-Produkten</h2>
                <div className="mb-30">
                  <p>Sind Sie daran interessiert, ein Distributor von Green Plank zu werden?® Holz-Kunststoff-Verbundprodukte?</p>
                  <p className="mb-30 mt-30">Die Nachfrage von Green Plank® Wood Plastic Composite-Produkte ist gewachsen, daher haben Händler, Großhändler und Wiederverkäufer die Möglichkeit, mit uns zusammenzuarbeiten. Egal, ob Sie ein kleiner oder großer Einzelhändler, ein Bauunternehmer, eine Person mit einem breiten Netzwerk von Kontakten oder ein großer Vertriebshändler sind, Green Plank® hat ein Reseller-Programm speziell für Sie!</p>
                  <p className="mb-30 mt-30">Als Händler oder Wiederverkäufer von Green Plank® Produkte Sie haben Zugriff auf das umfassendste Angebot an Holz-Kunststoff-Verbundprodukten, wie WPC-Terrassen, Zäune, Geländer, Fassadenverkleidungen, Fliesen und Schindeln.</p>
                  <p className="mb-30 mt-30">Egal für welches Reseller-Programm Sie sich letztendlich entscheiden, mit Green Plank® you’ll receive:</p>
                  <strong>1. </strong>Full access to the industry’s most comprehensive range of Wood Plastic Composite products<br />
                  <strong>2. </strong>Großzügige Genehmigung für Produktmuster
                  <br />
                  <strong>3. </strong>Auflistung Ihres Unternehmens auf unseren Websites
                  <br />
                  <strong>4. </strong>Attraktive Großhandels- und Vertriebsrabatte
                  <br />
                  <strong>5. </strong>Vollständiger Zugang zu Green Plank® Medien-, Marketing- und Werbematerial
                  <br />
                  <h3 className="mb-30 mt-30">Wie man eine Green Plank® Reseller oder Distributor?</h3>
                  <p className="mb-30 mt-30">Wenn Sie daran interessiert sind, ein Green Plank Händler zu werden® distributor, it’s very easy to get started right away. To assist you in your promotional efforts, you will have full access to our comprehensive range of promotional and marketing materials. This includes brochures, portable displays, product samples and customized marketing materials.

                  Es gibt drei grundsätzliche Möglichkeiten, Händler oder Wiederverkäufer von Green Plank Holz-Kunststoff-Verbundprodukten zu werden® Wood Plastic Composite products:</p>
                  <h4 className="mb-30 mt-30">Stocking Distributor (Händler mit Lagerbestand)</h4>

                  <strong>1.</strong>Kauft Produkte bei uns und führt Lagerbestände im eigenen Lager
                  <br />
                  <strong>2.</strong>Ist bereit, jederzeit mindestens 1000 Quadratmeter zu kaufen und auf Lager zu halten
                  <br />
                  <strong>3.</strong>Zeigt mindestens einen Bereich von Green Plank Holz-Kunststoff-Verbundprodukten offen an® , wo immer dies möglich ist.
                  <br />
                  <strong>4.</strong>Fördert aktiv Green Plank® Holz-Kunststoff-Verbundprodukte
                  <br />

                  <h4 className="mb-30 mt-30"> Händler ohne Lagerbestand</h4>
                  <ul>
                    <strong>1.</strong>Bestellt das Produkt nach Bedarf
                    <br />
                    <strong>2.</strong>Fördert aktiv Green Plank® Holz-Kunststoff-Verbundprodukte
                    <br />
                  </ul>
                  <p className="mb-30 mt-30">Um ein Green Plank Partner zu werden,®senden Sie uns bitte eine E-mail an: .</p>

                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <BrandCarousel />
        <Footer />
      </Layout>

    </>);
};

export default BliAterforsaljare;
