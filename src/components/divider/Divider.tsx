import { useId } from "react";

import "./Divider.css";

export function Divider() {
  const gradientId = useId();

  return (
    <div className="divider">
      <svg>
        <defs>
          <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="3%" x2="87%">
            <stop offset="0%" stopColor="var(--color-text-secondary)" stopOpacity="0.32" />
            <stop offset="8%" stopColor="var(--color-text-secondary)" stopOpacity="0.43" />
            <stop offset="13%" stopColor="var(--color-text-secondary)" stopOpacity="0.28" />
            <stop offset="27%" stopColor="var(--color-text-secondary)" stopOpacity="0.41" />
            <stop offset="38%" stopColor="var(--color-text-secondary)" stopOpacity="0.31" />
            <stop offset="43%" stopColor="var(--color-text-secondary)" stopOpacity="0.46" />
            <stop offset="58%" stopColor="var(--color-text-secondary)" stopOpacity="0.35" />
            <stop offset="72%" stopColor="var(--color-text-secondary)" stopOpacity="0.44" />
            <stop offset="79%" stopColor="var(--color-text-secondary)" stopOpacity="0.3" />
            <stop offset="91%" stopColor="var(--color-text-secondary)" stopOpacity="0.42" />
            <stop offset="100%" stopColor="var(--color-text-secondary)" stopOpacity="0.33" />
          </linearGradient>
        </defs>
        <line className="divider-side" x1="0" x2="0" y1="0" y2="100%" />
        <line
          className="divider-main"
          x1="3%"
          x2="87%"
          y1="50%"
          y2="50%"
          stroke={`url(#${gradientId})`}
        />
        {[90, 91.75, 93.5, 95.25, 97].map((x) => (
          <circle key={x} className="divider-dot" cx={`${x}%`} cy="50%" r="1" />
        ))}
        <line className="divider-side" x1="100%" x2="100%" y1="0" y2="100%" />
      </svg>
    </div>
  );
}
