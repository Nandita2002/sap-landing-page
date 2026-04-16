"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MIN_VISIBLE_MS = 700;
const FALLBACK_HIDE_MS = 1600;
const FADE_OUT_MS = 320;

export default function BrandLoader() {
  const [phase, setPhase] = useState<"loading" | "fading" | "done">("loading");
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    startTimeRef.current = performance.now();
  }, []);

  useEffect(() => {
    if (phase === "done") return;

    const finishLoading = () => {
      const elapsed = performance.now() - startTimeRef.current;
      const waitTime = Math.max(0, MIN_VISIBLE_MS - elapsed);
      window.setTimeout(() => setPhase("fading"), waitTime);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    const fallback = window.setTimeout(finishLoading, FALLBACK_HIDE_MS);

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(fallback);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "fading") return;
    const doneTimer = window.setTimeout(() => setPhase("done"), FADE_OUT_MS);
    return () => window.clearTimeout(doneTimer);
  }, [phase]);

  useEffect(() => {
    const shouldLock = phase !== "done";
    document.body.classList.toggle("loader-active", shouldLock);
    return () => {
      document.body.classList.remove("loader-active");
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`brand-loader ${phase === "fading" ? "is-fading" : ""}`}
    >
      <div className="brand-loader__content">
        <div className="brand-loader__logo-shell">
          <span className="brand-loader__ring" />
          <Image
            src="/logo.svg"
            alt="Rise Infotech"
            width={68}
            height={68}
            priority
            className="brand-loader__logo"
          />
        </div>
        <p className="brand-loader__title">Rise Infotech</p>
        <p className="brand-loader__subtitle">Preparing SAP Professionals</p>
      </div>
    </div>
  );
}
