import { Reveal } from "./reveal";
import { Section } from "./section";

type Props = {
  email: string;
  linkedin: string;
  github: string;
};

export function Contact({ email, linkedin, github }: Props) {
  return (
    <Section id="contact" title="Contact" className="contact">
      <Reveal>
        <h2>
          Say hi &rarr; <a href={`mailto:${email}`}>{email}</a>
        </h2>
      </Reveal>
      <Reveal delay={120} className="contact-grid">
        <a href={`mailto:${email}`}>
          <div className="k">Email</div>
          <div className="v">{email}</div>
          <div className="arrow">→ compose</div>
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <div className="k">LinkedIn</div>
          <div className="v">/in/dylan-teugels</div>
          <div className="arrow">→ recommendations</div>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <div className="k">GitHub</div>
          <div className="v">github.com</div>
          <div className="arrow">→ repositories</div>
        </a>
      </Reveal>
    </Section>
  );
}
