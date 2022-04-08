import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Bastforutomhusbruk from "../components/bast-for-utomhusbruk";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const BastUtomhusbruk = () => {
  return (
    <>
      <Head>
        <title>Am besten für den Außenbereich geeignet - GreenPlank.de
</title>
    <link rel="canonical" href="/bast-for-utomhusbruk" />
        <meta name="title" content="Am besten für den Außenbereich geeignet - GreenPlank.de" />
        <meta name="description" content="Green Plank Verbundplanke GP7117 ist ideal für verschiedene Außenanwendungen wie Handläufe, Terrassen, Terrassen, Gartenmöbel, Parkbänke und -tische, Mülleimer
" />
      </Head>
      <Layout pageTitle="Am besten für den Außenbereich geeignet">
        <HeaderTwo />
        <PageHeader title="Am besten für den Außenbereich geeignet" crumbTitle="Am besten für den Außenbereich" />
        <StickyHeader />
        <Bastforutomhusbruk />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default BastUtomhusbruk;
