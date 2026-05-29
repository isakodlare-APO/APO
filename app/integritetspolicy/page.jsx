import Link from "next/link";
const NAV_ITEMS = [
  { id: "hem", label: "Hem" },
  { id: "kampanj", label: "Kampanj" },
  { id: "om-oss", label: "Om oss" },
  { id: "tjanster", label: "Tjänster" },
  { id: "projekt", label: "Projekt" },
  { id: "kontakt", label: "Kontakt" },
];
export default function Integritetspolicy() {
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
          Integritetspolicy
        </h1>

        <p className="mt-6 leading-7">
          Alnarps Potential värnar om din personliga integritet. Denna
          integritetspolicy beskriver hur vi samlar in, använder och skyddar
          personuppgifter när du kontaktar oss eller använder vår webbplats.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Personuppgiftsansvarig
        </h2>
        <p className="mt-3 leading-7">
          Alnarps Potential är personuppgiftsansvarig för behandlingen av
          personuppgifter som sker via denna webbplats.
        </p>

        <p className="mt-3 leading-7">
          Kontakt:{" "}
          <a
            href="mailto:alnarpspotential@gmail.com"
            className="underline hover:text-emerald-800"
          >
            alnarpspotential@gmail.com
          </a>
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Vilka personuppgifter vi behandlar
        </h2>
        <p className="mt-3 leading-7">
          När du kontaktar oss via formulär, e-post eller telefon kan vi
          behandla namn, e-postadress, telefonnummer och den information du
          själv lämnar i ditt meddelande.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Varför vi behandlar personuppgifter
        </h2>
        <p className="mt-3 leading-7">
          Vi behandlar personuppgifter för att kunna svara på förfrågningar,
          lämna offerter, boka platsbesök, utföra våra tjänster och hantera
          kundrelationer.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Rättslig grund
        </h2>
        <p className="mt-3 leading-7">
          Behandlingen sker med stöd av berättigat intresse när vi svarar på
          förfrågningar och kommunicerar med dig. Om du blir kund kan behandling
          även ske för att fullgöra avtal och uppfylla rättsliga skyldigheter,
          exempelvis bokföring.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Hur länge vi sparar uppgifter
        </h2>
        <p className="mt-3 leading-7">
          Vi sparar personuppgifter endast så länge det är nödvändigt för det
          ändamål de samlades in för. Uppgifter kopplade till bokföring sparas
          enligt gällande bokföringsregler.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Delning av uppgifter
        </h2>
        <p className="mt-3 leading-7">
          Vi säljer aldrig dina personuppgifter. Uppgifter kan delas med
          leverantörer som hjälper oss med exempelvis webbplats, formulär,
          e-post eller administration, men endast när det är nödvändigt och i
          enlighet med dataskyddsreglerna.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Dina rättigheter
        </h2>
        <p className="mt-3 leading-7">
          Du har rätt att begära tillgång till dina personuppgifter, få felaktiga
          uppgifter rättade, begära radering, begränsning av behandling och i
          vissa fall invända mot behandlingen.
        </p>

        <p className="mt-3 leading-7">
          Du har även rätt att lämna klagomål till Integritetsskyddsmyndigheten
          om du anser att vi behandlar dina personuppgifter felaktigt.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Ändringar
        </h2>
        <p className="mt-3 leading-7">
          Vi kan uppdatera denna policy vid behov. Den senaste versionen finns
          alltid publicerad på webbplatsen.
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
              © {new Date().getFullYear()} Webbutveckling & design av Isak Odlare
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
