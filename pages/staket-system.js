import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import StaketSection from "../components/Produkter/staketSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/backgrounds/staket1.webp"
import Image2 from "../assets/images/backgrounds/staket.webp"
import Head from "next/head";

const staketsystem = () => {
    return (
        <>
            <Head>
                <title>Zaunsystem</title>
                <meta name="title" content="Zaunsystem | Moderna staket - GreenPlank.se" />
                <meta name="description" content="Staket väggar är nu allmänt används som gränsen för att binda din trädgård, klimax ditt landskap struktur, eller vara i fokus för din exponering." />
            </Head>
            <Layout pageTitle="Staket System">
                <HeaderTwo />
                <PageHeader title="Zaunsystem" crumbTitle="Zaunsystem" />
                <StickyHeader />
                <StaketSection />
                <section className="about-one pt-20 pb-40">
                    <Container>
                        <Row style={{ marginBottom: "2em" }}>
                            <Col lg={12}>
                                <div>
                                    {/*====================  project gallery area ====================*/}
                                    <div className="project-gallery-area pb-60">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {/* section title */}
                                                    <div className="section-title-area text-center mb-30">
                                                        <h2><strong>Warum zaunsystem verwenden?</strong></h2>
                                                    </div>
                                                </div>
                                                <div className="about-section pt-60 pb-60">
                                                    <div className="container">
                                                        <div className="row row-25 align-items-center">
                                                            <div className="col-lg-6 col-12 mb-30 p-30">
                                                                <div className="about-image-two mr-20">
                                                                    <img src={Image1} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30 ml-60">
                                                                <div>
                                                                    <h3>Die Realität</h3>
                                                                    <p>
                                                                    In Bezug auf die Vorabkosten sind die zaunsystem Classic und EverDeck von Green Plank nur geringfügig teurer als druckbehandeltes Holz. Und da druckbehandeltes Holz regelmäßig gewartet werden muss, wie z. B. Beizen, werden alle Einsparungen, die durch Hartholz erzielt werden, in nur drei Jahren verschwendet.
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
                                                                    Die Einstiegs-Terrassenkollektion Classic und EverDeck von Green Plank ermöglicht ein kostengünstiges und leistungssteigerndes Upgrade gegenüber druckbehandelten Holzdecks. In Bezug auf die Vorabkosten kosten Classic- und EverDeck-zaunsystem etwas mehr als druckbehandeltes Holz, aber Sie sparen langfristig Geld, da die kostspielige und mühsame jährliche Wartung von Holzdecks nicht erforderlich ist.
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

export default staketsystem;
