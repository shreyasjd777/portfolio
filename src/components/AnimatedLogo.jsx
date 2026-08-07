import { useLayoutEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const FULL_NAME = profile.name;
const FIRST_INITIAL_INDEX = 0;
// Index of the first letter of the last word — works for any "First Last" name
// instead of hardcoding a specific letter.
const LAST_INITIAL_INDEX = FULL_NAME.lastIndexOf(' ') + 1;

// A moderate scale keeps the intro name crisp while still reading clearly at
// the center of the viewport (large transforms tend to rasterize small text).
const INTRO_SCALE = 2.65;
// The size the joined "SD" holds at the center of the screen, after the two
// initials have traveled toward each other but before they relocate to the
// header. Between the spelled-out intro scale and the final header scale (1)
// so the journey reads as two clear, deliberate steps rather than one blur.
const MEET_SCALE = 1.8;
// Matches the CSS timing: dock starts at 1.15s and runs 1.35s (ends ~2.5s).
// Wait until the initials have fully docked before revealing the rest of the
// header, so the animated name visibly arrives at the real SD button.
const SETTLE_DELAY_MS = 2580;
const REDUCED_MOTION_SETTLE_MS = 60;

// This is the *actual* header logo — every letter below is a real DOM node
// inside the real nav brand mark. There is no separate loader screen and no
// duplicate "SD" underneath; the extra letters simply fade away in place and
// the two initials dock into their final header position.
export default function AnimatedLogo({ onIntroSettle }) {
  const reducedMotion = usePrefersReducedMotion();
  const [animationReady, setAnimationReady] = useState(false);

  const logoRef = useRef(null);
  const letterRefs = useRef([]);

  useLayoutEffect(() => {
    let animationFrame;
    let settleTimer;
    let cancelled = false;

    const measureAndPositionLetters = () => {
      if (cancelled) return;

      animationFrame = window.requestAnimationFrame(() => {
        const logo = logoRef.current;
        if (!logo) return;

        const logoRect = logo.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(logo);

        // Canvas text measurement using the exact loaded font so the
        // centered intro name lines up with the real glyph metrics.
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = [computedStyle.fontWeight, computedStyle.fontSize, computedStyle.fontFamily].join(' ');

        const letters = FULL_NAME.split('');
        const letterSpacing = Number.parseFloat(computedStyle.letterSpacing) || 0;

        const letterWidths = letters.map((letter) => context.measureText(letter).width + letterSpacing);

        const fullNameWidth = letterWidths.reduce((total, width) => total + width, 0) * INTRO_SCALE;

        const introLeft = window.innerWidth / 2 - fullNameWidth / 2;
        const introTop = window.innerHeight / 2 - (logoRect.height * INTRO_SCALE) / 2;

        const firstWidth = context.measureText(FULL_NAME[FIRST_INITIAL_INDEX]).width + letterSpacing;
        const lastWidth = context.measureText(FULL_NAME[LAST_INITIAL_INDEX]).width + letterSpacing;

        // The final logo only ever needs to fit the two retained initials.
        logo.style.setProperty('--logo-width', `${firstWidth + lastWidth}px`);
        logo.style.setProperty('--logo-height', `${logoRect.height}px`);

        // Where the two initials meet: the same joined "SD" shape as the
        // final logo, just held larger and centered on the viewport instead
        // of docked in the header corner.
        const meetLeft = window.innerWidth / 2 - ((firstWidth + lastWidth) * MEET_SCALE) / 2;
        const meetTop = window.innerHeight / 2 - (logoRect.height * MEET_SCALE) / 2;

        let accumulatedWidth = 0;

        letterRefs.current.forEach((letterElement, index) => {
          if (!letterElement) return;

          // In the final logo, the first initial sits at 0 and the second
          // initial starts right after it.
          const finalX = index === LAST_INITIAL_INDEX ? firstWidth : 0;

          const introX = introLeft + accumulatedWidth * INTRO_SCALE - logoRect.left - finalX;
          const introY = introTop - logoRect.top;

          letterElement.style.setProperty('--final-x', `${finalX}px`);
          letterElement.style.setProperty('--intro-x', `${introX}px`);
          letterElement.style.setProperty('--intro-y', `${introY}px`);
          letterElement.style.setProperty('--intro-scale', `${INTRO_SCALE}`);

          if (index === FIRST_INITIAL_INDEX || index === LAST_INITIAL_INDEX) {
            // finalX already encodes each initial's position within the
            // joined "SD" pair, so it doubles as the offset within the
            // meet block — just scaled up to MEET_SCALE instead of 1.
            const meetX = meetLeft + finalX * MEET_SCALE - logoRect.left - finalX;
            const meetY = meetTop - logoRect.top;

            letterElement.style.setProperty('--meet-x', `${meetX}px`);
            letterElement.style.setProperty('--meet-y', `${meetY}px`);
            letterElement.style.setProperty('--meet-scale', `${MEET_SCALE}`);
          }

          accumulatedWidth += letterWidths[index];
        });

        setAnimationReady(true);

        settleTimer = window.setTimeout(
          () => {
            if (!cancelled) onIntroSettle?.();
          },
          reducedMotion ? REDUCED_MOTION_SETTLE_MS : SETTLE_DELAY_MS
        );
      });
    };

    // Waiting for document.fonts.ready matters: measuring before the real
    // font loads produces a jump when the font swaps in mid-animation.
    if (document.fonts?.ready) {
      document.fonts.ready.then(measureAndPositionLetters);
    } else {
      measureAndPositionLetters();
    }

    return () => {
      cancelled = true;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      if (settleTimer) window.clearTimeout(settleTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  return (
    <span ref={logoRef} className={`nav-brand-mark${animationReady ? ' is-ready' : ''}`} aria-hidden="true">
      <span className="animated-logo-fallback">{FULL_NAME}</span>
      {FULL_NAME.split('').map((letter, index) => {
        const isInitial = index === FIRST_INITIAL_INDEX || index === LAST_INITIAL_INDEX;

        const className = [
          'animated-logo-letter',
          isInitial ? 'animated-logo-anchor' : 'animated-logo-extra',
          letter === ' ' ? 'animated-logo-space' : '',
          animationReady ? 'is-ready' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <span
            ref={(element) => {
              letterRefs.current[index] = element;
            }}
            className={className}
            key={`${letter}-${index}`}
            style={{ '--letter-index': index }}
          >
            {letter === ' ' ? ' ' : letter}
          </span>
        );
      })}
    </span>
  );
}
