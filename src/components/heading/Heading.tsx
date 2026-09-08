import type { PropsWithChildren } from "react";

import "./Heading.css";

export function Heading({ children }: PropsWithChildren) {
  return <h1 className="heading">{children}</h1>;
}
