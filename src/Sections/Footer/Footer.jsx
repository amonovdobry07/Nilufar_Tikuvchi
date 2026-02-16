import { Link } from "react-router-dom";
import "../../assets/Styles/Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft geometric-pattern" aria-label="Footer">
      <div className="ft__container ">
        <div className="ft__top">
          {/* Brand */}
          <div className="ft__brand">
            <div className="ft__logo">Raduga</div>
            <p className="ft__desc">
              Nafis parda, yotoq to‘plami va dekor buyumlar. O‘lchamga mos tikuv,
              did bilan tanlangan matolar va zamonaviy yechimlar.
            </p>
          </div>

          {/* Links */}
          <div className="ft__col">
            <h4 className="ft__title">Bo‘limlar</h4>
            <Link to="/" className="ft__link">Bosh sahifa</Link>
            <Link to="/products" className="ft__link">Mahsulotlar</Link>
            <Link to="/services" className="ft__link">Xizmatlar</Link>
            <Link to="/marketplace" className="ft__link">Marketplace</Link>
            <Link to="/contact" className="ft__link">Aloqa</Link>
          </div>

          {/* Contact */}
          <div className="ft__col">
            <h4 className="ft__title">Bog‘lanish</h4>
            <a className="ft__link" href="tel:+998904154345"> +998 90 415 43 45</a>
            <a className="ft__link" href="https://t.me/Shaxi_564" target="_blank" rel="noreferrer">
               Telegram
            </a>
            <a className="ft__link" href="mailto:info@nafisat.uz">
              sh_djabbarova453@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="ft__bottom">
          <span className="ft__copy">© {year} Raduga. Barcha huquqlar himoyalangan.</span>
          <span className="ft__madee">
            Designed By  <span className="ft__gold">Khalimov</span> <br />
            <span>Biznesingizni Biz Bilan Rivojlantiring</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
