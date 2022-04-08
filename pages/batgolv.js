import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BatgolvSection from "../components/Produkter/BatgolvSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";


const batgolv = () => {
    return (
        <>
        <Head>
         <meta name="robots" content="index,follow" />
       <link rel="canonical" href="https://www.greenplank.de/batgolv" />
        <meta name="title" content="Batgolv | Bootsboden aus Holz - Greenplank.de" />
        <meta name="description" content="Holen Sie sich den besten Bootsboden aus Holz und machen Sie das Innere des Fledermausbodens zu einem rutschfesten Bootsboden. Verschiedene Materialien, die für Bootsböden verwendet werden können." />
      </Head>
        <Layout pageTitle="Batgolv | Bootsboden aus Holz - Greenplank.de">
            <HeaderTwo />
            <PageHeader title="Yacht Bodenbelag" crumbTitle="Yacht Bodenbelag" />
            <StickyHeader />
            <BatgolvSection />
            <BrandCarousel />
            <Footer />
        </Layout>
        </>
    );
};

export default batgolv;
