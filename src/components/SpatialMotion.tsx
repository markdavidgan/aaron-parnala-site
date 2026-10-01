"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Progressive motion: server-rendered content is always visible without JS. */
export function SpatialMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    let frame = 0;
    const play = (element: Element, keyframes: Keyframe[], delay = 0) => {
      if (preference.matches) return;
      const animation = element.animate(keyframes, {
        duration: 1000,
        delay,
        easing: "cubic-bezier(.22,1,.36,1)",
        fill: "backwards",
      });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          observer.unobserve(target);
          if (target.matches(".image-frame")) {
            play(target, [
              { clipPath: "inset(0 0 12% 0)" },
              { clipPath: "inset(0)" },
            ]);
          } else {
            play(target, [
              { opacity: 0, transform: "translateY(18px)" },
              { opacity: 1, transform: "translateY(0)" },
            ]);
          }
        });
      },
      { threshold: 0.12 },
    );
    const register = () => {
      main
        .querySelectorAll(
          ".image-frame, .intro h2, .invitation h2, .process li",
        )
        .forEach((el) => {
          if (seen.has(el)) return;
          seen.add(el);
          observer.observe(el);
        });
    };
    main
      .querySelectorAll(
        ".opening-meta, .opening h1, .opening-bottom, .page-heading, .case-title",
      )
      .forEach((el, index) => {
        play(
          el,
          [
            { opacity: 0, transform: "translateY(26px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          index * 100,
        );
      });
    register();
    const mutation = new MutationObserver(register);
    mutation.observe(main, { childList: true, subtree: true });
    const depthImages = Array.from(
      main.querySelectorAll<HTMLElement>(
        ".material .image-frame img, .evening .image-frame img",
      ),
    );
    const update = () => {
      frame = 0;
      depthImages.forEach((image) => {
        const rect = image.parentElement!.getBoundingClientRect();
        const progress = Math.max(
          -1,
          Math.min(
            1,
            (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight,
          ),
        );
        image.style.transform = preference.matches
          ? ""
          : `translateY(${progress * 22}px) scale(1.08)`;
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const change = () => {
      if (preference.matches)
        animations.forEach((animation) => animation.cancel());
      schedule();
    };
    update();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    preference.addEventListener("change", change);
    return () => {
      observer.disconnect();
      mutation.disconnect();
      cancelAnimationFrame(frame);
      animations.forEach((animation) => animation.cancel());
      depthImages.forEach((image) => {
        image.style.transform = "";
      });
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      preference.removeEventListener("change", change);
    };
  }, [pathname]);
  return null;
}
