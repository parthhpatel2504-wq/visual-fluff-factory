import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-greens.jpg";
import ritualImg from "@/assets/ritual.jpg";
import pGreenJuice from "@/assets/p-green-juice.jpg.asset.json";
import pAcidity from "@/assets/p-acidity.jpg.asset.json";
import pSeabuckthorn from "@/assets/p-seabuckthorn.jpg.asset.json";
import pMoringaLeavesPowder from "@/assets/p-moringa-leaves-powder.jpg.asset.json";
import pMoringaLeavesTablets from "@/assets/p-moringa-leaves-tablets.jpg.asset.json";
import pMoringaPodsPowder from "@/assets/p-moringa-pods-powder.jpg.asset.json";
import pMoringaPodsTablets from "@/assets/p-moringa-pods-tablets.jpg.asset.json";
import pMalashuddhi from "@/assets/p-malashuddhi.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const products = [
  {
    id: "green-juice",
    name: "ગ્રીન જ્યુસ પાવડર",
    tagline: "Green Juice Powder",
    description:
      "Dehydrated green leaves powder — a blend of spinach, mint, neem, wheatgrass, tulsi, amla and moringa. One spoon daily for natural energy and detox.",
    image: pGreenJuice.url,
    notes: ["Spinach", "Wheatgrass", "Moringa", "Tulsi"],
    price: "₹ 699",
    size: "200 g",
  },
  {
    id: "acidity-gas",
    name: "એસિડિટી ગેસ પાવડર",
    tagline: "Acidity & Gas Relief Powder",
    description:
      "An Ayurvedic blend of fennel, coriander, methi, ajwain, jeera and black pepper that soothes acidity, gas and bloating naturally.",
    image: pAcidity.url,
    notes: ["Fennel", "Coriander", "Ajwain", "Jeera"],
    price: "₹ 449",
    size: "200 g",
  },
  {
    id: "seabuckthorn",
    name: "VEDAAS सी-बकथॉर्न जूस",
    tagline: "Seabuckthorn Juice",
    description:
      "100% natural & herbal sea buckthorn juice — rich in Vitamin C & A, antioxidants and Omega 3, 6, 7, 9 for immunity and glowing skin.",
    image: pSeabuckthorn.url,
    notes: ["Omega 3,6,7,9", "Vitamin C", "Antioxidants"],
    price: "₹ 395",
    size: "100 ml",
  },
  {
    id: "moringa-leaves-powder",
    name: "સરગવાના પાન નો પાવડર",
    tagline: "Moringa Leaves Powder",
    description:
      "Pure moringa leaves powder — rich in natural vitamins, minerals and antioxidants. Supports daily nutrition, immunity and overall wellness.",
    image: pMoringaLeavesPowder.url,
    notes: ["Vitamins", "Minerals", "Antioxidants"],
    price: "₹ 250",
    size: "200 g",
  },
  {
    id: "moringa-leaves-tablets",
    name: "💊 સરગવાના પાન ગોળી",
    tagline: "Moringa Leaves Tablets",
    description:
      "Convenient tablet form of moringa leaf nutrition. Helps support immunity, stamina, metabolism and everyday health.",
    image: pMoringaLeavesTablets.url,
    notes: ["Immunity", "Stamina", "Metabolism"],
    price: "₹ 250",
    size: "180 Tablets",
  },
  {
    id: "moringa-pods-powder",
    name: "🌱 સરગવાના શિંગ નો પાવડર",
    tagline: "Moringa Pods Powder",
    description:
      "Made from moringa pods. Provides natural plant nutrients that support digestion, vitality and balanced nutrition.",
    image: pMoringaPodsPowder.url,
    notes: ["Digestion", "Vitality", "Plant Nutrients"],
    price: "₹ 250",
    size: "200 g",
  },
  {
    id: "moringa-pods-tablets",
    name: "💊 સરગવા ની શિંગ ગોળી",
    tagline: "Moringa Pods Tablets",
    description:
      "Easy-to-consume moringa pod tablets. Supports daily wellness, digestive health and nutritional balance.",
    image: pMoringaPodsTablets.url,
    notes: ["Wellness", "Digestion", "Balance"],
    price: "₹ 250",
    size: "180 Tablets",
  },
  {
    id: "malashuddhi",
    name: "🟤 મળશુદ્ધિ ટેબલેટ",
    tagline: "Malashuddhi Tablets",
    description:
      "Traditionally used for digestive support and bowel regularity. Helps maintain digestive comfort and routine wellness.",
    image: pMalashuddhi.url,
    notes: ["Digestive", "Bowel Care", "Routine"],
    price: "₹ 200",
    size: "50 Tablets",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Promise />
      <Products />
      <Ritual />
      <Story />
      <Order />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-md bg-background/80">
      <div className="container-x flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="grid place-items-center w-10 h-10 rounded-full bg-forest-deep text-cream font-display font-bold">
            V
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold text-lg text-forest-deep">Vedaas</div>
            <div className="eyebrow text-[0.6rem]">Pure Green Nutrition</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/75">
          <a href="#products" className="hover:text-forest-deep transition">Products</a>
          <a href="#ritual" className="hover:text-forest-deep transition">Ritual</a>
          <a href="#story" className="hover:text-forest-deep transition">Story</a>
          <a href="#order" className="hover:text-forest-deep transition">Order</a>
        </nav>
        <a
          href="#order"
          className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-5 py-2.5 text-sm font-medium text-cream hover:bg-forest transition shadow-soft"
        >
          Order now
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-8 pt-16 lg:pt-24 pb-20 lg:pb-28 items-center">
        <div className="lg:col-span-6 space-y-7">
          <div className="eyebrow">Crafted in Ahmedabad · Since 2021</div>
          <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-forest-deep">
            Drink green.
            <br />
            <span className="italic font-normal text-moss">Live clean.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Three honest wellness rituals — green juice powder, acidity relief and sea buckthorn juice — made from
            real plants, with nothing you can&apos;t pronounce.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-7 py-3.5 text-sm font-medium text-cream hover:bg-forest transition shadow-lift"
            >
              Explore the range
            </a>
            <a
              href="#order"
              className="inline-flex items-center gap-2 rounded-full border border-forest-deep/20 px-7 py-3.5 text-sm font-medium text-forest-deep hover:bg-forest-deep hover:text-cream transition"
            >
              Order on WhatsApp
            </a>
          </div>
          <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-border max-w-md">
            <Stat k="8" v="Core products" />
            <Stat k="100%" v="Natural blend" />
            <Stat k="Free" v="Delivery" />
          </dl>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-lift aspect-[4/5]">
            <img
              src={heroImg}
              alt="Fresh wheatgrass, moringa and sea buckthorn berries"
              className="w-full h-full object-cover"
              width={1536}
              height={1536}
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-cream/95 backdrop-blur p-5 flex items-center gap-4 shadow-soft">
              <div className="w-12 h-12 rounded-full bg-forest-deep grid place-items-center text-cream font-display">★</div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-moss uppercase tracking-wider">Featured</div>
                <div className="font-display text-forest-deep font-semibold">ગ્રીન જ્યુસ પાવડર — 200 g</div>
              </div>
              <div className="font-display text-lg text-forest-deep font-semibold">₹ 699</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 hidden lg:block w-28 h-28 rounded-full bg-ember/15 -z-10" />
          <div className="absolute -bottom-6 -left-6 hidden lg:block w-40 h-40 rounded-full bg-sage/40 -z-10" />
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-semibold text-forest-deep">{k}</dt>
      <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</dd>
    </div>
  );
}

/* ---------- PROMISE (full-width band) ---------- */
function Promise() {
  const items = [
    { title: "Real plants", body: "Sourced from trusted Indian farms — never synthetic." },
    { title: "No fillers", body: "Zero sugar, no preservatives, no artificial colors." },
    { title: "Small batches", body: "Made fresh, packed by hand, delivered quickly." },
    { title: "Honest pricing", body: "Direct-to-you. No middlemen, no inflated markups." },
  ];
  return (
    <section className="bg-forest-deep text-cream py-20">
      <div className="container-x">
        <div className="grid md:grid-cols-4 gap-10">
          {items.map((i) => (
            <div key={i.title}>
              <div className="w-8 h-px bg-ember mb-5" />
              <h3 className="font-display text-xl text-cream mb-2">{i.title}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRODUCTS ---------- */
function Products() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">The Range</div>
          <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-tight">
            Three rituals.<br />
            <span className="italic text-moss font-normal">One simple promise.</span>
          </h2>
        </div>

        <div className="space-y-24">
          {products.map((p, i) => (
            <article
              key={p.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden aspect-square shadow-lift">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-cream px-5 py-3 shadow-soft border border-border">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.size}</div>
                  <div className="font-display text-xl text-forest-deep font-semibold">{p.price}</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="eyebrow">{`0${i + 1} · ${p.tagline}`}</div>
                <h3 className="font-display text-3xl md:text-4xl text-forest-deep">{p.name}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.notes.map((n) => (
                    <span
                      key={n}
                      className="rounded-full border border-forest-deep/15 bg-cream px-4 py-1.5 text-xs font-medium text-forest-deep"
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <a
                    href="#order"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest-deep border-b-2 border-ember pb-1 hover:gap-3 transition-all"
                  >
                    Order this <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- RITUAL ---------- */
function Ritual() {
  const [step, setStep] = useState(0);
  const steps = [
    { t: "Start your morning", b: "One teaspoon of Vedaas Pure Greens in a glass of cool water. Stir, sip, smile." },
    { t: "After heavy meals", b: "A small spoon of Acidity Relief powder with warm water settles digestion within minutes." },
    { t: "Evening reset", b: "30 ml of Sea Buckthorn Juice diluted in water — for immunity and glowing skin." },
  ];
  return (
    <section id="ritual" className="relative bg-cream-2/60 py-24 lg:py-32 overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="rounded-[2rem] overflow-hidden shadow-lift aspect-[4/5] order-2 lg:order-1">
          <img
            src={ritualImg}
            alt="Stirring fresh green juice"
            loading="lazy"
            width={1536}
            height={1024}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <div className="eyebrow mb-4">A Simple Daily Ritual</div>
          <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-tight mb-8">
            Three minutes, three times a day.
          </h2>
          <div className="space-y-3">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`w-full text-left rounded-2xl border transition p-5 flex gap-5 ${
                  step === i
                    ? "bg-forest-deep text-cream border-forest-deep shadow-lift"
                    : "bg-card border-border hover:border-forest-deep/30"
                }`}
              >
                <div
                  className={`shrink-0 w-10 h-10 rounded-full grid place-items-center font-display font-semibold ${
                    step === i ? "bg-ember text-forest-deep" : "bg-cream-2 text-forest-deep"
                  }`}
                >
                  {i + 1}
                </div>
                <div>
                  <div className="font-display text-lg mb-1">{s.t}</div>
                  <div className={`text-sm leading-relaxed ${step === i ? "text-cream/80" : "text-muted-foreground"}`}>
                    {s.b}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- STORY ---------- */
function Story() {
  return (
    <section id="story" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="eyebrow">Our Story</div>
          <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-tight">
            Wellness shouldn&apos;t be{" "}
            <span className="italic text-moss font-normal">complicated.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vedaas began in a small kitchen in Ahmedabad with a single belief — that the best things for your body
            are also the simplest. We work directly with Indian farms, blend in small batches and ship within days.
            No marketing tricks, no synthetic shortcuts. Just clean green nutrition that fits into the life you
            already live.
          </p>
          <div className="pt-4 flex justify-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
            <span>FSSAI Certified</span>
            <span aria-hidden>·</span>
            <span>Made in India</span>
            <span aria-hidden>·</span>
            <span>Vegan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ORDER ---------- */
function Order() {
  return (
    <section id="order" className="relative py-24 lg:py-32 bg-forest-deep text-cream overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.6 0.09 145 / .5), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.7 0.16 55 / .3), transparent 40%)",
        }}
      />
      <div className="container-x relative grid lg:grid-cols-2 gap-14">
        <div className="space-y-6">
          <div className="eyebrow text-ember">Place your order</div>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
            One message.<br />
            <span className="italic font-normal text-sage">Delivered to your door.</span>
          </h2>
          <p className="text-cream/75 text-lg max-w-md leading-relaxed">
            We take orders via WhatsApp — quick, personal, and zero account-signups. Send us the form below or
            message directly.
          </p>
          <div className="space-y-4 pt-4">
            <Meta label="WhatsApp" value="+91 98xxxxxx00" />
            <Meta label="Email" value="orders@vedaas.in" />
            <Meta label="Shipping" value="Free across India · 2–4 days" />
            <Meta label="Hours" value="Mon — Sat · 10 am to 7 pm IST" />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const msg =
              `Hi Vedaas! I'd like to order:%0A%0A` +
              `Name: ${f.get("name")}%0A` +
              `Product: ${f.get("product")}%0A` +
              `Qty: ${f.get("qty")}%0A` +
              `City: ${f.get("city")}%0A%0A` +
              `Notes: ${f.get("notes") || "—"}`;
            window.open(`https://wa.me/919800000000?text=${msg}`, "_blank");
          }}
          className="rounded-3xl bg-cream text-foreground p-7 lg:p-9 shadow-lift space-y-4"
        >
          <Field name="name" label="Your name" placeholder="Aanya Shah" required />
          <div className="grid grid-cols-2 gap-4">
            <Field name="product" label="Product" as="select">
              {products.map((p) => (
                <option key={p.id}>{p.name}</option>
              ))}
            </Field>
            <Field name="qty" label="Quantity" defaultValue="1" type="number" />
          </div>
          <Field name="city" label="City" placeholder="Ahmedabad" required />
          <Field name="notes" label="Notes (optional)" as="textarea" placeholder="Anything we should know?" />
          <button
            type="submit"
            className="w-full rounded-full bg-forest-deep text-cream font-medium py-4 hover:bg-forest transition mt-2"
          >
            Send order on WhatsApp →
          </button>
        </form>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 items-baseline border-t border-cream/10 pt-3">
      <div className="text-xs uppercase tracking-wider text-ember w-28 shrink-0">{label}</div>
      <div className="text-cream/90">{value}</div>
    </div>
  );
}

function Field({
  name,
  label,
  as,
  children,
  ...rest
}: {
  name: string;
  label: string;
  as?: "select" | "textarea";
  children?: React.ReactNode;
  [k: string]: unknown;
}) {
  const cls =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground outline-none focus:border-forest-deep focus:ring-2 focus:ring-moss/30 transition";
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-forest-deep mb-2">{label}</span>
      {as === "select" ? (
        <select name={name} className={cls} {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)}>
          {children}
        </select>
      ) : as === "textarea" ? (
        <textarea name={name} rows={3} className={cls} {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input name={name} className={cls} {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </label>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-[oklch(0.20_0.04_152)] text-cream/70 py-14">
      <div className="container-x">
        <div className="flex flex-wrap justify-between gap-8 items-start">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-10 h-10 rounded-full bg-ember text-forest-deep font-display font-bold">
              V
            </div>
            <div>
              <div className="font-display text-cream text-lg">Vedaas</div>
              <div className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/45 mt-0.5">
                Pure Green Nutrition
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#products" className="hover:text-ember transition">Products</a>
            <a href="#ritual" className="hover:text-ember transition">Ritual</a>
            <a href="#story" className="hover:text-ember transition">Story</a>
            <a href="#order" className="hover:text-ember transition">Order</a>
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-cream/10 text-xs text-cream/40 text-center">
          © {new Date().getFullYear()} Vedaas Greens · Ahmedabad, India
        </div>
      </div>
    </footer>
  );
}

/* ---------- WHATSAPP FLOAT ---------- */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919800000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25d366] text-white grid place-items-center shadow-lift hover:scale-105 transition"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
    </a>
  );
}
