import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import type { Cert } from "@/lib/content";

export function Certifications({ certs }: { certs: readonly Cert[] }) {
  return (
    <Section id="certs" title="Certifications">
      <Reveal className="grid grid-cols-2 gap-4 max-[720px]:grid-cols-1">
        {certs.map((c) => (
          <div
            key={c.t}
            className="relative flex items-center gap-5 border border-hairline bg-bg-raised p-7"
          >
            <div className="grid size-[52px] shrink-0 place-items-center border border-accent font-mono text-[18px] font-semibold text-accent">
              {c.badge}
            </div>
            <div>
              <div className="text-[17px] font-semibold">{c.t}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-faint">
                {c.s}
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
