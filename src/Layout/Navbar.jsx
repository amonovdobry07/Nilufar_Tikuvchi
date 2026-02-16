import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Styles/Navbar.scss";
import logo from "../assets/Images/Logo/ChatGPT Image 17 февр. 2026 г., 00_24_29.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header className={`navlux ${scrolled ? "navlux--scrolled" : ""}`}>
        <div className="container navlux__inner">
          <Link to="/" className="navlux__logo" aria-label="NAFISAT home">
              <img src={logo} alt="" />
          </Link>

          <nav className="navlux__links" aria-label="Navigation">
            <Link className="navlux__link" to="/">Bosh sahifa</Link>
            <Link className="navlux__link" to="/products">Mahsulotlar</Link>
            <Link className="navlux__link" to="/services">Xizmatlar</Link>
            <Link className="navlux__link" to="/marketplace">Marketplace</Link>
            <Link className="navlux__link" to="/contact">Aloqa</Link>
          </nav>

          <div className="navlux__right">
            <div className="navlux__lang">
              <span className="navlux__globe">🌐</span>
              <select defaultValue="UZ" aria-label="Language">
                <option value="UZ">UZ</option>
                <option value="RU">RU</option>
                <option value="EN">EN</option>
                <option value="TR">TR</option>
              </select>
            </div>

            <button
              className="navlux__burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay (hozirgisi qoladi) */}
      <div
        className={`mnavpro ${open ? "mnavpro--open" : ""}`}
        onMouseDown={(e) => {
          if (e.target.classList.contains("mnavpro")) setOpen(false);
        }}
      >
        <div className="mnavpro__panel">
          <div className="mnavpro__top">
            <div className="mnavpro__brand">NAFISAT</div>
            <button className="mnavpro__close" onClick={() => setOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>

          <div className="mnavpro__list">
            <Link to="/" onClick={() => setOpen(false)}>Bosh sahifa</Link>
            <Link to="/products" onClick={() => setOpen(false)}>Mahsulotlar</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Xizmatlar</Link>
            <Link to="/marketplace" onClick={() => setOpen(false)}>Marketplace</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Aloqa</Link>
          </div>

          <div className="mnavpro__cta">
            <a className="mnavpro__btn mnavpro__btn--gold" href="tel:+998901234567">
              Qo‘ng‘iroq qilish
            </a>
            <a className="mnavpro__btn mnavpro__btn--line" href="https://t.me/" target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
