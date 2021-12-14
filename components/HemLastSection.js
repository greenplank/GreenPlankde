import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import bgImage from "../assets/images/backgrounds/5-1-1024x273.webp";
import heart from "../assets/images/shapes/192-by-192.png";

const HemLastSection = () => {
    return (
        <section className=" text-center pt-10 pb-20">


            <Container>
                <div className="text-center block-title" >
                    <h3 className="block title" style={{ marginBottom: "1em" }}>
                        <img src={heart} width="15" alt="" />
                        Green Plank – Macht Ihr Leben grüner!
                    </h3>
                    <h4>
                        Die Marke Green Plank ist eine Marke für nachhaltige Bauprodukte, die seit mehr als 15 Jahren für Qualität, Fachwissen und Innovation steht.

                        Der “grüne” Konsumismus nimmt zu und Green Plank genießt das volle Vertrauen der Verbraucher.

                        Green Plank steht für Innovation, Zuverlässigkeit, Qualität, Vertrauen und Kompetenz – das sind die Grundlagen unseres Geschäfts.
                    </h4>
                    <h4>Unsere Leidenschaft für nachhaltige Bauprodukte spiegelt sich in jedem unserer Produkte wider. Green Plank umfasst als Dachmarke ein breites Markenportfolio in den vier Kategorien Terrassendielen, Fassadenbekleidungen, Dielen und Zaunsystem, darunter Produktmarken wie AVON Flooring.</h4>
                </div>
            </Container>
        </section>
    );
};

export default HemLastSection;
