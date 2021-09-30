import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/komposittrall/smartclassic.webp";
import proImage2 from "../../assets/images/products/komposittrall/smartregular.webp";
import proImage3 from "../../assets/images/products/komposittrall/smartmarine.webp";
import proImage4 from "../../assets/images/products/komposittrall/smartcap.webp";
import proImage5 from "../../assets/images/products/komposittrall/ultrasmart.webp";



const DATA = [
    {
        link: "/smart-wpc-terrassendielen-smart-classic",
        image: proImage1,
        title: "SMART™ System Terrassendielen – Smart Classic™",
        text:
          "Unser SMART Classic™ Terrassendielen ist inspiriert von ....."
      },
      {
        link: "/smart-terrassendielen-smart-regular",
        image: proImage2,
        title: "SMART™ System Terrassendielen – Smart Regular™",
        text:
          "Die breiten und geraden Rillen von SMART Regular™ terrassendielen...."
      },
      {
        link: "/smart-terrassendielen-smart-marine",
        image: proImage3,
        title: "SMART™ System Terrassendielen – Smart Marine™",
        text:
          "Mit einem soliden Kern, einer glatten und eleganten .........."
      },
      {
        link: "/smart-cap-system-terrassendielen",
        image: proImage4,
        title: "SMART CAP™ System Terrassendielen",
        text:
          "Wenn Sie sich für SMART CAP™-Terassen von Green Plank ......"
      },
      {
        link: "/ultra-smart",
        image: proImage5,
        title: "SMART™ System Terrassendielen –Ultra™ Smart",
        text:
          "Eftersom detta är en Green Plank Smart-produkt erbjuder den........"
      }
      
];

const smartKomposittrallSection = () => {
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

export default smartKomposittrallSection;
