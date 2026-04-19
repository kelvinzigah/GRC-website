import { useRef, useState, useEffect } from 'react';

const PANEL_A_POINTS = [
  [0,0],[0.40,0],[0.41,0.02],[0.43,0.01],[0.44,0.04],[0.42,0.05],[0.45,0.08],
  [0.44,0.10],[0.46,0.12],[0.43,0.15],[0.47,0.18],[0.44,0.21],[0.48,0.24],
  [0.45,0.27],[0.49,0.30],[0.46,0.34],[0.50,0.37],[0.47,0.40],[0.52,0.43],
  [0.49,0.46],[0.53,0.50],[0.50,0.53],[0.55,0.56],[0.52,0.59],[0.57,0.62],
  [0.54,0.65],[0.59,0.68],[0.56,0.71],[0.61,0.74],[0.58,0.77],[0.63,0.81],
  [0.60,0.84],[0.65,0.87],[0.62,0.91],[0.67,0.94],[0.65,0.97],[0.68,1],
  [0,1]
];

const PANEL_B_POINTS = [
  [0.40,0],[0.82,0],[0.83,0.03],[0.85,0.02],[0.84,0.06],[0.87,0.08],[0.85,0.11],
  [0.88,0.14],[0.86,0.17],[0.89,0.20],[0.87,0.23],[0.90,0.26],[0.88,0.30],
  [0.91,0.33],[0.89,0.36],[0.92,0.40],[0.90,0.43],[0.93,0.46],[0.91,0.50],
  [0.94,0.53],[0.92,0.57],[0.95,0.60],[0.93,0.63],[0.96,0.67],[0.94,0.70],
  [1,0.72],[1,1],[0.68,1],[0.65,0.97],[0.67,0.94],[0.62,0.91],[0.65,0.87],
  [0.60,0.84],[0.63,0.81],[0.58,0.77],[0.61,0.74],[0.56,0.71],[0.59,0.68],
  [0.54,0.65],[0.57,0.62],[0.52,0.59],[0.55,0.56],[0.50,0.53],[0.53,0.50],
  [0.49,0.46],[0.52,0.43],[0.47,0.40],[0.50,0.37],[0.46,0.34],[0.49,0.30],
  [0.45,0.27],[0.48,0.24],[0.44,0.21],[0.47,0.18],[0.43,0.15],[0.46,0.12],
  [0.44,0.10],[0.45,0.08],[0.42,0.05],[0.44,0.04],[0.43,0.01],[0.41,0.02]
];

const PANEL_C_POINTS = [
  [0.82,0],[1,0],[1,1],[0.68,1],[0.94,0.70],[0.96,0.67],[0.93,0.63],
  [0.95,0.60],[0.92,0.57],[0.94,0.53],[0.91,0.50],[0.93,0.46],[0.90,0.43],
  [0.92,0.40],[0.89,0.36],[0.91,0.33],[0.88,0.30],[0.90,0.26],[0.87,0.23],
  [0.89,0.20],[0.86,0.17],[0.88,0.14],[0.85,0.11],[0.87,0.08],[0.84,0.06],
  [0.85,0.02],[0.83,0.03]
];

const TEAR_LINE_1 = [
  [0.40,0],[0.41,0.02],[0.43,0.01],[0.44,0.04],[0.42,0.05],[0.45,0.08],
  [0.44,0.10],[0.46,0.12],[0.43,0.15],[0.47,0.18],[0.44,0.21],[0.48,0.24],
  [0.45,0.27],[0.49,0.30],[0.46,0.34],[0.50,0.37],[0.47,0.40],[0.52,0.43],
  [0.49,0.46],[0.53,0.50],[0.50,0.53],[0.55,0.56],[0.52,0.59],[0.57,0.62],
  [0.54,0.65],[0.59,0.68],[0.56,0.71],[0.61,0.74],[0.58,0.77],[0.63,0.81],
  [0.60,0.84],[0.65,0.87],[0.62,0.91],[0.67,0.94],[0.65,0.97],[0.68,1]
];

const TEAR_LINE_2 = [
  [0.82,0],[0.83,0.03],[0.85,0.02],[0.84,0.06],[0.87,0.08],[0.85,0.11],
  [0.88,0.14],[0.86,0.17],[0.89,0.20],[0.87,0.23],[0.90,0.26],[0.88,0.30],
  [0.91,0.33],[0.89,0.36],[0.92,0.40],[0.90,0.43],[0.93,0.46],[0.91,0.50],
  [0.94,0.53],[0.92,0.57],[0.95,0.60],[0.93,0.63],[0.96,0.67],[0.94,0.70],
  [1,0.72]
];

function ptsToString(pts) {
  return pts.map(([x, y]) => `${x},${y}`).join(' ');
}

function ptsToPixels(pts, w, h) {
  return pts.map(([x, y]) => `${x * w},${y * h}`).join(' ');
}

export function TornCollage() {
  const containerRef = useRef(null);
  const [dims, setDims] = useState({ w: 800, h: 500 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setDims({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(280px, 45vw, 500px)',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      {/* SVG defs — zero size, defines clipPaths and blur filter */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="blur-edge">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
          <clipPath id="torn-left" clipPathUnits="objectBoundingBox">
            <polygon points={ptsToString(PANEL_A_POINTS)} />
          </clipPath>
          <clipPath id="torn-center" clipPathUnits="objectBoundingBox">
            <polygon points={ptsToString(PANEL_B_POINTS)} />
          </clipPath>
          <clipPath id="torn-right" clipPathUnits="objectBoundingBox">
            <polygon points={ptsToString(PANEL_C_POINTS)} />
          </clipPath>
        </defs>
      </svg>

      {/* Panel A — top-left, B&W/desaturated — se_3: prayer moment, left man's face/profile in left clip */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: 'url(#torn-left)',
          filter: 'drop-shadow(0px 0px 3px rgba(255,255,255,0.6))',
          zIndex: 1,
        }}
      >
        <img
          src="/images/street-evangelism/se_3.jpg"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '30% 30%', filter: 'grayscale(1) contrast(1.1)' }}
        />
      </div>

      {/* Panel B — center dominant strip, full color — se_2: women ministering, face at upper portion */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: 'url(#torn-center)',
          filter: 'drop-shadow(0px 0px 3px rgba(255,255,255,0.6))',
          zIndex: 2,
        }}
      >
        <img
          src="/images/street-evangelism/se_2.jpg"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 22%' }}
        />
      </div>

      {/* Panel C — bottom-right, blue/purple tint — se_9: night street atmosphere */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: 'url(#torn-right)',
          filter: 'drop-shadow(0px 0px 3px rgba(255,255,255,0.6))',
          zIndex: 1,
        }}
      >
        <img
          src="/images/street-evangelism/se_9.jpg"
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 12%',
            filter: 'saturate(1.3) hue-rotate(200deg) brightness(0.8)',
          }}
        />
      </div>

      {/* Tear-line overlays — white paper edge stroke */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <polyline
          points={ptsToPixels(TEAR_LINE_1, dims.w, dims.h)}
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#blur-edge)"
        />
        <polyline
          points={ptsToPixels(TEAR_LINE_2, dims.w, dims.h)}
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#blur-edge)"
        />
      </svg>

      {/* Vignette overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />
    </div>
  );
}

export function TornCollageSection({ quote }) {
  return (
    <section style={{ background: '#000', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="mx-auto max-w-3xl px-4 text-center" style={{ marginBottom: '2.5rem' }}>
        <p className="font-serif italic text-cream text-2xl md:text-3xl leading-relaxed">
          {quote}
        </p>
        <div
          style={{
            borderBottom: '3px solid #D4922A',
            width: '60px',
            margin: '1rem auto 0',
          }}
        />
      </div>
      <TornCollage />
    </section>
  );
}
