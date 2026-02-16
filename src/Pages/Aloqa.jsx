import { useMemo, useState } from "react";
import "../assets/Styles/Aloqa.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function Aloqa() {
  const TO_EMAIL = "EMAIL"; // <-- shu yerga o'zingni emailni yoz: example@gmail.com

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [sentHint, setSentHint] = useState("");

  const phoneMax = 13; // +998901234567 (13 ta belgigacha)

  const isValidPhone = useMemo(() => {
    const p = form.phone.trim();
    if (!p) return false;
    // +998 bilan yoki oddiy raqamlar bilan
    const ok = /^\+?\d{7,13}$/.test(p);
    return ok;
  }, [form.phone]);

  const isReady = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.message.trim().length >= 10 &&
      isValidPhone
    );
  }, [form.name, form.message, isValidPhone]);

  const onChange = (key) => (e) => {
    let v = e.target.value;

    if (key === "phone") {
      // faqat + va raqam, boshqa belgilarni olib tashlaymiz
      v = v.replace(/[^\d+]/g, "");
      // + faqat boshida bo'lsin
      if (v.includes("+")) {
        v = (v[0] === "+" ? "+" : "") + v.replace(/\+/g, "");
      }
      // uzunlik cheklovi
      v = v.slice(0, phoneMax);
    }

    setForm((prev) => ({ ...prev, [key]: v }));
  };

  const buildGmailUrl = () => {
    const subject = `NAFISAT — Aloqa: ${form.name}`;
    const body = `Ism: ${form.name}
Telefon: ${form.phone}

Xabar:
${form.message}

— Sayt orqali yuborildi`;

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: TO_EMAIL,
      su: subject,
      body,
    });

    return `https://mail.google.com/mail/?${params.toString()}`;
  };

  const submit = (e) => {
    e.preventDefault();

    if (!isReady) {
      setSentHint("Iltimos, ism / telefon / xabarni to‘g‘ri to‘ldiring.");
      return;
    }

    setSentHint("Gmail oynasi ochilmoqda…");
    window.open(buildGmailUrl(), "_blank", "noopener,noreferrer");

    // xohlasang formani tozalab yuboramiz
    setTimeout(() => {
      setForm({ name: "", phone: "", message: "" });
      setSentHint("Xabar Gmail oynasida tayyor. Yuborishni unutmang ✅");
    }, 500);
  };

  return (
    <main className="cnt page--light">
      <div className="cnt__container">
        <header className="cnt__head">
          <p className="cnt__kicker">ALOQA</p>
          <h1 className="cnt__title">Bog‘lanish</h1>
          <p className="cnt__subtitle">
            Savollaringiz bo‘lsa, qisqa yozib qoldiring. Xabar Gmail orqali
            tayyorlanadi va siz bir bosishda yuborasiz.
          </p>
        </header>

        <section className="cntGrid" aria-label="Contact section">
          {/* LEFT: Info */}
          <aside className="cntInfo">
            <h3 className="cntInfo__t">Ijtimoiy tarmoqlar</h3>
            <p className="cntInfo__p">
              Bizni kuzating: yangi kolleksiyalar, real ishlar va aksiyalar shu
              yerda.
            </p>

            <div className="cntSocials" aria-label="Social links">
              <a
                className="cntSocial cntSocial--ig"
                href="https://instagram.com/sh_djabborova"
                target="_blank"
                rel="noreferrer"
              >
                <span className="cntSocial__ico" style={{fontSize: "25px"}} ><FaInstagram /></span>
                <span className="cntSocial__txt">
                  <b>Instagram</b>
                  <small>@sh_djabborova</small>
                </span>
                <span className="cntSocial__go">↗</span>
              </a>

              <a
                className="cntSocial cntSocial--tg"
                href="https://t.me/Shaxi_564"
                target="_blank"
                rel="noreferrer"
              >
                <span className="cntSocial__ico"  style={{fontSize: "25px"}} ><FaTelegramPlane /></span>
                <span className="cntSocial__txt">
                  <b>Telegram</b>
                  <small>@Shaxnoza</small>
                </span>
                <span className="cntSocial__go">↗</span>
              </a>

              <a
                className="cntSocial cntSocial--fb"
                href="https://facebook.com/USERNAME"
                target="_blank"
                rel="noreferrer"
              >
                <span className="cntSocial__ico" style={{fontSize: "25px"}}><FaFacebook /></span>
                <span className="cntSocial__txt">
                  <b>Facebook</b>
                  <small>Djabborova Shaxnoza</small>
                </span>
                <span className="cntSocial__go">↗</span>
              </a>
            </div>

            {/* Map (embed) */}
            <div className="cntMap" aria-label="Location map">
              <iframe
                title="NAFISAT location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6132.3670134372605!2d64.411892!3d39.780437!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzQ5LjYiTiA2NMKwMjQnNDIuOCJF!5e0!3m2!1sru!2s!4v1771195710101!5m2!1sru!2s"
              />
            </div>
          </aside>

          {/* RIGHT: Form */}
          <section className="cntFormWrap">
            <div className="cntFormCard">
              <h3 className="cntFormCard__t">Xabar qoldirish</h3>
              <p className="cntFormCard__p">
                Ism, telefon va xabarni kiriting. “Yuborish” bosilganda Gmail
                oynasi ochiladi.
              </p>

              <form className="cntForm" onSubmit={submit}>
                <label className="cntField">
                  <span className="cntField__l">Ism</span>
                  <input
                    value={form.name}
                    onChange={onChange("name")}
                    className="cntInput"
                    placeholder="Masalan: Shaxnoza"
                    minLength={2}
                    required
                  />
                </label>

                <label className="cntField">
                  <span className="cntField__l">Telefon</span>
                  <input
                    value={form.phone}
                    onChange={onChange("phone")}
                    className="cntInput"
                    placeholder="+998901234567"
                    inputMode="tel"
                    maxLength={phoneMax}
                    required
                  />
                  <span className={`cntHint ${isValidPhone ? "ok" : ""}`}>
                    Telefon faqat raqam (+ bilan) va {phoneMax} belgigacha.
                  </span>
                </label>

                <label className="cntField">
                  <span className="cntField__l">Xabar</span>
                  <textarea
                    value={form.message}
                    onChange={onChange("message")}
                    className="cntTextarea"
                    placeholder="Qaysi mahsulot, o‘lcham, rang, qancha dona…"
                    minLength={10}
                    required
                  />
                </label>

                <div className="cntActions">
                  <button
                    className="cntBtn cntBtn--gold cntBtn--big"
                    type="submit"
                    disabled={!isReady}
                    title={
                      !isReady
                        ? "Maydonlarni to‘ldiring"
                        : "Gmail orqali yuborish"
                    }
                  >
                    Gmail orqali yuborish
                  </button>

                  <a
                    className="cntBtn cntBtn--line cntBtn--big"
                    href={buildGmailUrl()}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setSentHint("Gmail oynasi ochildi ✅")}
                  >
                    Gmailni ochish
                  </a>
                </div>
              </form>

              <div className="cntFormCard__foot"></div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
