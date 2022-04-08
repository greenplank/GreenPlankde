import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import VideoCard2 from "../components/header/videoCard2";
import { Container, Row, Col } from "react-bootstrap";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Rengoring = () => {
  return (
    <>
      <Head>
        <title>Reinigung</title>
           <link rel="canonical" href="/reinigung" />
        <meta name="title" content="Wartung von WPC Terrassendecks– Wie reinigt man einen Holzwagen richtig?" />
        <meta name="description" content="Lassen Sie Ihren Terrassendeck mit regelmäsige Reinigung das ganze Jahr über wie neu aussehen. Regelmäßige Wartung bzw. Reinigung sorgt dafür, dass es bewohnbar und sicher ist." />
      </Head>
      <Layout pageTitle="Wartung von WPC Terrassendecks– Wie reinigt man einen Holzwagen richtig?">
        <HeaderTwo />
        <PageHeader title="Reinigung" crumbTitle="Reinigung" />
        <StickyHeader />
        <VideoCard2 />
        <section className="about-one pt-40 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2 className="title mt-60">Natürliche Verwitterung & Farbveränderung</h2>
                <div className="desc mb-30">
                  <p>In den ersten Monaten nach der Installation ändern Green Plank®-Verbundprodukte auf natürliche Weise ihre Farbe, wenn sie zu einem etwas helleren Farbton als die ursprünglich gekaufte Farbe verwittern. Wie bei feinen Hartholzböden treten die meisten Farbveränderungen in den ersten drei bis sechs Monaten auf. Nach dieser Phase werden Green Plank®-Verbundprodukte natürlich und schön wetterbeständig. Inkonsistente oder ungleichmäßige Sonneneinstrahlung und Witterungseinflüsse führen dazu, dass das Deck ungleichmäßig wetterfest wird. Obwohl dieser Zustand nur vorübergehend ist, können Sie eine ungleichmäßige Exposition verhindern, indem Sie das Deck in den ersten Wochen nicht mit Teppichen, Matten oder Möbeln abdecken.</p>


                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Schmutz oder Ablagerungen</h3>
                        <p className="text-center">Reinigen Sie den Terrassenbelag mit warmem Seifenwasser und einer weichen Bürste, um Schmutz oder Ablagerungen zu entfernen.</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Schimmel & Mehltau</h3>
                        <p className="text-center">Wenn Schmutz wie Pollen und Schmutz auf der Deckoberfläche verbleiben dürfen, kann sich Schimmel vom Biofilm ernähren. Es wird empfohlen, einen Schlauch und warmes Seifenwasser mit einer weichen Bürste zu verwenden, um die Nahrungsquelle und den Schimmel zu entfernen.</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Eis und Schnee</h3>
                        <p className="text-center">Calciumchlorid oder Steinsalz, das in vielen Home centers erhältlich ist, schmilzt Eis auf Terrassen. Spülen Sie es ab, wenn Sie es zum ersten Mal praktizieren. Verwenden Sie keine Metallschaufeln und scharfkantigen Werkzeuge. Diese können die Terrassenoberfläche beschädigen.</p>
                      </blockquote>
                    </Grid>
                  </Grid>

                  <h2 className="title mt-60">Wasser (Tannin) Flecken</h2>

                  <p>Tanninflecken treten natürlich bei allen Holzarten auf und wandern manchmal in Verbunddecks an die Oberfläche, wo Oberflächenholzfasern Sonne und Wasser ausgesetzt sind. Tanninflecken können während oder kurz nach der Installation auftreten. Tanninflecken verschwinden mit der Zeit. Je nach Jahreszeit kann dies mehrere Wochen bis mehrere Monate dauern. Sobald Tanninflecken nach Abschluss des Verwitterungsprozesses verschwunden sind, treten sie nicht mehr auf. Verwenden Sie warmes Seifenwasser oder einen anderen handelsüblichen Verbunddeckreiniger und eine Bürste mit weichen Borsten, um die Entfernung von Tanninflecken zu beschleunigen. Wenn Sie einen handelsüblichen Verbunddeckreiniger verwenden, befolgen Sie die Anweisungen des Herstellers.</p>


                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Krita</h3>
                        <p className="text-center">Alle farbigen Kreidelinien sind dauerhaft. Wenn Sie den Bereich mit warmem Seifenwasser und einer weichen Bürste schrubben, kann sich ein Teil der Kreide lösen.</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Kreidemarkierungen</h3>
                        <p className="text-center">Allt matspill bör tas bort så snart som möjligt. För att ta bort, skölj med en slang och använd varmt tvålvatten och en mjuk borste för att ta bort spill från ytan. Skölj med varmt vatten.</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Öl- / Fett- / Lebensmittelflecken</h3>
                        <p className="text-center">Alle verschütteten Lebensmittel sollten so schnell wie möglich entfernt werden. Zum Entfernen mit einem Schlauch absprühen und mit warmem Seifenwasser und einer weichen Borstenbürste verschüttetes Material von der Oberfläche entfernen. Mit warmem Wasser abspülen.</p>
                      </blockquote>
                    </Grid>
                  </Grid>


                  <h2 className="mt-30 mb-30">Tintenflecken
                  </h2>
                  <p className="mt-30 mb-30">Tinten können dauerhaft sein. Das Schrubben mit warmem Seifenwasser kann den Fleck jedoch aufhellen. Gründlich ausspülen. NIEMALS Reiniger auf Chlorbasis verwenden.</p>
                  <h2 className="mt-30 mb-30">ALLGEMEINES
                  </h2>
                  <p className="mt-30 mb-30">Die Diagramme und Anweisungen in dieser Installationsanleitung dienen nur zur Veranschaulichung und sind nicht dazu gedacht oder impliziert, einen lizenzierten Fachmann zu ersetzen. Jede Konstruktion oder Verwendung von Green Plank®-Produkten muss in Übereinstimmung mit allen örtlichen Zonen- und / oder Bauvorschriften erfolgen. Der Verbraucher übernimmt alle Risiken und Haftungen, die mit dem Bau, der Wartung und der Verwendung des Produkts verbunden sind.</p>

                  <h2 className="mt-30 mb-30">Urheberrechte 
                  </h2>
                  <p className="mt-30 mb-30">Die hier verwendeten Texte, Bilder und Abbildungen sind Eigenschaften von Green Plank AB. Die vollständige oder teilweise Reproduktion in irgendeiner Form oder auf irgendeinem Medium ohne ausdrückliche schriftliche Genehmigung ist strengstens untersagt.</p>

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

export default Rengoring;
