"use client";

import { useEffect, useState } from "react";
import type { Portfolio } from "@/lib/portfolio-data";

export function SiteFooter({ data }: { data: Portfolio }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const fmt = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Brussels",
        hour12: false,
      });
      setTime(`${fmt.format(d)} CET`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="shell">
      <footer>
        <div>
          © {data.name} · {new Date().getFullYear()}
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <span>{time ? `${time} · Belgium` : "Belgium"}</span>
          <a href="/llms.txt" target="_blank">
            llms.txt
          </a>
          <a href="#top">↑ top</a>
        </div>
      </footer>
    </div>
  );
}
