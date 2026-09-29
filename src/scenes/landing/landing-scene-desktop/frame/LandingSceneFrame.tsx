import "./LandingSceneFrame.css";

const coordinateDots = Array.from({ length: 28 }, (_, index) => ({
  cx: 5 + (index % 4) * 10,
  cy: 5 + Math.floor(index / 4) * 10,
}));

export function LandingSceneFrame() {
  return (
    <div className="landing-scene__frame">
      <svg className="landing-scene__frame-corners" aria-hidden="true" preserveAspectRatio="none">
        {[
          {
            side: "left",
            x1: "1.5px",
            x2: "calc(1.5px + 1rem)",
            y1: "1.5px",
            y2: "1.5px",
          },
          {
            side: "left",
            x1: "1.5px",
            x2: "1.5px",
            y1: "1.5px",
            y2: "calc(1.5px + 1rem)",
          },
          {
            side: "right",
            x1: "calc(100% - 1rem - 1.5px)",
            x2: "calc(100% - 1.5px)",
            y1: "1.5px",
            y2: "1.5px",
          },
          {
            side: "right",
            x1: "calc(100% - 1.5px)",
            x2: "calc(100% - 1.5px)",
            y1: "1.5px",
            y2: "calc(1.5px + 1rem)",
          },
          {
            side: "left",
            x1: "1.5px",
            x2: "calc(1.5px + 1rem)",
            y1: "calc(100% - 0.5rem - 1.5px)",
            y2: "calc(100% - 0.5rem - 1.5px)",
          },
          {
            side: "left",
            x1: "1.5px",
            x2: "1.5px",
            y1: "calc(100% - 1.5rem - 1.5px)",
            y2: "calc(100% - 0.5rem - 1.5px)",
          },
          {
            side: "right",
            x1: "calc(100% - 1rem - 1.5px)",
            x2: "calc(100% - 1.5px)",
            y1: "calc(100% - 0.5rem - 1.5px)",
            y2: "calc(100% - 0.5rem - 1.5px)",
          },
          {
            side: "right",
            x1: "calc(100% - 1.5px)",
            x2: "calc(100% - 1.5px)",
            y1: "calc(100% - 1.5rem - 1.5px)",
            y2: "calc(100% - 0.5rem - 1.5px)",
          },
        ].map(({ side, ...coords }, index) => (
          <line
            className={`landing-scene__frame-corner landing-scene__frame-corner--${side}`}
            key={index}
            {...coords}
          />
        ))}

        <line className="landing-scene__frame-corner--left" x1="1.5px" x2="1.5px" y1="7%" y2="8%" />

        <line
          className="landing-scene__frame-side--right transparent"
          x1="calc(100% - 1.5px)"
          x2="calc(100% - 1.5px)"
          y1="0"
          y2="8%"
        />

        <line
          className="landing-scene__frame-side--right"
          x1="calc(100% - 1.5px)"
          x2="calc(100% - 1.5px)"
          y1="8%"
          y2="calc(100% - 0.5rem - 1.5px)"
        />

        <line
          className="landing-scene__frame-side--right"
          x1="55%"
          x2="100%"
          y1="1.5px"
          y2="1.5px"
        />
        <line
          className="landing-scene__frame-side--right"
          x1="55%"
          x2="100%"
          y1="calc(100% - 0.5rem - 1.5px)"
          y2="calc(100% - 0.5rem - 1.5px)"
        />
      </svg>

      <div className="landing-scene__sysinfo type-technical">
        <div>
          <span>SYS_ID</span>
          <span>NF-00</span>
        </div>

        <div>
          <span>VER</span>
          <span>1.7.02</span>
        </div>
      </div>

      <div className="landing-scene__coords type-technical">
        <span>+ 35.6895° N, 139.6917° E</span>
  <svg className="landing-scene__coord-dots" viewBox="0 0 40 70" aria-hidden="true">
          {coordinateDots.map(({ cx, cy }) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.2" />
          ))}
        </svg>
      </div>

      <div className="landing-scene__code">
        <span className="type-technical">NF-0001-00-A</span>
        <div className="barcode" aria-hidden="true">
          <span className="barcode__arrow" />
          <div className="barcode__bars barcode__bars--red" />
          <div className="barcode__bars barcode__bars--cyan" />
        </div>
      </div>
    </div>
  );
}
