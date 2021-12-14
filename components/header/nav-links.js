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
        <Link href="/uber-uns">
          <a>Über uns</a>
        </Link>
      </li>
      <li>
        <Link href="/galerie">
          <a>Galerie</a>
        </Link>
      </li>
      <li>
        <Link href="/groshandler">
          <a>Großhändler</a>
        </Link>
      </li>
      <li>
        <Link href="/monteur-finden">
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
              <Link href="/terrassendielen">
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
                <Link href="/smart-terrassendielen">
                  <a>Smart Terrassendielen</a>
                </Link>
              </li>
              <li>
                <Link href="/marine-terrassendielen">
                  <a>Marine Terrassendielen</a>
                </Link>
              </li>
              <li>
                <Link href="/entra-terrassendielen">
                  <a>Entra Terrassendielen</a>
                </Link>
              </li>
              <li>
                <Link href="/classic-terrassendielen">
                  <a>Classic Terrassendielen</a>
                </Link>
              </li>
              <li>
                <Link href="/wpc-terrassendielen-zubehor">
                  <a>WPC Terrassendielen-Zubehör</a>
                </Link>
              </li>
              <li>
                <Link href="/everdeck-terrassendielen">
                  <a>EVERDECK™ Terrassendielen</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
              <Link href="/fassadenverkleidung">
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
                <Link href="/novoclad-fassadenverkleidung-gp798">
                  <a>Novoclad™-GP798</a>
                </Link>
              </li>
              <li>
                <Link href="/primacap-fassadenverkleidung-gp801">
                  <a>Primacap™-GP801</a>
                </Link>
              </li>
              <li>
                <Link href="/primacap-fassadenverkleidung-gp802">
                  <a>Primacap™-GP802</a>
                </Link>
              </li>
              <li>
                <Link href="/zubehor-fur-fassadenverkleidung">
                  <a>Zubehörteile</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
              <Link href="/zaunsystem">
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
                <Link href="/novofence-zaunsystem-private">
                  <a>NOVOFENCE™ Private™</a>
                </Link>
              </li>
              <li>
                <Link href="/novofence-zaunsystem-traditional">
                  <a>NOVOFENCE™ Traditional™</a>
                </Link>
              </li>
              <li>
                <Link href="/novofence-zaunsystem-modern">
                  <a>NOVOFENCE™ Modern™</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/bretter">
              <a>Planken</a>
            </Link>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
              <Link href="/terrassenfliesen">
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
                <Link href="/instaclik-terrassenfliesen-gp702t">
                  <a>INSTACLIK™-GP702T</a>
                </Link>
              </li>
              <li>
                <Link href="/evertile-terrassenfliesen-et703t">
                  <a>EVERTILE ™ – ET703T</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/kontaktiere-uns">
          <a>Kontaktiere uns</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
