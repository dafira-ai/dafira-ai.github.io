// Shared UI strings for role, sector and region pages (EN/FR/NL). CTA copy mirrors the home page.
export type PageLang = 'en' | 'fr' | 'nl';

export function pageLang(lang: string): PageLang {
  return lang === 'fr' || lang === 'nl' ? lang : 'en';
}

export function prefix(lang: string): string {
  const l = pageLang(lang);
  return l === 'en' ? '' : `/${l}`;
}

export const ui: Record<PageLang, { demo: string; contact: string; trial: string; security: string; viewSector: string; viewRole: string }> = {
  en: { demo: 'Book a demo', contact: 'Contact sales', trial: 'Start a free trial', security: 'Read about security', viewSector: 'View sector page', viewRole: 'View role page' },
  fr: { demo: 'Demander une démo', contact: 'Nous contacter', trial: 'Commencer l’essai gratuit', security: 'En savoir plus sur la sécurité', viewSector: 'Voir la page sectorielle', viewRole: 'Voir la page du rôle' },
  nl: { demo: 'Demo aanvragen', contact: 'Contact opnemen', trial: 'Gratis proefperiode starten', security: 'Meer over beveiliging', viewSector: 'Bekijk de sectorpagina', viewRole: 'Bekijk de rolpagina' },
};

export const ctaProps: Record<PageLang, { texts: { title: string; subtitle: string; cta1: string; cta2: string }; links: { cta1: string; cta2: string } }> = {
  en: {
    texts: {
      title: 'See Dafira with your own board pack',
      subtitle: 'A 30-minute demo with someone who has run board meetings. Bring a real agenda and we will set it up with you.',
      cta1: 'Book a demo',
      cta2: 'Contact sales',
    },
    links: { cta1: '/request-demo', cta2: '/contact' },
  },
  fr: {
    texts: {
      title: 'Découvrez Dafira avec votre propre dossier du conseil',
      subtitle: 'Une démonstration de 30 minutes avec une personne qui a déjà organisé des séances de conseil. Apportez un véritable ordre du jour, nous le configurerons avec vous.',
      cta1: 'Demander une démo',
      cta2: 'Nous contacter',
    },
    links: { cta1: '/fr/request-demo', cta2: '/fr/contact' },
  },
  nl: {
    texts: {
      title: 'Bekijk Dafira met uw eigen bestuursdossier',
      subtitle: 'Een demo van 30 minuten met iemand die zelf bestuursvergaderingen heeft georganiseerd. Breng een echte agenda mee, dan zetten we die samen met u op.',
      cta1: 'Demo aanvragen',
      cta2: 'Contact opnemen',
    },
    links: { cta1: '/nl/request-demo', cta2: '/nl/contact' },
  },
};
