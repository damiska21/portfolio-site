export type Locale = "en" | "cz";

export const defaultLocale: Locale = "en";

const czechPrefix = "/cz";

function normalizePathname(pathname: string): string {
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
}

export function getLocaleFromPath(pathname: string): Locale {
  const normalized = normalizePathname(pathname);
  if (normalized === czechPrefix || normalized.startsWith(`${czechPrefix}/`)) {
    return "cz";
  }

  return defaultLocale;
}

export function stripLocaleFromPath(pathname: string): string {
  const normalized = normalizePathname(pathname);

  if (normalized === czechPrefix) {
    return "/";
  }

  if (normalized.startsWith(`${czechPrefix}/`)) {
    return normalized.slice(czechPrefix.length);
  }

  return normalized;
}

export function withLocale(path: string, locale: Locale): string {
  const normalized = normalizePathname(path.startsWith("/") ? path : `/${path}`);

  if (locale === "en") {
    return normalized;
  }

  return normalized === "/" ? czechPrefix : `${czechPrefix}${normalized}`;
}

export const navbarTranslations: Record<
  Locale,
  { home: string; projects: string; contact: string; switchLocale: string }
> = {
  en: {
    home: "Home",
    projects: "Projects",
    contact: "Contact",
    switchLocale: "CZ",
  },
  cz: {
    home: "Domu",
    projects: "Projekty",
    contact: "Kontakt",
    switchLocale: "EN",
  },
};
