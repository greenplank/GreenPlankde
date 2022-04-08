import React, { useState } from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Byggochfix from "../assets/images/backgrounds/byggochfix.jpg";
import Ebygghandel from "../assets/images/backgrounds/ebygghandel.webp";

const PlaneraSection = () => {
  return (
    <section className=" text-center pt-60 pb-120">
      <Container>
     
        <div>
          <Container>
            <Row className="text-center">
              <Grid container spacing={3}>
                <Grid item lg={3} xs={6} sm={6}>
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="blank"
                    href="http://deckplanner.greenplank.eu/"
                    className="thm-btn"
                  >
                    <center>Terrassen Planer</center>
                  </a>
                </Grid>
                <Grid item lg={3} xs={6} sm={6}>
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="blank"
                    href="http://fenceplanner.greenplank.eu/"
                    className="thm-btn"
                  >
                    Zaunplaner
                  </a>
                </Grid>
              </Grid>
            </Row>
          </Container>
          {/* <iframe src="https://storage.googleapis.com/greenplankdata1/index.html" width="100%" height="600px" scrolling="no" frameborder="no" allowtransparency="true"></iframe> */}
        </div>
      </Container>
    </section>
  );
};

export default PlaneraSection;
