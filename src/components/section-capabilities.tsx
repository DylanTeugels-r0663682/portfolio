import { Reveal } from "./reveal";
import { Section } from "./section";
import type { Capability } from "@/lib/portfolio-data";

export function Capabilities({ capabilities }: { capabilities: readonly Capability[] }) {
  return (
    <Section id="capabilities" title="Capabilities">
      <Reveal className="cap-list">
        {capabilities.map((c, i) => (
          <details key={i} className="cap">
            <summary>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <div className="title">{c.title}</div>
              <div className="role">
                <b>{c.roles[0] ?? ""}</b>
                {c.roles.length > 1 ? ` · +${c.roles.length - 1}` : ""}
              </div>
              <div className="chev">+</div>
            </summary>
            <div className="cap-body">
              <div className="block">
                <div className="k">what</div>
                <div className="v">{c.what}</div>
              </div>
              <div className="block">
                <div className="k">why it matters</div>
                <div className="v">{c.why}</div>
                <div className="mt-[18px] flex flex-wrap gap-1.5">
                  {c.stack.split(" · ").map((s, j) => (
                    <span key={j} className="chip chip-muted">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}
