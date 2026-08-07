// Authored placeholder thumbnails — flat, solid-fill compositions (no gradients, no stock photos).
// Each mark evokes its project's actual mechanism rather than a generic icon-on-card.

function Frame({ children }) {
  return (
    <svg viewBox="0 0 400 260" className="art" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="260" className="art-bg" />
      {children}
    </svg>
  );
}

export function ShriddleShredsArt() {
  const nodes = [
    [80, 190],
    [150, 90],
    [230, 150],
    [300, 70],
    [330, 190],
  ];
  return (
    <Frame>
      <g className="art-line" strokeWidth="1.6" fill="none">
        <path d="M80 190L150 90L230 150L300 70" />
        <path d="M230 150L330 190" />
      </g>
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 3 ? 10 : 7} className={i % 2 === 0 ? 'art-accent' : 'art-dim'} />
      ))}
    </Frame>
  );
}

export function RvisionArt() {
  const bars = [40, 90, 55, 120, 70, 100, 60, 85];
  return (
    <Frame>
      <g>
        {bars.map((h, i) => (
          <rect
            key={i}
            x={40 + i * 40}
            y={210 - h}
            width="18"
            height={h}
            className={i === 3 ? 'art-accent' : 'art-dim'}
          />
        ))}
      </g>
      <path
        d="M40 150L80 110L120 170L160 90L200 130L240 60L280 140L320 100L360 150"
        className="art-line"
        strokeWidth="2"
        fill="none"
      />
    </Frame>
  );
}

export function TindergramArt() {
  const rows = [0, 1, 2, 3, 4, 5];
  return (
    <Frame>
      {rows.map((r) => (
        <g key={r}>
          <rect x="46" y={44 + r * 30} width={r === 2 ? 150 : 210} height="10" className="art-dim" />
          <rect x="300" y={44 + r * 30} width="54" height="10" className={r === 2 ? 'art-accent' : 'art-dim'} />
        </g>
      ))}
      <rect x="46" y={44 + 2 * 30 + 16} width="10" height="10" className="art-accent" />
    </Frame>
  );
}

export function ThetaTauArt() {
  return (
    <Frame>
      <path
        d="M60 210C110 150 100 90 150 80C200 70 190 140 240 130C290 120 280 60 340 50"
        className="art-line"
        strokeWidth="2"
        fill="none"
        strokeDasharray="1 14"
        strokeLinecap="round"
      />
      <circle cx="60" cy="210" r="8" className="art-dim" />
      <path d="M340 50l-16 6 4-17z" className="art-accent" />
      <circle cx="150" cy="80" r="6" className="art-accent" />
      <circle cx="240" cy="130" r="6" className="art-dim" />
    </Frame>
  );
}

// Deliberately restrained v1 artwork for CamJam until the real app screenshots
// are available. Keep this component data-only replaceable.
export function CamJamArt() {
  return (
    <Frame>
      <rect x="142" y="28" width="116" height="204" rx="18" className="art-dim" />
      <rect x="151" y="52" width="98" height="150" rx="8" className="art-bg" />
      <circle cx="200" cy="42" r="3" className="art-accent" />
      <rect x="165" y="72" width="70" height="8" className="art-accent" />
      <rect x="165" y="94" width="52" height="8" className="art-dim" />
      <rect x="165" y="122" width="70" height="38" rx="6" className="art-dim" />
      <text x="200" y="186" textAnchor="middle" className="art-label">CAMJAM · SCREENSHOTS PENDING</text>
    </Frame>
  );
}
