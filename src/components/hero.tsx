import Image from "next/image";
import { Reveal } from "./reveal";
import { Typewriter } from "./typewriter";
import type { Portfolio } from "@/lib/portfolio-data";

export function Hero({ data }: { data: Portfolio }) {
  const typed = data.headline.parts.find((p) => p.type === "typed");
  const alts = typed?.type === "typed" ? typed.alts : ["Adobe Commerce"];

  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero-grid">
          <div>
            <div className="label" style={{ marginBottom: 24 }}>
              <span style={{ color: "var(--accent)" }}>●</span>&nbsp;&nbsp;DYLAN TEUGELS · PORTFOLIO · 2026
            </div>
            <h1>
              <span className="line">
                <Reveal delay={80}>Technical Lead</Reveal>
              </span>
              <span className="line">
                <Reveal delay={180}>building scalable</Reveal>
              </span>
              <span className="line typed-line">
                <Reveal delay={280}>
                  <em>
                    <Typewriter words={alts} typeMs={65} holdMs={2200} delMs={28} />
                  </em>
                </Reveal>
              </span>
            </h1>
            <Reveal delay={480}>
              <p className="hero-sub">{data.sub}</p>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <div className="photo-card">
              <Image
                src="/dylan.webp"
                alt="Portrait of Dylan Teugels"
                width={600}
                height={630}
                priority
              />
              <div className="tag">
                <b>●</b>&nbsp;LIVE · DYLAN.TEUGELS
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={560} className="meta-strip">
          {data.meta.map((m, i) => (
            <div key={i}>
              <div className="k">{m.k}</div>
              <div className="v">
                {i === 0 ? <span className="dot" /> : null}
                {m.v}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
