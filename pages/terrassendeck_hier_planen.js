import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import PlaneraSection from "../components/planeraSection";
import Footer from "../components/footer";
import Head from "next/head";

const Terrassendeck = () => {
  return (
    <>
      <Head>
     <meta name="robots" content="index,follow" />
    <link rel="canonical" href="https://www.greenplank.de/terrassendeck_hier_planen" />
        <title>Terrassendeck hier planen-GreenPlank.de
</title>
        <meta name="title" content="Terrassendeck hier planen-GreenPlank.de
" />
        <meta name="description" content="Terrassendeck hier planen.
" />
      </Head>
      <Layout pageTitle="Terrassendeck hier planen-GreenPlank.de
">
        <HeaderTwo />
        <PageHeader title="Terrassendeck hier planen" crumbTitle="planen" />
        <StickyHeader />
        <PlaneraSection />
        <Footer />
      </Layout>
    </>
  );
};

export default Terrassendeck;
