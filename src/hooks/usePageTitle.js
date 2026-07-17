import { useEffect } from "react";

const SITE_TITLE = "Neha Kamichetty's Nice Kangaroo | ITIS3135";

/**
 * Sets the browser tab title for the active React page.
 */
export function usePageTitle(pageName) {
  useEffect(() => {
    document.title = `${SITE_TITLE} | ${pageName}`;
  }, [pageName]);
}
