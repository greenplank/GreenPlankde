import React, { useContext } from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import heart from "../assets/images/shapes/heart-2-1.png";
import heart1 from "../assets/images/shapes/about-count-heart-1-1.png";
import faqImage from "../assets/images/resources/faq-box-1-1.jpg";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h2
      className="para-title"
      style={{ color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}` }}
    >
      <span onClick={decoratedOnClick}>
        <i
          style={{
            color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}`
          }}
          className={`far ${isCurrentEventKey ? "fa-minus" : "fa-plus"}`}
        ></i>
        {children}
      </span>
    </h2>
  );
};
const FaqOne = () => {
  return (
    <section className="faq-one pt-120">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="faq-one__content">
              {/* <div className="block-title">
                <h3>
                  Charity for the people you care about.
                </h3>
              </div> */}

              <Accordion
                as="ul"
                id="accordion"
                defaultActiveKey="0"
                className="list-unstyled"
              >
                <Card as="li">
                  <ContextAwareToggle eventKey="0">
                    Wie viel bewegen sich die Terrassendielen im Laufe des Jahres?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      Ob Terrassendielen schrumpfen oder anschwellen, hängt vom Material ab, aus dem das Deck besteht. Holz, das nicht druckbehandelt ist, dehnt sich im nassen Zustand auf jeden Fall aus und zieht sich zusammen. Wenn es trocknet, schrumpft das Holz. Diese Zyklen führen schließlich dazu, dass sich Holzdecks verziehen und reißen. Dies gilt sogar für Zedern- und Redwood-Terrassen, wenn sie älter werden.
                      Composite-Terrassen nehmen keine Feuchtigkeit auf, dehnen sich jedoch mit der Temperaturschwankung in der Länge aus und ziehen sich zusammen.
                      Es ist wichtig, dass Sie unsere Installationsanleitung lesen, bevor Sie Green Plank-Terrassendielen verlegen. Wenn es warm wird, dehnt es sich in Längsrichtung mehr als Holz aus, in Querrichtung jedoch weniger. Je länger die Terrassendiele ist, desto größer ist ihre Ausdehnung und desto mehr müssen Sie beim Bau Ihrer Terrassendiele berücksichtigen. Überprüfen Sie die Endabstandstabelle des Produkts (Kopf-an-Kopf), in der der Abstand zwischen den Enden von zwei Terrassendielen mit der Länge jeder Platte, der Temperatur während der Installation und der höchsten im Terrassendielenbereich zu erwartenden Umgebungstemperatur angegeben ist . Zum Beispiel kann sich eine 5 Meter lange zusammengesetzte Terrassendiele, die bei 10 Grad Celsius installiert wird, an jedem Ende der Diele um bis zu 3 mm ausdehnen, sodass zwischen den Enden zweier Terrassendielen ein Abstand von mindestens 6 mm erforderlich ist.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                    Wie viel Platz wird benötigt, um eine ordnungsgemäße Belüftung unter einem Green Plank-Verbunddeck sicherzustellen?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      Ein freier Abstand von 50 mm zwischen der Unterkante der Balken und der Neigung wird empfohlen, um eine ausreichende Belüftung zu gewährleisten.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                    Wie lange ist die Garantie auf Green Plank-Verbundprodukte?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                      Details zu unserer Garantie finden Sie im Kundendienstbereich dieser Website.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="3">
                    Wie wirken sich Wetterzyklen während der Installation auf die Beläge und Geländer von Green Plank aus?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="3">
                    <p>
                      Naturfaserverbundprodukte von Green Plank eignen sich gut für wechselnde Wetterbedingungen. Während der Installation zieht es sich bei kaltem Wetter nur geringfügig zusammen, dehnt sich jedoch bei heißem Wetter aus. Wir empfehlen, das Material vor der Installation 48 Stunden auf der Baustelle akklimatisieren zu lassen. Befolgen Sie die Abstandsrichtlinien in der Installationsanleitung, um Dehnungen und Kontraktionen auszugleichen.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="4">
                    Wie reinige und pflege ich Green Plank Holzverbunddecks?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="4">
                    <p>
                      Alle Außenflächen sammeln Schmutz, Staub und Verunreinigungen an. Sie müssen regelmäßig gereinigt werden, damit sie immer gut aussehen. Green Plank® Holzwerkstoffe sind wartungsarme Produkte, keine wartungsfreien Produkte.

                      Eine regelmäßige Reinigung der Green Plank®-Verbundprodukte wird empfohlen. Auch wenn sie sauber erscheinen, ist es wichtig, die Ansammlung von Pollen / Ablagerungen zu verhindern, die Schimmelbefall verursachen können.

                      Wir empfehlen eine Grundreinigung mit einem Kompositdeckreiniger oder einer Kombination aus Seife (Geschirrspülmittel), heißem Wasser und einer weichen Bürste. Nach der Reinigung gründlich abspülen. Wenn Sie nicht sicher sind, welches Produkt zum Reinigen / Entfernen von Flecken auf Ihrem Deck verwendet wird, sollten Sie einen kleinen Bereich an einer unauffälligen Stelle testen, um festzustellen, ob das Produkt unerwünschte Verfärbungen verursacht.

                      Das gesamte Deck mit einem Gartenschlauch und nicht mit einem Hochdruckreiniger abspritzen. Der Hochdruckreiniger sprüht Seifenpartikel auf andere Oberflächen und verursacht möglicherweise Flecken. Die Verwendung eines Gartenschlauchs ist eine bessere Methode, um hausgemachten Reiniger vorsichtig abzuspülen und alle Wasserflecken zu entfernen.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="5">
                    Wird Green Plank Composite im Sommer heiß?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="5">
                    <p>
                      Jedes Material fühlt sich an heißen Sommertagen warm an. Green Plank-Verbundwerkstoffe erwärmen sich ähnlich schnell wie Naturholz. dh wärmer als Gras, aber nicht so heiß wie Pflaster, Metall oder Beton.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="6">
                    Hat Terrassendielen einen guten Return on Investment (ROI)?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="6">
                    <p>
                      Green Plank Composite-Terrassendielen steigern den Wert Ihres Eigenheims und sind daher eine gute Investition, insbesondere dann, wenn das Deck ansprechend gestaltet ist, um sich in die Architektur des Eigenheims einzufügen, und im Hinblick auf Sicherheit und Leistung richtig gebaut ist.

                      Statistiken von Immobilienmaklern zeigen, dass Decks einen Mehrwert für das Haus darstellen und bis zu 80 Prozent der Kosten eines Decks beim Verkauf wieder hereingeholt werden können, wenn das Deck gut gewartet wird. Kurz gesagt, Decks haben einen guten ROI.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="7">
                    Verrottet Green Plank Naturfaser-Verbundbelag?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="7">
                    <p>
                      Composite-Beläge wie Green Plank-Beläge sind aufgrund des Kunststoffanteils sehr verrottungsbeständig. Die Anschaffungskosten für Verbunddecks sind höher, erfordern jedoch weniger Wartung und bieten in den meisten Fällen eine längere Lebensdauer.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="8">
                    Benötige ich Spezialwerkzeuge, um Green Plank Composite Decking zu installieren?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="8">
                    <p>
                      Green Plank-Verbundprodukte können mit herkömmlichen Werkzeugen geschnitten, gebohrt und befestigt werden. Denken Sie zu Ihrer Sicherheit daran, eine Schutzbrille und Schutzkleidung zu tragen.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="9">
                    Müssen Naturfaserverbundplatten, Leisten, Bretter oder Balken von Green Plank vorgebohrt werden?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="9">
                    <p>
                      Vor dem Anschrauben der Verkleidungen, Balken und Terrassendielen muss vorgebohrt und gesenkt werden (bei herkömmlicher Installation).
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="10">
                    Benötigen Decks eine Baugenehmigung oder eine Baugenehmigung?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="10">
                    <p>
                      In den meisten Gemeinden ist eine Baugenehmigung erforderlich, um ein Deck zu bauen. Der Hauptgrund ist die Gewährleistung der Sicherheit aller Personen, die die Struktur verwenden. Es hat viele unglückliche Fälle gegeben, in denen Decks, Treppen oder Geländer, die mit schlechtem Design oder Material gebaut wurden, zusammengebrochen sind und zu Verletzungen oder zum Tod geführt haben. Am häufigsten wurde in solchen Fällen die erforderliche Deckgenehmigung nicht eingeholt. Wenn eine Deckbaugenehmigung nicht eingeholt wird und etwas schief geht, wird der Hausbesitzer zivil- und strafrechtlich verfolgt. Es ist sinnvoll, die Baugenehmigung der örtlichen Baubehörde einzuholen, damit das Deck überprüft werden kann, um Sie und andere zu schützen.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="11">
                    Färben, verblassen oder kratzen Green Plank-Verbunddecks leicht?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="11">
                    <p>
                      Nehmen wir diese Fragen in Ordnung. Erstens enthält Green Plank-Verbundbelag Holz, entweder Sägemehl oder gemahlenes Holz oder Reisschalenfasern. Dieses Material kann Flüssigkeiten wie Öl absorbieren, was zu Flecken führen kann. Selbst Terrassendielen von Top-Marken können Flecken hinterlassen, wenn Öl, Farbe, Saft oder andere Flüssigkeiten nicht schnell entfernt werden.

                      Composite-Beläge verblassen in der ersten Saison in der Regel, wenn überhaupt, nur leicht. Danach bleibt die farbe beständig. Obwohl Green Plank ständig daran arbeitet, den UV-Schutz seiner Produkte zu verbessern, um das Ausbleichen zu verringern oder zu beseitigen.

                      Schließlich verkratzt der Verbundbelag, wenn schwere Gegenstände wie Möbel darüber gezogen werden. Selbst scharfe Haustierkrallen und Sand können Kratzer wie auf Holzdecks verursachen. Die Kratzer sind jedoch typischerweise oberflächlich und verblassen mit der Zeit. Um Kratzer zu vermeiden, heben Sie beim Bewegen der Gartenmöbel diese an und entfernen Sie regelmäßig Schmutz vom Deck, um Abrieb auf dem Verbundboden zu vermeiden.

                      Eine andere Möglichkeit, um zu verhindern, dass Möbel Ihren Terrassenboden aus Verbundwerkstoffen beschädigen, besteht darin, in Schutzbecher, Matten oder Polster zu investieren. Wenn Sie sie gekauft haben, stellen Sie sicher, dass Sie sie unter alle Tisch- und Stuhlbeine legen, die mit Ihrem Terrassenboden in Kontakt kommen. Die Einführung dieser Schutzbecher, Matten oder Polster verhindert, dass Ihre Möbel direkten Kontakt mit Ihrem Deck haben, und verhindert, dass Ihre Möbel Ihren Terrassenboden beschädigen.

                      Einige unserer Kunden haben Schleifpapier mit kleiner / mittlerer Körnung verwendet, um kleinere Kratzer oder Kratzspuren zu behandeln. Wenn sich die Flecken auf den Dielen abgesetzt haben, können Sie auch ein feines Schleifpapier verwenden, gefolgt von einer Drahtbürste, um den Terrassenbelag behandeln zu können. Befolgen Sie immer die Holzmaserung der Diele. Der geschliffene Bereich wird in ca. 8-10 Wochen wieder verwittern und sich dem Rest des Decks angleichen. Dies kann aber je nach Standort und spezifischer Anwendung sehr unterschiedlich sein.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="12">
                    Können Green Plank Naturfaserverbundbeläge für Pools und Spas verwendet werden?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="12">
                    <p>
                      Absolut. Green Plank Naturfaser-Terrassendielen nehmen kein Wasser auf und werden in der Nähe von Pools, Spas und in Meeresumgebungen auf der ganzen Welt häufig eingesetzt.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="13">
                    Kann ich zur Reinigung meines Verbunddecks einen Hochdruckreiniger verwenden?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="13">
                    <p>
                      Haushalts-Hochdruckreiniger mit Sprühdüse können verwendet werden, um Flecken, Schmutz oder Schimmel zu entfernen. Es besteht jedoch die Gefahr, dass Seifenpartikel auf andere Oberflächen gesprüht werden. Wenn Sie sich für die Verwendung eines Hochdruckreinigers entscheiden, halten Sie bitte einen Abstand von mindestens 30 cm zwischen dem Powerjet und der Oberfläche des Terrassendielen ein.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="14">
                    Kann ich Green Plank Composite Decks über einem vorhandenen Deck, Balkon oder einer Veranda befestigen?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="14">
                    <p>
                      Composite-Terrassendielen sollen direkt an den Tragbalken installiert werden. Befestigen Sie unsere Terrassendielen NICHT auf alten vorhandenen Terrassendielen oder Balkon- und Terrassenböden.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="15">
                    Können Green Plank Naturfaser-Terrassendielen zum Bau eines Docks verwendet werden?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="15">
                    <p>
                      Yes, Green Plank MARINE? composite decking can be used as dock planking, jetties, look-outs, leisure areas, promenades, boardwalks, marinas and other commercial or heavy duty projects, but it cannot be used for any structural support members, and it should not be continuously submerged in water. For information about commercial applications, contact Green Plank.
                      Weitere Informationen zu Produkten für strukturelle Verbundstützen erhalten Sie von Green Plank.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="16">
                    Sind Green Plank-Verbundprodukte UV-geschützt?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="16">
                    <p>
                      Green Plank Naturfaser-Verbundprodukte enthalten UV-inhibierte Pigmentsysteme, die das Ausbleichen reduzieren. Bei starker Sonneneinstrahlung kann es jedoch mit der Zeit verblassen. Normalerweise werden Verbundprodukte mit dem Ausbleichen heller.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="17">
                    Sind Green Plank Holz-Kunststoff-Verbundprodukte umweltfreundlich?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="17">
                    <p>
                      Ja. Green Plank ist die führende Marke für umweltfreundliche Terrassen-, Geländer-, Zaun- und Verkleidungssysteme aus Holz-Kunststoff-Verbundwerkstoffen und Naturfasern, die für ein optimales Wohngefühl im Freien sorgen. Alle von uns verwendeten Bestandteile werden wiederverwendet. Green Plank Naturfaser-Verbundprodukte kombinieren die Haltbarkeit von Kunststoff und die Festigkeit von Holz- / Reisschalenfasern zu einem überlegenen Bauprodukt.

                      WPC / NFC-Produkte von Green Plank splittern, verziehen oder verblassen nicht wie Holz. Sie reduzieren den verschwenderischen Reparatur- und Austauschzyklus erheblich und vermeiden das häufige Auftragen umweltschädlicher Farben und Versiegelungen.

                      Green Plank-Holz-Kunststoff-Verbund- oder Naturfaser-Verbundprodukte werden aus recycelten Holz- / Reisschalenfasern hergestellt, die sonst auf Mülldeponien gelangen würden. Darüber hinaus kann Green Plank Abfallprodukte wieder in den Herstellungsprozess einbinden.

                      Green Plank recycelt Wasser während des Herstellungsprozesses.

                      Im Gegensatz zu Holz handelt es sich bei Green Plank Holz-Kunststoff-Verbund- / Naturfaser-Verbundprodukten für die meisten Hausbesitzer um einen einmaligen Kauf.

                      Green Plank Holz-Kunststoff-Verbundwerkstoffe / Naturfaser-Verbundwerkstoffe müssen nicht gestrichen, gebeizt oder versiegelt werden.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="18">
                    Sparen mir Green Plank-Verbundprodukte wirklich langfristig Geld?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="18">
                    <p>
                      Ja, die anfänglichen Kosten für unsere Verbundprodukte sind möglicherweise geringfügig höher als für druckbehandeltes Holz, aber billiger als für Hartholz. Und innerhalb weniger Jahre werden Ihre Terrassen, Verkleidungen oder Einzäunungen aus Verbundwerkstoffen den Unterschied der Kosten zurückgewinnen. Dies liegt daran, dass für die Herstellung von Green Plank-Naturfaserverbundprodukten nur ein minimaler Aufwand erforderlich ist, um ein hervorragendes Aussehen zu erzielen. Dies bedeutet, dass die Wartungskosten niedrig sind. Da die Kosten für Behandlungen und Arbeitskräfte für traditionelle Holzdecks, -verkleidungen oder -zäune steigen, sind unsere Verbundprodukte die perfekte kostengünstige Option.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="19">
                    Green Plank Composite-Terrassendielen, Fassadenverkleidungen, Zäunen und
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="19">
                    <p>
                      Wir empfehlen, dass Sie zuerst versuchen, die Antwort auf Ihre Frage im Folgenden zu finden. FAQ – Frequently Asked Questions (Häufig gestellte Fragen) für Holz-Kunststoff-Verbund- oder WPC-Produkte.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="20">
                    Wie sollen Green Plank Verbundprodukte gelagert werden?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="20">
                    <p>
                      Wenn Sie Green Plank-Verbundprodukte vor dem Bau lagern möchten, sollten Sie die Produkte in geschlossenen Räumen lagern, um eine saubere Oberfläche zu gewährleisten. Wenn Gegenstände im Freien gelagert werden sollen, müssen sie angemessen geschützt werden, um direkte Einwirkung von Sonnenlicht, Regen, Feuchtigkeit usw. zu vermeiden. Das Produkt muss dicht gestapelt im Schatten und bodenfrei auf ebenen Trägern (300 mm) und auf einer ebenen Fläche wie ein Betonboden gelagert werden. Produkte müssen so gelagert werden, dass ein Durchhängen verhindert und eine freie Luftzirkulation ermöglicht wird.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="21">
                    Wie stark ist Green Plank Composites?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="21">
                    <p>
                      Green Plank-Verbundprodukte wurden für höchste Ansprüche entwickelt und konstruiert. Wenden Sie sich an unser Team, wenn Sie eine spezielle Anwendung haben, und wir werden Sie über die Eignung informieren.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="22">
                    Wie wirkt sich Salzwasser auf Green Plank Holz-Kunststoff-Verbundprodukte aus?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="22">
                    <p>
                      Salzwasserklima ist eine perfekte Anwendung für Green Plank Holz-Kunststoff-Verbundprodukte. Salzwasser hat keine nachteiligen Auswirkungen auf Green Plank-Holz-Kunststoff-Verbundprodukte.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="23">
                    Ich sehe, dass beide Seiten des Terrassendielen verwendet werden können, ist es so?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="23">
                    <p>
                      Ja, die meisten Green Plank®-Terrassenprofile aus Verbundwerkstoff haben auf beiden Seiten schöne Designs, sodass Sie die freie Wahl haben. Green Plank Composite Deck bietet eine rutschfeste, warme und barfußfreundliche Oberfläche, die frei von gefährlichen Nageln und Splittern ist.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="24">
                    Ist Verbunddeck teurer als Holzdeck?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="24">
                    <p>
                      Die anfänglichen Kosten eines Verbunddecks sind tendenziell höher. Composite-Decks erfordern zwar über die gesamte Lebensdauer hinweg weniger Wartung, sind jedoch im Laufe der Zeit kostengünstiger. Im Gegensatz zu Verbunddecks sind die Kosten für den Bau eines Naturholzdecks tendenziell günstiger. Holzdecks erfordern jedoch eine umfangreichere Wartungsroutine, um eine vollständige Lebensdauer des Decks zu gewährleisten. Holzdecks sind aufgrund von Wartungsarbeiten im Laufe der Zeit weniger kosteneffektiv.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="25">
                    Sind Komposit-Terrassendielen kinderfreundlich?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="25">
                    <p>
                      Ja. Unser Komposit-Belag hat hervorragende Rutschfestigkeitseigenschaften und alle Befestigungen sind verdeckt, wodurch unsere Dielen kinder- und fußfreundlich sind.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="26">
                    Sind Green Plank Komposit-Terrassendielen bei Nässe rutschig?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="26">
                    <p>
                      Green Plank Komposit-Terrassen bieten nachweislich eine hervorragende rutschhemmende Oberfläche, wenn sie nass und trocken sind. Dank der maschinell bearbeiteten Struktur und der gebürsteten Oberfläche sind die Terrassendielen von Green Plank rutschfest.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="27">
                    Soll ich mein gesamtes Terrassenmaterial auf einmal kaufen?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="27">
                    <p>
                      Ja, wir empfehlen, alle erforderlichen Terrassenmaterialien auf einmal zu kaufen, da bei der Herstellung leicht unterschiedliche Farben entstehen können. Wie die meisten Verbundwerkstoffe haben einzelne Terrassendielen von Green Plank aufgrund natürlicher Unterschiede bei Holzfasern und Polymeren unterschiedliche Farben. Unsere Garantie deckt keine Farbabweichungen ab. Wir empfehlen daher, zusätzliches Material zu kaufen, falls Sie in Zukunft Platinen austauschen oder reparieren müssen.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="28">
                    Was sind die Vorteile von Holzverbundplatten im Vergleich zu herkömmlichen Holzplatten?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="28">
                    <p>
                      Dank seiner vielen guten Eigenschaften bereichert Wood Plastic Composites oder WPC Ihre Terrasse oder Wege sehr lange. Sein schönes, gleichmäßiges Aussehen, das sehr wartungsarm ist, macht es zu etwas Besonderem. Sie können sogar vergessen, es malen zu müssen. Spüren Sie den Komfort mit unseren WPC-Produkten: barfußfreundlich und splitterfrei, dauerhaft schön mit edler Naturholzoptik, rutschfest, auch bei Nässe.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="29">
                    In welchen Farben sind Green Plank-Holzverbundprodukte erhältlich?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="29">
                    <p>
                      Es sind verschiedene Farben erhältlich. Die verfügbaren Farben entnehmen Sie bitte der jeweiligen Produktreihe. Sonderfarben können erworben werden, wenn die benötigte Menge eine bestimmte Menge überschreitet. Für weitere Informationen kontaktieren Sie uns bitte.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="30">
                    Was ist, wenn ich nicht genau weiß, welches Produkt für meine Bedürfnisse geeignet ist?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="30">
                    <p>
                      Am besten kontaktieren Sie uns direkt per E-Mail oder rufen Sie uns während unserer Geschäftszeiten an. Einer unserer Vertriebsmitarbeiter hilft Ihnen bei der Ermittlung der Produkte, die Ihren Anforderungen am besten entsprechen.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="31">
                    Was sind Komposit-Terrassendielen?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="31">
                    <p>
                      Green Plank Holz-Kunststoff-Verbundwerkstoff / Naturfasern Verbunddecken, -verkleidungen, -zäune und -geländer bestehen aus einem Material, das aus einer Mischung von Naturfasern (Holz, Reisschale), Kunststoff und einer Art giftfreiem Bindemittel besteht. Diese Zutaten werden zu einem Material zusammengefügt, das dichter, fester und schwerer als Holz ist, einem Holz-Kunststoff-Verbundwerkstoff.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="32">
                    Woraus bestehen Green Plank Kompositprodukte?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="32">
                    <p>
                      Unsere Verbundprodukte sind formaldehydfrei und völlig ungiftig. Sie kombinieren die besten Eigenschaften von Holz und Polyethylen-Kunststoffen und sind somit die ideale Wahl für den Außenbereich.
                      Green Plank-Verbundprodukte bestehen aus einer homogenen Kombination natürlicher Materialien – Holz- und Kunststofffasern. Eine spezielle Kombination aus 63% aufbereitetem Hartholz, fast 27% recycelten Kunststoffen und 10% Zusatzstoffen wie Stabilisierungsharzen, Pigmenten usw. Kein giftiges Element! Insgesamt enthält Green Plank Composites 90% recycelte Materialien, wodurch die Umwelt geschont wird.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="33">
                    Was sind die Vorteile von NOVOFENCE™ Verbundzaun über einem traditionellen Holzzaun?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="33">
                    <p>
                      Traditionelle Holzzäune halten, altern aber schnell. Innerhalb weniger Jahre neigen traditionelle Holzzäune dazu, Anzeichen von Abnutzung und Alterung zu zeigen. Dies ist besonders geeignet für die nordische Region, in der regelmäßig nasses Wetter das Holz beschädigen kann, wenn es draußen bleibt. Dies kann durch Versiegelung und regelmäßige Wartung behoben werden, ist jedoch zeitaufwendig und kann kostspielig sein. Unser Verbundzaun hat eine Garantie von 25 Jahren, sodass Sie sich darauf verlassen können, dass Ihr Verbundzaun für eine lange Lebensdauer und Freude ausgelegt ist.

                      Einer der wichtigsten Faktoren bei der Auswahl von NOVOFENCE™ -Zaun & Sichtschutzzaun im Vergleich zu Holz ist das Budget. Da Holzzäune anfangs günstiger sind als Verbundholzzäune.

                      Holzzaun, müssen Sie verrottete Bereiche des Holzes warten und sogar reparieren oder ersetzen. Sie müssen das Holz so flecken und streichen, dass es den Elementen standhält. In den meisten Klimazonen muss dies jährlich durchgeführt werden, um die Lebensdauer des Zauns zu erhalten. In rauen nordischen Klimazonen muss dies jedoch häufiger durchgeführt werden. Green Plank-Verbundzäune bieten alle Vorteile von Zäunen und keinen der Nachteile von Holzzäunen: Sie sind umweltfreundlich, splitterfrei, verrotten nicht und halten lange.

                      Wartung ist der entscheidende Einflussfaktor für die Entscheidung von Menschen für Green Plank NOVOFENCE ™ -Zaun & Sichtschutzzaun. Abgesehen von gelegentlichem Abspritzen müssen Sie sich nicht darum kümmern!

                      Green Plank NOVOFENCE ™ -Zaun & Sichtschutzzaun ist nicht von Insektenpopulationen betroffen und witterungsbeständig. Der größte Teil des Schmutzes kann leicht mit einer leistungsstarken Waschmaschine oder einfach mit Wasser entfernt werden. Schimmel- oder Rauchflecken können einfach mit einem Reinigungsmittel entfernt werden.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="34">
                    Wofür steht WPC?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="34">
                    <p>
                    WPC ist die Abkürzung für „Wood Polymer Composite“ und ein kombinierter Werkstoff, der seit mehr als 30 Jahren vor allem im Außenbereich eingesetzt wird und in Nordamerika und Europa hergestellt und eingesetzt wird. Es besteht aus einer Kombination von natürlichen Füllstoffen mit Kunststoff.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="35">
                  Welche Befestigungselemente sollten für Green Plank Composite Decking verwendet werden?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="35">
                    <p>
                    Für Green Plank-Terrassendielen dürfen nur zugelassene HIDLOC™ Befestigungssysteme für Holz- und WPC-Terrassen verwendet werden.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="36">
                  Welche Spanne sollte ich zwischen Balken / Stützen verwenden?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="36">
                    <p>
                    Abhängig von der gewählten Terrassendiele und dem Verwendungszweck empfiehlt Green Plank eine maximale Spanne von 250 mm bis 600 mm zwischen den Zentren der Terrassendielen. Die korrekten Angaben entnehmen Sie bitte unserer Montageanleitung. Wie bei der Fassadenverkleidung empfehlen wir für eine traditionelle horizontale oder vertikale Formation Schlagstöcke in einem Abstand von 400 mm – 600 mm. Weitere Informationen finden Sie in unseren Installationsanleitungen.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="37">
                  Welche Art von Klebstoff kann mit Green Plank-Verbundwerkstoffen verwendet werden?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="37">
                    <p>
                    Kleber sollte niemals Verbindungselemente ersetzen, insbesondere bei strukturellen Anwendungen. Es kann auch ein Hochleistungsklebstoff für den Bau verwendet werden. Wir empfehlen jedoch dringend, ihn an einem kleinen Teil Ihres Decks zu testen, bevor Sie den Klebstoff während der gesamten Anwendung verwenden.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="38">
                  Beschädigen Chlor oder andere Schwimmbadchemikalien die Terrassendielen und Geländer von Green Plank?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="38">
                    <p>
                    Obwohl wir keine formellen Tests durchgeführt haben, sind uns keine schädlichen Auswirkungen von Standard-Poolchemikalien bekannt.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="39">
                  Halten Green Plank-Verbundwerkstoffe länger als herkömmliches druckbehandeltes Holz?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="39">
                    <p>
                    Mit der empfohlenen Pflege und Reinigung werden Green Plank-Verbundprodukte im Vergleich zu druckbehandeltem Holz, das nach einigen Jahren Fäulnis und Verrottung unterliegt, jahrelange Freude bereiten.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="40">
                  Wird sich die Farbe von Green Plank Composite Decking / Balustrade / Cladding / Fencing im Laufe der Zeit ändern?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="40">
                    <p>
                    Jedes Produkt aus Holz-Kunststoff-Verbundwerkstoffen, das der Witterung ausgesetzt ist, verblasst in den ersten Monaten und bleibt danach stabil. Da es sich bei unserem Verbundholz um ein vom Menschen hergestelltes Recyclingprodukt handelt, sind Farbabweichungen zu erwarten. Unsere Garantie deckt keine Farbverblassungen, Verfärbungen oder Wasserflecken auf unseren Produkten ab. Bei Lieferungen können Farbabweichungen in verschiedenen Chargen auftreten.
                    </p>
                  </Accordion.Collapse>
                </Card>


              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqOne;
