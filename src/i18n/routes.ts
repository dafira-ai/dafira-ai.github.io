export const LANGS = ['en', 'fr', 'nl', 'ar'] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_LABELS: Record<Lang, { short: string; long: string }> = {
  en: { short: 'EN', long: 'English' },
  fr: { short: 'FR', long: 'Français' },
  nl: { short: 'NL', long: 'Nederlands' },
  ar: { short: 'ع', long: 'العربية' },
};

const pageFiles = Object.keys(import.meta.glob('/src/pages/**/*.{astro,md}'));
const routes = new Set(
  pageFiles.map(
    (f) =>
      f
        .replace(/^\/src\/pages/, '')
        .replace(/\.(astro|md)$/, '')
        .replace(/\/index$/, '') || '/',
  ),
);

export function langFromPath(pathname: string): Lang {
  const clean = pathname.replace(/\.html$/, '');
  return (LANGS.find((l) => l !== 'en' && (clean === `/${l}` || clean.startsWith(`/${l}/`))) ?? 'en') as Lang;
}

export function stripLang(pathname: string): string {
  return pathname.replace(/\.html$/, '').replace(/^\/(fr|nl|ar)(?=\/|$)/, '') || '/';
}

/** Localized path; falls back to the English page when no translation exists (e.g. most /ar pages). */
export function localizePath(lang: Lang, path: string): string {
  const [base, hash = ''] = path.split('#');
  const suffix = hash ? `#${hash}` : '';
  if (lang === 'en') return path;
  const candidate = base === '/' ? `/${lang}` : `/${lang}${base}`;
  return (routes.has(candidate) ? candidate : base) + suffix;
}

export function routeExists(path: string): boolean {
  return routes.has(path);
}
