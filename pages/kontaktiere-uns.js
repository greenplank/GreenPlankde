import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import GoogleMap from "../components/google-map";
import ContactFormOne from "../components/contact/contact-form-one";
import ContactCardCarousel from "../components/contact/contact-card-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
    <meta name="robots" content="index,follow" />
        <title>Kontaktieren Sie uns | Kundenservice - GreenPlank.de </title>
    <link rel="canonical" href="https://www.greenplank.de/kontaktiere-uns" />
        <meta name="title" content="Kontaktieren Sie uns | Kundenservice - GreenPlank.de" />
        <meta name="description" content="Das GreennPlank-Team hat ein offenes Ohr für alle Ihre Fragen und Probleme. Kontaktieren Sie uns und unser Kundenservice-Team wird Ihnen bei Problemen helfen." />
      </Head>
      <Layout pageTitle="Kontaktiere uns| Kundtjänst - GreenPlank.se">
        <HeaderTwo />
        <PageHeader title="Kontakt" crumbTitle="Kontakt" />
        <StickyHeader />
        <ContactFormOne />
        <ContactCardCarousel />
        <GoogleMap extraClass="contact" />
        <Footer />
      </Layout>
    </>
  );
};

export default Contact;
