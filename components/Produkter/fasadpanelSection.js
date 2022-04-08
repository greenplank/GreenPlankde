import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/fasadpanel/fasadpanelGP798.webp";
import proImage2 from "../../assets/images/products/fasadpanel/primacapGP801.webp";
import proImage3 from "../../assets/images/products/fasadpanel/primacapGP802.webp";
import proImage4 from "../../assets/images/products/fasadpanel/fasadpaneltillbehör.webp";






const DATA = [
      {
        link: "/novoclad-fassadenverkleidung-gp798",
        image: proImage1,
        title: "NOVOCLAD™ Fassadenverkleidung – GP798",
        text:
          "Das NOVOCLAD ™ -Verbundfassadenprofil von Green Plank  ........"
      },
      // {
      //   link: "/primacap-fassadenverkleidung-gp801",
      //   image: proImage2,
      //   title: "PRIMACAP™ Fassadenverkleidung – GP801",
      //   text:
      //     "PRIMA CAP™ Composite Facade Cladding System ist  .............."
      // },
      {
        link: "/primacap-fassadenverkleidung-gp802",
        image:proImage3,
        title: "PRIMACAP™ Fassadenverkleidung – GP802",
        text:
          "PRIMA CAP™ Composite Facade Cladding System ist  ............."
      },
      {
        link: "/zubehor-fur-fassadenverkleidung",
        image: proImage4,
        title: "Zubehör für Fassadenverkleidungen",
        text:
          "Als Teil unseres umfangreichen Zubehörprogramms bieten ......"
      }

];

const fasadpanelSection = () => {
  return (
    <section className="news-page pt-120 pb-120">
      {/* <Container>
        <Row className="align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={12}>
            <BlockTitle
              title={`Populära artiklar inom GreenPlank & hållbart bygghandel`}
              tagLine="Blogginlägg"
            />
          </Col>
        </Row>
      </Container> */}
      <Container>
        <div className="news-3-col">
          {DATA.map(
            (
              { image, title, text, link},
              index
            ) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                text={text}
                link={link}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default fasadpanelSection;
