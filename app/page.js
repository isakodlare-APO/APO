"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Turnstile from "react-turnstile";


const SECTION_IDS = ["hem", "kampanj", "om-oss", "tjanster", "projekt", "kontakt"];

const NAV_ITEMS = [
  { id: "hem", label: "Hem" },
  { id: "kampanj", label: "Kampanj" },
  { id: "om-oss", label: "Om oss" },
  { id: "tjanster", label: "Tjänster" },
  { id: "projekt", label: "Projekt" },
  { id: "kontakt", label: "Kontakt" },
];

const SERVICES = [
  {
    title: "Trädgårdsdesign",
    text: "Planering, idéarbete och växtval som ger trädgården struktur, känsla och funktion.",
    color: "bg-blue-100",
  },
  {
    title: "Gräsklippning & skötsel",
    text: "Återkommande eller enstaka hjälp med att hålla trädgården välskött och inbjudande.",
    color: "bg-yellow-100",
  },
  {
    title: "Häckklippning & beskärning",
    text: "Omsorgsfull formklippning och beskärning som stärker både uttryck och växthälsa.",
    color: "bg-green-100",
  },
  {
    title: "Rensning & uppfräschning",
    text: "Vi tar hand om sly, ogräs, övervuxna ytor och rabatter som behöver nytt liv.",
    color: "bg-[#6d080c]/20",
  },
];

const TEAM_MEMBERS = [
  {
    slug: "shannon-chao",
    name: "Shannon Chao",
    role: "Trädgårdsingenjör Design",
    image: "/shannon-5.jpeg",
    shortText: "Läs mer om Shannon och hennes bakgrund inom design.",
  },
  {
    slug: "dastin-jerzey",
    name: "Dastin Jerzey",
    role: "Trädgårdsingenjör Design",
    image: "/dastin-3.jpeg",
    shortText: "Läs mer om Dastin och hans erfarenheter inom design.",
  },
  {
    slug: "isak-odlare",
    name: "Isak Odlare",
    role: "Trädgårdsingenjör Odling",
    image: "/isak-3.jpeg",
    shortText: "Läs mer om Isak och hans kunskap inom odling.",
  },
];

const BENEFITS = [
  "Personlig kontakt från start till mål",
  "Naturinspirerad design med funktion i fokus",
  "Flexibla upplägg för både små och stora behov",
  "Engagerat team med kunskap och energi",
];

const PROJECTS = [
  
  {
    
    title: "Villa – uppfräschning",
    text: "Rensning, beskärning och strukturförbättring av en igenvuxen trädgård.",
    before: "/magnus-fore-1.jpg",
    after: "/magnus-efter-1.jpg",
  },
  {
   
    title: "Trädgårdsdesign",
    text: "Planering av ny layout med fokus på funktion och estetik.",
    before: "/magnus-fore-2.jpg",
    after: "/magnus-efter-2.jpg",
  },
  {
    
    title: "Skötsel & underhåll",
    text: "Löpande skötsel för att hålla trädgården levande och välmående.",
    before: "/magnus-fore-3.jpg",
    after: "/magnus-efter-3.jpg",
  },
];
const INSTAGRAM_URL = "https://www.instagram.com/alnarps_potential/";
const INSTAGRAM_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
  INSTAGRAM_URL
)}`;
export default function AlnarpsPotentialHome() {
  const [captchaToken, setCaptchaToken] = useState("");
  const [isTorn, setIsTorn] = useState(false);
  useEffect(() => {
  if (isTorn) {
    const timer = setTimeout(() => {
      setIsTorn(false);
    }, 3000); // 3 sekunder

    return () => clearTimeout(timer);
  }
}, [isTorn]);
  const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, 70]);
const bgY = useTransform(scrollY, [500, 2200], [-80, 80]);

  const [activeSection, setActiveSection] = useState("hem");
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState({
    type: "idle",
    message: "",
  });

  const menuRef = useRef(null);

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const offset = 140;
      let currentSection = SECTION_IDS[0];
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);

        if (rect.top <= offset && distance < closestDistance) {
          closestDistance = distance;
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (SECTION_IDS.includes(hash)) {
        setActiveSection(hash);
      }
    };

    updateActiveSection();
    updateFromHash();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (event) => {
    const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...contactForm,
    captchaToken,
  }),
});
    event.preventDefault();
    if (!captchaToken) {
  setContactStatus({
    type: "error",
    message: "Bekräfta att du inte är en robot.",
  });
  return;
}

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactStatus({
        type: "error",
        message: "Fyll i namn, e-post och meddelande först.",
      });
      return;
      
    }

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setContactStatus({
        type: "error",
        message:
          "Lägg till NEXT_PUBLIC_FORMSPREE_ENDPOINT i din .env.local för att aktivera formuläret live.",
      });
      return;
    }

    setContactStatus({
      type: "loading",
      message: "Skickar din förfrågan...",
    });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      if (!response.ok) {
        throw new Error("Något gick fel när formuläret skickades.");
      }

      setContactStatus({
        type: "success",
        message: "Tack! Din förfrågan har skickats.",
      });

      setContactForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setContactStatus({
        type: "error",
        message: "Det gick inte att skicka formuläret just nu. Försök igen snart.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#eef3ee] text-stone-800">
      <div className="fixed left-0 top-4 z-50 w-full px-6 md:px-10 lg:px-12">
        <div
          ref={menuRef}
          className="mx-auto flex max-w-5xl items-center justify-between rounded-[1.75rem] border border-white/20 bg-white/60 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur-xl md:px-6"
        >
          <a href="#hem" className="flex items-center gap-3">
            <img
              src="/logga_svartbakgrund-03.png"
              alt="Alnarps Potential logga"
              className="h-10 w-auto rounded-full opacity-90"
            />
            <span className="hidden text-sm font-semibold tracking-[0.14em] text-stone-800 sm:block">
              ALNARPS POTENTIAL
            </span>
          </a>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-3 rounded-full border border-stone-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-stone-800 shadow-sm transition hover:bg-white"
              aria-expanded={menuOpen}
              aria-label="Öppna meny"
            >
              <span>Meny</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a56a3a] text-white shadow-sm">
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    menuOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`absolute right-0 mt-3 w-64 origin-top-right overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 ${
                menuOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
            >
              <div className="p-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`mb-1 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition last:mb-0 ${
                      activeSection === item.id
                        ? "bg-[#a56a3a] text-white shadow-md"
                        : "text-stone-700 hover:bg-stone-100/80 hover:text-stone-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="hem" className="relative overflow-hidden px-0 py-0">
        
  {/* Bakgrundsbild */}
 <motion.div
  style={{
    y,
    backgroundImage: "url('/team-bakgrund-1.jpeg')",
  }}
  className="absolute inset-0 bg-cover bg-center"
/>


  {/* Mörk overlay för läsbarhet */}
  <div className="absolute inset-0 bg-black/50" />
   

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="rounded-[2rem] bg-white/10 p-4 shadow-2xl ring-1 ring-white/20 backdrop-blur-md md:p-6">
                <img
                  src="/logga_svartbakgrund-03.png"
                  alt="Alnarps Potential logga"
                  className="mx-auto w-[220px] rounded-[1.5rem] opacity-90 md:w-[280px]"
                />
              </div>

              <h1 className="mt-10 max-w-4xl text-4xl font-semibold tracking-tight text-[#f5f1eb] md:text-6xl lg:text-7xl">
                Gör din trädgård magisk
                
                
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#efe6dc]/85 md:text-xl">
                Med SLU Alnarp's kunskap & nätverk har vi både expertis inom trädgårdsdesign, anläggning & skötsel, men också ett drivet gäng av ambitiösa studenter.
                Anlita oss för att tillsammans skapa en magisk trädgård.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#kontakt"
                  className="rounded-2xl bg-[#e7c9ae] px-6 py-3 font-medium text-[#0b2510] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f0d8c2]"
                >
                  Kontakta oss
                </a>
                <a
                  href="#projekt"
                  className="rounded-2xl border border-[#e7c9ae]/40 bg-white/10 px-6 py-3 font-medium text-[#f5f1eb] transition hover:bg-white/15"
                >
                  Se projekt
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-[#f5f1eb]">
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-sm backdrop-blur">
                  Trädgårdsdesign
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-sm backdrop-blur">
                  Skötsel & beskärning
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-sm backdrop-blur">
                  RUT-berättigade tjänster
                </span>
              </div>

              <div className="mt-14 flex flex-col items-center text-[#d9e6c8]">
                <span className="text-sm tracking-wide">Scrolla vidare</span>
                <div className="mt-2 flex h-10 w-6 justify-center rounded-full border border-[#d9e6c8]/40 p-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-[#d9e6c8]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      




  {/* Innehåll */}
  <div className="relative z-10">

  <div className="absolute inset-0 z-[2] bg-black/25" />

  <div className="relative z-10">


 <section
  id="kampanj"
  className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-10 md:py-16 lg:px-12"
>
  <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-[#d4af37]/50 bg-[#050505] shadow-[0_30px_100px_rgba(0,0,0,0.9)] md:rounded-[2.5rem]">
    {/* Bakgrund */}
    <div
      className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
      style={{ backgroundImage: "url('/kort-vibe.jpeg')" }}
    />
    <div className="absolute inset-0 z-0 bg-black/65" />
    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_45%,rgba(212,175,55,0.22),rgba(5,5,5,0.9)_42%,rgba(0,0,0,1)_100%)]" />

    <div className="relative z-20 p-5 sm:p-8 md:p-12 lg:p-14">
      <div className="max-w-2xl rounded-[1.5rem] border border-white/10 bg-black/70 p-5 shadow-2xl backdrop-blur-sm sm:p-7 md:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-black px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg sm:px-4 sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
        Säsongs erbjudande
        </div>

        <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:mt-6 md:text-5xl lg:text-6xl">
          Sommarsol
          
          
        </h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-white sm:text-lg md:mt-5 md:text-xl md:leading-8">
          10% rabatt för nya kunder under sommaren.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-xs text-white sm:gap-3 sm:text-sm md:mt-6">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 sm:px-4">
            Nya kunder
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 sm:px-4">
            Gäller under våren
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 sm:px-4">
            Vid köp av paket
          </span>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9">
          <a
            href="#kontakt"
            className="rounded-2xl border border-[#d4af37]/50 bg-[#f6d86b] px-5 py-3 text-center font-semibold text-white"
          >
            Boka platsbesök
          </a>

          <a
            href="#tjanster"
            className="rounded-2xl border border-white/25 bg-black/60 px-5 py-3 text-center font-semibold text-white"
          >
            Se våra tjänster
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="relative overflow-hidden">
  {/* Fixed-känsla, men bara inom denna wrapper */}
  <div
    className="absolute inset-0 z-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/kort-vibe.jpeg')",
      backgroundAttachment: "fixed",
    }}
  />

  <div className="absolute inset-0 z-0 bg-black/45" />

  <div className="relative z-10">


      <section id="om-oss" className="px-6 py-20 md:px-10">
        
  <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#f7f3ed] p-8 shadow-xl md:p-12 text-center">
      
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
          Om oss
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">
          Från studenter till ett växande trädgårdsföretag
        </h2>
        <p className="mt-6 text-lg leading-8 text-stone-600">
          Alnarps Potential grundades 2025 av studenter med en gemensam passion för
          trädgård, design och hållbara utemiljöer. Det som började som ett sätt
          att kombinera studier med praktiskt arbete har vuxit till ett företag
          där vi erbjuder både kreativ planering och professionellt utförande.
        </p>
        <p className="mt-4 text-lg leading-8 text-stone-600">
          Vi drivs av att skapa trädgårdar som känns levande, personliga och
          genomtänkta. Genom att arbeta nära våra kunder och ta vara på platsens
          unika förutsättningar vill vi skapa långsiktiga lösningar som håller
          över tid.
        </p>
        <p className="mt-4 text-lg leading-8 text-stone-600">
          Vårt mål är att bygga ett företag där studenter får möjlighet att
          utvecklas, samtidigt som vi levererar hög kvalitet och skapar verkligt
          värde för våra kunder.
        </p>
        <p className="mt-4 text-lg leading-8 text-stone-600">
          Vi erbjuder trädgårdsdesign, trädgårdsskötsel och rådgivning i Malmö,
    Lund, Lomma, Bjärred och övriga Skåne. Vi hjälper dig att utveckla
    din trädgård utifrån platsens förutsättningar.
        </p>
        </div>
</section>

     <section id="Teamet" className="px-6 py-20 md:px-10">
  <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#f7f3ed] p-8 shadow-xl md:p-12">
  <div className="text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
      Teamet
    </p>
    <h3 className="mt-3 text-2xl font-semibold text-stone-900 md:text-3xl">
      Personerna bakom Alnarps Potential
    </h3>
    <p className="mt-4 text-lg text-stone-600">
      Vi är studenter med olika bakgrunder inom trädgård och design, men
      med ett gemensamt driv att skapa genomtänkta och levande utemiljöer.
    </p>
  </div>

  <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
    {TEAM_MEMBERS.map((member) => (
      <div key={member.name} className="group text-center">
        <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl bg-stone-200 shadow-md">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <h4 className="mt-4 text-lg font-semibold text-stone-900">
          {member.name}
        </h4>
        <p className="text-sm text-stone-500">{member.role}</p>

        <p className="mt-3 text-sm leading-6 text-stone-600">
          {member.shortText}
        </p>

        <Link
          href={`/team#${member.slug}`}
          className="mt-4 inline-block rounded-xl bg-[#a56a3a] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#8c582f]"
        >
          Läs mer
        </Link>
      </div>
    ))}
  </div>
  </div>
</section>

     <section id="tjanster" className="px-6 py-20 md:px-10">
  <div className="relative mx-auto max-w-6xl rounded-[2rem] bg-[#f7f3ed] p-8 shadow-xl md:p-12">
    

    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
        Våra tjänster
      </p>

      <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">
        Det här kan vi hjälpa dig med
      </h2>

      <p className="mt-4 text-lg text-stone-600">
        Vi skapar lösningar som passar platsen, säsongen och dina behov från
        första idé till löpande skötsel.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {SERVICES.map((item) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-stone-200 bg-gradient-to-br from-white via-[#f7f3ed] to-[#eef3ee] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:from-[#eef3ee] hover:to-[#e4efe4] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
        >
          <div
            className={`mb-4 h-12 w-12 rounded-2xl ${item.color} opacity-80 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:opacity-100`}
          />

          <h3 className="mt-2 text-xl font-semibold text-stone-900">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-stone-600">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="rut" className="px-6 py-20 md:px-10">
  <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#f7f3ed] p-8 shadow-xl md:p-12">
    <div className="rounded-[2rem] border border-green-200 bg-gradient-to-br from-green-50 via-[#eef7ee] to-[#dfeedd] px-8 py-10 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
        RUT-information
      </p>

      <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">
        Vissa trädgårdstjänster är RUT-berättigade
      </h2>

      <p className="mt-5 text-lg leading-8 text-green-900">
        Vanlig enklare trädgårdsservice som gräs- och häckklippning är
        RUT-berättigad, vilket betyder att du bara betalar halva
        arbetskostnaden. Även trädbeskärning är numera RUT-berättigad.
      </p>

      <p className="mt-4 text-lg leading-8 text-green-900">
        Däremot omfattas inte anläggningsarbete av RUT-avdrag. Observera också
        att bortforsling av trädgårdsavfall till återbruket inte är
        RUT-berättigat.
      </p>
    </div>
  </div>
</section>
       </div>
</div>
</div>
</div>
  

<section className="bg-[#f8f6f1]">
  <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-24">
    <div className="text-center lg:text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 sm:text-sm">
        Därför väljer kunder oss
      </p>

      <h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl md:text-5xl lg:mx-0">
        Ett personligt och genomtänkt sätt att arbeta
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 lg:mx-0">
        Vi tror på tydlig kommunikation, hållbara lösningar och ett öga för
        både helhet och detaljer. Målet är alltid att skapa en trädgård som
        känns rätt för dig och platsen.
      </p>
    </div>

    <div className="group relative overflow-hidden rounded-[1.5rem] bg-stone-950 p-5 shadow-2xl shadow-stone-900/20 sm:rounded-[2rem] sm:p-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-700/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#e7c9ae]/20 blur-3xl" />
      </div>

      <div className="relative text-center sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c7d9a8] sm:text-sm">
          Instagram
        </p>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-3 inline-block break-all text-xl font-semibold text-white transition hover:text-[#e7c9ae] sm:text-2xl"
        >
          @alnarps_potential

          <svg
            className="pointer-events-none absolute -left-40 top-[-18px] hidden h-28 w-40 opacity-60 transition group-hover:animate-[wiggleX_1.2s_ease-in-out_infinite] group-hover:opacity-100 lg:block"
            viewBox="0 0 160 120"
          >
            <path
              d="M10 20 C70 20 70 80 120 80"
              stroke="#dc2626"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                filter: "drop-shadow(0 0 6px rgba(220,38,38,0.6))",
              }}
            />

            <path
              d="M120 80 L100 65 M120 80 L100 95"
              stroke="#dc2626"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              className="opacity-0 transition-opacity delay-500 duration-200 group-hover:opacity-100"
              style={{
                filter: "drop-shadow(0 0 6px rgba(220,38,38,0.6))",
              }}
            />
          </svg>
        </a>

        <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-stone-200/80 sm:mx-0">
          Följ vårt arbete, se aktuella projekt och få inspiration till din
          egen trädgård.
        </p>

        <div className="mt-7 flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:text-left">
          <div className="rounded-3xl bg-white p-3 shadow-xl sm:p-4">
            <img
              src={INSTAGRAM_QR_URL}
              alt="QR-kod till Alnarps Potential på Instagram"
              className="h-36 w-36 rounded-2xl sm:h-40 sm:w-40"
            />
          </div>

          <p className="max-w-xs text-sm leading-6 text-green-50/75">
            Skanna QR-koden för att komma direkt till vår Instagram.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section
        id="projekt"
        className="mx-auto max-w-7xl bg-[#EEF3EE] px-6 py-20 md:px-10 lg:px-12"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Tidigare projekt
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">
            Exempel på vårt arbete
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Här är några exempel på trädgårdar och miljöer vi har arbetat med
            från uppfräschning till mer omfattande förändringar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="relative h-[500px] w-full overflow-hidden">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white transition group-hover:opacity-0">
                  FÖRE
                </span>
                <span className="absolute left-4 top-4 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  EFTER
                </span>

                <img
                  src={project.before}
                  alt={`${project.title} före`}
                  className="absolute inset-0 h-full w-full object-contain transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
                />
                <img
                  src={project.after}
                  alt={`${project.title} efter`}
                  className="absolute inset-0 h-full w-full object-contain opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-600">{project.text}</p>
              </div>
            </article>
          
          ))}
        </div>
      </section>

      <section id="kontakt" className="relative w-full overflow-hidden">
  
  {/* FULLBREDD bakgrund */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/foot-bakgrund-1.jpeg')" }}
  />
  <div className="absolute inset-0 bg-black/60" />

  {/* INNEHÅLL (centrerat) */}
  <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
    
    <div className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,#254f2c,#0f2414_45%,#06140a)] px-8 py-12 text-white shadow-2xl md:px-12">
      
      {/* resten av din kod */}
      
   
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7d9a8]">
          Kontakt
        </p>

        <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
          Redo att ge din trädgård ny potential?
        </h2>

        <p className="mt-6 text-lg leading-8 text-green-50/90">
          Hör av dig så hjälper vi dig att hitta rätt upplägg för just din
          trädgård oavsett om du behöver design, skötsel eller ett större
          lyft.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:alnarpspotential@gmail.com"
            className="rounded-2xl bg-[#a56a3a] px-6 py-3 font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#8c582f]"
          >
            Skicka mail
          </a>

          <a
            href="tel:+46724332746"
            className="rounded-2xl border border-white/40 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Ring oss
          </a>
        </div>

        <div className="mt-10 space-y-4">
          
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-wide text-[#c7d9a8]">
              Email
            </p>
            <p className="mt-1 text-lg font-medium">
              alnarpspotential@gmail.com
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-wide text-[#c7d9a8]">
              Telefon
            </p>
            <p className="mt-1 text-lg font-medium">072-433 27 46</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-wide text-[#c7d9a8]">
              Adress
            </p>
            <p className="mt-1 text-lg font-medium">Sundsvägen 5</p>
          </div>
        </div>
      </div>

      <form
  onSubmit={handleContactSubmit}
  className="relative overflow-hidden rounded-2xl border border-[#8a6d58]/50 bg-[#1b1a17] p-8 shadow-2xl md:p-12"
>
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70"
    style={{ backgroundImage: "url('/Kontakt-1.jpeg')" }}
  />
  <div className="absolute inset-0 bg-black/55" />

  <div className="pointer-events-none absolute inset-3 rounded-xl border border-[#8a6d58]/70" />
  <div className="pointer-events-none absolute inset-6 rounded-lg border border-[#8a6d58]/30" />

  <div className="relative z-10">
    <img
      src="/kontakt-logga-2.jpeg"
      alt="Alnarps Potential logga"
      className="mb-8 h-24 w-auto object-contain"
    />

    <div className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm text-[#efe6dc]">
          Namn
        </label>
        <input
          id="name"
          required
          name="name"
          value={contactForm.name}
          onChange={handleContactChange}
          type="text"
          placeholder="Ditt namn"
          className="mt-2 w-full rounded-md border border-[#8a6d58]/80 bg-black/25 px-4 py-3 text-white placeholder-[#efe6dc]/60 outline-none focus:border-[#c79a6d] focus:ring-1 focus:ring-[#c79a6d]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-[#efe6dc]">
          E-post
        </label>
        <input
          id="email"
          required
          name="email"
          value={contactForm.email}
          onChange={handleContactChange}
          type="email"
          placeholder="din@email.se"
          className="mt-2 w-full rounded-md border border-[#8a6d58]/80 bg-black/25 px-4 py-3 text-white placeholder-[#efe6dc]/60 outline-none focus:border-[#c79a6d] focus:ring-1 focus:ring-[#c79a6d]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-[#efe6dc]">
          Meddelande
        </label>
        <textarea
          id="message"
          required
          name="message"
          value={contactForm.message}
          onChange={handleContactChange}
          rows={5}
          placeholder="Skriv ditt meddelande här..."
          className="mt-2 w-full rounded-md border border-[#8a6d58]/80 bg-black/25 px-4 py-3 text-white placeholder-[#efe6dc]/60 outline-none focus:border-[#c79a6d] focus:ring-1 focus:ring-[#c79a6d]"
        />
      </div>

      <Turnstile
  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
  onVerify={(token) => setCaptchaToken(token)}
  onExpire={() => setCaptchaToken("")}
/>

      <button
  type="submit"
  disabled={contactStatus.type === "loading" || !captchaToken}
  className="w-full rounded-md bg-[#c79a6d] px-6 py-4 font-medium text-[#160f0b] shadow-lg transition hover:bg-[#e7c9ae] disabled:cursor-not-allowed disabled:opacity-70"
>
  {contactStatus.type === "loading" ? "Skickar..." : "Skicka förfrågan"}
</button>

      {contactStatus.message && (
        <p
          className={`text-sm ${
            contactStatus.type === "success"
              ? "text-emerald-100"
              : "text-red-100"
          }`}
        >
          {contactStatus.message}
        </p>
      )}

      <p className="pt-1 text-center text-xs text-[#efe6dc]/70">
        🔒 Vi behandlar dina uppgifter enligt vår integritetspolicy.
      </p>
    </div>
  </div>
</form>
    </div>
  </div>
  </div>
</section>
      <footer className="bg-stone-950 px-6 py-10 text-stone-200 md:px-10 lg:px-12">
  <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
    <div>
      <img
        src="/logga_svartbakgrund-03.png"
        alt="Alnarps Potential logga"
        className="h-12 w-auto rounded-full"
      />
      <p className="mt-4 max-w-sm text-sm leading-6 text-stone-400">
        Alnarps Potential hjälper dig med trädgårdsdesign, skötsel och
        genomtänkta utemiljöer.
      </p>
      <p className="mt-4 max-w-sm text-sm leading-6 text-stone-400">
        Trädgårdstjänster i Malmö, Lund, Lomma, Bjärred och hela Skåne
  </p>
    </div>

    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
        Snabbmeny
      </h3>
      <nav className="mt-4 grid gap-3 text-sm">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-stone-400 transition hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>

    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
        Policy
      </h3>
      <nav className="mt-4 grid gap-3 text-sm">
        <Link
    href="/villkor"
    className="text-stone-400 transition hover:text-white"
  >
    Villkor för tjänster
  </Link>
        <Link href="/integritetspolicy" className="text-stone-400 transition hover:text-white">
          Integritetspolicy
        </Link>
        <Link href="/cookiepolicy" className="text-stone-400 transition hover:text-white">
          Cookiepolicy
        </Link>
      </nav>

      <p className="mt-6 text-sm text-stone-500">
        © {new Date().getFullYear()} Alnarps Potential
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}