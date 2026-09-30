// Labels and helpers shared by the blog index, blog post and podcast pages.
export type BlogLang = 'en' | 'fr' | 'nl';

export const BLOG_UI: Record<BlogLang, {
  locale: string;
  eyebrow: string;
  title: string;
  lead: string;
  featured: string;
  latest: string;
  read: string;
  minRead: (n: number) => string;
  back: string;
  related: string;
  tags: string;
  by: string;
  share: { linkedin: string; x: string; copy: string; copied: string; label: string };
  categories: Record<string, string>;
}> = {
  en: {
    locale: 'en-US',
    eyebrow: 'Blog',
    title: 'Insights for better board management',
    lead: 'Articles, guides and good practices for board secretaries, directors and governance teams.',
    featured: 'Featured article',
    latest: 'Latest articles',
    read: 'Read article',
    minRead: (n) => `${n} min read`,
    back: 'All articles',
    related: 'Further reading',
    tags: 'Tags',
    by: 'By',
    share: { linkedin: 'Share on LinkedIn', x: 'Share on X', copy: 'Copy link', copied: 'Link copied', label: 'Share this article' },
    categories: {},
  },
  fr: {
    locale: 'fr-FR',
    eyebrow: 'Blog',
    title: 'Expertise en gestion de conseil',
    lead: "Articles d'experts, guides et bonnes pratiques pour améliorer le fonctionnement de votre conseil.",
    featured: 'Article à la une',
    latest: 'Derniers articles',
    read: "Lire l'article",
    minRead: (n) => `${n} min de lecture`,
    back: 'Tous les articles',
    related: 'À lire également',
    tags: 'Mots-clés',
    by: 'Par',
    share: { linkedin: 'Partager sur LinkedIn', x: 'Partager sur X', copy: 'Copier le lien', copied: 'Lien copié', label: 'Partager cet article' },
    categories: { Governance: 'Gouvernance', Technology: 'Technologie', 'Best Practices': 'Bonnes pratiques', 'Industry Insights': 'Secteur', Regulatory: 'Réglementation' },
  },
  nl: {
    locale: 'nl-NL',
    eyebrow: 'Blog',
    title: 'Expertise in bestuursbeheer',
    lead: 'Expertartikelen, handleidingen en best practices voor bestuurssecretarissen, bestuurders en governanceteams.',
    featured: 'Uitgelicht artikel',
    latest: 'Laatste artikelen',
    read: 'Lees artikel',
    minRead: (n) => `${n} min leestijd`,
    back: 'Alle artikelen',
    related: 'Lees ook deze artikelen',
    tags: 'Tags',
    by: 'Door',
    share: { linkedin: 'Delen op LinkedIn', x: 'Delen op X', copy: 'Link kopiëren', copied: 'Link gekopieerd', label: 'Deel dit artikel' },
    categories: { Governance: 'Governance', Technology: 'Technologie', 'Best Practices': 'Best practices', 'Industry Insights': 'Sector', Regulatory: 'Regelgeving' },
  },
};

export function categoryLabel(lang: BlogLang, category: string): string {
  return BLOG_UI[lang].categories[category] ?? category;
}

/** Reading time in minutes from a markdown body (≈220 words per minute). */
export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(lang: BlogLang, d: Date): string {
  return d.toLocaleDateString(BLOG_UI[lang].locale, { year: 'numeric', month: 'long', day: 'numeric' });
}

export function blogHref(lang: BlogLang, slug: string): string {
  return `${lang === 'en' ? '' : `/${lang}`}/blog/${slug}`;
}

const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/blog-images/**/*.{png,jpg,jpeg,webp,gif}', { eager: true });
/** Resolve a post image path to an imported asset (or keep the remote/public URL). */
export function resolveBlogImage(image: string): ImageMetadata | string {
  if (image.startsWith('http')) return image;
  return images[`/src/assets/blog-images${image}`]?.default ?? image;
}

/** Localised props for the shared CTA band (same copy as the home pages). */
export function ctaProps(lang: string) {
  if (lang === 'fr') return {
    texts: { title: 'Découvrez Dafira avec votre propre dossier du conseil', subtitle: 'Une démonstration de 30 minutes avec une personne qui a déjà organisé des séances de conseil. Apportez un véritable ordre du jour, nous le configurerons avec vous.', cta1: 'Demander une démo', cta2: 'Nous contacter' },
    links: { cta1: '/fr/request-demo', cta2: '/fr/contact' },
  };
  if (lang === 'nl') return {
    texts: { title: 'Bekijk Dafira met uw eigen bestuursdossier', subtitle: 'Een demo van 30 minuten met iemand die zelf bestuursvergaderingen heeft georganiseerd. Breng een echte agenda mee, dan zetten we die samen met u op.', cta1: 'Demo aanvragen', cta2: 'Contact opnemen' },
    links: { cta1: '/nl/request-demo', cta2: '/nl/contact' },
  };
  return {};
}
