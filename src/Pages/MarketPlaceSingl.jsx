import { Link, useParams } from "react-router-dom";
import "../assets/Styles/MarketPlace.scss";

/* O'zingdagi rasmlarga moslab qo'y */
import ozonImg from "../assets/Images/MarketPlace/ozon.png";
import wbImg from "../assets/Images/MarketPlace/wb.png";
import ymImg from "../assets/Images/MarketPlace/yandexmarket.png";
import uzumImg from "../assets/Images/MarketPlace/uzummarket.png";
import tavar1 from "../assets/Images/MarketPlace/Market1.jpg"
import tavar2 from "../assets/Images/MarketPlace/image.png"
import tavar3 from "../assets/Images/MarketPlace/Market3.jpg"



export default function MarketPlaceSingl() {
  const { market } = useParams(); // ✅ bu juda muhim

  const MARKETS = [
    {
      key: "ozon",
      name: "Ozon",
      meta: "To‘lov himoyasi • Qulay buyurtma",
      cover: ozonImg,
      site: "https://uz.ozon.com/",
    },
    {
      key: "wildberries",
      name: "Wildberries",
      meta: "Rasmiy sahifa • Tez yetkazish",
      cover: wbImg,
      site: "https://www.wildberries.ru/",
    },
    {
      key: "yandex",
      name: "Yandex Market",
      meta: "Ishonchli logistika • Tracking",
      cover: ymImg,
      site: "https://market.yandex.uz/",
    },
    {
      key: "uzum",
      name: "Uzum Market",
      meta: "Mahalliy marketplace • Qulay narx",
      cover: uzumImg,
      site: "https://uzum.uz/",
    },
  ];

  const PRODUCTS = {
    ozon: [
      {
        id: "o2",
        title: "Yotoq to‘plami (Silk Dream)",
        desc: "Tabiiy aralash mato, nafis rang",
        price: "1 250 000 so‘m",
        img: tavar2,
        url: "https://uz.ozon.com/product/podushka-3537142540/?oos_search=false",
        tag: "Ko‘rpa",
      },
      {
        id: "o3",
        title: "Yostiqlar (Soft Cloud)",
        desc: "Yumshoq, qulay, allergiyaga mos",
        price: "390 000 so‘m",
        img: tavar3,
        url: "https://uz.ozon.com/product/podushka-3537094809/?abt_att=1&oos_search=false",
        tag: "Yostiqlar",
      },
    ],
    wildberries: [
      {
        id: "w2",
        title: "Tyul (Elegant Lace)",
        desc: "Nozik to‘r, chiroyli tushish",
        price: "Kelishilgan narxda",
        img: tavar2,
        url: "https://www.wildberries.ru/catalog/832173757/detail.aspx?targetUrl=GP",
        tag: "Pardalar",
      },
      {
        id: "w3",
        title: "Ko‘rpa (Golden Silk)",
        desc: "Premium ko‘rinish, nafis dizayn",
        price: "1 480 000 so‘m",
        img: tavar3,
        url: "https://www.wildberries.ru/catalog/832114334/detail.aspx?targetUrl=GP",
        tag: "Ko‘rpa",
      },
    ],
    yandex: [
     
      {
        id: "y2",
        title: "Dekor yostiq (Pattern)",
        desc: "Naqshli, interyerga mos",
        price: "230 000 so‘m",
        img: tavar2,
        url: "https://market.yandex.uz/card/elegantnyye-dekorativnyye-podushki-valiki-v-blagorodnom-korichnevom-ottenke-stanut-izyskannym-aktsentom-v-interyere-gostinoy/5145166449?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12",
        tag: "Yostiqlar",
      },
      {
        id: "y3",
        title: "Yotoq to‘plami (Premium)",
        desc: "Mustahkam chok, yumshoq mato",
        price: "1 190 000 so‘m",
        img: tavar3,
        url: "https://market.yandex.uz/card/elegantnaya-dekorativnaya-podushka-s-nezhnym-tsvetochnym-uzorom-stanet-stilnym-aktsentom-v-interyere-spalni/5145114257?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12",
        tag: "Ko‘rpa",
      },
    ],
    uzum: [

      {
        id: "u2",
        title: "Yostiqlar (Comfort Set)",
        desc: "Uxlash uchun ideal to‘plam",
        price: "230 000 so‘m",
        img: tavar2,
        url: "https://uzum.uz/uz/product/hashamatli-dekorativ-yostiqlar-valik-shaklida-2418459?skuId=8689971",
        tag: "Yostiqlar",
      },
      {
        id: "u3",
        title: "Buyurtma parda tikish",
        desc: "O‘lchamga mos tikuv xizmati",
        price: "Kelishilgan narxda",
        img: tavar3,
        url: "https://uzum.uz/uz/product/dekorativ-yostiqcha-40-50-sm-gul-2417346",
        tag: "Buyurtma asosida",
      },
    ],
  };

  const currentMarket = MARKETS.find((m) => m.key === market);
  const list = PRODUCTS[market] || [];

  // ✅ agar param xato bo'lsa (masalan /marketplace/ozon emas /marketplace/Ozon)
  if (!currentMarket) {
    return (
      <main className="mpB page--light">
        <div className="mpB__container">
          <header className="mpD__head">
            <div>
              <p className="mpB__kicker">MARKETPLACE</p>
              <h1 className="mpD__title">Market topilmadi</h1>
              <p className="mpD__subtitle">
                Link noto‘g‘ri. To‘g‘ri: /marketplace/ozon yoki /marketplace/uzum
              </p>
            </div>
            <div className="mpD__tools">
              <Link to="/marketplace" className="mpD__back">← Orqaga</Link>
            </div>
          </header>
        </div>
      </main>
    );
  }

  return (
    <main className="mpB page--light">
      <div className="mpB__container">
        <header className="mpD__head">
          <div>
            <p className="mpB__kicker">MARKETPLACE</p>
            <h1 className="mpD__title">{currentMarket.name}</h1>
            <p className="mpD__subtitle">{currentMarket.meta}</p>
          </div>

          <div className="mpD__tools">
            <Link to="/marketplace" className="mpD__back">← Orqaga</Link>
          </div>
        </header>

      
        <section className="mpDGrid" aria-label="Marketplace products">
          {list.map((p) => (
            <a
              key={p.id}
              className="mpDCard"
              href={p.url}
              target="_blank"
              rel="noreferrer"
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
