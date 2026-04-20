import { Fragment } from "react";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import type { Portfolio } from "@/lib/portfolio-data";

export function RD({ data }: { data: Portfolio }) {
  return (
    <section id="rd" className="shell">
      <SectionHead title="Personal R&D" />
      <Reveal className="rd">
        <div className="k">ALSO BUILDING</div>
        <div className="v">
          {data.rdProjects.map((p, i) => (
            <Fragment key={i}>
              {p}
              {i < data.rdProjects.length - 1 ? <span>·</span> : null}
            </Fragment>
          ))}
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--fg-faint)",
            letterSpacing: "0.1em",
          }}
        >
          [2025 — 2026]
        </div>
      </Reveal>
      <Reveal
        delay={120}
        style={{
          marginTop: 20,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--fg-faint)",
          lineHeight: 1.7,
          maxWidth: 720,
        }}
      >
        // curiosity-driven side work. no public links, no spotlight. just a signal
        <br />
        // that i ship outside the magento box and stay fluent in ai-assisted dev.
      </Reveal>
    </section>
  );
}
