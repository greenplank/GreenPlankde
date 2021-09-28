import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../assets/images/backgrounds/GREEN-PLANK-ABOUT-bannerr-swedish-01-1200x214.jpg";
import image2 from "../../assets/images/backgrounds/about-1.webp";
import image3 from "../../assets/images/backgrounds/about-2.webp";
import image4 from "../../assets/images/backgrounds/about-profile.webp";

const AboutOne = () => {
  return (
    <section className="about-one text-center pt-120 pb-40">
      <Container>
        <Row style={{ marginBottom: "4em" }}>
          <Col lg={12}>
            <h4 style={{ marginBottom: "2em" }}>
            Hallo, wir sind Green Plank, wir bieten beispiellose umweltfreundliche Bauprodukte aus recycelten Kunststoffen und natürlichen Abfällen.
            </h4>
          </Col>
          <Col lg={12}>
            <img src={image1} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={6}>
          <img src={image4} width="510px" alt="" className="img-fluid" />
            
          </Col>
          <Col lg={6}>
            <img src={image3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={12} style={{ marginBottom: "4em" }}>
              <div className="block-title">
                <h3>Willkommen bei GreenPlank</h3>
                <h2>15 Jahre Erfahrung in der Branche</h2>
                <h5>
                Im Jahr 2001 besuchte ein junger Geschäftsmann, Jamshaid Gill aus Pakistan, der eine Messe in Wien besuchte, ein Seminar über die technologische Innovation für Verbundprodukte aus verschiedenen recycelten Materialien und natürlichen Abfällen.
                </h5>
                <h5>
                Er kehrte in seine Heimat Pakistan zurück und begann mit der Entwicklung eines Holzalternativprodukts aus recycelten Kunststoffen und Reishüllenfasern.
                </h5>
                <h5>
                Green Plank-Produkte werden von vielen schwedischen Gemeinden in ganz Schweden verwendet
                </h5>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg={6}>
          <img src={image2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <div className="block-title">
              <h3 style={{ marginBottom: ".5em" }}>
                <span>15</span>Langjährige Erfahrung
              </h3>
              <h5>
              Reisschalen mit recyceltem Kunststoff gemischt, um eine Holzalternative und deren positive Auswirkungen auf die Umwelt herzustellen, wurde die Idee von Green Plank entwickelt.
              </h5>
              <h5>
              Bis heute hat Green Plank mehr als 200 Produkte entwickelt und innoviert, um die wachsende Nachfrage nach nachhaltigen Verbundprodukten für den Außenbereich als Holzalternative zu befriedigen
              </h5>
              <h5>
              Im Jahr 2004 wanderte der jüngere Bruder von Herrn Gill, Nasir Gill, als Unternehmer nach Schweden aus, gründete ein Unternehmen und begann mit der Vermarktung seiner innovativen Verbunddeckplatten.
              </h5>
              <h5>
              Im Jahr 2015 erhielt Green Plank von Seiner Majestät König Carl Gustav den Anerkennungspreis „Årets Nybyggare“. Green Plank wurde als Vertreter Schwedens als umweltfreundliche Nation gelobt.
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
