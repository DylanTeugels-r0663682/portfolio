import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import type { Portfolio } from "@/lib/portfolio-data";

export function About({ data }: { data: Portfolio }) {
  return (
    <section id="about" className="shell">
      <SectionHead title="About" />
      <Reveal className="curiosity">
        <span>Curiosity.</span>
        <br />
        That&apos;s it.
        <span className="small">— why I got into tech</span>
      </Reveal>

      <Reveal delay={160} className="bento" style={{ marginTop: 72 }}>
        <div className="cell span-4">
          <div className="corner">[KEEPS-ME-IN-IT]</div>
          <div className="label" style={{ marginBottom: 18 }}>
            What keeps me in it
          </div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              fontSize: 17,
              color: "var(--fg)",
              lineHeight: 1.45,
            }}
          >
            <li>→ Solving complex puzzles — debugging, architecture, integration chess.</li>
            <li>→ Translating client needs into technical solutions.</li>
            <li>→ Seeing real merchants use what I built.</li>
            <li>→ Squeezing performance out of systems.</li>
            <li>→ Constant learning — the box doesn&apos;t stop expanding.</li>
          </ul>
        </div>
        <div className="cell span-2">
          <div className="corner">[STACK]</div>
          <div className="label" style={{ marginBottom: 18 }}>
            Daily surface
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            <div>
              <span style={{ color: "var(--accent)" }}>→</span> Adobe Commerce / Magento 2
            </div>
            <div>
              <span style={{ color: "var(--accent)" }}>→</span> Hyvä · Hyvä Checkout
            </div>
            <div>
              <span style={{ color: "var(--accent)" }}>→</span> PHP · Alpine · Tailwind
            </div>
            <div>
              <span style={{ color: "var(--accent)" }}>→</span> SAP · Salesforce · Akeneo
            </div>
            <div>
              <span style={{ color: "var(--accent)" }}>→</span> DIP middleware · Algolia
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={220} className="working-style">
        {data.aboutBullets.map((b, i) => (
          <div key={i}>
            <div className="w">{b.w}</div>
            <div className="d">{b.d}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
