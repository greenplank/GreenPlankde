import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid"
import Box from '@material-ui/core/Box';
import { Container, Row, Col } from "react-bootstrap";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

import image1 from "../assets/images/resources/Teknisk_Brochyr.png"
import image2 from "../assets/images/resources/sp-report.png"
import image3 from "../assets/images/resources/fire-test.png"
import image4 from "../assets/images/resources/installationguider.png"
import image5 from "../assets/images/resources/garantier.png"
import image6 from "../assets/images/resources/faqs.png"
import image7 from "../assets/images/resources/staket-planner.png"
import image8 from "../assets/images/resources/trall-planner.png"
import image9 from "../assets/images/resources/rengoring.png"

const Ressourcen = () => {

  const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: '#369956',
    m: 1,
    border: 6,
    style: { width: '20rem', height: '20rem' },
  };
  return (
    <>
      <Head>
        <title>Resurser</title>
        <meta name="title" content="Ressourcen - GreenPlank.de" />
        <meta name="description" content="Greenplank tekniska dokument, installationsguider, underhållsguider, YouTube-videolänkar" />
      </Head>
      <Layout pageTitle="Ressourcen">
        <HeaderTwo />
        <PageHeader title="Ressourcen" crumbTitle="Ressourcen" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>Technische Dokumente</h2>
                <hr style={{ backgroundColor: "#369956", width: "100", borderWidth: "0.2em", marginBottom: "70px" }} />
                <Grid container spacing={3} >
                  <Grid item xs={12} sm={4} >
                    <a target="_blank" href="/pdfs/Teknisk_Brochyr_ver_1.0_German.pdf">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image1} className="img-fluid" alt="" /></center>
                        <h3 className="mb-30 mt-30 text-center">Technische Broschüre</h3>
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    <a target="_blank" href="/pdfs/SP-Rapport-2016_83.pdf">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image2} className="img-fluid" alt="" /></center>
                        <h3 className="mb-30 mt-30 text-center">SP-Bericht</h3>
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    <a target="_blank" href="/pdfs/greenplank-fire-retardant-compoisite-decking-test-19-0807-02-REPORT-signed-1.pdf">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image3} className="img-fluid" alt="" /></center>
                        <h3 className="mb-30 mt-30 text-center">Brandtest</h3>
                      </Box>
                    </a>
                  </Grid>
                </Grid>
                <h2 className="title mt-60">Installationsanleitungen</h2>
                <hr style={{ backgroundColor: "#369956", width: "100", borderWidth: "0.2em", marginBottom: "70px" }} />
                <Grid container spacing={3} >
                  <Grid item xs={12} sm={4} >
                    <a target="_blank" href="/installation-och-underhall">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image4} className="img-fluid" alt="" /></center>
                        <h3 className="mb-30 mt-30 text-center">Installationsanleitungen</h3>
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    <a target="_blank" href="/garantier">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image5} className="img-fluid" alt="" /></center>
                        <h3 className="mb-30 mt-30 text-center">Garantie</h3>
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    <a target="_blank" href="/faqs">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image6} className="img-fluid" alt="" /></center>
                        <h3 className="mb-30 mt-30 text-center">FAQs</h3>
                      </Box>
                    </a>
                  </Grid>
                </Grid>
                <h2 className="title mt-60">Wartungshandbuch</h2>
                <hr style={{ backgroundColor: "#369956", width: "100", borderWidth: "0.2em", marginBottom: "70px" }} />
                <Grid container spacing={3} >
                  <Grid item xs={12} sm={4} >
                    <a target="_blank" href="http://fenceplanner.greenplank.eu/">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image7} className="img-fluid" alt="" /></center>
                        <h3 className="mb-30 mt-30 text-center">Fence Planner</h3>
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    <a target="_blank" href="http://deckplanner.greenplank.eu/">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image8} className="img-fluid" alt="" /></center>
                        <h3 className="mb-30 mt-30 text-center">Deck Planner</h3>
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    <a target="_blank" href="/rengoring">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image9} className="img-fluid" alt="" /></center>
                        <h3 className="mb-30 mt-30 text-center">Deckpflege und Reinigung</h3>
                      </Box>
                    </a>
                  </Grid>
                </Grid>
                <h2 className="title mt-60">Youtube Videos</h2>
                <hr style={{ backgroundColor: "#369956", width: "100", borderWidth: "0.2em", marginBottom: "70px" }} />
                <Grid container spacing={3} >
                  <Grid item xs={12} sm={3} style={{ marginRight: "3em" }}>
                    <iframe src="https://www.youtube.com/embed/5hM71XV8_1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                  <Grid item xs={12} sm={3} style={{ marginRight: "3em" }}>
                    <iframe src="https://www.youtube.com/embed/0SVm4TDGoz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                  <Grid item xs={12} sm={3} style={{ marginRight: "3em" }}>
                    <iframe src="https://www.youtube.com/embed/2CtOcT9Bf9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                  <Grid item xs={12} sm={3} style={{ marginRight: "3em" }}>
                    <iframe src="https://www.youtube.com/embed/sYQVb4_tHoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                  <Grid item xs={12} sm={3} style={{ marginRight: "3em" }}>
                    <iframe src="https://www.youtube.com/embed/r3_wZfovSw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                  <Grid item xs={12} sm={3} style={{ marginRight: "3em" }}>
                    <iframe src="https://www.youtube.com/embed/-UilRmjhAo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                  <Grid item xs={12} sm={3} style={{ marginRight: "3em" }}>
                    <iframe src="https://www.youtube.com/embed/vcbAYC6Bgo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                  <Grid item xs={12} sm={3} style={{ marginRight: "3em" }}>
                    <iframe src="https://www.youtube.com/embed/YswcUeBvhg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                  <Grid item xs={12} sm={3} style={{ marginRight: "3em" }}>
                    <iframe src="https://www.youtube.com/embed/NXBSXUZ5lXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                </Grid>
              </Col>
            </Row>
          </Container>
        </section>
        <BrandCarousel />
        <Footer />
      </Layout>
    </>);
};

export default Ressourcen;
