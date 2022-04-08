import React, { useEffect } from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import VideoCards from "../components/header/videoCard";
import StickyHeader from "../components/header/sticky-header";
import MainSliderTwo from "../components/slider/main-slider-2";
import VideoCard from "../components/videos/video-card";
import HemRelatedProducts from "../components/HemRelatedProducts";
import HemGallery from "../components/HemGallery";
import FeaturedCause from "../components/featured-cause";
import ServiceTwo from "../components/services/service-two";
import HemLastSection from "../components/HemLastSection";
import BrandCarousel from "../components/brand-carousel";
import Head from "next/head";

import Footer from "../components/footer";

const HomeTwo = () => {
  console.log(process.env.authAPIkey);
  return (
    <>
      <Head>
    <meta name="google-site-verification" content="GaO8Fo-XuBWiAfNevTSPVpB5ui7jvrsJlyyn_GhspH0" />
         <meta name="robots" content="index,follow" />
       <link rel="canonical" href="https://www.greenplank.de/" />
        <meta name="title" content="Bestes WPC Terrassendeck | Bodenfliesen | Zäune und vieles mehr!" />
        <meta name="description" content="Green Plank ist die führende schwedische Marke für nachhaltige Bauprodukte in Schweden. WPC Terrassendielen skandinavischer Qualität, Fassadenverkleidung, Planken, Zäune." />
      </Head>
      <Layout pageTitle="Bestes WPC Terrassendeck | Bodenfliesen | Zäune und vieles mehr!">
        <HeaderTwo />
        <StickyHeader extraClassName="stricky-header-two" />
        <MainSliderTwo />
        <VideoCards />
        <HemGallery />
        <HemRelatedProducts />
        <ServiceTwo />
        <VideoCard />
        <FeaturedCause />
        <HemLastSection />
        <BrandCarousel extraClass="client-carousel__has-border-top" />
        <Footer />
      </Layout>


      <div class="alert text-center cookiealert" role="alert">
        Wir verwenden Cookies auf unserer Website, um Ihnen das relevanteste Erlebnis zu bieten, indem wir Ihre Präferenzen speichern und Besuche wiederholen. Indem Sie auf "Akzeptieren" klicken, stimmen Sie zu, dass ALLE Cookies verwendet werden
        <a href="https://www.greenplank.de/integritetspolicy" target="_blank">
          Lern mehr</a>

        <button type="button" class="btn btn-primary btn-sm acceptcookies">
          Ich stimme zu
        </button>
      </div>

      <script>
        for (var i = 1; i= 150; i++)
        document.querySelector("#fillme").innerHTML += "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
      </script>

      <script src="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.js"></script>
    </>
  );
};

export default HomeTwo;

