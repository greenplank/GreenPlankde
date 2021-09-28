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
        <meta name="title" content="Artikel - GreenPlank.se" />
        <meta name="description" content="Artiklar om komposittrall, staket, fasadbeklädnad, heminredning. Artiklar i grönt och hållbart byggande." />
      </Head>
      <Layout pageTitle="Artikel">
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
