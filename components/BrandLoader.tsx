"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MIN_VISIBLE_MS = 1150;
const FALLBACK_HIDE_MS = 2400;
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
      className={`fixed inset-0 z-[12000] flex items-center justify-center bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.2),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] backdrop-blur-sm transition-opacity duration-300 ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center px-6">
        <div className="relative mb-5">
          <span className="brand-loader-glow absolute inset-0 rounded-[26px] bg-blue-400/25 blur-xl" />
          <div className="relative h-[92px] w-[92px] rounded-[26px] border border-blue-200/80 bg-white/95 shadow-[0_20px_45px_rgba(37,99,235,0.2)] flex items-center justify-center overflow-hidden">
            <div className="brand-loader-logo">
              <Image
                src="/logo.png"
                alt="Rise Infotech"
                width={78}
                height={78}
                priority
                className="scale-[1.8] object-contain"
              />
            </div>
          </div>
        </div>
        <p className="text-slate-900 text-xl font-semibold tracking-tight">
          Rise Infotech
        </p>
        <p className="mt-1 text-slate-500 text-sm">SAP Career Academy</p>
        <div className="mt-5 h-1.5 w-40 overflow-hidden rounded-full bg-slate-200/80">
          <span className="brand-loader-progress block h-full rounded-full bg-gradient-to-r from-blue-700 to-indigo-500" />
        </div>
      </div>
    </div>
  );
}
