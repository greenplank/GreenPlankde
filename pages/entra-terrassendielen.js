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
                <title>ENTRA™ Terrassendielen</title>
                <meta name="title" content="ENTRA™ Terrassendielen - GreenPlank.de" />
                <meta name="description" content="ENTRA™ Terrassendielen solid komposittrall inspirerad av naturliga färger, struktur, skönhet och prestanda. Kompositvagn med tunga och spår." />
            </Head>
            <Layout pageTitle="ENTRA™ Terrassendielen">
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
