import { useEffect } from "react";

/**
 * Sets the browser tab title for the active React page.
 */
export function usePageTitle(pageName) {
  useEffect(() => {
    document.title = `Neha Kamichetty's Nice Kangaroo | ${pageName}`;
  }, [pageName]);
}
