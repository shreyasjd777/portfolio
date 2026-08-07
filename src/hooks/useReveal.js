import { useEffect } from 'react';

// Adds `.is-visible` to any [data-reveal] element as it enters the viewport.
// Runs once for the whole document — sections mount their reveal targets and
// this hook (mounted once in App) picks up everything, including elements
// added by client-side re-renders since it re-scans on every dependency tick.
export function useReveal(deps = []) {
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const targets = Array.from(document.querySelectorAll('[data-reveal]:not(.is-visible)'));

    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
