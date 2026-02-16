import "../assets/Styles/Xizmatlar.scss";

/* Rasmlarni o'zingdagi fayl nomlariga moslab qo'y */
import s1 from "../assets/Images/Xizmatlar/xizmatlar1.jpg";
import s2 from"../assets/Images/Xizmatlar/xizmatlar2.jpg";
import s3 from "../assets/Images/Xizmatlar/xizmatlar3.jpg";
import s4 from "../assets/Images/Xizmatlar/xizmatlar4.jpg";

export default function Xizmatlar() {
  const STEPS = [
    {
      n: "01",
      title: "Maslahat va o‘lcham olish",
      desc: "Uyingiz yoki xonangiz bo‘yicha o‘lcham olinadi, mato va uslub tanlovi bo‘yicha maslahat beriladi. Interyer ranglariga mos kompozitsiya tavsiya qilinadi.",
      img: s1,
      points: ["Bepul maslahat", "Uslub tanlash", "Aniq o‘lcham"],
    },
    {
      n: "02",
      title: "Dizayn eskizi va kelishuv",
      desc: "Tanlangan mato va model asosida eskiz (variantlar) tayyorlanadi. Har bir detal: burmalar, tutqich, tyul qavati va uzunliklar kelishiladi.",
      img: s2,
      points: ["Variantlar", "Mato mosligi", "Budjetga mos"],
    },
    {
      n: "03",
      title: "Tikuv va sifat nazorati",
      desc: "Tikuv jarayonida choklar, qirqim va simmetriya qat’iy nazorat qilinadi. Yakunda mahsulot dazmollanadi va tayyor ko‘rinishga keltiriladi.",
      img: s3,
      points: ["Premium tikuv", "Toza qirqim", "Sifat tekshiruvi"],
    },
    {
      n: "04",
      title: "O‘rnatish va yakuniy bezak",
      desc: "Karniz, ilgak va o‘rnatish ishlari bajariladi. Yakunda pardalar kompozitsiyasi tekislanadi va estetik ko‘rinish beriladi.",
      img: s4,
      points: ["O‘rnatish", "Tekislash", "Final ko‘rik"],
    },
  ];

  return (
    <main className="srv page--light">
      <div className="srv__container">
        {/* Header */}
        <header className="srv__head">
          <p className="srv__kicker">JARAYON</p>
          <h1 className="srv__title">Xizmatlar</h1>
          <p className="srv__subtitle">
            Har bir buyurtma san’at kabi: avval o‘lcham, so‘ng eskiz, tikuv va yakunda o‘rnatish.
            Bizda jarayon ham nafis, natija ham.
          </p>
        </header>

        {/* Steps */}
        <section className="srv__grid" aria-label="Services steps">
          {STEPS.map((s, i) => (
            <article key={s.n} className={`srvCard ${i % 2 ? "srvCard--rev" : ""}`}>
              <div className="srvCard__media">
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="srvCard__badge">
                  <span>{s.n}</span>
                </div>
              </div>

              <div className="srvCard__content">
                <h3 className="srvCard__title">{s.title}</h3>
                <p className="srvCard__desc">{s.desc}</p>

                <div className="srvCard__points">
                  {s.points.map((p) => (
                    <span key={p} className="srvCard__pill">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="srvCta" aria-label="Call to action">
          <div className="srvCta__box">
            <div className="srvCta__left">
              <p className="srvCta__kicker">TEZ ALOQA</p>
              <h2 className="srvCta__title">Buyurtma berish yoki maslahat olish</h2>
              <p className="srvCta__text">
                Telefon yoki Telegram orqali bog‘laning. O‘lcham va dizayn bo‘yicha tezda kelishib olamiz.
              </p>
            </div>

            <div className="srvCta__actions">
              <a className="srvBtn srvBtn--gold" href="tel:+998904154345">
                Qo‘ng‘iroq qilish
              </a>
              <a className="srvBtn srvBtn--line" href="https://t.me/Shaxi_564" target="_blank" rel="noreferrer">
                Telegramdan yozish
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
