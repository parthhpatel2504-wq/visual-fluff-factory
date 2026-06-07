import { createFileRoute } from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";
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

/* ---------- I18N ---------- */
type Lang = "en" | "gu";
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});
const useLang = () => useContext(LangCtx);

type Bi = { en: string; gu: string };
const T: Record<string, Bi> = {
  nav_products: { en: "Products", gu: "ઉત્પાદનો" },
  nav_ritual: { en: "Ritual", gu: "દિનચર્યા" },
  nav_story: { en: "Story", gu: "અમારી વાત" },
  nav_order: { en: "Order", gu: "ઓર્ડર" },
  cta_order_now: { en: "Order now", gu: "હમણાં ઓર્ડર કરો" },
  hero_eyebrow: { en: "Crafted in Ahmedabad · Since 2021", gu: "અમદાવાદમાં બનાવેલ · ૨૦૨૧ થી" },
  hero_h1_a: { en: "Drink green.", gu: "લીલું પીઓ." },
  hero_h1_b: { en: "Live clean.", gu: "શુદ્ધ જીવો." },
  hero_p: {
    en: "Eight honest wellness rituals — powders, juices and tablets made from real plants, with nothing you can't pronounce.",
    gu: "આઠ સાચા આયુર્વેદિક ઉપાયો — શુદ્ધ વનસ્પતિઓમાંથી બનેલા પાવડર, જ્યુસ અને ગોળીઓ. કોઈ બનાવટી તત્વ નહીં.",
  },
  hero_btn_explore: { en: "Explore the range", gu: "આખી રેન્જ જુઓ" },
  hero_btn_whatsapp: { en: "Order on WhatsApp", gu: "WhatsApp પર ઓર્ડર કરો" },
  stat_products: { en: "Core products", gu: "મુખ્ય ઉત્પાદનો" },
  stat_natural: { en: "Natural blend", gu: "કુદરતી મિશ્રણ" },
  stat_delivery: { en: "Delivery", gu: "ડિલિવરી" },
  stat_free: { en: "Free", gu: "મફત" },
  featured: { en: "Featured", gu: "ખાસ" },
  promise_1_t: { en: "Real plants", gu: "સાચી વનસ્પતિ" },
  promise_1_b: { en: "Sourced from trusted Indian farms — never synthetic.", gu: "વિશ્વસનીય ભારતીય ખેતરોમાંથી — ક્યારેય બનાવટી નહીં." },
  promise_2_t: { en: "No fillers", gu: "કોઈ ભેળસેળ નહીં" },
  promise_2_b: { en: "Zero sugar, no preservatives, no artificial colors.", gu: "શૂન્ય સાકર, કોઈ પ્રિઝર્વેટિવ નહીં, કોઈ કૃત્રિમ રંગ નહીં." },
  promise_3_t: { en: "Small batches", gu: "નાના બેચ" },
  promise_3_b: { en: "Made fresh, packed by hand, delivered quickly.", gu: "તાજું બનાવેલ, હાથે પેક કરેલ, ઝડપથી પહોંચાડેલ." },
  promise_4_t: { en: "Honest pricing", gu: "સાચી કિંમત" },
  promise_4_b: { en: "Direct-to-you. No middlemen, no inflated markups.", gu: "સીધું તમને. વચ્ચે કોઈ દલાલ નહીં, વધેલા ભાવ નહીં." },
  range_eyebrow: { en: "The Range", gu: "અમારી રેન્જ" },
  range_h2_a: { en: "Eight rituals.", gu: "આઠ દિનચર્યા." },
  range_h2_b: { en: "One simple promise.", gu: "એક સરળ વચન." },
  order_this: { en: "Order this", gu: "આ ઓર્ડર કરો" },
  ritual_eyebrow: { en: "A Simple Daily Ritual", gu: "સરળ રોજિંદી દિનચર્યા" },
  ritual_h2: { en: "Three minutes, three times a day.", gu: "ત્રણ મિનિટ, દિવસમાં ત્રણ વાર." },
  ritual_1_t: { en: "Start your morning", gu: "સવારની શરૂઆત" },
  ritual_1_b: {
    en: "One teaspoon of Green Juice Powder in a glass of cool water. Stir, sip, smile.",
    gu: "એક ચમચી ગ્રીન જ્યુસ પાવડર ઠંડા પાણીના ગ્લાસમાં. હલાવો, પીઓ, સ્મિત કરો.",
  },
  ritual_2_t: { en: "After heavy meals", gu: "ભારે ભોજન પછી" },
  ritual_2_b: {
    en: "A small spoon of Acidity & Gas Relief Powder with warm water settles digestion within minutes.",
    gu: "નાની ચમચી એસિડિટી ગેસ પાવડર ગરમ પાણી સાથે — થોડી જ મિનિટોમાં પાચન સુધારે.",
  },
  ritual_3_t: { en: "Evening reset", gu: "સાંજનો રિસેટ" },
  ritual_3_b: {
    en: "30 ml of Seabuckthorn Juice diluted in water — for immunity and glowing skin.",
    gu: "૩૦ મિ.લી. સી-બકથૉર્ન જ્યુસ પાણીમાં ભેળવીને — રોગપ્રતિકારકતા અને ચમકતી ત્વચા માટે.",
  },
  story_eyebrow: { en: "Our Story", gu: "અમારી વાત" },
  story_h2_a: { en: "Wellness shouldn't be", gu: "આરોગ્ય હોવું જોઈએ" },
  story_h2_b: { en: "complicated.", gu: "સરળ." },
  story_p: {
    en: "Vedaas began in a small kitchen in Ahmedabad with a single belief — that the best things for your body are also the simplest. We work directly with Indian farms, blend in small batches and ship within days. No marketing tricks, no synthetic shortcuts. Just clean green nutrition that fits into the life you already live.",
    gu: "વેદાસની શરૂઆત અમદાવાદના એક નાના રસોડામાં થઈ — એક માન્યતા સાથે કે શરીર માટે જે શ્રેષ્ઠ છે તે જ સૌથી સરળ પણ છે. અમે ભારતીય ખેડૂતો સાથે સીધું કામ કરીએ છીએ, નાના બેચમાં મિશ્રણ કરીએ છીએ અને થોડા દિવસોમાં મોકલીએ છીએ. કોઈ માર્કેટિંગની જાળ નહીં, કોઈ બનાવટી શોર્ટકટ નહીં — બસ શુદ્ધ આયુર્વેદિક પોષણ.",
  },
  badge_fssai: { en: "FSSAI Certified", gu: "FSSAI પ્રમાણિત" },
  badge_made: { en: "Made in India", gu: "ભારતમાં બનેલ" },
  badge_vegan: { en: "Vegan", gu: "વેગન" },
  order_eyebrow: { en: "Place your order", gu: "તમારો ઓર્ડર મૂકો" },
  order_h2_a: { en: "One message.", gu: "એક મેસેજ." },
  order_h2_b: { en: "Delivered to your door.", gu: "તમારા ઘરે ડિલિવર." },
  order_p: {
    en: "We take orders via WhatsApp — quick, personal, and zero account-signups. Send us the form below or message directly.",
    gu: "અમે WhatsApp દ્વારા ઓર્ડર લઈએ છીએ — ઝડપી, વ્યક્તિગત, કોઈ એકાઉન્ટ બનાવ્યા વગર. નીચેનું ફોર્મ ભરો અથવા સીધો મેસેજ કરો.",
  },
  meta_whatsapp: { en: "WhatsApp", gu: "WhatsApp" },
  meta_email: { en: "Email", gu: "ઈમેલ" },
  meta_shipping_l: { en: "Shipping", gu: "શિપિંગ" },
  meta_shipping_v: { en: "Free across India · 2–4 days", gu: "આખા ભારતમાં મફત · ૨–૪ દિવસ" },
  meta_hours_l: { en: "Hours", gu: "સમય" },
  meta_hours_v: { en: "Mon — Sat · 10 am to 7 pm IST", gu: "સોમ — શનિ · સવારે ૧૦ થી સાંજે ૭" },
  field_name: { en: "Your name", gu: "તમારું નામ" },
  field_product: { en: "Product", gu: "ઉત્પાદન" },
  field_qty: { en: "Quantity", gu: "જથ્થો" },
  field_city: { en: "City", gu: "શહેર" },
  field_notes: { en: "Notes (optional)", gu: "નોંધ (વૈકલ્પિક)" },
  field_notes_ph: { en: "Anything we should know?", gu: "કંઈ ખાસ જણાવવું છે?" },
  submit_btn: { en: "Send order on WhatsApp →", gu: "WhatsApp પર ઓર્ડર મોકલો →" },
  footer_tagline: { en: "Pure Green Nutrition", gu: "શુદ્ધ આયુર્વેદિક પોષણ" },
  footer_copy_loc: { en: "Ahmedabad, India", gu: "અમદાવાદ, ભારત" },
  reassure_nospam: { en: "We never spam. We only message about your order.", gu: "અમે ક્યારેય સ્પામ નહીં કરીએ. ફક્ત તમારા ઓર્ડર વિશે જ સંપર્ક કરીશું." },
  reassure_free: { en: "Free delivery across India · Pay on delivery available", gu: "આખા ભારતમાં મફત ડિલિવરી · ડિલિવરી પર પેમેન્ટ ઉપલબ્ધ" },
  reassure_call: { en: "Prefer to call? Dial", gu: "ફોન કરવો છે? ડાયલ કરો" },
  price_strip_a: { en: "Starting at", gu: "શરૂઆત ફક્ત" },
  price_strip_b: { en: "Free delivery", gu: "મફત ડિલિવરી" },
  price_strip_c: { en: "Cash on delivery", gu: "ડિલિવરી પર પેમેન્ટ" },
  how_to_use: { en: "How to use", gu: "વાપરવાની રીત" },
};


const t = (k: keyof typeof T, lang: Lang) => T[k][lang];

type ProductBi = {
  id: string;
  name: string;
  tagline: Bi;
  description: Bi;
  howto: Bi;
  image: string;
  notes: Bi[];
  price: string;
  size: Bi;
};

const products: ProductBi[] = [
  {
    id: "green-juice",
    name: "ગ્રીન જ્યુસ પાવડર",
    tagline: { en: "Green Juice Powder", gu: "ગ્રીન જ્યુસ પાવડર" },
    description: {
      en: "Dehydrated green leaves powder — a blend of spinach, mint, neem, wheatgrass, tulsi, amla and moringa. One spoon daily for natural energy and detox.",
      gu: "સુકવેલા લીલા પાનનો પાવડર — પાલક, ફુદીનો, લીમડો, ઘઉંના ઘાસ, તુલસી, આમળા અને સરગવાનું મિશ્રણ. દરરોજ એક ચમચી — કુદરતી ઊર્જા અને ડિટોક્સ માટે.",
    },
    howto: {
      en: "Mix 1 teaspoon in a glass of cool water. Stir well and drink on an empty stomach every morning.",
      gu: "એક ગ્લાસ ઠંડા પાણીમાં ૧ ચમચી ભેળવો. સારી રીતે હલાવીને દરરોજ સવારે ખાલી પેટ પીવો.",
    },
    image: pGreenJuice.url,
    notes: [
      { en: "Spinach", gu: "પાલક" },
      { en: "Wheatgrass", gu: "ઘઉંના ઘાસ" },
      { en: "Moringa", gu: "સરગવો" },
      { en: "Tulsi", gu: "તુલસી" },
    ],
    price: "₹ 699",
    size: { en: "200 g", gu: "૨૦૦ ગ્રામ" },
  },
  {
    id: "acidity-gas",
    name: "એસિડિટી ગેસ પાવડર",
    tagline: { en: "Acidity & Gas Relief Powder", gu: "એસિડિટી અને ગેસ રાહત પાવડર" },
    description: {
      en: "An Ayurvedic blend of fennel, coriander, methi, ajwain, jeera and black pepper that soothes acidity, gas and bloating naturally.",
      gu: "વરિયાળી, ધાણા, મેથી, અજમો, જીરું અને કાળા મરીનું આયુર્વેદિક મિશ્રણ — એસિડિટી, ગેસ અને ભારેપણાને કુદરતી રીતે શાંત કરે.",
    },
    howto: {
      en: "Take 1 teaspoon with warm water after heavy meals, or whenever acidity or gas troubles you.",
      gu: "ભારે ભોજન પછી કે એસિડિટી-ગેસ થાય ત્યારે ગરમ પાણી સાથે ૧ ચમચી લો.",
    },
    image: pAcidity.url,
    notes: [
      { en: "Fennel", gu: "વરિયાળી" },
      { en: "Coriander", gu: "ધાણા" },
      { en: "Ajwain", gu: "અજમો" },
      { en: "Jeera", gu: "જીરું" },
    ],
    price: "₹ 449",
    size: { en: "200 g", gu: "૨૦૦ ગ્રામ" },
  },
  {
    id: "seabuckthorn",
    name: "VEDAAS सी-बकथॉर्न जूस",
    tagline: { en: "Seabuckthorn Juice", gu: "સી-બકથૉર્ન જ્યુસ" },
    description: {
      en: "100% natural & herbal sea buckthorn juice — rich in Vitamin C & A, antioxidants and Omega 3, 6, 7, 9 for immunity and glowing skin.",
      gu: "૧૦૦% કુદરતી અને હર્બલ સી-બકથૉર્ન જ્યુસ — વિટામિન C અને A, એન્ટિઓક્સિડન્ટ્સ અને ઓમેગા ૩,૬,૭,૯ થી ભરપૂર. રોગપ્રતિકારકતા અને ચમકતી ત્વચા માટે.",
    },
    howto: {
      en: "Mix 30 ml in a glass of water and drink before breakfast daily.",
      gu: "એક ગ્લાસ પાણીમાં ૩૦ મિ.લી. ભેળવીને દરરોજ નાસ્તા પહેલાં પીવો.",
    },
    image: pSeabuckthorn.url,
    notes: [
      { en: "Omega 3,6,7,9", gu: "ઓમેગા ૩,૬,૭,૯" },
      { en: "Vitamin C", gu: "વિટામિન C" },
      { en: "Antioxidants", gu: "એન્ટિઓક્સિડન્ટ્સ" },
    ],
    price: "₹ 395",
    size: { en: "100 ml", gu: "૧૦૦ મિ.લી." },
  },
  {
    id: "moringa-leaves-powder",
    name: "સરગવાના પાન નો પાવડર",
    tagline: { en: "Moringa Leaves Powder", gu: "સરગવાના પાનનો પાવડર" },
    description: {
      en: "Pure moringa leaves powder — rich in natural vitamins, minerals and antioxidants. Supports daily nutrition, immunity and overall wellness.",
      gu: "શુદ્ધ સરગવાના પાનનો પાવડર — કુદરતી વિટામિન, ખનિજ અને એન્ટિઓક્સિડન્ટ્સથી ભરપૂર. રોજિંદા પોષણ, રોગપ્રતિકારકતા અને સંપૂર્ણ આરોગ્ય માટે.",
    },
    howto: {
      en: "Mix 1 teaspoon in warm water or buttermilk. Best taken in the morning.",
      gu: "ગરમ પાણી કે છાશમાં ૧ ચમચી ભેળવો. સવારે લેવું શ્રેષ્ઠ.",
    },
    image: pMoringaLeavesPowder.url,
    notes: [
      { en: "Vitamins", gu: "વિટામિન" },
      { en: "Minerals", gu: "ખનિજ" },
      { en: "Antioxidants", gu: "એન્ટિઓક્સિડન્ટ્સ" },
    ],
    price: "₹ 250",
    size: { en: "200 g", gu: "૨૦૦ ગ્રામ" },
  },
  {
    id: "moringa-leaves-tablets",
    name: "💊 સરગવાના પાન ગોળી",
    tagline: { en: "Moringa Leaves Tablets", gu: "સરગવાના પાનની ગોળી" },
    description: {
      en: "Convenient tablet form of moringa leaf nutrition. Helps support immunity, stamina, metabolism and everyday health.",
      gu: "સરગવાના પાનનું પોષણ સરળ ગોળી રૂપે. રોગપ્રતિકારકતા, શક્તિ, ચયાપચય અને રોજિંદા આરોગ્ય માટે મદદરૂપ.",
    },
    howto: {
      en: "Take 2 tablets with water after meals, twice a day.",
      gu: "ભોજન પછી પાણી સાથે ૨ ગોળી, દિવસમાં બે વાર લો.",
    },
    image: pMoringaLeavesTablets.url,
    notes: [
      { en: "Immunity", gu: "રોગપ્રતિકારકતા" },
      { en: "Stamina", gu: "શક્તિ" },
      { en: "Metabolism", gu: "ચયાપચય" },
    ],
    price: "₹ 250",
    size: { en: "180 Tablets", gu: "૧૮૦ ગોળી" },
  },
  {
    id: "moringa-pods-powder",
    name: "🌱 સરગવાના શિંગ નો પાવડર",
    tagline: { en: "Moringa Pods Powder", gu: "સરગવાની શિંગનો પાવડર" },
    description: {
      en: "Made from moringa pods. Provides natural plant nutrients that support digestion, vitality and balanced nutrition.",
      gu: "સરગવાની શિંગમાંથી બનાવેલ. પાચન, સ્ફૂર્તિ અને સંતુલિત પોષણને ટેકો આપતા કુદરતી તત્વો.",
    },
    howto: {
      en: "Mix 1 teaspoon in warm water or juice. Can be taken morning or evening.",
      gu: "ગરમ પાણી કે જ્યુસમાં ૧ ચમચી ભેળવો. સવારે કે સાંજે લઈ શકાય.",
    },
    image: pMoringaPodsPowder.url,
    notes: [
      { en: "Digestion", gu: "પાચન" },
      { en: "Vitality", gu: "સ્ફૂર્તિ" },
      { en: "Plant Nutrients", gu: "વનસ્પતિ તત્વો" },
    ],
    price: "₹ 250",
    size: { en: "200 g", gu: "૨૦૦ ગ્રામ" },
  },
  {
    id: "moringa-pods-tablets",
    name: "💊 સરગવા ની શિંગ ગોળી",
    tagline: { en: "Moringa Pods Tablets", gu: "સરગવાની શિંગની ગોળી" },
    description: {
      en: "Easy-to-consume moringa pod tablets. Supports daily wellness, digestive health and nutritional balance.",
      gu: "સરળતાથી લઈ શકાય તેવી સરગવાની શિંગની ગોળી. રોજિંદા આરોગ્ય, પાચન અને પોષણના સંતુલન માટે.",
    },
    howto: {
      en: "Take 2 tablets with water after meals, morning and evening.",
      gu: "ભોજન પછી પાણી સાથે ૨ ગોળી, સવારે અને સાંજે લો.",
    },
    image: pMoringaPodsTablets.url,
    notes: [
      { en: "Wellness", gu: "આરોગ્ય" },
      { en: "Digestion", gu: "પાચન" },
      { en: "Balance", gu: "સંતુલન" },
    ],
    price: "₹ 250",
    size: { en: "180 Tablets", gu: "૧૮૦ ગોળી" },
  },
  {
    id: "malashuddhi",
    name: "🟤 મળશુદ્ધિ ટેબલેટ",
    tagline: { en: "Malashuddhi Tablets", gu: "મળશુદ્ધિ ટેબલેટ" },
    description: {
      en: "Traditionally used for digestive support and bowel regularity. Helps maintain digestive comfort and routine wellness.",
      gu: "પાચન અને કબજિયાતમાં રાહત માટે પારંપરિક રીતે ઉપયોગી. દૈનિક પાચન આરામ અને નિયમિતતા જાળવે.",
    },
    howto: {
      en: "Take 1–2 tablets with warm water at bedtime for smooth morning routine.",
      gu: "સૂતી વખતે ગરમ પાણી સાથે ૧–૨ ગોળી લો. સવારે આરામદાયક અનુભવ થાય.",
    },
    image: pMalashuddhi.url,
    notes: [
      { en: "Digestive", gu: "પાચન" },
      { en: "Bowel Care", gu: "કબજિયાત રાહત" },
      { en: "Routine", gu: "નિયમિતતા" },
    ],
    price: "₹ 200",
    size: { en: "50 Tablets", gu: "૫૦ ગોળી" },
  },
];

function Index() {
  const [lang, setLang] = useState<Lang>("gu");
  return (
    <LangCtx.Provider value={{ lang, setLang }}>
      <div className="min-h-screen bg-background text-foreground" lang={lang}>
        <Nav />
        <PriceStrip />
        <Hero />
        <Promise />
        <Products />
        <Ritual />
        <Story />
        <Order />
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangCtx.Provider>
  );
}

function PriceStrip() {
  const { lang } = useLang();
  return (
    <div className="bg-ember/15 border-b-2 border-ember/30">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2.5 text-center text-[0.95rem] font-semibold text-forest-deep">
        <span>{t("price_strip_a", lang)} <span className="text-ember">₹ 200</span></span>
        <span aria-hidden className="opacity-40">·</span>
        <span>✓ {t("price_strip_b", lang)}</span>
        <span aria-hidden className="opacity-40">·</span>
        <span>✓ {t("price_strip_c", lang)}</span>
      </div>
    </div>
  );
}


/* ---------- LANG TOGGLE ---------- */
function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-forest-deep/20 bg-cream/70 p-0.5 text-xs font-semibold ${
        compact ? "" : ""
      }`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded-full transition ${
          lang === "en" ? "bg-forest-deep text-cream" : "text-forest-deep hover:bg-forest-deep/5"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("gu")}
        className={`px-3 py-1.5 rounded-full transition ${
          lang === "gu" ? "bg-forest-deep text-cream" : "text-forest-deep hover:bg-forest-deep/5"
        }`}
        aria-pressed={lang === "gu"}
      >
        ગુજરાતી
      </button>
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#products", label: t("nav_products", lang) },
    { href: "#ritual", label: t("nav_ritual", lang) },
    { href: "#story", label: t("nav_story", lang) },
    { href: "#order", label: t("nav_order", lang) },
  ];
  return (
    <header className="sticky top-0 z-50 border-b-2 border-forest-deep/15 backdrop-blur-md bg-background/95">
      <div className="container-x flex items-center justify-between py-4 gap-3">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="grid place-items-center w-11 h-11 rounded-full bg-forest-deep text-cream font-display font-bold text-lg">
            V
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-xl text-forest-deep">Vedaas</div>
            <div className="text-[0.8rem] font-medium text-forest">{t("footer_tagline", lang)}</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-base font-semibold text-forest-deep">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ember transition">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <a
            href="#order"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-forest-deep px-5 py-3 text-base font-semibold text-cream hover:bg-forest transition shadow-soft"
          >
            {t("cta_order_now", lang)}
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="md:hidden grid place-items-center w-12 h-12 rounded-full border-2 border-forest-deep/20 text-forest-deep"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {open ? (<><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>) : (<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>)}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t-2 border-forest-deep/10 bg-background">
          <nav className="container-x flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-semibold text-forest-deep border-b border-border last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center items-center gap-2 rounded-full bg-forest-deep px-5 py-3.5 text-base font-semibold text-cream"
            >
              {t("cta_order_now", lang)} <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


/* ---------- HERO ---------- */
function Hero() {
  const { lang } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-8 pt-16 lg:pt-24 pb-20 lg:pb-28 items-center">
        <div className="lg:col-span-6 space-y-7">
          <div className="eyebrow">{t("hero_eyebrow", lang)}</div>
          <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-forest-deep">
            {t("hero_h1_a", lang)}
            <br />
            <span className="italic font-normal text-moss">{t("hero_h1_b", lang)}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">{t("hero_p", lang)}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-7 py-3.5 text-sm font-medium text-cream hover:bg-forest transition shadow-lift"
            >
              {t("hero_btn_explore", lang)}
            </a>
            <a
              href="#order"
              className="inline-flex items-center gap-2 rounded-full border border-forest-deep/20 px-7 py-3.5 text-sm font-medium text-forest-deep hover:bg-forest-deep hover:text-cream transition"
            >
              {t("hero_btn_whatsapp", lang)}
            </a>
          </div>
          <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-border max-w-md">
            <Stat k="8" v={t("stat_products", lang)} />
            <Stat k="100%" v={t("stat_natural", lang)} />
            <Stat k={t("stat_free", lang)} v={t("stat_delivery", lang)} />
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
                <div className="text-xs font-semibold text-moss uppercase tracking-wider">{t("featured", lang)}</div>
                <div className="font-display text-forest-deep font-semibold">
                  ગ્રીન જ્યુસ પાવડર — {products[0].size[lang]}
                </div>
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

/* ---------- PROMISE ---------- */
function Promise() {
  const { lang } = useLang();
  const items = [
    { title: t("promise_1_t", lang), body: t("promise_1_b", lang) },
    { title: t("promise_2_t", lang), body: t("promise_2_b", lang) },
    { title: t("promise_3_t", lang), body: t("promise_3_b", lang) },
    { title: t("promise_4_t", lang), body: t("promise_4_b", lang) },
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
  const { lang } = useLang();
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">{t("range_eyebrow", lang)}</div>
          <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-tight">
            {t("range_h2_a", lang)}<br />
            <span className="italic text-moss font-normal">{t("range_h2_b", lang)}</span>
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
                <div className="absolute -bottom-5 -right-3 sm:-right-5 rounded-2xl bg-ember px-5 py-3 shadow-lift border-2 border-forest-deep/10">
                  <div className="text-[0.75rem] font-bold uppercase tracking-wider text-forest-deep/80">{p.size[lang]}</div>
                  <div className="font-display text-2xl text-forest-deep font-bold leading-none">{p.price}</div>
                </div>

              </div>

              <div className="space-y-6">
                <div className="eyebrow">{`0${i + 1} · ${p.tagline[lang]}`}</div>
                <h3 className="font-display text-3xl md:text-4xl text-forest-deep">{p.name}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{p.description[lang]}</p>

                <div className="rounded-xl border-2 border-sage/30 bg-sage/10 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">📋</span>
                    <span className="font-display text-lg font-semibold text-forest-deep">{t("how_to_use", lang)}</span>
                  </div>
                  <p className="text-forest-deep text-[1.05rem] leading-relaxed">{p.howto[lang]}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.notes.map((n) => (
                    <span
                      key={n.en}
                      className="rounded-full border border-forest-deep/15 bg-cream px-4 py-1.5 text-xs font-medium text-forest-deep"
                    >
                      {n[lang]}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <a
                    href="#order"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest-deep border-b-2 border-ember pb-1 hover:gap-3 transition-all"
                  >
                    {t("order_this", lang)} <span aria-hidden>→</span>
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
  const { lang } = useLang();
  const [step, setStep] = useState(0);
  const steps = [
    { t: t("ritual_1_t", lang), b: t("ritual_1_b", lang) },
    { t: t("ritual_2_t", lang), b: t("ritual_2_b", lang) },
    { t: t("ritual_3_t", lang), b: t("ritual_3_b", lang) },
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
          <div className="eyebrow mb-4">{t("ritual_eyebrow", lang)}</div>
          <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-tight mb-8">
            {t("ritual_h2", lang)}
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
  const { lang } = useLang();
  return (
    <section id="story" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="eyebrow">{t("story_eyebrow", lang)}</div>
          <h2 className="font-display text-4xl md:text-5xl text-forest-deep leading-tight">
            {t("story_h2_a", lang)}{" "}
            <span className="italic text-moss font-normal">{t("story_h2_b", lang)}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("story_p", lang)}</p>
          <div className="pt-4 flex justify-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
            <span>{t("badge_fssai", lang)}</span>
            <span aria-hidden>·</span>
            <span>{t("badge_made", lang)}</span>
            <span aria-hidden>·</span>
            <span>{t("badge_vegan", lang)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ORDER ---------- */
function Order() {
  const { lang } = useLang();
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
          <div className="eyebrow text-ember">{t("order_eyebrow", lang)}</div>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
            {t("order_h2_a", lang)}<br />
            <span className="italic font-normal text-sage">{t("order_h2_b", lang)}</span>
          </h2>
          <p className="text-cream/75 text-lg max-w-md leading-relaxed">{t("order_p", lang)}</p>
          <div className="space-y-4 pt-4">
            <Meta label={t("meta_whatsapp", lang)} value="+91 98xxxxxx00" />
            <Meta label={t("meta_email", lang)} value="orders@vedaas.in" />
            <Meta label={t("meta_shipping_l", lang)} value={t("meta_shipping_v", lang)} />
            <Meta label={t("meta_hours_l", lang)} value={t("meta_hours_v", lang)} />
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
          <Field name="name" label={t("field_name", lang)} placeholder="Aanya Shah" required />
          <div className="grid grid-cols-2 gap-4">
            <Field name="product" label={t("field_product", lang)} as="select">
              {products.map((p) => (
                <option key={p.id}>{p.name}</option>
              ))}
            </Field>
            <Field name="qty" label={t("field_qty", lang)} defaultValue="1" type="number" />
          </div>
          <Field name="city" label={t("field_city", lang)} placeholder="Ahmedabad" required />
          <Field name="notes" label={t("field_notes", lang)} as="textarea" placeholder={t("field_notes_ph", lang)} />
          <button
            type="submit"
            className="w-full rounded-full bg-forest-deep text-cream text-lg font-semibold py-5 hover:bg-forest transition mt-2"
          >
            {t("submit_btn", lang)}
          </button>
          <div className="space-y-2 pt-1 text-center">
            <p className="text-sm text-forest-deep/80 font-medium">🔒 {t("reassure_nospam", lang)}</p>
            <p className="text-sm text-forest-deep/80 font-medium">🚚 {t("reassure_free", lang)}</p>
            <p className="text-base text-forest-deep font-semibold">
              📞 {t("reassure_call", lang)}{" "}
              <a href="tel:+919800000000" className="underline decoration-ember decoration-2 underline-offset-4">+91 98000 00000</a>
            </p>
          </div>

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
  const { lang } = useLang();
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
                {t("footer_tagline", lang)}
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#products" className="hover:text-ember transition">{t("nav_products", lang)}</a>
            <a href="#ritual" className="hover:text-ember transition">{t("nav_ritual", lang)}</a>
            <a href="#story" className="hover:text-ember transition">{t("nav_story", lang)}</a>
            <a href="#order" className="hover:text-ember transition">{t("nav_order", lang)}</a>
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-cream/10 text-xs text-cream/40 text-center">
          © 2026 Vedaas Greens · {t("footer_copy_loc", lang)}
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
      className="fixed bottom-5 right-5 z-50 w-[72px] h-[72px] rounded-full bg-[#25d366] text-white grid place-items-center shadow-lift hover:scale-105 transition ring-4 ring-white/70"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">

        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
    </a>
  );
}
