import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/products/innerPages/Komposittrall/CLASSICKomposittrall.webp";

import Imagecolor1 from "../assets/images/colors/classicteak/Classic-Beach-Grey-Narrow-Groove-200x200.png";
import Imagecolor2 from "../assets/images/colors/classicteak/classic-beach-grey-wide-groove-200x200.png";
import Imagecolor3 from "../assets/images/colors/classicteak/Classic-Charcoal-Narrow-Groove-200x200.png";
import Imagecolor4 from "../assets/images/colors/classicteak/Classic-Charcoal-Wide-Groove-200x200.png";
import Imagecolor5 from "../assets/images/colors/classicteak/Classic-Chocolate-Narrow-Groove-200x200.png";
import Imagecolor6 from "../assets/images/colors/classicteak/Classic-Chocolate-Wide-Groove-200x200.png";
import Imagecolor7 from "../assets/images/colors/classicteak/Classic-Teak-Narrow-Groove-200x200.png";
import Imagecolor8 from "../assets/images/colors/classicteak/Classic-Teak-Wide-Groove-200x200.png";

import Imagesurface from "../assets/images/surface/Asset-92-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";

import Head from "next/head";
import Grid from '@material-ui/core/Grid';
import Footer from "../components/footer";

const classicTeak = () => {
    return (
        <>
            <Head>
                <title>Classic komposittrall</title>
                <meta name="title" content="Classic komposittrall - GreenPlank.se" />
                <meta name="description" content="CLASSIC Komposittrall inspirerad av den skandinaviska designtraditionen, som kännetecknas av estetik, enkelhet och funktionalitet." />
            </Head>
            <Layout pageTitle="classic-teak-komposittrall">
                <HeaderTwo />
                <StickyHeader />
                <PageHeader title="Classic-teak-komposittrall" crumbTitle="classic-teak-komposittrall" />
                <section className="blog-details pt-120 pb-40">
                    <Container>
                        <Row>
                            <Col md={12} lg={12}>
                                <div className="page-wrapper section-space--inner--120">
                                    {/*Smart Classic section start*/}
                                    <div className="project-section">
                                        <div className="container">
                                            <div className="row">

                                                {/*====================  Star Smart Classic Section-1 content ====================*/}
                                                <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                                                    <div className="project-details">
                                                        <h2>CLASSIC™ Komposittrall</h2>
                                                        <strong>För hemmet är där du känner dig bekväm och avslappnad</strong>
                                                        <div class="et_pb_text_inner">
                                                            <div class="ce_text block">

                                                                <strong>Inspirerad av den skandinaviska designtraditionen som kännetecknas av estetik, enkelhet och funktionalitet.</strong>
                                                                <p>Med Green Plank CLASSIC komposittrall, du kan skapa ett utomhusutrymme perfekt för din stil som också är lätt att rengöra och ta hand om. Med ett så överraskande prisvärt alternativ finns det helt enkelt ingen anledning att nöja sig med att färga, täta, flisor och ständigt underhåll.</p>
                                                                <p>Halksäker, elegant, räfflad / räfflad borstad yta möjliggör god dragkraft i våta områden som runt pooler.</p>
                                                                <p>Med en estetisk av skandinavisk designutseende har vårt Classic™ komposittrall varit den bästsäljande däckbrädan i mer än tio år och är fortfarande idag.</p>
                                                                <div>

                                                                    <strong>Premiumkvalitet</strong> – Beprövad nordisk kvalitet för hårt väder och grönt levande.<br />
                                                                    <strong>Enhetlighet </strong>– HidLoc™ dolda fästelement säkerställer en slät och enhetlig yta som är säker att gå på.<br />
                                                                    <strong>Komplimerande tillbehör</strong> Komplett dina dröm patio däck design med våra täckbrädor – den perfekta matchen för ditt högpresterande CLASSIC™ Komposittrall.<br />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*====================  End of Smart Classic Section-1 content  ====================*/}

                                                {/*====================  Star Smart Classic Section-2 content  ====================*/}
                                                <div className="col-lg-12 mb-80">
                                                    <div className="project-gallery-wrapper">
                                                        <div className="row">
                                                            <div className="col-md-6 col-mobile-6 section-space--bottom--20">
                                                                <div className="single-gallery-project">
                                                                    <div className="single-gallery-project__image">
                                                                        <img src={Image1} className="img-fluid" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-mobile-6 mb-20">
                                                                <div className="project-information" >
                                                                    <h3>Produktinformation</h3>
                                                                    <table width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left"><strong>Yta:</strong></td>
                                                                                <td align="left">Slipresistenta räfflade ytor, autentiska och naturliga träfärger; vändbara brädor</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Storlek:</strong></td>
                                                                                <td align="left">ca. 25 * 135 mm</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Längd:</strong></td>
                                                                                <td align="left">ca, 3,8 och 4,8 L/M</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Åtgång:</strong></td>
                                                                                <td align="left">ca. 6.71 meter för 1 m²</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Vikt:</strong></td>
                                                                                <td align="left">ca. 2.82 kg / m</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Regelavstånd:</strong></td>
                                                                                <td align="left">50 cm c/c för bostadsapplikationer</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                {/* </div> */}
                                                                <div className="row mt-40 mb-30">

                                                                    <div className="row" style={{ marginTop: ".5em", marginRight: "8px", marginLeft: "4px" }}>
                                                                        <img src={Imagesurface} />
                                                                    </div>


                                                                </div>
                                                                <div className="row mt-60">

                                                                    <Grid container spacing={3}>
                                                                        <Grid item xs={6} sm={3} lg={4}>
                                                                            <a target="_blank" href="/bestall-prov" className="thm-btn" >beställ prov</a>
                                                                        </Grid>
                                                                        <Grid item xs={6} sm={3} lg={5}>
                                                                            <a target="_blank" href="https://storage.googleapis.com/greenplankdata1/classic-deck-swedish.pdf" className="thm-btn"  >installationsguide</a>
                                                                        </Grid>
                                                                        <Grid item xs={8} sm={6} lg={6}>
                                                                            <a target="_blank" href="https://storage.googleapis.com/greenplankdata1/classic-deck-SWEDISH-aluminim-trim.pdf" className="thm-btn" >installation av aluminium</a>
                                                                        </Grid>
                                                                    </Grid>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/*====================  End of Smart Classic Section-2 content  ====================*/}

                                                {/*====================  Star Smart Classic Section-3 content  ====================*/}

                                                <div className="col-12 mb-80">
                                                    <h3>VISA FÄRGTRENDS - ingrodd med naturlig och distinkt karaktär</h3>
                                                    <hr />
                                                    <Grid container spacing={3}>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project__image">
                                                                <img src={Imagecolor1} className="img-fluid" alt="" />
                                                                <h4 className="mt-20 text-center">Beach Grey Narrow-Groove</h4>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project__image">
                                                                <img src={Imagecolor2} className="img-fluid" alt="" />
                                                                <h4 className="mt-20 text-center">Beach Grey Wide-Groove</h4>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project__image">
                                                                <img src={Imagecolor3} className="img-fluid" alt="" />
                                                                <h4 className="mt-20 text-center">Charcoal Narrow-Groove</h4>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project__image">
                                                                <img src={Imagecolor4} className="img-fluid" alt="" />
                                                                <h4 className="mt-20 text-center">Charcoal Wide-Groove</h4>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project">
                                                                <div className="single-gallery-project__image">
                                                                    <img src={Imagecolor5} className="img-fluid" alt="" />
                                                                    <h4 className="mt-20 text-center">Chocolate Narrow-Groove</h4>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project">
                                                                <div className="single-gallery-project__image">
                                                                    <img src={Imagecolor6} className="img-fluid" alt="" />
                                                                    <h4 className="mt-20 text-center">Chocolate Wide-Groove</h4>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project">
                                                                <div className="single-gallery-project__image">
                                                                    <img src={Imagecolor7} className="img-fluid" alt="" />
                                                                    <h4 className="mt-20 text-center">Teak Narrow-Groove</h4>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project">
                                                                <div className="single-gallery-project__image">
                                                                    <img src={Imagecolor8} className="img-fluid" alt="" />
                                                                    <h4 className="mt-20 text-center">Teak Wide-Groove</h4>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                </div>

                                                {/*====================  End of Smart Classic Section-3 content  ====================*/}

                                                {/*====================  Star Smart Classic Section-4 content ====================*/}
                                                <div className="col-lg-12 mb-80">
                                                    <div className="project-gallery-wrapper">
                                                        <div className="row">
                                                            <div className="col-md-6 col-mobile-6 mb-30 mt-20 pl-30 pl-sm-15 pl-xs-15">
                                                                <div className="project-details">
                                                                    <h2 className="mb-30 mt-20"><strong>Produktinformation</strong></h2>
                                                                    <h3>Färgval</h3>
                                                                    <p>
                                                                        Studio fotografering och / eller din surfings enhet kanske inte ger en exakt bild av färgerna. För att se färgerna personligen, vänligen begär gratis prover.
                                                                    </p>
                                                                    <h3>Naturlig skönhet</h3>
                                                                    <p>
                                                                        Våra produkter är designade för att se ut som naturligt trä och kan ha svag färg / textur och skuggnings variationer från bräde till bräda. Färg variationen påverkar inte på något sätt produktens prestanda.</p>
                                                                    <h3>Behåll skönheten</h3>
                                                                    <p>
                                                                        Alla yttre ytor samlar smuts, damm och föroreningar och kräver rengöring. Det är nödvändigt att rengöra ditt komposit trall med jämna mellanrum för att hålla den så vacker som den dag du installerade det.</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-mobile-6 mb-30 mt-20 pl-30 pl-sm-15 pl-xs-15">
                                                                <div className="project-details">
                                                                    <h2 className="mb-30 mt-20"><strong>Pålitlig hållbarhet, överlägsen kvalitet</strong></h2>

                                                                    <strong>1. </strong>Installerad med HidLoc™ dolda fästelement för att skapa enhetlig yta, vilket gör det säkrare och mer bekvämt för familjer med barn och husdjur.<br />
                                                                    <strong>2. </strong>Träfärgade färger skapar ett äkta kornmönster som inbjuder dig att koppla av och njuta av ditt personliga tropiska paradis.<br />
                                                                    <strong>3. </strong>Utmärkande inlay design, stil och färgalternativ<br />
                                                                    <strong>4. </strong>Ingen årlig färgning, tätning eller målning krävs<br />
                                                                    <strong>5. </strong>Exceptionell motståndskraft mot UV-ljus och blekning av färger<br />
                                                                    <strong>6. </strong>Hög glidmotstånd ger en säker yta, även i våta förhållanden<br />
                                                                    <strong>7. </strong>Kommer inte spricka, Flisa, Ruttna eller Vrida sig.<br />
                                                                    <strong>8. </strong>Fri från giftiga tillsatser<br />
                                                                    <strong>9. </strong>Lämplig för privat sektor<br />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*====================  End of Smart Classic Section-4 content  ====================*/}

                                                {/*====================  Star Smart Classic Section-5 content ====================*/}
                                                <div className="col-12 mb-80">
                                                    <h3>TILLBEHÖR</h3>
                                                    <hr />
                                                    <p className="mb-30">Green Plank SMART ™ -täcknings tillbehör utvidgar dina horisonter ytterligare, så att du kan bygga ut distinkta och förtjusande funktioner i ditt SMART ™ -trall som förbättrar både dess skönhet och funktionalitet. Från F-trim och L-trim till stige rörelser, ventilerade aluminium lister, trall pedaler, balk, etc., här är alla trall delar du behöver för att slutföra ditt SMART ™ trall projekt.</p>

                                                    <Grid container spacing={3}>
                                                        <Grid item xs={12} sm={5}>
                                                            <iframe width="360" height="315" src="https://www.youtube.com/embed/SO9_1Pm42Rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                        </Grid>
                                                        <Grid item xs={12} sm={5}>
                                                            <iframe width="360" height="315" src="https://www.youtube.com/embed/u5aosoMYRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                                {/*====================  End of Star Smart Classic Section-5 content  ===============*/}

                                                {/*====================  Star Smart Classic Section-6 content  ====================*/}
                                                <div className="col-12 mb-30 mt-80" >
                                                    <h3>
                                                        Ladda ner Pdfs</h3>
                                                    <hr />

                                                    <Grid container spacing={3}>
                                                        <Grid item xs={6} sm={2}>
                                                            <a href="https://storage.googleapis.com/greenplankdata1/Broschyr-SV.pdf" target="_blank">
                                                                <img src={pdfimg1} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <a target="_blank" href="https://storage.googleapis.com/greenplankdata1/classic-deck-swedish.pdf">
                                                                <img src={pdfimg2} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <a target="_blank" href="https://storage.googleapis.com/greenplankdata1/Green-Plank-Composite-Decking-hollow-boards-Installation-Guide-2019.pdf">
                                                                <img src={pdfimg3} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <a target="_blank" href="https://storage.googleapis.com/greenplankdata1/classic-deck-SWEDISH-aluminim-trim.pdf">
                                                                <img src={pdfimg4} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>
                                                        {/* <Grid item xs={6} sm={2}>
                                            <a href="assets/pdfs/Datablad-Smart-Decking.pdf">
                                                <img src="assets/img/projects/greenplank-tds-composite-technical-data-sheet-1.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </Grid> */}
                                                        <Grid item xs={6} sm={2}>

                                                        </Grid>

                                                    </Grid>
                                                </div>
                                                {/*====================  End of Smart Classic Section-6 content  ====================*/}


                                            </div>
                                        </div>
                                    </div>
                                    {/*Projects section end*/}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </Layout>
        </>
    );
};

export default classicTeak;