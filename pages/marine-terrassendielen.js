import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import MarineKomposittrallSection from "../components/Produkter/marineKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";


const MarineKomposittrall = () => {
    return (
        <>
            <Head>
                <title>Marine Terrassendielen</title>
                <meta name="title" content="Marine Terrassendielen - GreenPlank.de" />
                <meta name="description" content="Classic och EverDeck-komposittrall är bara något dyrare än tryckbehandlat trä. Och eftersom tryckbehandlat trä kräver regelbundet underhåll som färgning, kommer alla besparingar från lövträ att slösas bort på så lite som tre år." />
            </Head>
            <Layout pageTitle="Marine Terrassendielen">
                <HeaderTwo />
                <PageHeader title="Marine Terrassendielen" crumbTitle="Marine Terrassendielen" />
                <StickyHeader />
                <MarineKomposittrallSection />
                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default MarineKomposittrall;
