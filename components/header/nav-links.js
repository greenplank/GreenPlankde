import React from "react";
import Link from "next/link";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
          <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/om-oss">
          <a>Über uns</a>
        </Link>
      </li>
      <li>
        <Link href="/galleri">
          <a>Galerie</a>
        </Link>
      </li>
      <li>
        <Link href="/aterfarsaljare">
          <a>Großhändler</a>
        </Link>
      </li>
      <li>
        <Link href="/hitta-hantverkare">
          <a>Monteur finden</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>Produkte</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
        
          <li className="dropdown">
            <Link href="#">
              <>
              <Link href="/komposittrall">
                <a>Terrassendielen</a>
                </Link>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/smart-komposittrall">
                  <a>Smart Terrassendielen</a>
                </Link>
              </li>
              <li>
                <Link href="/marine-komposittrall">
                  <a>Marine Terrassendielen</a>
                </Link>
              </li>
              <li>
                <Link href="/entra-trall">
                  <a>Entra Terrassendielen</a>
                </Link>
              </li>
              <li>
                <Link href="/classic-komposittrall">
                  <a>Classic Terrassendielen</a>
                </Link>
              </li>
              <li>
                <Link href="/tillbehor-till-komposittrall">
                  <a>WPC Terrassendielen-Zubehör</a>
                </Link>
              </li>
              <li>
                <Link href="/everdeck-komposittrall">
                  <a>EVERDECK™ Terrassendielen</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
              <Link href="/fasadpanel">
                <a>Fassadenverkleidung</a>
                </Link>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/novoclad-fasadpanel-gp798">
                  <a>Novoclad™-GP798</a>
                </Link>
              </li>
              <li>
                <Link href="/primacap-fasadpanel-gp801">
                  <a>Primacap™-GP801</a>
                </Link>
              </li>
              <li>
                <Link href="/primacap-fasadpanel-gp802">
                  <a>Primacap™-GP802</a>
                </Link>
              </li>
              <li>
                <Link href="/fasadpanel-tillbehor">
                  <a>Zubehörteile</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
              <Link href="/staket-system">
                <a>Zaunsystem</a>
                </Link>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/komposit-staket-private">
                  <a>NOVOFENCE™ Private™</a>
                </Link>
              </li>
              <li>
                <Link href="/komposit-staket-traditional">
                  <a>NOVOFENCE™ Traditional™</a>
                </Link>
              </li>
              <li>
                <Link href="/komposit-staket-modern">
                  <a>NOVOFENCE™ Modern™</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/plankor">
              <a>Planken</a>
            </Link>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
              <Link href="/golvplattor">
                <a>Terrassenfliesen</a>
                </Link>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/instaclik-balkongplattor-gp702t">
                  <a>INSTACLIK™-GP702T</a>
                </Link>
              </li>
              <li>
                <Link href="/evertile-balkongplattor-et703t">
                  <a>EVERTILE ™ – ET703T</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/kontakata-oss">
          <a>Kontaktiere uns</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
