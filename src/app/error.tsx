"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center">
      <Container>
        <div className="max-w-[680px]">
          <div className="label mb-6">
            <span className="text-accent">●</span>&nbsp;&nbsp;ERROR · UNEXPECTED
          </div>
          <h1 className="mb-6">Something broke.</h1>
          <p className="mb-10 text-[clamp(16px,1.4vw,19px)] leading-[1.5] text-fg-dim">
            An unexpected error slipped through. The page couldn&apos;t render.
            {error.digest ? (
              <>
                {" "}
                <span className="font-mono text-[13px] text-fg-faint">(ref {error.digest})</span>
              </>
            ) : null}
          </p>
          <button type="button" onClick={reset} className="chip">
            Try again
          </button>
        </div>
      </Container>
    </section>
  );
}
