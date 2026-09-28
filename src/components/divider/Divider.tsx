import "./Divider.css";

export function Divider() {
  return (
    <div className="divider">
      <svg>
        <line className="divider-side" x1="0" x2="0" y1="0" y2="100%" />
        <line className="divider-main" x1="3%" x2="87%" y1="50%" y2="50%" />
        <line className="divider-dots" x1="90%" x2="97%" y1="50%" y2="50%" />
        <line className="divider-side" x1="100%" x2="100%" y1="0" y2="100%" />
      </svg>
    </div>
  );
}
