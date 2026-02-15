import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Styles/Maxsulotlar.scss";

/* ✅ Hammasi shu fayl ichida */
import curtain1 from "../assets/Images/Maxsulotlar/maxsulot10.jpg";
import bedding1 from "../assets/Images/Maxsulotlar/maxsulot8.jpg";
import pillow1 from "../assets/Images/Maxsulotlar/maxsulot3.jpg";
import blanket1 from "../assets/Images/Maxsulotlar/maxsulot4.jpg";
import custom1 from "../assets/Images/Maxsulotlar/maxsulot5.jpg";

export default function ProductsPage() {
  const CATEGORIES = [
    { key: "pardalar", label: "Pardalar" },
    { key: "yostiqlar", label: "Yostiqlar" },
    { key: "korpa", label: "Ko'rpa" },
    { key: "buyurtma", label: "Buyurtma asosida" },
  ];

  const PRODUCTS = [
    {
      id: "royal-velvet-parda",
      name: "Royal Velvet Parda",
      description: "Yuqori sifatli baxmal pardalar, klassik uslubda tayyorlangan",
      category: "pardalar",
      image: blanket1,
      price: "890 000 so'm",
    },
    {
      id: "premium-tul-parda",
      name: "Premium Tyul Parda",
      description: "Engil va nafis tyul pardalar, zamonaviy interyer uchun",
      category: "pardalar",
      image: curtain1,
      price: "560 000 so'm",
    },
    {
      id: "suzani-yostiq",
      name: "Suzani Bezak Yostig'i",
      description: "An'anaviy suzani naqshli dekorativ yostiqlar",
      category: "yostiqlar",
      image: pillow1,
      price: "320 000 so'm",
    },
    {
      id: "silk-dream-yotoq",
      name: "Silk Dream Yotoq To'plami",
      description: "Tabiiy ipak aralash to'shaklar to'plami, nafis dizayn",
      category: "korpa",
      image: bedding1,
      price: "1 250 000 so'm",
    },
    {
      id: "golden-silk-korpa",
      name: "Golden Silk Ko'rpa",
      description: "Oltin rangdagi ipak ko'rpa, zamonaviy va nafis",
      category: "korpa",
      image: blanket1,
      price: "1 480 000 so'm",
    },
    {
      id: "buyurtma-parda",
      name: "Buyurtma Pardalar",
      description: "Sizning o'lchamingizga mos maxsus parda tikish xizmati",
      category: "buyurtma",
      image: custom1,
      price: "Kelishilgan narxda",
    },
  ];

  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active, PRODUCTS]);

  return (
    
    <main className="pds geometric-pattern page--light">
      <div className="pds__container">
        {/* Header */}
        <div className="pds__head">
          <p className="pds__kicker">Kolleksiya</p>
          <h1 className="pds__title">Mahsulotlar</h1>
        </div>

        {/* Filter */}
        <div className="pds__filters">
          <button
            onClick={() => setActive("all")}
            className={`pds__chip ${active === "all" ? "is-active" : ""}`}
          >
            Barchasi
          </button>

          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`pds__chip ${active === c.key ? "is-active" : ""}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="pds__grid">
          {filtered.map((p) => (
            <div className="pds__card">
              <div className="pds__imgWrap">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>

              <div className="pds__body">
                <h3 className="pds__name">{p.name}</h3>
                <p className="pds__desc">{p.description}</p>
                {p.price && <p className="pds__price">{p.price}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
