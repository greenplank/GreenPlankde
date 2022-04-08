import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Bastforpoolen from "../components/bast-for-poolen";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const BastPoolen = () => {
  return (
    <>
      <Head>
        <title>Das Beste für den Pool - GreenPlank.de</title>
    <link rel="canonical" href="/bast-for-poolen.js" />
        <meta name="title" content="Das Beste für den Pool - GreenPlank.de" />
        <meta name="description" content="Denn hier bei Green Plank bieten wir eine große Auswahl an modernen, trendigen, langlebigen Terrassendeck-Materialien mit garantierter Qualität." />
      </Head>
      <Layout pageTitle="Bäst för poolen">
        <HeaderTwo />
        <PageHeader title="Bäst för poolen" crumbTitle="Bäst för poolen" />
        <StickyHeader />
        <Bastforpoolen />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default BastPoolen;
