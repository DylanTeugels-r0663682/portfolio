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

const title = "Dylan Teugels — Technical Lead & Software Developer";
const description =
  "Technical Lead building scalable Adobe Commerce B2C/B2B platforms for enterprise merchants. 5+ years, Hyvä early adopter, Belgium.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Dylan Teugels" }],
  openGraph: {
    type: "profile",
    title,
    description:
      "5+ years building scalable Adobe Commerce B2C/B2B platforms. Hyvä early adopter. SAP / Salesforce / Akeneo integrations.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1814",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dylan Teugels",
  jobTitle: "Technical Lead & Software Developer",
  worksFor: { "@type": "Organization", name: "PHPro" },
  address: { "@type": "PostalAddress", addressCountry: "BE" },
  email: "dylan.teugels9@gmail.com",
  image: "/dylan.webp",
  sameAs: [
    "https://www.linkedin.com/in/dylan-teugels-942a82159/",
    "https://github.com/DylanTeugels-r0663682",
  ],
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
    "Microservices",
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
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [portfolio, headerList] = await Promise.all([getPortfolio(), headers()]);
  const nonce = headerList.get("x-nonce") ?? undefined;

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
