"use client";

import { useEffect, useState } from "react";

type Phase = "paused" | "typing" | "holding" | "deleting";

type Options = {
  typeMs?: number;
  holdMs?: number;
  delMs?: number;
};

export function useTypewriter(
  words: readonly string[],
  { typeMs = 70, holdMs = 1800, delMs = 35 }: Options = {}
): string {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [phase, setPhase] = useState<Phase>("paused");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    setText("");
    setPhase("typing");
  }, []);

  useEffect(() => {
    if (phase === "paused") return;
    const word = words[idx % words.length] ?? "";
    let t: ReturnType<typeof setTimeout> | undefined;
    if (phase === "typing") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setPhase("holding"), 10);
      }
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("deleting"), holdMs);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), delMs);
      } else {
        setIdx((i) => i + 1);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, words, typeMs, holdMs, delMs]);

  return text;
}

export function Typewriter({
  words,
  typeMs,
  holdMs,
  delMs,
}: { words: readonly string[] } & Options) {
  const text = useTypewriter(words, { typeMs, holdMs, delMs });
  return <>{text}</>;
}
