import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trä--plast-kompositer.webp";
import Footer from "../components/footer";
import Head from "next/head";

const traPlast = () => {
  return (
    <>
     <Head>
       <link rel="canonical" href="/holz-Kunststoff-Verbundwerkstoffe-oder-WPC" />
        <meta name="title" content="Wood-Plastic-Composite oder WPC - Greenplank.de" />
        <meta name="description" content="Unser Holz-Kunststoff-Verbund ist auf Langlebigkeit und Attraktivität ausgelegt. Terrassendielen, Fassadenverkleidungen, Balkonfliesen und Patios aus WPC sind die wichtigsten Artikel." />
      </Head>
    <Layout pageTitle="Holz-Kunststoff-Verbundwerkstoffe oder WPC">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Holz Kunststoff Verbundwerkstoffe oder WPC" crumbTitle="Holz-Kunststoff-Verbundwerkstoffe oder WPC" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div>
                <div className="row">
                  <div className="blog-details col-12">
                    <div className="blog-inner">
                      <div className="media"><div className="image"><img src={blogImg} alt="" /></div></div>
                      <div className="content">
                        <h2 className="title">Holz-Kunststoff-Verbundwerkstoffe oder WPC</h2>
                        <div className="mb-30">
                          <p>Kunststoffverbundstoffe oder der WPC-Begriff werden üblicherweise verwendet, um Materialien oder Produkte zu bezeichnen, die aus einer oder mehreren natürlichen Fasern oder Mehlen und einem Polymer oder einer Mischung von Polymeren hergestellt sind. Naturfasern und Mehle stammen aus verschiedenen Quellen (z. B. Holz, Reisschale, Hanf, Sisal, Jute, Kenaf, Kokosnuss, Flachs, Mandel, Bambus, Gras), und alle Arten von Polymeren (jungfräulich oder recycelt) können verwendet werden Am häufigsten sind Polyvinylchlorid (PVC), Polypropylen (PP) und Polyethylen hoher Dichte (HDPE).<br />

                            Holz-Kunststoff-Verbundwerkstoffe oder WPC werden als sicheres, umweltfreundliches und langlebiges Material für den Einsatz in Außendecks, Terrassen, Brücken, Verkleidungen, Parkbänken, Zäunen, Geländern usw. immer beliebter. Es gibt auch einen wachsenden Markt für Potenziale Innengebrauch wie Türrahmen, Dekor und Möbel. Heute gibt es Verbundprodukte überall, von Nationalparks bis zum Hinterhof Ihres Nachbarn.<br />

                            Holz-Kunststoff-Verbundwerkstoffe bieten eine Vielzahl von Vorteilen gegenüber Alternativen wie imprägniertem Holz und natürlich haltbarem Zedern- oder Rotholz: Wetterbeständigkeit, lange Lebensdauer und sehr wartungsarm. Verbundprodukte spielen auch eine Rolle bei der Entwicklung einer nachhaltigeren Zukunft: Viele WPC-Produkte verwenden recycelten Kunststoff und Holz als Rohstoffe im Herstellungsprozess.<br />

                            Obwohl die Technologie nicht neu ist, wächst das Interesse an den neuen Gestaltungsmöglichkeiten, die diese Materialkombination bietet.</p>



                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 section-space--top--60">
                    {/* <BlogComment/> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
</>
  );
};

export default traPlast;
