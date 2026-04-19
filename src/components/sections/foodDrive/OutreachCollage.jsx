// Image assignments: each cell uses a unique image with object-position tuned
// to keep faces visible in the cropped grid cell.
const DESKTOP_CELLS = [
  // Cell A — tall portrait spanning rows 1-2; man serving food, face upper area
  { src: '/images/homeless_outreach_01.jpg', style: { gridColumn: '1/2', gridRow: '1/3' }, objPos: 'center 20%' },
  // Cell B — short top-center; volunteer handing banana, face upper half
  { src: '/images/homeless_outreach_03.jpg', style: { gridColumn: '2/3', gridRow: '1/2' }, objPos: 'center 20%' },
  // Cell C — short top-right; multiple volunteers at table, faces upper portion
  { src: '/images/homeless_outreach_5.jpg',  style: { gridColumn: '3/4', gridRow: '1/2' }, objPos: 'center 25%' },
  // Cell D — center tall; Christmas clothing distribution, faces upper area
  { src: '/images/homeless_outreach_2.jpg',  style: { gridColumn: '2/3', gridRow: '2/3' }, objPos: 'center 20%' },
  // Cell E — center-right; rainy-day serving, face of volunteer
  { src: '/images/homeless_outreach_04.jpg', style: { gridColumn: '3/4', gridRow: '2/3' }, objPos: 'center 25%' },
  // Cell F — bottom-left short; smiling volunteer handing food
  { src: '/images/homeless_outreach_02.jpg', style: { gridColumn: '1/2', gridRow: '3/4' }, objPos: 'center 30%' },
  // Cell G — bottom wide spanning 2 cols; winter landscape scene, natural center
  { src: '/images/homeless_outreach_1.jpg',  style: { gridColumn: '2/4', gridRow: '3/4' }, objPos: 'center 40%' },
];

const MOBILE_CELLS = [
  { src: '/images/homeless_outreach_6.jpg',  objPos: 'center' },
  { src: '/images/homeless_outreach_03.jpg', objPos: 'center 20%' },
  { src: '/images/homeless_outreach_02.jpg', objPos: 'center 30%' },
  { src: '/images/homeless_outreach_1.jpg',  objPos: 'center 40%' },
];

export function OutreachCollage() {
  return (
    <section aria-hidden="true" role="presentation">
      {/* Desktop grid — 3 cols × 3 rows, significantly taller for impact */}
      <div
        className="hidden md:block w-full overflow-hidden"
        style={{ background: '#0a0a0a', padding: '8px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 2fr',
            gridTemplateRows: '200px 220px 180px',
            gap: '8px',
          }}
        >
          {DESKTOP_CELLS.map((cell, i) => (
            <div
              key={i}
              style={{ ...cell.style, borderRadius: '20px', overflow: 'hidden', position: 'relative' }}
            >
              <img
                src={cell.src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover block"
                style={{ objectPosition: cell.objPos }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile 2×2 fallback */}
      <div
        className="block md:hidden w-full overflow-hidden"
        style={{ background: '#0a0a0a', padding: '6px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '180px 180px',
            gap: '6px',
          }}
        >
          {MOBILE_CELLS.map((cell, i) => (
            <div key={i} style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src={cell.src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover block"
                style={{ objectPosition: cell.objPos }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
