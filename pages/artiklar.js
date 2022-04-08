import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Blog from "../components/blog/blog-page";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Artiklar = () => {
  return (
    <>
      <Head>
        <title>Artikel</title>
         <link rel="canonical" href="/artiklar" />
        <meta name="title" content="Artikel -GreenPlank.de" />
        <meta name="description" content="Artikel über Komposit Terrassendielen, Zäune, Fassadenverkleidungen, Einrichtungsgegenstände ind andere. Artikel für grüne und nachhaltige Bauweise." />
      </Head>
      <Layout pageTitle="Artikel -GreenPlank.de">
        <HeaderTwo />
        <PageHeader title="Artikel" crumbTitle="Artikel" />
        <StickyHeader />
        <Blog />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default Artiklar;
