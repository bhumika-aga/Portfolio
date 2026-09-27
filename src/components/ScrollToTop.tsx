import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

// Render before <Routes>: layout effects run in tree order, so the scroll
// position is reset before <Reveal> measures what is on screen. A hash such
// as /projects#urbannexus scrolls to that element instead.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
