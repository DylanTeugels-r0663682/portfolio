import { Fragment } from "react";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function RD({ projects }: { projects: readonly string[] }) {
  return (
    <Section id="rd" title="Personal R&D">
      <Reveal className="flex flex-wrap items-baseline gap-4 border border-hairline bg-bg-raised px-8 py-10">
        <div className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          ALSO BUILDING
        </div>
        <div className="text-[clamp(18px,2vw,22px)] font-medium tracking-[-0.015em]">
          {projects.map((p, i) => (
            <Fragment key={p}>
              {p}
              {i < projects.length - 1 ? <span className="mx-1.5 text-fg-faint">·</span> : null}
            </Fragment>
          ))}
        </div>
        <div className="ml-auto font-mono text-[11px] tracking-[0.1em] text-fg-faint">
          [2025 — 2026]
        </div>
      </Reveal>
      <Reveal
        delay={120}
        className="mt-5 max-w-[720px] font-mono text-[12px] leading-[1.7] text-fg-faint"
      >
        {"// curiosity-driven side work. no public links, no spotlight. just a signal"}
        <br />
        {"// that i ship outside the magento box and stay fluent in ai-assisted dev."}
      </Reveal>
    </Section>
  );
}
