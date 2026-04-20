import { Reveal } from "./reveal";
import { Section } from "./section";
import type { AboutBullet } from "@/lib/portfolio-data";

export function About({ bullets }: { bullets: readonly AboutBullet[] }) {
  return (
    <Section id="about" title="About">
      <Reveal className="curiosity">
        <span>Curiosity.</span>
        <br />
        That&apos;s it.
        <span className="small">— why I got into tech</span>
      </Reveal>

      <Reveal delay={160} className="bento mt-18">
        <div className="cell span-4">
          <div className="corner">[KEEPS-ME-IN-IT]</div>
          <div className="label mb-[18px]">What keeps me in it</div>
          <ul className="flex list-none flex-col gap-[14px] text-[17px] leading-[1.45] text-fg">
            <li>→ Solving complex puzzles — debugging, architecture, integration chess.</li>
            <li>→ Translating client needs into technical solutions.</li>
            <li>→ Seeing real merchants use what I built.</li>
            <li>→ Squeezing performance out of systems.</li>
            <li>→ Constant learning — the box doesn&apos;t stop expanding.</li>
          </ul>
        </div>
        <div className="cell span-2">
          <div className="corner">[STACK]</div>
          <div className="label mb-[18px]">Daily surface</div>
          <div className="flex flex-col gap-2.5 font-mono text-[13px] leading-[1.6]">
            <div>
              <span className="text-accent">→</span> Adobe Commerce / Magento 2
            </div>
            <div>
              <span className="text-accent">→</span> Hyvä · Hyvä Checkout
            </div>
            <div>
              <span className="text-accent">→</span> PHP · Alpine · Tailwind
            </div>
            <div>
              <span className="text-accent">→</span> SAP · Salesforce · Akeneo
            </div>
            <div>
              <span className="text-accent">→</span> DIP middleware · Algolia
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={220} className="working-style">
        {bullets.map((b, i) => (
          <div key={i}>
            <div className="w">{b.w}</div>
            <div className="d">{b.d}</div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
