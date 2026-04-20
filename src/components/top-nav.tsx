"use client";

import { useEffect, useState } from "react";

const LINKS: ReadonlyArray<[string, string]> = [
  ["about", "about"],
  ["work", "capabilities"],
  ["stack", "skills"],
  ["contact", "contact"],
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`top ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="brand">
        <b>DT</b>&nbsp;/ technical-lead.php
      </a>
      <div className="links">
        {LINKS.map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {">"} {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
