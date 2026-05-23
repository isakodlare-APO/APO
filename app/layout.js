import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: {
    default: "Alnarps Potential | Trädgårdstjänster & trädgårdsdesign",
    template: "%s | Alnarps Potential",
  },
  description:
    "Alnarps Potential erbjuder trädgårdsrådgivning, skötsel, design och odling med fokus på hållbara och personliga utemiljöer.",
  keywords: [
    "trädgårdstjänster",
    "trädgårdsdesign",
    "trädgårdsskötsel",
    "trädgårdsrådgivning",
    "Alnarp",
    "Skåne",
    "Malmö",
    "Lund",
  ],
  openGraph: {
    title: "Alnarps Potential",
    description:
      "Trädgårdsrådgivning, skötsel och design för hållbara utemiljöer.",
    url: "https://din-domän.se",
    siteName: "Alnarps Potential",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alnarps Potential trädgårdstjänster",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>
        {children}

        {/* SEO – strukturerad data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Alnarps Potential",
              description:
                "Trädgårdsrådgivning, trädgårdsskötsel och trädgårdsdesign i Skåne.",
              areaServed: [
                "Skåne",
                "Malmö",
                "Lund",
                "Lomma",
                "Bjärred",
              ],
              url: "https://din-domän.se",
            }),
          }}
        />
      </body>
    </html>
  );
}

