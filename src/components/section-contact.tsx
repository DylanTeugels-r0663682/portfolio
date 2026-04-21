import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

type Props = {
  email: string;
  linkedin: string;
  github: string;
};

export function Contact({ email, linkedin, github }: Props) {
  return (
    <Section id="contact" title="Contact" className="pb-[120px]">
      <Reveal>
        <h2 className="mb-12 text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em]">
          Say hi &rarr;{" "}
          <a
            href={`mailto:${email}`}
            className="border-b-2 border-current text-accent transition-colors duration-200 hover:text-fg"
          >
            {email}
          </a>
        </h2>
      </Reveal>
      <Reveal
        delay={120}
        className="grid grid-cols-3 gap-px border border-hairline bg-hairline max-[720px]:grid-cols-1"
      >
        <a
          href={`mailto:${email}`}
          className="flex flex-col gap-2 bg-bg p-7 transition-colors duration-200 hover:bg-bg-raised"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
            Email
          </div>
          <div className="break-all text-[17px] font-medium">{email}</div>
          <div className="mt-auto font-mono text-sm text-accent">→ compose</div>
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="me noopener noreferrer"
          className="flex flex-col gap-2 bg-bg p-7 transition-colors duration-200 hover:bg-bg-raised"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
            LinkedIn
          </div>
          <div className="break-all text-[17px] font-medium">/in/dylan-teugels</div>
          <div className="mt-auto font-mono text-sm text-accent">→ recommendations</div>
        </a>
        <a
          href={github}
          target="_blank"
          rel="me noopener noreferrer"
          className="flex flex-col gap-2 bg-bg p-7 transition-colors duration-200 hover:bg-bg-raised"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
            GitHub
          </div>
          <div className="break-all text-[17px] font-medium">github.com</div>
          <div className="mt-auto font-mono text-sm text-accent">→ repositories</div>
        </a>
      </Reveal>
    </Section>
  );
}
