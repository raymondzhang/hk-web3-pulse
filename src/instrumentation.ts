/**
 * Next.js server instrumentation hook.
 * Fixes Node.js 22+ experimental localStorage incompatibility.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Node.js 22+ exposes experimental `localStorage` but getItem/setItem
    // may be undefined, causing SSR crashes. Provide a safe no-op fallback.
    if (
      typeof globalThis.localStorage !== "undefined" &&
      typeof globalThis.localStorage.getItem !== "function"
    ) {
      const store = new Map<string, string>();
      Object.defineProperty(globalThis, "localStorage", {
        value: {
          getItem: (key: string) => store.get(key) ?? null,
          setItem: (key: string, value: string) => store.set(key, value),
          removeItem: (key: string) => store.delete(key),
          clear: () => store.clear(),
          get length() {
            return store.size;
          },
          key: (index: number) => [...store.keys()][index] ?? null,
        },
        configurable: true,
        writable: true,
      });
    }
  }
}
