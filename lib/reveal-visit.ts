const STORAGE_KEY = "frizeria-reveal-seen";

export function hasSeenReveal(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function markRevealSeen(): void {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* private browsing or blocked storage */
  }
}

let leaveListenerAttached = false;

/** Call once per session when scroll reveals are active on a first visit */
export function attachRevealSeenOnLeave(): void {
  if (typeof window === "undefined" || leaveListenerAttached || hasSeenReveal()) return;
  leaveListenerAttached = true;
  const onLeave = () => markRevealSeen();
  window.addEventListener("pagehide", onLeave);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") onLeave();
  });
}
