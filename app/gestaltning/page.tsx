import Link from "next/link";
const NAV_ITEMS = [
  { id: "hem", label: "Hem" },
  { id: "kampanj", label: "Kampanj" },
  { id: "om-oss", label: "Om oss" },
  { id: "tjanster", label: "Tjänster" },
  { id: "projekt", label: "Projekt" },
  { id: "kontakt", label: "Kontakt" },
];

const DESIGN_PLANS = [
  {
    title: "Start",
    subtitle: "För dig som vill få riktning och idéer",
    price: "",
    image: "/start-2.jpeg",
    items: [
      "Enkel behovsanalys",
      "Övergripande gestaltningsidé",
      "En designskiss",
      "Förslag på känsla, form och funktion",
      "Kort växt- och materialinspiration",
    ],
  },
  {
    title: "Form",
    subtitle: "För dig som vill ha en tydligare plan",
    price: "",
    highlighted: true,
    image: "/form-1.jpeg",
    items: [
      "Platsanalys",
      "Gestaltningsförslag i planvy",
      "Växtförslag anpassat efter platsen",
      "Material- och strukturförslag",
      "En revideringsrunda",
      "Sammanfattande designunderlag",
    ],
  },
  {
    title: "Helhet",
    subtitle: "För större projekt och genomtänkta utemiljöer",
    price: "",
    image: "gestaltning-kort-2.jpeg",
    items: [
      "Fördjupad platsanalys",
      "Komplett gestaltningskoncept",
      "Detaljerad planritning",
      "Växt- och materiallista",
      "Moodboard / stilriktning",
      "Två revideringsrundor",
      "Rådgivning inför utförande",
    ],
  },
];

export default function GestaltningPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] text-stone-800">
      <section className="relative flex min-h-[60vh] items-center overflow-hidden px-6 py-20 text-white md:px-10">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/team-bakgrund-1.jpeg')",
          }}
        />

        <div className="absolute inset-0 z-10 bg-black/50" />

        <div className="relative z-20 mx-auto max-w-6xl">
          <Link
            href="/prislista"
            className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            ← Tillbaka till prislistan
          </Link>

          <div className="mt-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9e6c8]">
              Gestaltning
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Trädgårdsdesign som tar fram platsens potential
            </h1>

            <p className="mt-6 text-lg leading-8 text-green-50/90">
              Våra gestaltningspaket passar dig som vill skapa en mer
              genomtänkt, funktionell och vacker utemiljö — från första idé till
              tydligare designunderlag.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {DESIGN_PLANS.map((plan) => (
            <article
              key={plan.title}
              className={
                plan.highlighted
                  ? "relative overflow-hidden rounded-[2rem] border border-[#f3c8d8] bg-[linear-gradient(135deg,#fff1c7,#ffd6e8,#dff5dc,#cde7ff)] p-7 shadow-xl shadow-pink-100/80 transition hover:-translate-y-1 hover:shadow-2xl"
                  : "rounded-[2rem] border border-stone-200 bg-white p-7 shadow-xl shadow-stone-200/60 transition hover:-translate-y-1 hover:shadow-2xl"
              }
            >
              {plan.highlighted && (
                <>
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ffb7cf]/50 blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#81c784]/40 blur-2xl" />
                  <div className="absolute right-6 top-6 text-4xl">🌸</div>
                </>
              )}
{plan.image && (
  <div className="relative mb-6 h-44 overflow-hidden rounded-[1.5rem]">
    <img
      src={plan.image}
      alt={`${plan.title} gestaltningspaket`}
      className="h-full w-full object-cover transition duration-500 hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/10" />
  </div>
)}
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a56a3a]">
                  {plan.title}
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-[#0b2510]">
                  {plan.subtitle}
                </h2>

                <p className="mt-6 rounded-full bg-[#EEF3EE] px-4 py-2 text-center text-lg font-semibold text-green-900">
                  {plan.price}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-stone-200/70 pb-4 text-stone-700 last:border-0"
                    >
                      ✓ {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#kontakt"
                  className="mt-8 inline-flex w-full justify-center rounded-xl bg-[#0f2414] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#154f1c]"
                >
                  Be om offert
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-[#e7c9ae] p-8 shadow-xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6d080c]">
            Så fungerar processen
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#0b2510]">
            Från idé till tydlig riktning
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["1. Samtal", "2. Skiss", "3. Gestaltning"].map((step, index) => (
              <div key={step} className="rounded-2xl bg-white/70 p-6">
                <h3 className="font-semibold text-[#0b2510]">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  {index === 0 &&
                    "Vi börjar med dina behov, platsens förutsättningar och vilken känsla du vill skapa."}
                  {index === 1 &&
                    "Vi tar fram riktning, formspråk och idéer för hur ytan kan utvecklas."}
                  {index === 2 &&
                    "Du får ett tydligt underlag som hjälper dig att gå vidare med anläggning eller fortsatt planering."}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-stone-500">
          Alla priser är exempelpriser exkl. moms. Slutpris beror på projektets
          omfattning, platsens storlek och önskat underlag.
        </p>
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