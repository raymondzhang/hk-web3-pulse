import { cookies } from "next/headers";

/**
 * Server-side theme detection from cookie.
 * Returns true if user prefers dark mode.
 */
export async function getDarkMode(): Promise<boolean> {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  if (theme === "dark") return true;
  if (theme === "light") return false;
  // No cookie set, default to light
  return false;
}
