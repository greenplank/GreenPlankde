import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

const HittaTextSection = () => {
    return (
        <section className=" text-center pt-40 pb-120">


            <Container>
                <div className="text-center block-title" >
                    <h5>Sparen Sie Geld und Zeit, finden Sie die besten Handwerker in Ihrer Nähe geprüfte Qualifikationen und Lizenzen</h5>
                </div>
                {/* <div>
                <iframe src="https://storage.googleapis.com/greenplankdata1/index.html" width="100%" height="600px" scrolling="no" frameborder="no" allowtransparency="true"></iframe>
                </div> */}
            </Container>
        </section>
    );
};

export default HittaTextSection;
