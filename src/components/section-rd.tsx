import { Fragment } from "react";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function RD({ projects }: { projects: readonly string[] }) {
  return (
    <Section id="rd" title="Personal R&D">
      <Reveal className="rd">
        <div className="k">ALSO BUILDING</div>
        <div className="v">
          {projects.map((p, i) => (
            <Fragment key={i}>
              {p}
              {i < projects.length - 1 ? <span>·</span> : null}
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
