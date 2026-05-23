import Link from "next/link";
const NAV_ITEMS = [
  { id: "hem", label: "Hem" },
  { id: "kampanj", label: "Kampanj" },
  { id: "om-oss", label: "Om oss" },
  { id: "tjanster", label: "Tjänster" },
  { id: "projekt", label: "Projekt" },
  { id: "kontakt", label: "Kontakt" },
];
export default function Cookiepolicy() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16 text-stone-800 md:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex rounded-xl bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          ← Tillbaka till startsidan
        </Link>

        <h1 className="mt-10 text-3xl font-semibold md:text-4xl">
          Cookiepolicy
        </h1>

        <p className="mt-6 leading-7">
          Denna cookiepolicy förklarar hur Alnarps Potential använder cookies
          och liknande tekniker på webbplatsen.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Vad är cookies?
        </h2>
        <p className="mt-3 leading-7">
          Cookies är små textfiler som sparas på din enhet när du besöker en
          webbplats. De kan användas för att webbplatsen ska fungera, förbättra
          användarupplevelsen eller samla in statistik.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Vilka cookies vi använder
        </h2>
        <p className="mt-3 leading-7">
          Webbplatsen kan använda nödvändiga cookies för grundläggande funktioner,
          exempelvis säkerhet och formulärfunktionalitet.
        </p>

        <p className="mt-3 leading-7">
          Om vi använder analyscookies, marknadsföringscookies eller andra
          icke-nödvändiga cookies ska dessa endast användas efter att du har
          lämnat ditt samtycke.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Samtycke
        </h2>
        <p className="mt-3 leading-7">
          Du ska kunna välja om du vill acceptera icke-nödvändiga cookies. Du
          ska också kunna ändra eller återkalla ditt samtycke i efterhand.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Tredjepartstjänster
        </h2>
        <p className="mt-3 leading-7">
          Om webbplatsen använder externa tjänster, till exempel formulärtjänster,
          statistikverktyg eller inbäddat innehåll, kan dessa aktörer placera
          cookies eller behandla teknisk information enligt sina egna villkor.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Hantera cookies
        </h2>
        <p className="mt-3 leading-7">
          Du kan blockera eller radera cookies i din webbläsares inställningar.
          Observera att vissa funktioner på webbplatsen kan fungera sämre om du
          blockerar nödvändiga cookies.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Kontakt
        </h2>
        <p className="mt-3 leading-7">
          Har du frågor om vår användning av cookies kan du kontakta oss på{" "}
          <a
            href="mailto:alnarpspotential@gmail.com"
            className="underline hover:text-emerald-800"
          >
            alnarpspotential@gmail.com
          </a>
          .
        </p>

        <p className="mt-10 text-sm text-stone-500">
          Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
        </p>
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