// Podcast labels (EN / FR / NL) and streaming links.
export type PodcastLang = 'en' | 'fr' | 'nl';

export const SHOW_LINKS = {
  spotifyUrl: 'https://open.spotify.com/show/11ejxA1c7TZcNVBJ6Pag3B?si=ec6c83f84d4e4397',
  applePodcastsUrl: 'https://podcasts.apple.com/us/podcast/governance-matters/id1784502689',
  castboxUrl: 'https://castbox.fm/channel/id6384416',
  amazonMusicUrl: 'https://music.amazon.com/podcasts/6bbd29f0-de77-4f7c-83b6-d3d64984f8c4/governance-matters',
};

export const PODCAST_UI: Record<PodcastLang, {
  locale: string;
  eyebrow: string;
  title: string;
  lead: string;
  latest: string;
  all: string;
  guests: string;
  view: string;
  listen: string;
  back: string;
  featuredGuests: string;
  topics: string;
  listenOn: string;
  episode: string;
  play: string;
  mute: string;
  seek: string;
}> = {
  en: {
    locale: 'en-US',
    eyebrow: 'Podcast',
    title: 'Governance Matters',
    lead: 'Conversations on modern board management, governance and digital transformation.',
    latest: 'Latest episode',
    all: 'All episodes',
    guests: 'Guests',
    view: 'View episode',
    listen: 'Listen on Spotify',
    back: 'All episodes',
    featuredGuests: 'Guests',
    topics: 'Topics covered',
    listenOn: 'Listen on',
    episode: 'Episode',
    play: 'Play or pause',
    mute: 'Mute',
    seek: 'Seek',
  },
  fr: {
    locale: 'fr-FR',
    eyebrow: 'Podcast',
    title: 'La gouvernance en pratique',
    lead: "Explorez les enjeux de la gouvernance moderne avec nos experts et découvrez les bonnes pratiques pour votre conseil d'administration.",
    latest: 'Dernier épisode',
    all: 'Tous les épisodes',
    guests: 'Invités',
    view: "Voir l'épisode",
    listen: 'Écouter sur Spotify',
    back: 'Retour aux épisodes',
    featuredGuests: 'Nos invités',
    topics: 'Thématiques abordées',
    listenOn: 'Écouter sur',
    episode: 'Épisode',
    play: 'Lecture ou pause',
    mute: 'Couper le son',
    seek: 'Position',
  },
  nl: {
    locale: 'nl-NL',
    eyebrow: 'Podcast',
    title: 'Bestuur in de praktijk',
    lead: 'Gesprekken over modern bestuursbeheer, governance en digitale transformatie.',
    latest: 'Nieuwste aflevering',
    all: 'Alle afleveringen',
    guests: 'Gasten',
    view: 'Bekijk aflevering',
    listen: 'Luister op Spotify',
    back: 'Terug naar afleveringen',
    featuredGuests: 'Onze gasten',
    topics: 'Besproken onderwerpen',
    listenOn: 'Luister op',
    episode: 'Aflevering',
    play: 'Afspelen of pauzeren',
    mute: 'Dempen',
    seek: 'Positie',
  },
};

export function podcastLang(pathname: string): PodcastLang {
  if (pathname.startsWith('/fr/') || pathname === '/fr') return 'fr';
  if (pathname.startsWith('/nl/') || pathname === '/nl') return 'nl';
  return 'en';
}

export function episodeHref(lang: PodcastLang, slug: string) {
  return `${lang === 'en' ? '' : `/${lang}`}/podcast/${slug}`;
}

export function formatEpisodeDate(lang: PodcastLang, d: Date) {
  return d.toLocaleDateString(PODCAST_UI[lang].locale, { year: 'numeric', month: 'long', day: 'numeric' });
}
