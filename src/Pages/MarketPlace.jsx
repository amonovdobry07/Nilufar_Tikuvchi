import { Link, useParams } from "react-router-dom";
import "../assets/Styles/MarketPlace.scss";

/* O'zingdagi rasmlarga moslab qo'y */
import ozonImg from "../assets/Images/MarketPlace/ozon.png";
import wbImg from "../assets/Images/MarketPlace/wb.png";
import ymImg from "../assets/Images/MarketPlace/yandexmarket.png";
import uzumImg from "../assets/Images/MarketPlace/uzummarket.png";

export default function MarketplacePage() {
  const { market } = useParams();
  const isDetail = Boolean(market);

  const MARKETS = [
    {
      key: "ozon",
      name: "Ozon",
      meta: "To‘lov himoyasi • Qulay buyurtma",
      note: "Keng assortiment, tez yetkazish va qulay to‘lov.",
      cover: ozonImg,
      site: "https://uz.ozon.com/",
    },
    {
      key: "wildberries",
      name: "Wildberries",
      meta: "Rasmiy sahifa • Tez yetkazish",
      note: "Ko‘plab variantlar va aksiya narxlari.",
      cover: wbImg,
      site: "https://www.wildberries.ru/",
    },
    {
      key: "yandex",
      name: "Yandex Market",
      meta: "Ishonchli logistika • Tracking",
      note: "Yetkazib berish jarayoni kuzatiladi, ishonchli servis.",
      cover: ymImg,
      site: "https://market.yandex.uz/",
    },
    {
      key: "uzum",
      name: "Uzum Market",
      meta: "Mahalliy marketplace • Qulay narx",
      note: "O‘zbekistonda ommabop, tezkor va qulay.",
      cover: uzumImg,
      site: "https://uzum.uz/",
    },
  ];

  // Mahsulotlar (tashqi linklarni keyin real linkga almashtirasan)
  const PRODUCTS = {
    ozon: [
      {
        id: "o1",
        title: "Parda karnizi (premium)",
        desc: "Mustahkam, zamonaviy dizayn",
        price: "Kelishilgan narxda",
        img: ozonImg,
        url: "https://uz.ozon.com/",
        tag: "Pardalar",
      },
      {
        id: "o2",
        title: "Yotoq to‘plami (Silk Dream)",
        desc: "Tabiiy aralash mato, nafis rang",
        price: "1 250 000 so‘m",
        img: ozonImg,
        url: "https://uz.ozon.com/",
        tag: "Ko‘rpa",
      },
      {
        id: "o3",
        title: "Yostiqlar (Soft Cloud)",
        desc: "Yumshoq, qulay, allergiyaga mos",
        price: "390 000 so‘m",
        img: ozonImg,
        url: "https://uz.ozon.com/",
        tag: "Yostiqlar",
      },
    ],
    wildberries: [
      {
        id: "w1",
        title: "Qalin parda (Classic Gold)",
        desc: "Og‘ir tushadigan, interyerga mos",
        price: "Kelishilgan narxda",
        img: wbImg,
        url: "https://www.wildberries.ru/",
        tag: "Pardalar",
      },
      {
        id: "w2",
        title: "Tyul (Elegant Lace)",
        desc: "Nozik to‘r, chiroyli tushish",
        price: "Kelishilgan narxda",
        img: wbImg,
        url: "https://www.wildberries.ru/",
        tag: "Pardalar",
      },
      {
        id: "w3",
        title: "Ko‘rpa (Golden Silk)",
        desc: "Premium ko‘rinish, nafis dizayn",
        price: "1 480 000 so‘m",
        img: wbImg,
        url: "https://www.wildberries.ru/",
        tag: "Ko‘rpa",
      },
    ],
    yandex: [
      {
        id: "y1",
        title: "Karniz va aksessuarlar",
        desc: "O‘rnatish uchun to‘liq to‘plam",
        price: "Kelishilgan narxda",
        img: ymImg,
        url: "https://market.yandex.uz/",
        tag: "Buyurtma asosida",
      },
      {
        id: "y2",
        title: "Dekor yostiq (Pattern)",
        desc: "Naqshli, interyerga mos",
        price: "320 000 so‘m",
        img: ymImg,
        url: "https://market.yandex.uz/",
        tag: "Yostiqlar",
      },
      {
        id: "y3",
        title: "Yotoq to‘plami (Premium)",
        desc: "Mustahkam chok, yumshoq mato",
        price: "1 190 000 so‘m",
        img: ymImg,
        url: "https://market.yandex.uz/",
        tag: "Ko‘rpa",
      },
    ],
    uzum: [
      {
        id: "u1",
        title: "Parda (Modern Beige)",
        desc: "Minimal, nafis, yumshoq rang",
        price: "Kelishilgan narxda",
        img: uzumImg,
        url: "https://uzum.uz/",
        tag: "Pardalar",
      },
      {
        id: "u2",
        title: "Yostiqlar (Comfort Set)",
        desc: "Uxlash uchun ideal to‘plam",
        price: "420 000 so‘m",
        img: uzumImg,
        url: "https://uzum.uz/",
        tag: "Yostiqlar",
      },
      {
        id: "u3",
        title: "Buyurtma parda tikish",
        desc: "O‘lchamga mos tikuv xizmati",
        price: "Kelishilgan narxda",
        img: uzumImg,
        url: "https://uzum.uz/",
        tag: "Buyurtma asosida",
      },
    ],
  };

  const currentMarket = isDetail ? MARKETS.find((m) => m.key === market) : null;
  const list = isDetail ? (PRODUCTS[market] || []) : [];

  // =======================
  // LIST PAGE (/marketplace)
  // =======================
  if (!isDetail) {
    return (
      <main className="mpB page--light">
        <div className="mpB__container">
          <header className="mpB__head">
            <p className="mpB__kicker">MARKETPLACE</p>
            <h1 className="mpB__title">Hamkor do‘konlar</h1>
            <p className="mpB__subtitle">
              Sizga qaysi platforma qulay bo‘lsa, shu yerda mahsulotlarni ko‘ring.
              Har bir bo‘limda mos tavsiyalar va tashqi havolalar mavjud.
            </p>
          </header>

          <section className="mpBCatalog" aria-label="Marketplace catalog">
            {MARKETS.map((m) => (
              <article key={m.key} className="mpBCard">
                <div className="mpBCard__left">
                  <div className="mpBCard__cap">
                    <span className="mpBCard__mark">HAMKOR</span>
                  </div>

                  <h3 className="mpBCard__name">{m.name}</h3>
                  <p className="mpBCard__meta">{m.meta}</p>
                  <p className="mpBCard__note">{m.note}</p>

                  <div className="mpBCard__actions">
                    <Link to={`/marketplace/${m.key}`} className="mpBBtn mpBBtn--gold">
                      Bo‘limga o‘tish
                    </Link>
                  </div>
                </div>

                <div className="mpBCard__right" aria-hidden="true">
                  <div className="mpBCard__thumb">
                    <img src={m.cover} alt="" loading="lazy" />
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    );
  }

  // ==========================
  // DETAIL PAGE (/marketplace/:market)
  // ==========================
  return (
    <main className="mpB page--light">
      <div className="mpB__container">
        <header className="mpD__head">
          <div>
            <p className="mpB__kicker">MARKETPLACE</p>
            <h1 className="mpD__title">{currentMarket?.name || "Marketplace"}</h1>
            <p className="mpD__subtitle">{currentMarket?.meta}</p>
          </div>

          <div className="mpD__tools">
            <Link to="/marketplace" className="mpD__back">← Orqaga</Link>
            {currentMarket?.site && (
              <a className="mpD__site" href={currentMarket.site} target="_blank" rel="noreferrer">
                Rasmiy sahifa ↗
              </a>
            )}
          </div>
        </header>

        <OrnamentalDivider className="mpB__div" />

        <section className="mpDGrid" aria-label="Marketplace products">
          {list.map((p) => (
            <a
              key={p.id}
              className="mpDCard"
              href={p.url}
              target="_blank"
              rel="noreferrer"
              title="Tashqi sahifani ochish"
            >
              <div className="mpDCard__img">
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className="mpDCard__tag">{p.tag}</span>
              </div>

              <div className="mpDCard__body">
                <h3 className="mpDCard__title">{p.title}</h3>
                <p className="mpDCard__desc">{p.desc}</p>
                <p className="mpDCard__price">{p.price}</p>

                <div className="mpDCard__more">
                  <span>Ko‘rish</span>
                  <span className="mpDCard__arrow">↗</span>
                </div>
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
