import { Reveal } from "./reveal";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = "" }: Props) {
  const headingId = `${id}-h`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative mx-auto w-full max-w-[1320px] px-8 pt-10 pb-20 max-[720px]:px-5 ${className}`}
    >
      <Reveal
        as="div"
        className="mb-14 flex items-baseline justify-between gap-8 border-b border-hairline pb-8 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-3"
      >
        <h2 id={headingId} className="flex-1">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
