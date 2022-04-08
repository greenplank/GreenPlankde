import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <meta name="title" content="Über uns - Nachhaltige Bauprodukte - GreenPlank.de" />
    <meta name="robots" content="index,follow" />
           <link rel="canonical" href="https://www.greenplank.de/uber-uns" />
        <meta name="description" content="Green Plank wurde 2004 von zwei Brüdern in Schweden gegründet. Heute hat sich Green Plank eine führende Position in der Welt der Verbundwerkstoffe erobert." />
      </Head>
      <Layout pageTitle="Über uns - Nachhaltige Bauprodukte - GreenPlank.de">
        <HeaderTwo />
        <PageHeader title="Über uns" crumbTitle="Über uns" />
        <StickyHeader />
        <AboutOne />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default About;
