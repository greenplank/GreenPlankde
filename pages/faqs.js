import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import FaqOne from "../components/faq-one";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Faqs = () => {
  return (
    <>
      <Head>
        <title>Faqs</title>
    <link rel="canonical" href="/faqs" />
        <meta name="title" content="Faqs - GreenPlank.de" />
        <meta name="description" content="Häufig gestellte Fragen zu WPC Terrassendielen, Zäunen, Fassadenverkleidungen, Planken, Balkonfliesen und andere Produkten." />
      </Head>
      <Layout pageTitle="Faqs - GreenPlank.de">
        <HeaderTwo />
        <PageHeader title="Faqs" crumbTitle="Faqs" />
        <StickyHeader />
        <FaqOne />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default Faqs;
