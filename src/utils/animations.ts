import { inView, animate, stagger } from "motion";

export const initScrollReveal = () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;
  
  document.documentElement.classList.add("js-enabled");

  const sections = document.querySelectorAll("[data-scroll-reveal]");

  sections.forEach((section) => {
    inView(section, () => {    
      const header = section.querySelector("[data-reveal-header]");
      if (header) {
        animate(
          header as any,
          { opacity: [0, 1], y: [45, 0] } as any,
          { duration: 0.8, easing: "ease-out" } as any
        );
      }
      
      const items = section.querySelectorAll("[data-reveal-item]");
      if (items.length > 0) {
        animate(
          Array.from(items) as any,
          { opacity: [0, 1], y: [48, 0] } as any,
          {
            delay: stagger(0.12, { startDelay: 0.15 }),
            duration: 0.8,
            easing: "ease-out"
          } as any
        );
      }
    
      const button = section.querySelector("[data-reveal-button]");
      if (button) {
        animate(
          button as any,
          { opacity: [0, 1], y: [24, 0] } as any,
          { delay: 0.8, duration: 0.8, easing: "ease-out" } as any
        );
      }
    }, { amount: 0.25 }); 
  });
};
