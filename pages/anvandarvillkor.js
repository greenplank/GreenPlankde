import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Bastforpoolen from "../components/bast-for-poolen";
import BrandCarousel from "../components/brand-carousel";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const Datenschutz = () => {
    return (
        <>
            <Head>
                <title>Datenschutz-Bestimmungen</title>
                <meta name="title" content="Datenschutz-Bestimmungen - GreenPlank.se" />
                <meta name="description" content="Följande användarvillkor, alla policyer och villkor införlivade som referens, och eventuella efterföljande ändringar av det föregående." />
            </Head>
            <Layout pageTitle="Datenschutz-Bestimmungen">
                <HeaderTwo />
                <PageHeader title="Datenschutz-Bestimmungen" crumbTitle="Datenschutz" />
                <StickyHeader />
                <section className="about-one pt-120 pb-40">
                    <Container>
                        <Row style={{ marginBottom: "4em" }}>
                            <Col lg={12}>
                                <h2>Datenschutz-Bestimmungen</h2>
                                <div className="mb-30">
                                    <h3>Überblick</h3>
                                    <p className="mb-30 mt-30">Green Plank AB (“Green Plank” oder “Wir”) freut sich über Ihren Besuch auf dieser Website (die “Site”). Die Privatsphäre und das Vertrauen der Besucher unserer Website sind uns wichtig. Wir stellen diese Datenschutzerklärung zur Verfügung, um sicherzustellen, dass Ihre Erwartungen und unsere Praktiken in Einklang stehen und dass Sie sich Ihrer Entscheidungen in Bezug auf unsere Nutzung und Offenlegung der Informationen, die Sie dieser Website zur Verfügung stellen, bewusst sind. Diese Datenschutzerklärung beschreibt die folgenden Richtlinien und Verfahren von Green Plank in Bezug auf die Erfassung, Verwendung, Offenlegung und den Schutz der Informationen, die wir von Ihnen erfassen, und wie diese Informationen verwendet werden können.</p>
                                    <h3 className="mb-30 mt-30">Welche Art von persönlichen Informationen werden auf dieser Website gesammelt und wie werden sie verwendet ?:</h3>
                                    <p className="mb-30 mt-30">In bestimmten Bereichen der Website werden Sie möglicherweise aufgefordert, uns freiwillig personenbezogene Daten zur Verfügung zu stellen. Diese Anfragen beschränken sich auf bestimmte Aktivitäten auf der Website, bei denen die Verwendung solcher Informationen erforderlich ist, um beispielsweise eine Online-Transaktion zu verarbeiten oder auf eine Anfrage nach Produktliteratur oder Produktmuster zu antworten oder Ihre Kontaktinformationen an einen Green Plank-Händler oder einen Service-Fachmann zu senden von Ihrer Wahl. Ihre Teilnahme an diesen Aktivitäten ist völlig freiwillig.</p>
                                    <ul>
                                        <strong>Literaturanfragen oder sonstige Auskünfte: </strong>In vielen Fällen bieten wir zusätzliche Informationen zu den auf der Website beschriebenen Produkten und Dienstleistungen an. Um diese Informationen anzufordern, müssen Sie uns bestimmte Kontaktinformationen wie Ihren Namen, Ihre Postanschrift und Ihre E-Mail-Adresse mitteilen.
                                        <br />
                                        <strong>Bestellinformationen: </strong>Bestimmte Transaktionsinformationen müssen an die Green Plank übermittelt werden, um eine Bestellung aufzugeben, z. B. Ihr Name, Ihr Firmenname, Ihre Lieferadresse, Ihre E-Mail-Adresse und bestimmte Finanzinformationen (z. B. Kreditkartennummer, Ablaufdatum). Diese Informationen werden ausschließlich zu Abrechnungs- und Inkassozwecken verwendet. Die Kontaktinformationen können von uns auch im Zusammenhang mit bestimmten Marketingaktivitäten wie Werbeaktionen oder Ankündigungen neuer Produkte verwendet werden. The Green Plank wird diese Art der Kommunikation mit Kunden unterlassen, die diese Programme wie weiter unten beschrieben abgelehnt haben.<br />
                                        <strong>Anfragen an Service-Experten zur Kontaktaufnahme: </strong>Wenn Sie unsere Website-Funktion zum Auffinden eines Serviceprofis verwenden, können Sie den Serviceprofi Ihrer Wahl auffordern, sich direkt mit Ihnen in Verbindung zu setzen. Die erforderlichen Informationen, die Sie angeben müssen, umfassen Ihren Namen, Ihre Stadt, Ihr Bundesland, Ihre Postleitzahl und Ihre E-Mail-Adresse. Aufgrund Ihrer freiwilligen Anfrage leiten wir diese erforderlichen Informationen nur an Ihre ausgewählten Serviceprofis weiter. Die Green Plank kann diese Informationen auch im Zusammenhang mit bestimmten Marketingaktivitäten verwenden, z. B. für Werbung oder Ankündigungen neuer Produkte.<br />
                                        <strong>Garantieregistrierung: </strong>In einigen Fällen können Sie Ihre Produktgarantieregistrierung möglicherweise über diese Website bei uns einreichen. Im Rahmen unserer Garantieregistrierung müssen Sie uns bestimmte Informationen über Sie (z. B. Ihren Namen und Ihre Postanschrift) und die registrierten Produkte mitteilen. Wir können Sie auch bitten, uns zusätzliche Informationen im Zusammenhang mit Marketingumfragen zukommen zu lassen.<br />
                                        <strong>Wettbewerbe:  </strong>Wenn Sie an einem Wettbewerb oder einer anderen auf dieser Website angebotenen Werbeveranstaltung teilnehmen, werden Sie möglicherweise nach Ihrem Namen, Ihrer Adresse, Ihrer Telefonnummer und Ihrer E-Mail-Adresse gefragt. Diese Informationen werden verwendet, um den Wettbewerb zu verwalten und die Gewinner zu benachrichtigen.<br />
                                        <strong>Site-Nutzungsdaten: </strong>The Green Plank kann auch andere Informationen von Kunden und Besuchern der Site sammeln, wie z. B. die IP-Adresse des Benutzers, den Domainnamen, die Verweildauer auf der Site und die Seiten, auf die bei jedem Besuch der Site zugegriffen wird. The Green Plank verwendet diese Informationen, um Trends zu analysieren, die Website zu verwalten, Benutzerbewegungen zu verfolgen und umfassende demografische Informationen für die Gesamtnutzung zu sammeln. IP-Adressen werden nicht mit personenbezogenen Daten verknüpft.<br />
                                    </ul>
                                    <h3 className="mb-30 mt-30">Wie schützt die Green Plank Ihre persönlichen Daten?</h3>
                                    <p className="mb-30 mt-30">Wir geben Ihre persönlichen Daten nicht ohne Ihre Erlaubnis an Dritte weiter (mit Ausnahme von Unternehmen, die für uns Dienstleistungen erbringen, z. B. Aufträge ausführen, die entweder unserer Datenschutzerklärung entsprechen müssen oder über Datenschutzrichtlinien verfügen, die Ihre Daten schützen).</p>
                                    <p className="mb-30 mt-30">Bestimmte Informationen, die Sie unserer Website zur Verfügung stellen, sind möglicherweise passwortgeschützt, und Sie sollten geeignete Maßnahmen ergreifen, um die Geheimhaltung Ihres Passworts zu schützen. Wenn Sie einen Computer an einem öffentlichen Ort verwenden oder einen Computer mit anderen teilen, müssen Sie sich abmelden und Ihr Browserfenster schließen, wenn Sie den Zugriff auf unsere Site beenden, damit andere nicht auf Ihre persönlichen Daten zugreifen können. Sie allein sind für die Kontrolle und Verwendung jedes von Ihnen erstellten Passworts verantwortlich.</p>
                                    <p className="mb-30 mt-30">Die Green Plank kann Informationen offenlegen, die Sie uns zur Verfügung gestellt haben, wenn wir nach Treu und Glauben der Ansicht sind, dass eine solche Offenlegung erforderlich ist, um (1) das Gesetz oder das auf der Green Plank zugestellte Rechtsverfahren einzuhalten; oder (2) die Rechte oder das Eigentum der Grünen Planke schützen und verteidigen.<br/>
                                        Wenn wir demografische Informationen von Ihnen erfassen (z. B. Ihr Alter, Ihr Bildungsniveau oder Ihr Haushaltseinkommen), werden wir diese Informationen nicht auf eine Weise weitergeben, die Sie als Einzelperson mit einer anderen Entität identifiziert, es sei denn, wir teilen Ihnen dies zu diesem Zeitpunkt mit der Sammlung. Wenn wir demografische Informationen an Dritte weitergeben, geben wir diese nur zusammenfassend weiter.</p>
                                    <h3 className="mb-30 mt-30">Was sind “Cookies” und werden sie auf dieser Website verwendet?</h3>
                                    <p className="mb-30 mt-10">„Cookies“ sind kleine Informationen, die von Ihrem Browser auf der Festplatte Ihres Computers gespeichert werden. Die meisten Webbrowser akzeptieren Cookies automatisch. Sie können jedoch in der Regel Ihren Browser ändern, um dies zu verhindern, wenn Sie die Informationen nicht für eine spätere Verwendung speichern möchten. Unsere Cookies ermöglichen es uns, Ihnen einen persönlicheren Service zu bieten. The Green Plank verwendet Cookies, um die Verwaltung der Website zu vereinfachen und den Inhalt der Website für unsere Benutzer zu verbessern.</p>
                                    <h3 className="mb-30 mt-30">Welche Sicherheitsmaßnahmen werden von dieser Site angewendet?</h3>
                                    <p className="mb-30 mt-10">The Green Plank verfügt über Sicherheitsmaßnahmen, um den Verlust, den Missbrauch und die Änderung der von uns kontrollierten Informationen zu verhindern. Dazu gehört eine Firewall, die den unbefugten Zugriff auf unsere Systeme verhindert, und die Verwaltung von Registrierungsinformationen in einer separaten Datenbank. Obwohl wir angemessene Sorgfalt auf die sichere Übertragung von Informationen zwischen Ihrem Computer und unseren Servern verwenden, können wir die Sicherheit von Informationen, die uns über das Internet übermittelt werden, weder gewährleisten noch garantieren. Wir schützen die Übertragung von Kreditkarten- und anderen Transaktionsinformationen durch die branchenübliche SSL-Verschlüsselung (Secure Socket Layer).</p>
                                    <h3 className="mb-30 mt-30">Was ist mit Ihren Links zu anderen Websites? Sind meine Informationen durch diese Websites geschützt?</h3>
                                    <p className="mb-30 mt-10">Diese Site kann Links zu anderen Websites enthalten. Bitte beachten Sie, dass die Green Plank nicht für die Datenschutzpraktiken dieser anderen Websites verantwortlich ist. The Green Plank fordert unsere Benutzer auf, sich darüber im Klaren zu sein, wann sie diese Website verlassen, und die Datenschutzerklärungen aller Websites zu lesen, auf denen personenbezogene Daten erfasst werden. Diese Datenschutzerklärung gilt ausschließlich für Informationen, die auf dieser Website gesammelt werden. Darüber hinaus bedeutet das Vorhandensein eines externen Links oder einer externen Informationsanfrage nicht, dass wir das verlinkte oder externe Unternehmen oder seine Produkte oder Dienstleistungen unterstützen.</p>
                                    <h3 className="mb-30 mt-30">Ein besonderer Hinweis zu Kindern</h3>
                                    <p className="mb-30 mt-10">Wir sind der Meinung, dass Eltern die Online-Aktivitäten ihrer Kinder beaufsichtigen und die Verwendung von Tools zur Kindersicherung in Betracht ziehen sollten, die von Onlinediensten und Softwareherstellern zur Bereitstellung einer kinderfreundlichen Online-Umgebung erhältlich sind. Diese Tools können auch verhindern, dass Kinder ihren Namen, ihre Adresse und andere persönliche Informationen ohne Erlaubnis der Eltern anderweitig online preisgeben.</p>
                                    <h3 className="mb-30 mt-30">Änderungen unserer Richtlinien</h3>
                                    <p className="mb-30 mt-10">The Green Plank benachrichtigt Sie über Änderungen an den Datenschutz- und Informationsnutzungspraktiken der Benutzer, indem Sie die Änderungen auf dieser Seite veröffentlichen. Bitte überprüfen Sie das Überarbeitungsdatum am Ende dieser Datenschutzrichtlinie, um festzustellen, ob die Richtlinie seit Ihrer letzten Überprüfung geändert wurde.</p>

                                    <h3 className="mb-30 mt-30">Nutzungsbedingungen</h3>
                                    <p className="mb-30 mt-10">Ihre Nutzung der Website, einschließlich etwaiger Streitigkeiten in Bezug auf den Datenschutz, unterliegt dieser Datenschutzerklärung und den Green Planks Nutzungsbedingungen. Durch die Nutzung dieser Website erklären Sie sich mit den in dieser Erklärung beschriebenen und diesen Verhaltensweisen einverstanden Nutzungsbedingungen.</p>
                                   
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default Datenschutz;
