import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

import image1 from "../assets/images/installation/smart-Marine-swedish-01.jpg";
import image2 from "../assets/images/installation/greenplank-brochure-title-1.jpg";
import image3 from "../assets/images/installation/smart-classic-deck-swedish-01.jpg";
import image4 from "../assets/images/installation/smart-regular-Swedish-01.jpg";
import image5 from "../assets/images/installation/smart-Capped-swedish-01.jpg";
import image6 from "../assets/images/installation/img_265949.png";
import image7 from "../assets/images/installation/0001-scaled.jpg";
import image8 from "../assets/images/installation/0001-2-scaled.jpg";
import image9 from "../assets/images/installation/img_265949.png";

const InstallationUnderhall = () => {
  return (
    <>
      <Head>
        <title>Installation und Wartung</title>
        <meta name="title" content="Installation och underhåll | Hjälp och guider - GreenPlank.se" />
        <meta name="description" content="Green Plank installationsguider och video kan hjälpa dig att korrekt installera kompositplattor, klädsel, stängsel och räcke med lätthet." />
      </Head>
      <Layout pageTitle="Installation und Wartung">
        <HeaderTwo />
        <PageHeader title="Installation und Wartung" crumbTitle="Installation und Wartung" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>Installation & Wartung
                </h2>
                <div className="mb-30">
                  <p>Sorgen Sie dafür, dass Ihr Terrassenboden, Ihre Fassade oder Ihr Zaun aus Verbundwerkstoff genau so aussehen und funktionieren, wie es sein sollte.</p>
                  <p className="mb-30 mt-30">Die ordnungsgemäße Installation und Wartung ist entscheidend, um Ihre Vision zum Leben zu erwecken und die natürliche Schönheit und Langlebigkeit Ihrer Verbundbodenbeläge, Fassadenverkleidungen und Zaunprodukte zu gewährleisten. Die folgenden Installationsanleitungen und Wartungsanweisungen helfen Ihnen beim Einstieg, während unsere Videoanleitungen einen detaillierten Überblick über die Grundlagen bieten. Egal, ob Sie ein professioneller Installateur oder ein Hausmeister sind, Green Plank verfügt über die Ressourcen, um Sie bei jedem Schritt des Installations- und Wartungsprozesses zu unterstützen.</p>
                  <p className="mb-30 mt-30">Bitte wählen Sie die Art der Installations- und Wartungsanweisungen aus, die Sie interessieren, damit Sie diese auf Ihrem Bildschirm anzeigen oder auf Ihren Computer herunterladen können. Sollten Sie die gesuchten Informationen nicht finden, besuchen Sie bitte unsere FAQs Seite oder senden Sie uns eine E-Mail an: info@greenplank.de</p>
                  <h2 className="mb-30 mt-30">Green Plank WPC/NFC Terrassendielen Pflege und Reinigung</h2>

                  <div class="table-1">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ textAlign: "left" }}>Produkte</th>
                          <th style={{ textAlign: "left" }}>Einfache Installationsanleitung	</th>
                          <th style={{ textAlign: "left" }}>Detaillierte Installationsanleitung</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "left" }}>Smart™ Marine</td>
                          <td><a target="_blank" href="/pdfs/smart-Marine-German.pdf"><img class="wp-image-10058 aligncenter" src={image1} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/green-plank-montageanleitung-fur-smart-terrassendielen-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>Smart™ Classic</td>
                          <td><a target="_blank" href="/pdfs/smart-classic-deck-german.pdf"><img class="wp-image-10058 aligncenter" src={image3} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/green-plank-montageanleitung-fur-smart-terrassendielen-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Smart™ Regular</td>
                          <td><a target="_blank" href="/pdfs/smart-regular-german-.pdf"><img class="wp-image-10058 aligncenter" src={image4} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/green-plank-montageanleitung-fur-smart-terrassendielen-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Smart™ Capped</td>
                          <td><a target="_blank" href="/pdfs/smart-capped-German.pdf"><img class="wp-image-10058 aligncenter" src={image5} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/green-plank-montageanleitung-fur-smart-terrassendielen-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>DECK CARE AND CLEANING</td>
                          <td><img class="wp-image-10063 aligncenter" src={image6} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/german-language_compressed-1.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Marine 40™</td>
                          <td><a target="_blank" href="/pdfs/marine-40-german.pdf"><img class="wp-image-10063 aligncenter" src={image7} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Marine-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Marine 60™</td>
                          <td><a target="_blank" href="/pdfs/marine-60-german-.pdf"><img class="wp-image-10063 aligncenter" src={image7} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Marine-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Classic™ Terrassendielen</td>
                          <td><a target="_blank" href="/pdfs/classic-deck-german.pdf"><img class="wp-image-10063 aligncenter" src={image8} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/datenblatt-classic-terrassendiele-wpc-bpc-greenplank.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>ENTRA™ Composite Decking</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Entra-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>PRIMACAP™ Facade Cladding</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/green-plank-primacap-facade-cladding-installation-guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Novofence Private™</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/green-plank-privacy-fence-installation-guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Novofence Traditional™</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/green-plank-traditional-fence-installation-guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Novofence Modern™</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/green-plank-modern-fence-installation-guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>InstaClick™/EverTile™ Deck Tiles</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/green-plank-deck-tiles-installation-guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* <p className="mb-30 mt-60">Green Plank SmartCap & Smart Wood Composite Decking with Tongue & Groove Installation Instructions – No clips required Green Plank (Rectangular) Wood Composite Decking Installation Instructions</p> */}
                  <h3 className="mb-30 mt-30">HAFTUNGSAUSSCHLUSS:</h3>
                  <p className="mb-30 mt-10">Alle Inhalte, Veröffentlichungen und Literatur auf dieser Seite dienen nur zu Informationszwecken. Diese Informationen sollten nicht als vollständig und aktuell angesehen werden und dürfen nicht anstelle eines Besuchs, einer Konsultation oder einer Beratung durch einen lizenzierten Fachmann verwendet werden.</p>
                  <p className="mb-30 mt-10">Diese Veröffentlichungen und die gesamte auf dieser Website enthaltene Literatur sind urheberrechtlich geschützt. Vor jeglicher Vervielfältigung, Speicherung in einem Abrufsystem oder Übertragung in irgendeiner Form oder auf irgendeine Weise, elektronisch, mechanisch, durch Fotokopieren, Aufzeichnen, oder die ebenfalls. Durch das Herunterladen von Inhalten, Veröffentlichungen und / oder Literatur von dieser Website akzeptieren Sie die in beschriebenen Praktiken Nutzungsbedingungen.</p>
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

export default InstallationUnderhall;
