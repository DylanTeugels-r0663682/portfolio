import { Reveal } from "./reveal";
import { Section } from "./section";
import type { TimelineEntry } from "@/lib/portfolio-data";

export function Timeline({ timeline }: { timeline: readonly TimelineEntry[] }) {
  return (
    <Section id="timeline" title="Timeline">
      <div className="timeline">
        {timeline.map((r, i) => (
          <Reveal key={i} delay={i * 80} className="tl-row">
            <div className="tl-year">{r.year}</div>
            <div>
              <div className="tl-role">{r.role}</div>
              <div className="tl-desc">{r.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
