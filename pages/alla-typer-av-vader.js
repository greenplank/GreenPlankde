import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AllaTyperVaders from "../components/alla-typer-av-vader";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const AllaTyperVader = () => {
  return (
    <>
      <Head>
        <title>Bei jedem Wetter - GreenPlank.de
</title>
        <meta name="title" content="Bei jedem Wetter - GreenPlank.de
" />
     <link rel="canonical" href="/alla-typer-av-vader" />
        <meta name="description" content="Geben Sie uns die Chance, Ihre Lieblingsmarke zu werden; Denn Green Plank ist eine nachhaltige Marke für Bauprodukte, die für Qualität, Kompetenz und Vertrauen steht.
" />
      </Head>
      <Layout pageTitle="Alle Arten von Wetter">
        <HeaderTwo />
        <PageHeader title="Alle Arten von Wetter" crumbTitle="Alle Arten von Wetter" />
        <StickyHeader />
        <AllaTyperVaders />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default AllaTyperVader;
