import { Reveal } from "./reveal";
import { Section } from "./section";
import type { Cert } from "@/lib/portfolio-data";

export function Certifications({ certs }: { certs: readonly Cert[] }) {
  return (
    <Section id="certs" title="Certifications">
      <Reveal className="certs">
        {certs.map((c, i) => (
          <div key={i} className="cert">
            <div className="badge">{c.badge}</div>
            <div>
              <div className="t">{c.t}</div>
              <div className="s">{c.s}</div>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
