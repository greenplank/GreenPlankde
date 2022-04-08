import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import ContactCard from "../components/contact/contact-form-two";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const BestallProv = () => {
  return (
    <>
      <Head>
        <title>Muster bestellen | Boden | Verbundwagen | Bretter | Fliesen</title>
    <link rel="canonical" href="/muster-bestellen" />
        <meta name="title" content="Muster bestellen | Boden | Verbundwagen | Bretter | Fliesen" />
        <meta name="description" content="Wenn Sie sich für einen neuen Composite-Trolley entscheiden, werden Sie wahrscheinlich einige Fragen haben. Produktmuster sind eine gute Möglichkeit, sich ein Bild zu machen!" />
      </Head>
      <Layout pageTitle="Bestall-prov">
        <HeaderTwo />
        <PageHeader title="Muster bestellen" crumbTitle="Muster bestellen" />
        <StickyHeader />
        <ContactCard />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default BestallProv;
