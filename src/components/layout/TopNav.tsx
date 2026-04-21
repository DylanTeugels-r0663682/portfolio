"use client";

import { useEffect, useState } from "react";

const LINKS: ReadonlyArray<{ label: string; id: string }> = [
  { label: "about", id: "about" },
  { label: "work", id: "capabilities" },
  { label: "contact", id: "contact" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visibility = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          visibility.set(e.target.id, e.intersectionRatio);
        }
        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio > 0) setActive(bestId);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    for (const el of elements) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <nav className={`top ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="brand">
        <b>DT</b>&nbsp;/ technical-lead.php
      </a>
      <div className="links">
        {LINKS.map(({ label, id }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isActive ? "location" : undefined}
              className={isActive ? "text-accent" : undefined}
            >
              {">"} {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
