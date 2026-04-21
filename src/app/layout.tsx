import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { headers } from "next/headers";
import { TopNav } from "@/components/layout/TopNav";
import { SiteFooter } from "@/components/site-footer";
import { getPortfolio } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = "Dylan Teugels — Adobe Commerce & Hyvä Developer | Belgium";
const description =
  "Adobe Commerce & Magento 2 developer in Belgium. Hyvä early adopter since 2021, PHP, enterprise B2B/B2C integrations with SAP, Salesforce and Akeneo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Dylan Teugels" },
  description,
  applicationName: "Dylan Teugels",
  authors: [{ name: "Dylan Teugels", url: siteUrl }],
  creator: "Dylan Teugels",
  publisher: "Dylan Teugels",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: "profile",
    title,
    description,
    url: siteUrl,
    siteName: "Dylan Teugels",
    locale: "en_US",
    firstName: "Dylan",
    lastName: "Teugels",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1814",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [portfolio, headerList] = await Promise.all([getPortfolio(), headers()]);
  const nonce = headerList.get("x-nonce") ?? undefined;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#dylan`,
      name: portfolio.name,
      givenName: "Dylan",
      familyName: "Teugels",
      jobTitle: portfolio.role,
      description,
      url: siteUrl,
      image: `${siteUrl}/dylan.webp`,
      email: `mailto:${portfolio.email}`,
      nationality: "BE",
      worksFor: {
        "@type": "Organization",
        name: portfolio.employer,
        url: "https://phpro.be",
      },
      address: { "@type": "PostalAddress", addressCountry: "BE" },
      sameAs: [portfolio.linkedin, portfolio.github],
      knowsAbout: [
        "Adobe Commerce",
        "Magento 2",
        "Hyvä",
        "Hyvä Checkout",
        "PHP",
        "Alpine.js",
        "Tailwind CSS",
        "SAP integration",
        "Salesforce integration",
        "Akeneo PIM",
        "Algolia",
        "B2B commerce",
        "Multi-store architecture",
        "Multi-currency",
        "Scrum",
      ],
      knowsLanguage: ["nl", "en", "fr"],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Adobe Commerce Certified Developer",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Hyvä Certified",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: portfolio.name,
      description,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#dylan` },
    },
  ];

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <TopNav />
        <main id="main">{children}</main>
        <SiteFooter name={portfolio.name} />
      </body>
    </html>
  );
}
