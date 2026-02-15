import { Link } from "react-router-dom";
import "../assets/Styles/Home.scss";
import heroImg from "../assets/Images/Maxsulotlar/maxsulot9.jpg"; // o'sha rasm nomini shunga moslab qo'y

export default function Home() {
  return (
    <main>
      <section className="heropro" style={{ backgroundImage: `url(${heroImg})` }}>
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
      <section className="hsec">
        <div className="container hsec__grid">
          <div className="hsec__left fade-up d1">
            <p className="hsec__kicker">2007-yildan beri</p>
            <h2 className="hsec__title">Did bilan tanlangan matolar, aniq tikuv, sokin hashamat</h2>
            <p className="hsec__text">
              Biz interyerga mos pardalar, yotoq to‘plamlari va dekorativ buyumlarni buyurtma asosida tayyorlaymiz.
              Har bir detal qo‘lda tekshiriladi: choklar, osilish, uzunlik va faktura. Natija esa uyga mos, nafis va
              uzoq xizmat qiladigan yechim bo‘ladi.
            </p>

            <div className="hsec__stats">
              <div className="stat">
                <b>1000+</b>
                <span>buyurtmalar</span>
              </div>
              <div className="stat">
                <b>17+</b>
                <span>yil tajriba</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="hcat">
        <div className="container">
          <div className="hcat__head">
            <p className="hsec__kicker">Kolleksiya</p>
            <h2 className="hsec__title">Eng ko‘p buyurtma qilinadigan yo‘nalishlar</h2>
          </div>

          <div className="hcat__grid">
            <a className="hcat__item" href="/products">
              <div className="hcat__cap">Pardalar</div>
              <p>Blackout, tyul, klassik va zamonaviy uslublar.</p>
            </a>
            <a className="hcat__item" href="/products">
              <div className="hcat__cap">Yostiqlar</div>
              <p>Dekorativ yostiqlar va to‘ldirish variantlari.</p>
            </a>
            <a className="hcat__item" href="/products">
              <div className="hcat__cap">Ko‘rpa & Yotoq</div>
              <p>To‘plamlar, choyshab, ko‘rpa, qoplamalar.</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
