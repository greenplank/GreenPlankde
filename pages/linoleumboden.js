import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Linoleum.webp";
import Footer from "../components/footer";
import Head from "next/head";

const linoleumgolv = () => {
  return (
    <Layout pageTitle="Linoleumböden">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Linoleumböden" crumbTitle="Linoleumböden" />
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
                                <h2 className="title">Linoleumböden</h2>
                                <div className="mb-30">
                                    <p>Linoleum war bis in die 1950er Jahre einer der führenden elastischen Bodenbeläge – als es weitgehend durch PVC ersetzt wurde. Aber zumindest als Nischenprodukt für umweltbewusste Bauherren hat der Boden bis heute überlebt. Linoleum ist ein nachhaltiges natürliches Material, das am Ende seiner Lebensdauer sogar kompostiert werden kann.</p>
                                    <p>Wie Teppiche wird es traditionell als elastisches Rollenprodukt hergestellt, aber die Industrie bietet jetzt auch Lackprodukte an, die aus Laminat- oder Designböden bekannt sind. Bei Rollenwaren wird üblicherweise Jutegewebe als Substratschicht verwendet; Bei kleineren Paneelen im Fliesen- oder Dielenformat besteht die Basis normalerweise aus Holzwerkstoffen. Oft gibt es eine zusätzliche Korkschicht, um die Schalldämmung des Bodens zu erhöhen.</p>
                                    <h3 style={{marginBottom:30,marginTop:30}}>Zutaten:</h3>
                                    <p style={{marginBottom:30,marginTop:30}}>Die Zusammensetzung und Eigenschaften von Linoleum sind international standardisiert. In Europa gibt es EN 548 („Elastische Bodenbeläge – Spezifikation für Linoleum mit und ohne Muster“). Die wichtigsten Bestandteile des Naturprodukts sind oxidiertes Leinöl (ca. 32%) und Naturharze (8%). Es gibt auch organische Füllstoffe wie Kork oder Holzmehl (40%) und anorganische Füllstoffe wie Kalksteinpulver und Farbpigmente (20%).</p>
                                    <h3 style={{marginBottom:30,marginTop:30}}>Eigenschaften:</h3>
                                    <p style={{marginBottom:30,marginTop:10}}>Linoleum als Bodenbelag hat viele Vorteile:</p>
                                    
                                        <strong>1. </strong>Es ist langlebig und belastbar und vor allem extrem druckbeständig. Das elastische Material ist beispielsweise für Stuhlräder geeignet. Vorübergehende Verformungen treten unter Druckbelastung auf, kehren aber schnell zurück. Der Bezug ist auch gelenkschonend, warm an den Füßen und rutschfest. Das gesunde Naturprodukt wird auch häufig in Schulen, Kindergärten und Krankenhäusern verwendet und ist pflegeleicht.<br/>
                                        <strong>2. </strong>Weitere Eigenschaften: Leinölböden sind flammhemmend, hemmen Trittgeräusche, laden sich nicht elektrisch auf (antistatische Wirkung) und wirken aufgrund des oxidierten Leinöls (Linoxin) sogar antibakteriell. Sie punkten auch mit ihrer sehr guten Farbechtheit – auch wenn sie dem Sonnenlicht ausgesetzt sind – und sind unempfindlich gegenüber Ölen, Fetten und den meisten anderen chemischen Belastungen. Sie sollten jedoch vermeiden, stark alkalische Reinigungsmittel (Lauge) für die Wartung zu verwenden.<br/>
                                        <strong>3. </strong>Geeignet für Treppen.<br/>
                                        <strong>4. </strong>Geeignet für Fußbodenheizung (wenn vollständig verklebt)<br/>
                                        <strong>5. </strong>80% aus nachwachsenden Rohstoffen, biologisch abbaubar.<br/>
                                    
                                    <h3 style={{marginBottom:30,marginTop:30}}>Nachteile:</h3>
                                    
                                        <strong>1. </strong>Linoleum ist jedoch für Nassräume völlig ungeeignet. Das natürliche Material ist feuchtigkeitsempfindlich und kann wie Holz verrotten oder quellen, wenn es übermäßiger Feuchtigkeit ausgesetzt wird. Apropos Fäulnis: Diese Eigenschaft weist auch auf einen Vorteil des Materials hin. Da altes Linoleum biologisch abbaubar ist, kann es kompostiert werden.<br/>
                                        <strong>2. </strong>Ein Schleier der Reife kann sich entwickeln.<br/>
                                    
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
  );
};

export default linoleumgolv;
