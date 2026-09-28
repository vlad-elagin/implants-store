import { Divider } from "@/components/divider/Divider";
import { Heading } from "@/components/heading/Heading";

export function LandingSceneMenu() {
  return (
    <div className="landing-scene__menu">
      <header className="landing-scene__header">
        <Heading>
          Null{" "}
          <span className="heading__highlight">
            <span className="heading__separator">//</span> Flesh
          </span>
        </Heading>
        <p className="landing-scene__tagline">Aftermarket human augmentation</p>
      </header>

      <Divider />

      <div className="landing-scene__introduction">
        <h2 className="landing-scene__title">Biology was only the first draft.</h2>
        <p className="landing-scene__description">
          Aftermarket implants engineered to replace weakness with purpose-built performance.
        </p>
      </div>

      <nav className="landing-scene__navigation" aria-label="Landing navigation">
        <button className="landing-scene__catalogue-link" type="button">
          <span className="catalogue-link-text">Explore implants</span>
          <span className="catalogue-link-stripe" />
          <svg className="catalogue-link-arrow" viewBox="0 0 100 100" aria-hidden="true">
            <g className="catalogue-link-arrow__ring">
              <circle className="catalogue-link-arrow__border" cx="45" cy="50" r="40" />
              <circle className="catalogue-link-arrow__dot" cx="45" cy="10" r="2" />
              <circle className="catalogue-link-arrow__dot" cx="85" cy="50" r="2" />
              <circle className="catalogue-link-arrow__dot" cx="5" cy="50" r="2" />
            </g>
            <line className="catalogue-link-arrow__line" x1="34" y1="27.5" x2="58" y2="50" />
            <line className="catalogue-link-arrow__line" x1="58" y1="50" x2="34" y2="72.5" />
          </svg>
          <svg className="catalogue-link-border" aria-hidden="true" preserveAspectRatio="none">
            {[
              { x1: "1.5px", x2: "11.5px", y1: "1.5px", y2: "1.5px" },
              { x1: "1.5px", x2: "1.5px", y1: "1.5px", y2: "11.5px" },
              {
                x1: "calc(100% - 11.5px)",
                x2: "calc(100% - 1.5px)",
                y1: "1.5px",
                y2: "1.5px",
              },
              {
                x1: "calc(100% - 1.5px)",
                x2: "calc(100% - 1.5px)",
                y1: "1.5px",
                y2: "11.5px",
              },
              {
                x1: "1.5px",
                x2: "11.5px",
                y1: "calc(100% - 1.5px)",
                y2: "calc(100% - 1.5px)",
              },
              {
                x1: "1.5px",
                x2: "1.5px",
                y1: "calc(100% - 11.5px)",
                y2: "calc(100% - 1.5px)",
              },
              {
                x1: "calc(100% - 11.5px)",
                x2: "calc(100% - 1.5px)",
                y1: "calc(100% - 1.5px)",
                y2: "calc(100% - 1.5px)",
              },
              {
                x1: "calc(100% - 1.5px)",
                x2: "calc(100% - 1.5px)",
                y1: "calc(100% - 11.5px)",
                y2: "calc(100% - 1.5px)",
              },
            ].map((coords, i) => (
              <line key={i} {...coords} />
            ))}
          </svg>
        </button>
      </nav>
    </div>
  );
}
