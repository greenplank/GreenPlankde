import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-Fasadpanel";
import FasadpanelSection from "../components/Produkter/fasadpanelSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/backgrounds/Fasadpanel1.webp"
import Image2 from "../assets/images/backgrounds/fasadpanel2.webp"
import Head from "next/head";

const fasadpanel = () => {
    return (
        <>
            <Head>
                <title>Fassadenpaneele renovieren – unsere Tipps! - GreenPlank.de
</title>
        <link rel="canonical" href="/fassadenverkleidung" />
                <meta name="title" content="Fassadenpaneele renovieren – unsere Tipps! - GreenPlank.de
" />
                <meta name="description" content="Die WPC Fassadenpaneele von Green Plank erfordern wenig bis gar keine Wartung und werden durch eine begrenzte Produktgarantie von bis zu 25 Jahren unterstützt.
" />
            </Head>
            <Layout pageTitle="Fassadenverkleidung">
                <HeaderTwo />
                <PageHeader title="Fassadenverkleidung" crumbTitle="Fassadenverkleidung" />
                <StickyHeader />
                <FasadpanelSection />
                <section className="about-one pt-20 pb-40">
                    <Container>
                        <Row style={{ marginBottom: "2em" }}>
                            <Col lg={12}>
                                <div>
                                    {/*====================  project gallery area ====================*/}
                                    <div className="project-gallery-area pt-60 pb-60">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {/* section title */}
                                                    <div className="section-title-area text-center mb-30">
                                                        <h2><strong>Warum fassadenverkleidung verwenden?</strong></h2>
                                                    </div>
                                                </div>
                                                <div className="about-section pt-60 pb-60">
                                                    <div className="container">
                                                        <div className="row row-25 align-items-center">
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-image-two">
                                                                    <img src={Image1} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-content-two" style={{ padding: "1em 1em 1em 2em" }}>
                                                                    <h3>Die Realität</h3>
                                                                    <p>
                                                                        In Bezug auf die Vorabkosten sind die fassadenverkleidung Classic und EverDeck von Green Plank nur geringfügig teurer als druckbehandeltes Holz. Und da druckbehandeltes Holz regelmäßig gewartet werden muss, wie z. B. Beizen, werden alle Einsparungen, die durch Hartholz erzielt werden, in nur drei Jahren verschwendet.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="about-section ">
                                                    <div className="container">
                                                        <div className="row row-25 align-items-center">
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-content-two">
                                                                    <h3>Die Darstellung</h3>
                                                                    <p>
                                                                        Die Einstiegs-Terrassenkollektion Classic und EverDeck von Green Plank ermöglicht ein kostengünstiges und leistungssteigerndes Upgrade gegenüber druckbehandelten Holzdecks. In Bezug auf die Vorabkosten kosten Classic- und EverDeck-fassadenverkleidung etwas mehr als druckbehandeltes Holz, aber Sie sparen langfristig Geld, da die kostspielige und mühsame jährliche Wartung von Holzdecks nicht erforderlich ist.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-image-two">
                                                                    <img src={Image2} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*====================  End of project gallery area  ====================*/}
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

export default fasadpanel;
