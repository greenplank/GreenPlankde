import React, { useState } from "react";
import Link from "next/link";
// import ModalVideo from "react-modal-video";
import { Container } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/5-1-1024x273.webp";
import heart from "../../assets/images/shapes/192-by-192.png";

const VideoCard = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card">
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="m20hG3KpQtI"
        onClose={() => setOpen(false)}
      /> */}
      <div
        className="video-card__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <Container className=" text-center pt-60 pb-60">
        <h3>
          <img src={heart} width="15" alt="" />
          Warum Green Plank
        </h3>
        <h4 style={{color:"white"}}>
        Die Marke Green Plank ist eine Marke für nachhaltige WPC -Bauprodukte, die seit mehr als 15 Jahren für Qualität, Fachwissen Innovation, Zuverlässigkeit, Qualität, Vertrauen und Kompetenz steht - das sind die Grundlagen, auf denen unser Geschäft gedeiht. Wir sind von der Leidenschaft für nachhaltige Bauprodukte getrieben und dies spiegelt sich in jedem unserer Produkte wider.
        </h4>
        <h5 style={{color:"white",marginTop:"1em"}}>Als Dachmarke umfasst Green Plank ein breites Markenportfolio in den vier Kategorien Terrassen, Fassadenverkleidung, Dielen und Zaunsysteme, einschließlich Produktmarken wie AVON Flooring. Green Plank ist die ideale Wahl für anspruchsvolle Anwendungen wie Hotelterrassen sowie andere öffentliche Bereiche wie Parks, Erfrischungsbars im Freien, Veranden und Clubhausdecks. Green Plank Composite-Terrassen sind langlebig, barfußfreundlich und Jahr für Jahr in ausgezeichnetem Zustand zu halten.</h5>
        <div className="video-card__btn-block">
          <Link href="/muster-bestellen">
            <a className="thm-btn dynamic-radius">Muster Bestellen</a>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default VideoCard;
