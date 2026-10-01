"use client";
import { useEffect, useRef } from "react";
import { PortfolioImage } from "@/components/PortfolioImage";
import { PortfolioAsset } from "@/data/projects";
export function Threshold({ asset }: { asset: PortfolioAsset }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(
          0,
          (window.innerHeight * 0.65 - rect.top) / (window.innerHeight * 0.8),
        ),
      );
      el.style.setProperty(
        "--aperture",
        `${media.matches ? 0 : 12 * (1 - progress)}%`,
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
    };
  }, []);
  return (
    <div ref={ref} className="threshold">
      <PortfolioImage asset={asset} priority />
      <div className="threshold-caption">
        <span>Room to live.</span>
        <span>Urban residential / Aaron Parnala Projects</span>
      </div>
    </div>
  );
}
