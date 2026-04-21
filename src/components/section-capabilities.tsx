import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import type { Capability } from "@/lib/content";

export function Capabilities({ capabilities }: { capabilities: readonly Capability[] }) {
  return (
    <Section id="capabilities" title="Capabilities">
      <Reveal className="border-t border-hairline">
        {capabilities.map((c, i) => {
          const extra = c.otherRoles?.length ?? 0;
          return (
            <details
              key={c.title}
              open={i === 0}
              className="group border-b border-hairline bg-transparent transition-colors duration-300 open:bg-bg-raised hover:bg-[color-mix(in_oklab,var(--bg-raised)_60%,transparent)]"
            >
              <summary className="grid cursor-pointer list-none grid-cols-[48px_1fr_200px_32px] items-center gap-6 py-6 pr-4 max-[820px]:grid-cols-[36px_1fr_28px] [&::-webkit-details-marker]:hidden">
                <div className="font-mono text-[12px] tracking-[0.1em] text-fg-faint">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="text-[clamp(18px,2vw,24px)] font-semibold tracking-[-0.015em] transition-colors group-open:text-accent">
                    {c.title}
                  </div>
                  <div className="text-[14px] leading-snug text-fg-dim group-open:hidden">
                    {c.teaser}
                  </div>
                </div>
                <div className="text-right font-mono text-[11px] uppercase tracking-[0.1em] text-fg-faint max-[820px]:hidden">
                  <b className="font-medium text-accent">{c.role}</b>
                  {extra > 0 ? ` · +${extra}` : ""}
                </div>
                <div className="grid h-5 w-5 place-items-center justify-self-end border border-hairline-strong bg-transparent font-mono text-[14px] text-fg-dim transition-[transform,background,color,border-color] duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-bg">
                  +
                </div>
              </summary>
              <div className="grid max-w-[1100px] grid-cols-2 gap-10 pt-2 pb-8 pl-[72px] pr-0 max-[820px]:grid-cols-1 max-[820px]:gap-6 max-[820px]:pl-0 max-[820px]:pb-7">
                <div>
                  <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
                    what
                  </div>
                  <div className="text-[15px] leading-[1.55] text-fg-dim [&_b]:font-medium [&_b]:text-fg">
                    {c.what}
                  </div>
                </div>
                <div>
                  <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
                    why it matters
                  </div>
                  <div className="text-[15px] leading-[1.55] text-fg-dim [&_b]:font-medium [&_b]:text-fg">
                    {c.why}
                  </div>
                  <div className="mt-[18px] flex flex-wrap gap-1.5">
                    {c.stack.split(" · ").map((s) => (
                      <span key={s} className="chip chip-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          );
        })}
      </Reveal>
    </Section>
  );
}
