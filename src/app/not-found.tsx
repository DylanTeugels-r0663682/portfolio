import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <Container>
        <div className="max-w-[680px]">
          <div className="label mb-6">
            <span className="text-accent">●</span>&nbsp;&nbsp;ERROR · 404
          </div>
          <h1 className="mb-6">Page not found.</h1>
          <p className="mb-10 text-[clamp(16px,1.4vw,19px)] leading-[1.5] text-fg-dim">
            The thing you were looking for isn&apos;t here. It might have moved, or never existed in
            the first place.
          </p>
          <Link href="/" className="chip">
            ← Back to homepage
          </Link>
        </div>
      </Container>
    </section>
  );
}
