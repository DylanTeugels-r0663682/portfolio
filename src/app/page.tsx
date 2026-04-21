import { Hero } from "@/components/hero";
import { About } from "@/components/section-about";
import { Timeline } from "@/components/section-timeline";
import { Capabilities } from "@/components/section-capabilities";
import { Certifications } from "@/components/section-certifications";
import { RD } from "@/components/section-rd";
import { Contact } from "@/components/section-contact";
import { getPortfolio } from "@/lib/content";

export default async function HomePage() {
  const portfolio = await getPortfolio();

  return (
    <>
      <Hero data={portfolio} />
      <About bullets={portfolio.aboutBullets} />
      <Timeline timeline={portfolio.timeline} />
      <Capabilities capabilities={portfolio.capabilities} />
      <Certifications certs={portfolio.certs} />
      <RD projects={portfolio.rdProjects} />
      <Contact email={portfolio.email} linkedin={portfolio.linkedin} github={portfolio.github} />
    </>
  );
}
