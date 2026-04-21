import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import type { TimelineEntry } from "@/lib/content";

export function Timeline({ timeline }: { timeline: readonly TimelineEntry[] }) {
  return (
    <Section id="timeline" title="Timeline">
      <div className="flex flex-col">
        {timeline.map((r, i) => (
          <Reveal
            key={r.year}
            delay={i * 80}
            className="grid grid-cols-[180px_1fr] items-start gap-8 border-t border-hairline py-8 first:border-t-0 first:pt-0 last:border-b max-[720px]:grid-cols-1 max-[720px]:gap-2"
          >
            <div className="font-mono text-[14px] tracking-[0.04em] text-accent">{r.year}</div>
            <div>
              <div className="text-[22px] font-semibold tracking-[-0.02em]">{r.role}</div>
              <div className="mt-2 max-w-[680px] text-fg-dim">{r.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
