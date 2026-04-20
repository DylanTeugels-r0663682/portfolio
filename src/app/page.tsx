import { TopNav } from "@/components/top-nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/section-about";
import { Timeline } from "@/components/section-timeline";
import { Capabilities } from "@/components/section-capabilities";
import { Skills } from "@/components/section-skills";
import { Certifications } from "@/components/section-certifications";
import { RD } from "@/components/section-rd";
import { Contact } from "@/components/section-contact";
import { SiteFooter } from "@/components/site-footer";
import { portfolio } from "@/lib/portfolio-data";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <Hero data={portfolio} />
      <About data={portfolio} />
      <Timeline data={portfolio} />
      <Capabilities data={portfolio} />
      <Skills data={portfolio} />
      <Certifications data={portfolio} />
      <RD data={portfolio} />
      <Contact data={portfolio} />
      <SiteFooter data={portfolio} />
    </>
  );
}
