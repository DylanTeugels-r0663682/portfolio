import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import type { Portfolio } from "@/lib/portfolio-data";

export function Certifications({ data }: { data: Portfolio }) {
  return (
    <section id="certs" className="shell">
      <SectionHead title="Certifications" />
      <Reveal className="certs">
        {data.certs.map((c, i) => (
          <div key={i} className="cert">
            <div className="badge">{c.badge}</div>
            <div>
              <div className="t">{c.t}</div>
              <div className="s">{c.s}</div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
