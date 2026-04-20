"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type Phase = "typing" | "holding" | "deleting";

type Options = {
  typeMs?: number;
  holdMs?: number;
  delMs?: number;
};

function subscribeMotion(cb: () => void): () => void {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getMotionSnapshot(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerMotionSnapshot(): boolean {
  return false;
}

export function useTypewriter(
  words: readonly string[],
  { typeMs = 70, holdMs = 1800, delMs = 35 }: Options = {}
): string {
  const reduced = useSyncExternalStore(subscribeMotion, getMotionSnapshot, getServerMotionSnapshot);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (reduced) return;
    const word = words[idx % words.length] ?? "";
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("deleting"), holdMs);
    } else if (text.length > 0) {
      t = setTimeout(() => setText(word.slice(0, text.length - 1)), delMs);
    } else {
      t = setTimeout(() => {
        setIdx((i) => i + 1);
        setPhase("typing");
      }, 0);
    }
    return () => clearTimeout(t);
  }, [reduced, text, phase, idx, words, typeMs, holdMs, delMs]);

  if (reduced) return words[0] ?? "";
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
