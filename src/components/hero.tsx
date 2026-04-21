import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Typewriter } from "./ui/Typewriter";
import type { Portfolio } from "@/lib/content";

export function Hero({ data }: { data: Portfolio }) {
  const { leadLines, rotatingWords, tail } = data.headline;

  return (
    <section
      id="top"
      className="relative flex min-h-screen scroll-mt-[var(--nav-h)] flex-col justify-center pt-[120px] pb-20"
    >
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)_440px] items-start gap-12 max-[1200px]:grid-cols-1">
          <div>
            <div className="label mb-6">
              <span className="text-accent">●</span>&nbsp;&nbsp;DYLAN TEUGELS · PORTFOLIO · 2026
            </div>
            <h1
              className="[--hero-lines:3]"
              style={{ minHeight: `calc(1.05em * calc(var(--hero-lines) * 1.07))` }}
            >
              {leadLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <Reveal delay={80 + i * 100}>{line}</Reveal>
                </span>
              ))}
              <span className="block overflow-visible">
                <Reveal delay={80 + leadLines.length * 100}>
                  <Typewriter words={rotatingWords} />
                  {tail ? tail : null}
                </Reveal>
              </span>
            </h1>
            <Reveal delay={480}>
              <p className="mt-8 max-w-[620px] text-[clamp(16px,1.4vw,19px)] leading-[1.5] text-fg-dim">
                {data.sub}
              </p>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <div className="relative aspect-[1/1.05] self-start overflow-hidden border border-hairline bg-bg-raised">
              <Image
                src="/dylan.webp"
                alt="Dylan Teugels, Adobe Commerce and Hyvä developer based in Belgium"
                width={600}
                height={630}
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgQFBv/EAB8QAAIBBAIDAAAAAAAAAAAAAAECAwAEERIFIRNxkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AGtrUOqvOiyL2QXx19o3QBuqzN+ge7uGOcqCRVTiJ5JrIeRs6HUegBTC1//Z"
                className="h-full w-full object-cover [filter:grayscale(0.15)_contrast(1.02)]"
              />
              <div className="absolute bottom-3 left-3 border border-hairline bg-bg px-2 py-[5px] font-mono text-[10px] tracking-[0.08em] text-fg-dim">
                <b className="font-medium text-accent">●</b>&nbsp;LIVE · DYLAN.TEUGELS
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={560}
          className="mt-20 grid grid-cols-4 gap-px border border-hairline bg-hairline max-[820px]:grid-cols-2"
        >
          {data.meta.map((m, i) => (
            <div key={m.k} className="bg-bg px-[22px] py-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
                {m.k}
              </div>
              <div className="mt-2 text-[15px] font-medium text-fg">
                {i === 0 ? (
                  <span className="mr-2 inline-block h-[7px] w-[7px] rounded-full bg-accent align-middle" />
                ) : null}
                {m.v}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
