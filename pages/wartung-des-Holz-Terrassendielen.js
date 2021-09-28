import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trädäckets.webp";
import Footer from "../components/footer";
import Head from "next/head";

const tradackets = () => {
  return (
    <Layout pageTitle="Wartung des Holz Terrassendielen">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Wartung des Holz Terrassendielen" crumbTitle="Wartung des Holz Terrassendielen" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div>
                <div className="row">
                  <div className="blog-details col-12">
                    <div className="blog-inner">
                      <div className="media"><div className="image"><img src={blogImg} alt="" /></div></div>
                      <div className="content">
                        <h2 className="title">Wartung des Holz Terrassendielen</h2>
                        <div className="mb-30">
                          <p>Wie oft und wie teuer ist die Wartung Ihres Reifens?<br/>

                            Während herkömmliche Holzreifen beide schimmeln, Farbe verlieren, Risse bekommen und Stifte geben und Sie sie dann auch abschleifen, ölen und lackieren müssen, um sie schön frisch zu halten, vermeiden Sie dies mit Green Plank®-Verbundreifen. Ein gewöhnliches Holzdeck hat eine Lebensdauer von ca. 10-15 Jahren (wenn es regelmäßig gewartet wird).<br />

                            Möchten Sie sich lieber nicht hinlegen und es sich auf Ihrem schönen Verbunddeck gemütlich machen, als sich auf die Knie zu setzen und zu malen? Sie müssen Ihre wartungsarmen Green Plank®-Reifen niemals lackieren oder versiegeln. Es wird auch nicht knacken oder Stöcke geben – glauben Sie mir, Ihre Füße werden es zu schätzen wissen! Insekten haben auch kein Interesse daran, an Plastik- und Wasserschäden zu nagen, Sie müssen nicht einmal darüber nachdenken!<br />

                            Green Plank® wartungsarme Verbundreifenprodukte erfordern nur eine kleine Wäsche in regelmäßigen Abständen und bleiben mehrere Jahre lang schön!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 section-space--top--60">
                    {/* <BlogComment/> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default tradackets;
