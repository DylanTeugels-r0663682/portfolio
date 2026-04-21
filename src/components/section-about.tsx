import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import type { AboutBullet } from "@/lib/content";

export function About({ bullets }: { bullets: readonly AboutBullet[] }) {
  return (
    <Section id="about" title="About">
      <Reveal className="text-[clamp(56px,8vw,120px)] font-bold leading-[0.95] tracking-[-0.045em] text-fg">
        <span className="text-accent">Curiosity.</span>
        <br />
        That&apos;s it.
        <span className="mt-5 block font-mono text-[0.3em] font-normal uppercase tracking-[0.14em] text-fg-faint">
          — why I got into tech
        </span>
      </Reveal>

      <Reveal delay={160} className="mt-18 grid grid-cols-6 gap-4 max-[900px]:grid-cols-2">
        <div className="relative col-span-4 overflow-hidden border border-hairline bg-bg-raised p-7 transition-colors duration-250 hover:border-hairline-strong max-[900px]:col-span-2">
          <div className="absolute right-3.5 top-3.5 font-mono text-[10px] tracking-[0.14em] text-fg-faint">
            [KEEPS-ME-IN-IT]
          </div>
          <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.14em] text-fg-faint">
            What keeps me in it
          </div>
          <ul className="flex list-none flex-col gap-[14px] text-[17px] leading-[1.45] text-fg">
            <li>→ Solving complex puzzles — debugging, architecture, integration chess.</li>
            <li>→ Translating client needs into technical solutions.</li>
            <li>→ Seeing real merchants use what I built.</li>
            <li>→ Squeezing performance out of systems.</li>
            <li>→ Constant learning — the box doesn&apos;t stop expanding.</li>
          </ul>
        </div>
        <div className="relative col-span-2 overflow-hidden border border-hairline bg-bg-raised p-7 transition-colors duration-250 hover:border-hairline-strong">
          <div className="absolute right-3.5 top-3.5 font-mono text-[10px] tracking-[0.14em] text-fg-faint">
            [STACK]
          </div>
          <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.14em] text-fg-faint">
            Daily surface
          </div>
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
              <span className="text-accent">→</span> ERP · CRM · PIM · CMS
            </div>
            <div>
              <span className="text-accent">→</span> Redis · Varnish · search engines
            </div>
            <div className="mt-2 border-t border-hairline pt-3">
              <span className="text-accent">→</span> Performance · SEO
            </div>
            <div>
              <span className="text-accent">→</span> Code quality · security
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal
        delay={220}
        className="mt-12 grid grid-cols-4 border border-hairline max-[820px]:grid-cols-2"
      >
        {bullets.map((b, i) => {
          const isLastInRow = (i + 1) % 4 === 0;
          const isTopRowOnMobile = i < 2;
          return (
            <div
              key={b.w}
              className={[
                "p-6",
                !isLastInRow ? "border-r border-hairline" : "",
                "max-[820px]:[&]:border-r-0",
                "max-[820px]:odd:border-r max-[820px]:odd:border-hairline",
                isTopRowOnMobile ? "max-[820px]:border-b max-[820px]:border-hairline" : "",
              ].join(" ")}
            >
              <div className="text-[22px] font-semibold tracking-[-0.02em] before:text-accent before:content-['→_']">
                {b.w}
              </div>
              <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-fg-faint">
                {b.d}
              </div>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
}
