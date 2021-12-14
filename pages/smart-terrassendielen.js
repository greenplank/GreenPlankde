import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import SmartKomposittrallSection from "../components/Produkter/smartKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const SmartKomposittrall = () => {
    return (
        <>
            <Head>
                <title>Smart Terrassendielen</title>
                <meta name="title" content="Smart Terrassendielen - GreenPlank.de" />
                <meta name="description" content="Ge din bakgård ett vackert, elegant däckgolv, med de extra fördelarna med lågt underhåll. Välj mellan SmartCap och Smart Komposittrall." />
            </Head>
            <Layout pageTitle="Smart Terrassendielen - GreenPlank.de">
                <HeaderTwo />
                <PageHeader title="Smart Terrassendielen" crumbTitle="Smart Terrassendielen" />
                <StickyHeader />
                <SmartKomposittrallSection />

                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default SmartKomposittrall;
