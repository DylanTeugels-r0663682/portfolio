import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import type { Portfolio } from "@/lib/portfolio-data";

export function Timeline({ data }: { data: Portfolio }) {
  return (
    <section id="timeline" className="shell">
      <SectionHead title="Timeline" />
      <div className="timeline">
        {data.timeline.map((r, i) => (
          <Reveal key={i} delay={i * 80} className="tl-row">
            <div className="tl-year">{r.year}</div>
            <div>
              <div className="tl-role">{r.role}</div>
              <div className="tl-desc">{r.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
