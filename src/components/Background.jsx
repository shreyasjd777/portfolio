import { useEffect, useState } from 'react';

const DOT_SPACING = 38;
const DOT_RADIUS = 1.4;
const FIRST_ROW_Y = 28;
const HOVER_RADIUS = 220;

// Keep a real dot column on the viewport centre instead of relying on an SVG
// pattern origin. Percentage pattern offsets render inconsistently between
// browsers and can clip the centre dot.
function getViewport() {
  return { width: window.innerWidth, height: window.innerHeight };
}

export default function Background({ isInteractive }) {
  const [viewport, setViewport] = useState(getViewport);
  const [pointer, setPointer] = useState(null);

  useEffect(() => {
    const updateViewport = () => setViewport(getViewport());
    window.addEventListener('resize', updateViewport, { passive: true });
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    if (!isInteractive) {
      setPointer(null);
      return undefined;
    }

    // The backdrop intentionally ignores pointer events so it never blocks
    // links or controls. Track the pointer at window level instead.
    const updatePointer = (event) => setPointer({ x: event.clientX, y: event.clientY });
    const clearPointer = () => setPointer(null);
    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('blur', clearPointer);
    return () => {
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('blur', clearPointer);
    };
  }, [isInteractive]);

  const centerX = viewport.width / 2;
  const columns = Math.ceil(viewport.width / (DOT_SPACING * 2)) + 1;
  const rows = Math.ceil((viewport.height - FIRST_ROW_Y) / DOT_SPACING) + 1;
  const dots = [];

  for (let row = 0; row < rows; row += 1) {
    const cy = FIRST_ROW_Y + row * DOT_SPACING;
    for (let column = -columns; column <= columns; column += 1) {
      const cx = centerX + column * DOT_SPACING;
      const distance = pointer ? Math.hypot(pointer.x - cx, pointer.y - cy) : HOVER_RADIUS;
      // Square the falloff so the change stays concentrated in a small,
      // soft halo around the cursor instead of reading as a large spotlight.
      const strength = Math.max(0, 1 - distance / HOVER_RADIUS) ** 2;

      const radius = DOT_RADIUS * (1 + strength * 2.25);
      dots.push(
        <g key={`${column}-${row}`}>
          <circle className="backdrop-dot" cx={cx} cy={cy} r={radius} />
          <circle className="backdrop-dot-tint" cx={cx} cy={cy} r={radius} opacity={strength} />
        </g>
      );
    }
  }

  return (
    <div
      className="backdrop"
      aria-hidden="true"
    >
      <svg className="backdrop-grid" viewBox={`0 0 ${viewport.width} ${viewport.height}`} preserveAspectRatio="none">
        {dots}
      </svg>
    </div>
  );
}
