import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import ClassicKomposittrallSection from "../components/Produkter/classicKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";

const ClassicKomposittrall = () => {
    return (
        <>
            <Head>
                <title>CLASSIC™ Terrassendielen - GreenPlank.de
</title>
        <link rel="canonical" href="/classic-terrassendielen" />
                <meta name="title" content="CLASSIC™ Terrassendielen - GreenPlank.de
" />
                <meta name="description" content="Unsere Classic- WPC Terrassendielen von Green Plank sind ein kostengünstiges und leistungssteigerndes Upgrade gegenüber druckbehandelten Holzterrassen. Leicht und langlebig sind sie geeignet als Dachterrassen Belag, Terrassendecks, Patiodecks oder Bodebelag für Ihr Balkon
" />
            </Head>
            <Layout pageTitle="CLASSIC™ Terrassendielen - GreenPlank.de
">
                <HeaderTwo />
                <PageHeader title="CLASSIC Terrassendielen" crumbTitle="CLASSIC™ Terrassendielen" />
                <StickyHeader />
                <ClassicKomposittrallSection />

                <BrandCarousel />
                <Footer />
            </Layout>
        </>

    );
};

export default ClassicKomposittrall;
