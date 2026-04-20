import { Reveal } from "./reveal";

export function SectionHead({ title, caption }: { title: string; caption?: string }) {
  return (
    <Reveal className="section-head">
      <h2>{title}</h2>
      {caption ? <div className="caption">{caption}</div> : null}
    </Reveal>
  );
}
