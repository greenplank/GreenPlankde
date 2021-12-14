import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/batgolv/naturplank_Gp709.png";
import proImage2 from "../../assets/images/products/batgolv/naturplank_Gp733.png";
import proImage3 from "../../assets/images/products/batgolv/naturplank_Gp734.png";


const DATA = [
      {
        link: "/naturplank-komposit-tackbrada-gp709-1080mm",
        image: proImage1,
        title: "NATURPLANK™ Komposit Diele – GP709 (10*80mm)",
        text:
          "Green Plank NATURPLANK ™ Hochleistungs ........"
      },
      {
        link: "/naturplank-komposit-tackbrada-gp733-10130mm",
        image: proImage2,
        title: "NATURPLANK™ Komposit Diele – GP733 (10*130mm)",
        text:
          "Green Plank NATURPLANK ™ Hochleistungs  ........."
      },
      {
        link: "/naturplank-komposit-tackbrada-gp734-10230mm",
        image: proImage3,
        title: "NATURPLANK™ Komposit Diele – GP734 (10*230mm)",
        text:
          "Green Plank NATURPLANK ™ Hochleistungs  .........."
      }
];

const BatgolvSection = () => {
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

export default BatgolvSection;
