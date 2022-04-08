import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AterfarsaljareTextSection from "../components/AterfarsaljareTextSection";
import Footer from "../components/footer";
import Head from "next/head";

const Aterfarsaljare = () => {
  return (
    <>
      <Head>
     <meta name="robots" content="index,follow" />
    <link rel="canonical" href="https://www.greenplank.de/groshandler" />
        <title>Händler für nachhaltige Bauprodukte-GreenPlank.de
</title>
        <meta name="title" content="Händler für nachhaltige Bauprodukte-GreenPlank.de
" />
        <meta name="description" content="Finden Sie Ihren Green Plank-Händler für unsere vielen langlebigen Verbundprodukte in Ihrer Nähe.
" />
      </Head>
      <Layout pageTitle="Händler für nachhaltige Bauprodukte-GreenPlank.de
">
        <HeaderTwo />
        <PageHeader title="Finden Sie Green Plank-Händler" crumbTitle="Großhändler" />
        <StickyHeader />
        <AterfarsaljareTextSection />
        <Footer />
      </Layout>
    </>
  );
};

export default Aterfarsaljare;
