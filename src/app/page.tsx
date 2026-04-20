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
      <About bullets={portfolio.aboutBullets} />
      <Timeline timeline={portfolio.timeline} />
      <Capabilities capabilities={portfolio.capabilities} />
      <Skills skills={portfolio.skills} />
      <Certifications certs={portfolio.certs} />
      <RD projects={portfolio.rdProjects} />
      <Contact email={portfolio.email} linkedin={portfolio.linkedin} github={portfolio.github} />
      <SiteFooter name={portfolio.name} />
    </>
  );
}
