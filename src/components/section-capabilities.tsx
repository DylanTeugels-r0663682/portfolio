import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import type { Portfolio } from "@/lib/portfolio-data";

export function Capabilities({ data }: { data: Portfolio }) {
  return (
    <section id="capabilities" className="shell">
      <SectionHead title="Capabilities" />
      <Reveal className="cap-list">
        {data.capabilities.map((c, i) => (
          <details key={i} className="cap">
            <summary>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <div className="title">{c.title}</div>
              <div className="role">
                <b>{c.roles[0]}</b>
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
                <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {c.stack.split(" · ").map((s, j) => (
                    <span key={j} className="chip" style={{ borderColor: "var(--hairline)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
