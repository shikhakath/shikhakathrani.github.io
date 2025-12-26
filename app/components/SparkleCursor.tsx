"use client";

import { useEffect, useState } from "react";

type Sparkle = {
  id: number;
  x: number;
  y: number;
};

export function SparkleCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let idCounter = 0;

    function handleMove(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;
      const id = idCounter++;

      // add a new sparkle and keep only the last ~40 for performance
      setSparkles((prev) => [...prev, { id, x, y }].slice(-40));

      // remove this sparkle after 400ms
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 400);
    }

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
        {sparkles.map((s) => (
        <div
            key={s.id}
            className="absolute pointer-events-none select-none text-2xl animate-fade"
            style={{
            left: s.x,
            top: s.y,
            transform: "translate(-50%, -50%) rotate(-10deg)",
            }}
        >
            ⭐️
        </div>
        ))}
    </div>
  );
}
