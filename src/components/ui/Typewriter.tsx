"use client";

import { useEffect, useState } from "react";

type Props = {
  words: readonly string[];
  typeSpeedMs?: number;
  deleteSpeedMs?: number;
  pauseMs?: number;
  className?: string;
};

export function Typewriter({
  words,
  typeSpeedMs = 85,
  deleteSpeedMs = 40,
  pauseMs = 1600,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const current = words[index] ?? "";
    if (phase === "typing") {
      if (text.length < current.length) {
        const id = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeedMs);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setPhase("deleting"), pauseMs);
      return () => clearTimeout(id);
    }
    if (text.length > 0) {
      const id = setTimeout(() => setText(text.slice(0, -1)), deleteSpeedMs);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setPhase("typing");
      setIndex((i) => (i + 1) % words.length);
    }, 0);
    return () => clearTimeout(id);
  }, [enabled, text, phase, index, words, typeSpeedMs, deleteSpeedMs, pauseMs]);

  const first = words[0] ?? "";
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), first);
  const visible = enabled ? text : first;
  const active = enabled ? (words[index] ?? first) : first;

  return (
    <span className={`relative inline-grid align-baseline text-accent ${className}`}>
      <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {longest}
        <CursorSpacer />
      </span>
      <span aria-hidden className="col-start-1 row-start-1 whitespace-nowrap">
        {visible}
        <Cursor />
      </span>
      <span className="sr-only">{active}</span>
    </span>
  );
}

function Cursor() {
  return (
    <span
      aria-hidden
      className="ml-[0.06em] inline-block h-[1em] w-[0.42em] translate-y-[-0.05em] bg-accent align-middle [animation:blink_1.1s_step-end_infinite]"
    />
  );
}

function CursorSpacer() {
  return <span aria-hidden className="ml-[0.06em] inline-block h-[1em] w-[0.42em] align-middle" />;
}
