import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import HittaTextSection from "../components/HittaTextSection";
import Head from "next/head";
import Footer from "../components/footer";

const HittaHantverkare = () => {
  return (
    <>
      <Head>
     <meta name="robots" content="index,follow" />
        <title>Finden Sie Handwerker für nachhaltige Bauprodukte - GreenPlank.de</title>
    <link rel="canonical" href="https://www.greenplank.de/monteur-finden" />
        <meta name="title" content="Finden Sie Handwerker für nachhaltige Bauprodukte - GreenPlank.de" />
        <meta name="description" content="Sparen Sie Geld und Zeit, finden Sie die besten Handwerker in Ihrer Nähe geprüfte Qualifikationen und Lizenzen" />
      </Head>
      <Layout pageTitle="Finden Sie Handwerker für nachhaltige Bauprodukte - GreenPlank.de">
        <HeaderTwo />
        <PageHeader title="Finden Sie Green Plank Monteur" crumbTitle="Finden Sie Green Plank Monteur" />
        <StickyHeader />
        <HittaTextSection />
        <Footer />
      </Layout>
    </>
  );
};

export default HittaHantverkare;
