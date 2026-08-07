import { useEffect } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

// Lower = heavier, more dampened (each frame closes less of the remaining
// distance). A ~600px wheel tick settles in about 1.4s at this value —
// noticeably weighted without going sluggish or feeling disconnected from
// the input.
const DAMPING = 0.08;
const STOP_THRESHOLD_PX = 0.5;
// Firefox (and some mice) report wheel deltas in lines/pages instead of
// pixels — normalize those to roughly match a pixel-mode trackpad tick.
const LINE_HEIGHT_PX = 16;

function normalizeDeltaY(event) {
  if (event.deltaMode === 1) return event.deltaY * LINE_HEIGHT_PX;
  if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
  return event.deltaY;
}

// True if the wheel event happened inside a scrollable region other than
// the page itself (e.g. the project detail modal) — that element should
// keep its native scroll, not have the page steal the gesture.
function isInsideNestedScroller(target) {
  let node = target instanceof Element ? target : target?.parentElement;

  while (node && node !== document.body && node !== document.documentElement) {
    const { overflowY } = window.getComputedStyle(node);
    if ((overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight) {
      return true;
    }
    node = node.parentElement;
  }

  return false;
}

// Replaces raw wheel-driven scrolling with an eased approach toward the
// accumulated target position, so each tick settles instead of jumping the
// page straight to it. Disabled for touch (already has native momentum) and
// reduced-motion (the damping itself is a motion effect, not essential
// feedback).
export function useSmoothScroll() {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return undefined;
    if (window.matchMedia?.('(pointer: coarse)').matches) return undefined;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    let current = window.scrollY;
    let target = window.scrollY;
    let rafId = null;

    const step = () => {
      const diff = target - current;

      if (Math.abs(diff) < STOP_THRESHOLD_PX) {
        current = target;
        window.scrollTo(0, current);
        rafId = null;
        return;
      }

      current += diff * DAMPING;
      window.scrollTo(0, current);
      rafId = window.requestAnimationFrame(step);
    };

    const onWheel = (event) => {
      // Leave pinch-zoom, horizontal gestures, and nested scrollers alone.
      if (event.ctrlKey || event.metaKey) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (isInsideNestedScroller(event.target)) return;

      event.preventDefault();

      if (rafId === null) {
        // Resync in case something else (a nav click, back-to-top) moved
        // the page since the damping loop last ran.
        current = window.scrollY;
        target = window.scrollY;
      }

      target = Math.min(Math.max(target + normalizeDeltaY(event), 0), maxScroll());

      if (rafId === null) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);
}
