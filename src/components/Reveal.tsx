import { Box, BoxProps } from "@mui/material";
import React, { useLayoutEffect, useRef } from "react";

interface RevealProps extends BoxProps {
  // Stagger for items in a row, in milliseconds.
  delay?: number;
}

// Fades content in as it scrolls into view. Anything already on screen when
// the page mounts renders as is, so switching pages never blanks visible
// content. The check runs before paint, and the styles live in theme.ts.
const Reveal: React.FC<RevealProps> = ({ delay = 0, sx, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "done";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      {...props}
      sx={[
        { transitionDelay: `${delay}ms` },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
};

export default Reveal;
