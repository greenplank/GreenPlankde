import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import GalleryPage from "../components/gallery/gallery-page";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import Head from "next/head";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Galleri</title>
     <meta name="robots" content="index,follow" />
    <link rel="canonical" href="https://www.greenplank.de/galerie" />
        <meta name="title" content="Galerie Nachhaltige Bauprodukte - GreenPlank.de" />
        <meta name="description" content="Bildergalerie mit Inspiration von Green Plank. Verbundwerkstoff für nachhaltiges Bauen der Zukunft." />
      </Head>
      <Layout pageTitle="Galerie Nachhaltige Bauprodukte - GreenPlank.de">
        <HeaderTwo />
        <PageHeader title="Galerie" crumbTitle="Galleri" />
        <StickyHeader />
        <GalleryPage />
        <Footer />
      </Layout>
    </>
  );
};

export default Gallery;
