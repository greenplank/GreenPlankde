import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/komposittrall/smartclassic.webp";
import proImage2 from "../../assets/images/products/komposittrall/smartregular.webp";
import proImage3 from "../../assets/images/products/komposittrall/smartmarine.webp";
import proImage4 from "../../assets/images/products/komposittrall/smartcap.webp";
import proImage5 from "../../assets/images/products/komposittrall/ultrasmart.webp";
import proImage6 from "../../assets/images/products/komposittrall/marinecap.webp";
import proImage7 from "../../assets/images/products/komposittrall/marine40.webp";
import proImage8 from "../../assets/images/products/komposittrall/marine60.webp";
import proImage9 from "../../assets/images/products/komposittrall/marinejumbo.webp";
import proImage10 from "../../assets/images/products/komposittrall/marineart.webp";
import proImage11 from "../../assets/images/products/komposittrall/entra.png";
import proImage12 from "../../assets/images/products/komposittrall/classic.webp";
import proImage13 from "../../assets/images/products/komposittrall/everdeck.webp";
import proImage14 from "../../assets/images/products/komposittrall/sapphires.webp";
import proImage15 from "../../assets/images/products/komposittrall/komposittillbehör.webp";





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
          "Die breiten und geraden Rillen von SMART Regular™ ...."
      },
      {
        link: "/smart-terrassendielen-smart-marine",
        image: proImage3,
        title: " SMART™ System Terrassendielen – Smart Marine™",
        text:
          "Mit einem soliden Kern, einer glatten und eleganten .........."
      },
      {
        link: "/smart-cap-system-terrassendielen",
        image: proImage4,
        title: " SMART CAP™ System Terrassendielen",
        text:
          "Wenn Sie sich für SMART CAP™-Terassen von Green Plank ......"
      },
      // {
      //   link: "/ultra-smart",
      //   image: proImage5,
      //   title: "Ultra™ SMART Terrassendielen",
      //   text:
      //     "Med vår nya Smart Ultra får du en terrass som är 50% lättare........"
      // },
      {
        link: "/terrassendielen-marine-cap",
        image: proImage6,
        title: "MARINE CAP™ Terrassendielen",
        text:
          "Mit Green Plank MARINE CAP™ beschichtete Terrassendielen...."
      },
      {
        link: "/marine-40-terrassendielen",
        image: proImage7,
        title: "MARINE 40™ Terrassendielen",
        text:
          "MARINE40™ Naturfaser-Terrassendielen sind so konstruiert ......"
      },
      {
        link: "/marine-60-terrassendielen",
        image: proImage8,
        title: "MARINE 60™ Terrassendielen",
        text:
          "Die Green Plank MARINE 60 ™ Komposit Terrassendiele ist keine........"
      },
      {
        link: "/wpc-terrassendielen-marine-jumbo-schwerlast",
        image: proImage9,
        title: "MARINE JUMBO™ Schwerlast Terrassendielen",
        text:
          "Die Hochleistungs-Naturfaser-Terrassendielen von MARINE JUMBO™........"
      },
        {
          link: "/terrassendielen-marine-art",
          image: proImage10,
          title: "MARINE ART™ Terrassendielen",
          text:
            "Mit einem rustikalen Look und einer angenehmen Haptik wurde ........"
        },
      {
        link: "/entra-dielen",
        image: proImage11,
        title: "ENTRA™ Terrassendielen",
        text:
          "Green Plank ENTRA™ Naturfaser-Terrassendiele ist eine  ............"
      },
      {
        link: "/terrassendielen-classic",
        image: proImage12,
        title: "CLASSIC™ Terrassendielen",
        text:
          "Mit Green Plank CLASSIC Komposit können Sie einen  .............."
      },
      {
        link: "/everdeck-terrassendielen",
        image:proImage13,
        title: "EVERDECK™ Terrassendielen",
        text:
          "Everdeck ist eine der beliebtesten Optionen für ..............."
      },
      {
        link: "/terrassendielen-sapphire",
        image: proImage14,
        title: "SAPPHIRE™ Terrassendielen",
        text:
          "Unser SAPPHIRE™-Terrassendielen ist eine attraktive  .........."
      },
      {
        link: "/wpc-terrassendielen-zubehor",
        image: proImage15,
        title: "Terrassendielen-Zubehör",
        text:
          "Green Plank bietet eine komplette Linie von .............."
      }
];

const TerrassendielenSection = () => {
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

export default TerrassendielenSection;
