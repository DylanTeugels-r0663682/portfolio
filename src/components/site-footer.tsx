"use client";

import { useEffect, useState } from "react";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Brussels",
  hour12: false,
});

export function SiteFooter({ name }: { name: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(`${timeFormatter.format(new Date())} CET`);
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-8 max-[720px]:px-5">
      <footer>
        <div>
          © {name} · {new Date().getFullYear()}
        </div>
        <div className="flex gap-6">
          <span>{time ? `${time} · Belgium` : "Belgium"}</span>
          <a href="/llms.txt" target="_blank" rel="noopener noreferrer">
            llms.txt
          </a>
          <a href="#top">↑ top</a>
        </div>
      </footer>
    </div>
  );
}
