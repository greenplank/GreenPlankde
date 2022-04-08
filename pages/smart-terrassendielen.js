import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-SmartClassic";
import SmartKomposittrallSection from "../components/Produkter/smartKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const SmartKomposittrall = () => {
    return (
        <>
            <Head>
                <title>Smart Terrassendielen</title>
               <link rel="canonical" href="/smart-terrassendielen" />
                <meta name="title" content="Smart Terrassendielen aus Verbundwerkstoff - GreenPlank.de
" />
                <meta name="description" content="Smart Decking Dielen sind perfekt für stilvolle und trendige Terrassenböden. Smart Terrassendielen für Zuhause und Büro kaufen bei Greenplank.de
" />
            </Head>
            <Layout pageTitle="Smart Terrassendielen aus Verbundwerkstoff - GreenPlank.de
">
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
