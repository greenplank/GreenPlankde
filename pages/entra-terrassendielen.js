import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import EntraTrallSection from "../components/Produkter/entraTrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Entratrall = () => {
    return (
        <>
            <Head>
                <title>Entra Terrassendielen | Entra WPC-Terrassendielen - GreenPlank.de
</title>
        <link rel="canonical" href="/entra-terrassendielen" />
                <meta name="title" content="Entra Terrassendielen | Entra WPC-Terrassendielen - GreenPlank.de
" />
                <meta name="description" content="ENTRA™ Terrassendielen, Massive WPC Terrassendielen in Premiumqualität mit Nut und Feder System. Außergewöhnlich hohe Leistung und beste Qualität für Ihr Patio, Terrassendeck, Gewerbeflächen oder rund um den Pool.
" />
            </Head>
            <Layout pageTitle="Entra Terrassendielen | Entra WPC-Terrassendielen - GreenPlank.de
">
                <HeaderTwo />
                <PageHeader title="ENTRA Terrassendielen" crumbTitle="ENTRA™ Terrassendielen" />
                <StickyHeader />
                <EntraTrallSection />
                <BrandCarousel />
                <Footer />
            </Layout>
        </>);
};

export default Entratrall;
