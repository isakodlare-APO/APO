import Link from "next/link";

const NAV_ITEMS = [
  { id: "hem", label: "Hem" },
  { id: "kampanj", label: "Kampanj" },
  { id: "om-oss", label: "Om oss" },
  { id: "tjanster", label: "Tjänster" },
  { id: "projekt", label: "Projekt" },
  { id: "kontakt", label: "Kontakt" },
];

const SECTIONS = [
  { id: "avtalsvillkor", label: "Avtalsvillkor" },
  { id: "abonnemang", label: "Abonnemang" },
  { id: "paket", label: "Paket" },
  { id: "gestaltning", label: "Gestaltning" },
  { id: "ovrigt", label: "Övrigt" },
];

export default function VillkorPage() {
  return (
    <main className="min-h-screen bg-[#eef3ee] text-stone-800">
      <section className="bg-[linear-gradient(135deg,#0f2414,#154f1c,#2d261f)] px-6 py-16 text-white md:px-10">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            ← Tillbaka
          </Link>

          <div className="mt-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9e6c8]">
              Alnarps Potential
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Villkor för tjänster
            </h1>

            <p className="mt-6 text-lg leading-8 text-green-50/90">
              Här hittar du våra villkor för abonnemang, paket,
              gestaltningsuppdrag och övriga tjänster.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 md:px-10">
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a56a3a]">
            Hoppa till sektion
          </p>

          <nav className="mt-4 flex flex-wrap gap-2 text-sm">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full bg-[#eef3ee] px-4 py-2 font-medium text-stone-700 transition hover:bg-[#0f2414] hover:text-white"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 grid gap-8">
          <section
            id="avtalsvillkor"
            className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10"
          >
            <SectionLabel>Avtalsvillkor</SectionLabel>
            <SectionTitle>Allmänna avtalsvillkor</SectionTitle>

            <TextBlock>
              <p>
                Dessa villkor gäller för samtliga tjänster som utförs av
                Alnarps Potential, om inget annat skriftligen avtalats.
              </p>

              <p>
                Avtal anses ingånget när kund har accepterat offert, bokat
                tjänst eller betalat faktura. Genom detta godkänner kunden även
                gällande villkor.
              </p>

              <p>
                Tjänster utförs enligt överenskommen omfattning. Mindre
                justeringar kan ske beroende på platsens förutsättningar,
                säsong och väder.
              </p>

              <p>
                Priser anges enligt aktuell prislista eller offert. Samtliga
                priser kan justeras vid förändringar i omfattning eller
                oförutsedda förhållanden.
              </p>

              <p>
                Betalning ska ske enligt angivna betalningsvillkor på faktura.
                Vid försenad betalning förbehåller vi oss rätten att debitera
                dröjsmålsränta enligt lag.
              </p>

              <p>
                Alnarps Potential ansvarar för att arbetet utförs fackmässigt,
                men ansvarar inte för skador som beror på dolda fel i mark,
                befintliga installationer eller andra omständigheter utanför vår
                kontroll.
              </p>

              <p>
                Eventuella tilläggsarbeten utförs efter dialog med kund och
                debiteras enligt gällande prislista.
              </p>

              <p>
                Tvister ska i första hand lösas genom dialog mellan parterna.
                Om enighet inte nås avgörs tvisten enligt svensk lag.
              </p>
            </TextBlock>
          </section>

          <section
            id="abonnemang"
            className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10"
          >
            <SectionLabel>Abonnemang</SectionLabel>
            <SectionTitle>Villkor för abonnemang</SectionTitle>

            <TextBlock>
              <p>
                Årsabonnemang baseras på ett rabatterat pris i utbyte mot en
                överenskommen årsvis omfattning. Abonnemang löper i 12 månader
                från startdatum.
              </p>

              <p>
                Uppsägning ska ske skriftligen senast 30 dagar innan nästa
                abonnemangsperiod. Om uppsägning inte sker i tid kan
                abonnemanget förnyas enligt överenskommelse.
              </p>

              <p>
                Vid uppsägning innan avtalstidens slut justeras priset för
                redan utförda tjänster till ordinarie paketpris. Eventuell
                mellanskillnad faktureras i efterhand.
              </p>

              <p>
                Outnyttjade tjänster återbetalas inte, men kan i vissa fall
                ombokas efter överenskommelse och beroende på säsong,
                tillgänglighet och arbetsplanering.
              </p>
            </TextBlock>
          </section>

          <section
            id="paket"
            className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10"
          >
            <SectionLabel>Paket</SectionLabel>
            <SectionTitle>Villkor för enstaka paket</SectionTitle>

            <TextBlock>
              <p>
                Våra paket utförs enligt överenskommen omfattning och offert.
                Slutpris kan variera beroende på trädgårdens storlek,
                tillgänglighet, skick och eventuella tillval.
              </p>

              <p>
                Material, växter, jord, bortforsling av trädgårdsavfall och
                resekostnader ingår endast om detta tydligt anges i offerten.
              </p>

              <p>
                Ombokning kan göras efter överenskommelse. Vid väder, sjukdom
                eller andra omständigheter som påverkar arbetet kan datum behöva
                justeras.
              </p>
            </TextBlock>
          </section>

          <section
            id="gestaltning"
            className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10"
          >
            <SectionLabel>Gestaltning</SectionLabel>
            <SectionTitle>Villkor för gestaltning</SectionTitle>

            <TextBlock>
              <p>
                Gestaltningsuppdrag omfattar idéarbete, planering och
                designunderlag enligt överenskommen nivå. Exakt innehåll
                bestäms i offert eller skriftlig överenskommelse.
              </p>

              <p>
                Eventuella ändringar utöver avtalad omfattning kan debiteras
                som tilläggsarbete. Större revideringar, extra platsbesök eller
                kompletterande ritningar prissätts separat.
              </p>

              <p>
                Levererat material får användas av kunden för det aktuella
                projektet. Alnarps Potential äger rätt att visa projektet i
                portfolio och marknadsföring, om inget annat avtalas.
              </p>
            </TextBlock>
          </section>

          <section
            id="ovrigt"
            className="rounded-[2rem] bg-[#e7c9ae] p-8 shadow-xl md:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6d080c]">
              Övrigt
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#0b2510]">
              Övriga villkor
            </h2>

            <p className="mt-5 leading-7 text-[#2d261f]">
              Reseavgift, bortforsling av material, växtinköp och andra
              materialkostnader kan tillkomma om inget annat anges. Alla priser
              och upplägg bekräftas innan arbetet påbörjas.
            </p>
          </section>
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

              <Link
                href="/integritetspolicy"
                className="text-stone-400 hover:text-white"
              >
                Integritetspolicy
              </Link>

              <Link
                href="/cookiepolicy"
                className="text-stone-400 hover:text-white"
              >
                Cookiepolicy
              </Link>
            </nav>

            <p className="mt-6 text-sm text-stone-500">
              © {new Date().getFullYear()} Webbdesign & design av Isak Odlare
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a56a3a]">
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mt-3 text-3xl font-semibold text-stone-900">{children}</h2>
  );
}

function TextBlock({ children }) {
  return (
    <div className="mt-6 space-y-4 leading-7 text-stone-600">{children}</div>
  );
}
