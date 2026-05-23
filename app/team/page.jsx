"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "hem", label: "Hem" },
  { id: "kampanj", label: "Kampanj" },
  { id: "om-oss", label: "Om oss" },
  { id: "tjanster", label: "Tjänster" },
  { id: "projekt", label: "Projekt" },
  { id: "kontakt", label: "Kontakt" },
];

const TEAM_MEMBERS = [
  {
    slug: "shannon-chao",
    name: "Shannon Chao",
    role: "Trädgårdsingenjör Design",
    image: "/shannon-4.jpeg",
    intro:
      "Shannon arbetar med trädgårdsdesign där form, känsla och funktion får mötas på ett naturligt sätt.",
    qualifications: [
      "Examinerad trädgårdsingenjör med inriktning design",
      "Studerar sin master på Malmö Universitet",
      "Arbetar med växtval, form och helhetsgestaltning",
    ],
    text:
      "Shannon tycker om att skapa trädgårdar som känns både genomtänkta och levande. Hennes arbete utgår från kundens behov, platsens förutsättningar och en stark känsla för helhet. Hon brinner särskilt för färg, struktur och miljöer som håller över tid.",
  },
  {
    slug: "dastin-jersey",
    name: "Dastin Jerzey",
    role: "Trädgårdsingenjör Design",
    image: "/dastin-3.jpeg",
    intro:
      "Dastin kombinerar designidéer med praktisk förståelse för hur en trädgård faktiskt används i vardagen samt moderna trädgårdsskötslingsmetoder",
    qualifications: [
      "Examinerad trädgårdsmästare",
      "Certifierat motorsågskort",
      "Studerar trädgårdsingenjör med inriktning design",
    ],
    text:
      "Jag är en kreativ trädgårdsdesigner som alltid hittar oväntade lösningar och tänker utanför boxen, jag utgår från platsens förutsättningar och förvandlar dem till levande trädgårdsmiljöer. Att kunna njuta och trivas i trädgården är centralt för mig. På fritiden ägnar jag mig åt konst och vårdandet av min klassiska bil.",
  },
  {
    slug: "isak-odlare",
    name: "Isak Odlare",
    role: "Trädgårdsingenjör Odling",
    image: "/isak-2.jpeg",
    intro:
      "Isak har ett särskilt intresse för växter, odling och långsiktigt välmående gröna miljöer.",
    qualifications: [
      "Studerar trädgårdsingenjör med inriktning odling",
      "Jobbat som ammanuens för Farm4Future på MDU",
      "Examinerad inom webbutveckling & gränssnittsdesign",
    ],
    text:
      "Jag har alltid haft ett intresse för naturen och växter och har nu spenderat de senaste åren med att fördjupa mig i olika fält, den resan har tagit mig hit. Jag är väldigt glad med att kunna få säga att jag älskar mitt jobb.",
  },
];

export default function TeamPage() {
  const [activeMember, setActiveMember] = useState(TEAM_MEMBERS[0]);

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const matched = TEAM_MEMBERS.find((member) => member.slug === hash);

      if (matched) {
        setActiveMember(matched);
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  const handleSelectMember = (member) => {
    setActiveMember(member);
    window.history.replaceState(null, "", `#${member.slug}`);
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-fixed text-stone-800"
      style={{
        backgroundImage:
          "linear-gradient(rgba(248,246,241,0.82), rgba(248,246,241,0.88)), url('/team-bakgrund-1.jpeg')",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-12">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Teamet
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-stone-900 md:text-5xl">
              Lär känna oss bättre
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
              Här kan du läsa mer om personerna bakom Alnarps Potential, våra
              bakgrunder, kvalifikationer och vad vi brinner för.
            </p>
          </div>

          <Link
            href="/#om-oss"
            className="rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-700 shadow-sm transition hover:bg-stone-100"
          >
            Tillbaka till startsidan
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
  <aside className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-sm">
    <div className="space-y-3">
      {TEAM_MEMBERS.map((member) => (
        <button
          key={member.slug}
          type="button"
          onClick={() => handleSelectMember(member)}
          className={`w-full rounded-2xl px-4 py-4 text-left transition ${
            activeMember.slug === member.slug
              ? "bg-[#a56a3a] text-white shadow-md"
              : "bg-stone-50 text-stone-700 hover:bg-stone-100"
          }`}
        >
          <div className="font-semibold">{member.name}</div>
          <div
            className={`text-sm ${
              activeMember.slug === member.slug
                ? "text-white/80"
                : "text-stone-500"
            }`}
          >
            {member.role}
          </div>
        </button>
      ))}
    </div>
  </aside>

  <motion.section
    className="group relative overflow-visible rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-10"
    initial="rest"
    whileHover="hover"
  >
    {activeMember.slug === "isak-odlare" && (
     <motion.img
  src="/flower-frame-3.png"
  alt=""
  className="pointer-events-none absolute 
    left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2
    z-20   
    w-[calc(100%+8rem)] 
    h-[calc(100%+8rem)] 
    object-contain"
  variants={{
    rest: {
      opacity: 0,
      scale: 1.1,
      clipPath: "inset(100% 0% 0% 0%)",
    },
    hover: {
      opacity: 1,
      scale: 1.25,
      clipPath: "inset(0% 0% 0% 0%)",
    },
  }}
  transition={{ duration: 1.3, ease: "easeOut" }}
/>
    )}

    <div className="relative z-30">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMember.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
            <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-3xl bg-stone-200 shadow-md md:mx-0 md:w-44">
              <img
                src={activeMember.image}
                alt={activeMember.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Medarbetare
              </p>

              <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                {activeMember.name}
              </h2>

              <p className="mt-2 text-lg text-stone-500">
                {activeMember.role}
              </p>

              <p className="mt-6 text-lg leading-8 text-stone-700">
                {activeMember.intro}
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-stone-900">
                  Kvalifikationer
                </h3>

                <ul className="mt-4 space-y-3">
                  {activeMember.qualifications.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-stone-50 px-4 py-3 text-stone-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-stone-900">
                  Personligt
                </h3>
                <p className="mt-4 leading-8 text-stone-600">
                  {activeMember.text}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </motion.section>

      </div>
      </div>
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
            <h2 className="mt-4 max-w-sm text-sm leading-6 text-stone-400">Trädgårdsdesign i Skåne</h2>

<p className="mt-4 max-w-sm text-sm leading-6 text-stone-400">
  Vi arbetar med trädgårdsdesign i Malmö, Lund och hela Skåne.
  Våra lösningar anpassas efter plats, jord och ljusförhållanden.
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
                  href={`/#${item.id}`}
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
              <Link href="/villkor" className="text-stone-400 hover:text-white">
                Villkor för tjänster
              </Link>
              <Link href="/integritetspolicy" className="text-stone-400 hover:text-white">
                Integritetspolicy
              </Link>
              <Link href="/cookiepolicy" className="text-stone-400 hover:text-white">
                Cookiepolicy
              </Link>
            </nav>

            <p className="mt-6 text-sm text-stone-500">
              © {new Date().getFullYear()} Alnarps Potential
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function IsakHoverFlowers() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-visible">
      {[15, 38, 62, 82].map((left, index) => (
        <motion.div
          key={left}
          className="absolute bottom-4"
          style={{ left: `${left}%` }}
          variants={{
            rest: {
              y: 70,
              scale: 0,
              opacity: 0,
            },
            hover: {
              y: -70,
              scale: 1,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            ease: "easeOut",
          }}
        >
          <div className="relative h-24 w-10">
            <div className="absolute bottom-0 left-1/2 h-20 w-1 -translate-x-1/2 rounded-full bg-emerald-700" />

            <div className="absolute bottom-8 left-1/2 h-7 w-4 -translate-x-1/2 rotate-[-35deg] rounded-full bg-lime-500" />
            <div className="absolute bottom-12 left-1/2 h-7 w-4 -translate-x-1/2 rotate-[35deg] rounded-full bg-emerald-500" />

            <motion.div
              className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2"
              variants={{
                rest: { scale: 0, rotate: -20 },
                hover: { scale: 1, rotate: 0 },
              }}
              transition={{
                delay: 0.25 + index * 0.08,
                type: "spring",
                stiffness: 180,
              }}
            >
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute left-1/2 top-1/2 h-7 w-4 -ml-2 -mt-6 origin-bottom rounded-full bg-gradient-to-b from-pink-200 to-rose-500 shadow-sm"
                  style={{ rotate: `${deg}deg` }}
                />
              ))}

              <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-inner" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}