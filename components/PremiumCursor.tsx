"use client";

import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  interactive: boolean;
  pressed: boolean;
};

export default function PremiumCursor() {
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(pointer:fine)").matches &&
      window.matchMedia("(hover:hover)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    interactive: false,
    pressed: false,
  });

  useEffect(() => {
    document.body.classList.toggle("cursor-premium-enabled", enabled);

    return () => {
      document.body.classList.remove("cursor-premium-enabled");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const onPointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest(
          "a,button,input,textarea,select,label,[role='button'],[data-cursor='interactive']"
        )
      );

      setCursor((prev) => ({
        ...prev,
        x: event.clientX,
        y: event.clientY,
        interactive,
      }));
    };

    const onPointerDown = () => {
      setCursor((prev) => ({ ...prev, pressed: true }));
    };

    const onPointerUp = () => {
      setCursor((prev) => ({ ...prev, pressed: false }));
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  const ringScale = cursor.interactive ? 1.35 : cursor.pressed ? 0.92 : 1;
  const dotScale = cursor.pressed ? 0.7 : 1;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[99999] h-10 w-10 rounded-full border border-blue-500/40 bg-blue-200/10 backdrop-blur-[1px] transition-transform duration-150 ease-out"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: `translate(-50%, -50%) scale(${ringScale})`,
        }}
      />
      <div
        className="pointer-events-none fixed z-[99999] h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-700 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.55)] transition-transform duration-150 ease-out"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: `translate(-50%, -50%) scale(${dotScale})`,
        }}
      />
    </>
  );
}
