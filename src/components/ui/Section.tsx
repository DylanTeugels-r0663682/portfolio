import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  headingAside?: ReactNode;
};

export function Section({ id, title, children, className = "", headingAside }: Props) {
  const headingId = `${id}-h`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative scroll-mt-[var(--nav-h)] pt-6 pb-14 ${className}`}
    >
      <Container>
        <Reveal
          as="div"
          className="mb-14 flex items-baseline justify-between gap-8 border-b border-hairline pb-8 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-3"
        >
          <h2 id={headingId} className="flex-1">
            {title}
          </h2>
          {headingAside}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
