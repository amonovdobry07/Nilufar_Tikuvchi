
import { Link } from "react-router-dom";
import "../assets/Styles/Home.scss";
import heroImg from "../assets/Images/MarketPlace/ChatGPT Image 16 февр. 2026 г., 02_23_52.png";

export default function Home() {
  const stats = [
    { value: "1000+", label: "Buyurtmalar" },
    { value: "17+", label: "Yil tajriba" },
    { value: "24/7", label: "Aloqa" },
  ];

  const categories = [
    {
      title: "Pardalar",
      desc: "Blackout, tyul, klassik va zamonaviy uslublar.",
      to: "/products",
    },
    {
      title: "Yostiqlar",
      desc: "Dekorativ yostiqlar, to‘ldirish va mato variantlari.",
      to: "/products",
    },
    {
      title: "Ko‘rpa & Yotoq",
      desc: "To‘plamlar, choyshab, ko‘rpa, qoplamalar.",
      to: "/products",
    },
  ];

  return (
    <main className="home">
      {/* HERO */}
      <section className="heropro pageFx" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="heropro__overlay">
          <div className="container heropro__inner">
            <p className="heropro__kicker fade-up d1">BESPOKE TEXTILE ATELIER</p>

            <h1 className="heropro__title fade-up d2">
              Uylar uchun nafis parda <br /> va yotoq kolleksiyasi
            </h1>

            <p className="heropro__desc fade-up d3">
              An&apos;anaviy hunarmandchilik va zamonaviy dizaynning uyg&apos;unligi
              — har bir buyum alohida san&apos;at asari.
            </p>

            <div className="heropro__actions fade-up d4">
              <Link to="/products" className="cta cta--gold">
                KOLLEKSIYANI KO&apos;RISH
              </Link>
              <Link to="/contact" className="cta cta--outline">
                BOG&apos;LANISH
              </Link>
            </div>

            <div className="heropro__ornament fade-up d4">
              <span />
              <b>✦</b>
              <span />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about pageFx">
        <div className="container">
          <div className="about__grid">
            <div className="about__left fade-up d1">
              <p className="kicker">2007-yildan beri</p>

              <h2 className="title">
                Did bilan tanlangan matolar, aniq tikuv, sokin hashamat
              </h2>

              <p className="text">
                Biz interyerga mos pardalar, yotoq to‘plamlari va dekorativ buyumlarni
                buyurtma asosida tayyorlaymiz. Har bir detal: choklar, osilish, uzunlik
                va faktura bo‘yicha tekshiriladi. Natija: uyga mos, nafis va uzoq xizmat
                qiladigan yechim.
              </p>

              <div className="about__actions">
                <Link to="/contact" className="btn btn--primary">
                  O‘lchovga chaqirish
                </Link>
                <Link to="/products" className="btn btn--ghost">
                  Katalogni ko‘rish
                </Link>
              </div>
            </div>

            <aside className="about__right fade-up d2">
              <div className="stats">
                {stats.map((s) => (
                  <div className="stats__item" style={{borderRadius: "1px"}} key={s.label}>
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="note" style={{borderRadius: "1px"}} >
                <b>Sifat nazorati</b>
                <p>
                  Material tanlovi → tikuv → yakuniy tekshiruv.
                  Har bosqichda aniqlik va tozalik.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="cats pageFx">
        <div className="container">
          <div className="cats__head fade-up d1">
            <p className="kicker">Kolleksiya</p>
            <div className="cats__row">
              <h2 className="title">Eng ko‘p buyurtma qilinadigan yo‘nalishlar</h2>
              <Link to="/products" className="linkAll">
                Hammasi →
              </Link>
            </div>
            <p className="text muted">
              Keng tanlov, aniq tikuv, interyeringizga mos yechimlar.
            </p>
          </div>

          <div className="cats__grid">
            {categories.map((c) => (
              <Link to={c.to} className="card fade-up d2" key={c.title}>
                <div className="card__top">
                  <h3 className="card__title">{c.title}</h3>
                  <span className="card__arrow">↗</span>
                </div>
                <p className="card__desc">{c.desc}</p>
                <div className="card__meta">
                  <span className="pill">Buyurtma asosida</span>
                  <span className="pill pill--gold">Premium</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
