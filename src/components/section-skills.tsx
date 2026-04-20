import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import type { Portfolio } from "@/lib/portfolio-data";

export function Skills({ data }: { data: Portfolio }) {
  const groups = Object.values(data.skills);
  return (
    <section id="skills" className="shell">
      <SectionHead title="Stack" />
      <Reveal className="skills">
        {groups.map((g, i) => (
          <div key={i} className={`sk-group ${g.span}`}>
            <h3>
              {g.title}{" "}
              <span className="cnt">[{String(g.items.length).padStart(2, "0")}]</span>
            </h3>
            <div className="sk-list">
              {g.items.map((it, j) => (
                <span key={j} className="chip">
                  {it.t}
                  {it.s ? <span className="s">· {it.s}</span> : null}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
