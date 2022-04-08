import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-Marine40";
import MarineKomposittrallSection from "../components/Produkter/marineKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";


const MarineKomposittrall = () => {
    return (
        <>
            <Head>
                <title>Terrassendielen aus Verbundwerkstoff - GreenPlank.de
</title>
        <link rel="canonical" href="/marine-terrassendielen" />
                <meta name="title" content="Transportwagen aus Verbundwerkstoff - GreenPlank.de" />
                <meta name="description" content="Wir haben die hochwertigste Marineterrasse entworfen, die langlebig und zuverlässig ist. Von Jumbo-Marinedecks bis hin zu Marine-Kunstdecks sind auf Greenplank.de erhältlich
" />
            </Head>
            <Layout pageTitle="Transportwagen aus Verbundwerkstoff - GreenPlank.de">
                <HeaderTwo />
                <PageHeader title="Marine Terrassendielen
" crumbTitle="Marine Terrassendielen" />
                <StickyHeader />
                <MarineKomposittrallSection />
                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default MarineKomposittrall;
