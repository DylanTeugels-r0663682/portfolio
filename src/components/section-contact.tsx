import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import type { Portfolio } from "@/lib/portfolio-data";

export function Contact({ data }: { data: Portfolio }) {
  return (
    <section id="contact" className="shell contact">
      <SectionHead title="Contact" />
      <Reveal>
        <h2>
          Say hi &rarr; <a href={`mailto:${data.email}`}>{data.email}</a>
        </h2>
      </Reveal>
      <Reveal delay={120} className="contact-grid">
        <a href={`mailto:${data.email}`}>
          <div className="k">Email</div>
          <div className="v">{data.email}</div>
          <div className="arrow">→ compose</div>
        </a>
        <a href={data.linkedin} target="_blank" rel="noopener">
          <div className="k">LinkedIn</div>
          <div className="v">/in/dylan-teugels</div>
          <div className="arrow">→ recommendations</div>
        </a>
        <a href={data.github} target="_blank" rel="noopener">
          <div className="k">GitHub</div>
          <div className="v">github.com</div>
          <div className="arrow">→ repositories</div>
        </a>
      </Reveal>
    </section>
  );
}
