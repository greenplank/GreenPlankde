import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import ClassicKomposittrallSection from "../components/Produkter/classicKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";

const ClassicKomposittrall = () => {
    return (
        <Layout pageTitle="CLASSIC Terrassendielen">
            <HeaderTwo />
            <PageHeader title="CLASSIC Terrassendielen" crumbTitle="CLASSIC™ Terrassendielen" />
            <StickyHeader />
            <ClassicKomposittrallSection />
           
            <BrandCarousel />
            <Footer />
        </Layout>
    );
};

export default ClassicKomposittrall;
