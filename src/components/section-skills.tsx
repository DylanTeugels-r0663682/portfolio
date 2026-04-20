import { Reveal } from "./reveal";
import { Section } from "./section";
import type { Portfolio } from "@/lib/portfolio-data";

export function Skills({ skills }: { skills: Portfolio["skills"] }) {
  const groups = Object.values(skills);
  return (
    <Section id="skills" title="Stack">
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
    </Section>
  );
}
