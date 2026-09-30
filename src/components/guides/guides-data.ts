// Help-centre guide catalogue (EN / FR / NL). Used by the guides index and by GuideHeader (reading time, category).
export type GuideLang = 'en' | 'fr' | 'nl';

export interface GuideEntry {
  title: string;
  description: string;
  icon: string;
  readTime: string;
  link: string;
}

export interface GuideCategory {
  category: string;
  icon: string;
  description: string;
  guides: GuideEntry[];
}

export const GUIDES: Record<GuideLang, GuideCategory[]> = {
  en: [
    {
      category: 'Getting Started',
      icon: 'flag',
      description: 'Essential guides for new users',
      guides: [
        { title: 'Getting Started with Dafira as a Board Member', description: 'Complete guide to setting up and using Dafira for your board', icon: 'book', readTime: '10 min', link: '/guides/board-member-getting-started' },
        { title: 'Getting Started with Dafira as an Admin', description: 'Complete guide to setting up and using Dafira for your board', icon: 'book', readTime: '10 min', link: '/guides/getting-started' },
        { title: 'Authentication Guide', description: 'Learn how to sign up, sign in, and manage your authentication', icon: 'lock', readTime: '5 min', link: '/guides/authentication' },
      ],
    },
    {
      category: 'Account Management',
      icon: 'user',
      description: 'Manage your account and profile',
      guides: [
        { title: 'Profile Management', description: 'Update your personal information, email, and settings', icon: 'settings', readTime: '5 min', link: '/guides/profile-management' },
        { title: 'Board Member Management', description: 'Add and manage board members, roles, and permissions', icon: 'users', readTime: '8 min', link: '/guides/board-member-management' },
      ],
    },
    {
      category: 'Technical Guides',
      icon: 'settings',
      description: 'Technical documentation and setup guides',
      guides: [
        { title: 'Domains and Protocols', description: "Understanding Dafira's domains and network requirements", icon: 'globe', readTime: '7 min', link: '/guides/domains-protocols' },
      ],
    },
  ],
  fr: [
    {
      category: 'Premiers pas',
      icon: 'flag',
      description: 'Guides essentiels pour bien démarrer',
      guides: [
        { title: 'Débuter avec Dafira', description: "Guide complet pour configurer et utiliser Dafira pour votre conseil d'administration", icon: 'book', readTime: '10 min', link: '/fr/guides/getting-started' },
        { title: "Guide d'authentification", description: 'Créez votre compte, connectez-vous et gérez vos accès en toute sécurité', icon: 'lock', readTime: '5 min', link: '/fr/guides/authentication' },
      ],
    },
    {
      category: 'Gestion du compte',
      icon: 'user',
      description: 'Personnalisez votre profil et vos paramètres',
      guides: [
        { title: 'Gestion du profil', description: 'Mettez à jour vos informations personnelles et vos préférences', icon: 'settings', readTime: '5 min', link: '/fr/guides/profile-management' },
        { title: 'Gestion des administrateurs', description: 'Ajoutez et gérez les membres du conseil, leurs rôles et leurs permissions', icon: 'users', readTime: '8 min', link: '/fr/guides/board-member-management' },
      ],
    },
    {
      category: 'Guides techniques',
      icon: 'settings',
      description: 'Documentation technique et guides de configuration',
      guides: [
        { title: 'Domaines et protocoles', description: "Comprendre l'infrastructure technique de Dafira", icon: 'globe', readTime: '7 min', link: '/fr/guides/domains-protocols' },
      ],
    },
  ],
  nl: [
    {
      category: 'Aan de slag',
      icon: 'flag',
      description: 'Essentiële handleidingen voor nieuwe gebruikers',
      guides: [
        { title: 'Beginnen met Dafira', description: 'Complete handleiding voor het opzetten en gebruiken van Dafira voor uw bestuur', icon: 'book', readTime: '10 min', link: '/nl/guides/getting-started' },
        { title: 'Authenticatie Handleiding', description: 'Leer hoe u zich kunt registreren, inloggen en uw authenticatie kunt beheren', icon: 'lock', readTime: '5 min', link: '/nl/guides/authentication' },
      ],
    },
    {
      category: 'Accountbeheer',
      icon: 'user',
      description: 'Beheer uw account en profiel',
      guides: [
        { title: 'Profielbeheer', description: 'Werk uw persoonlijke gegevens, e-mail en instellingen bij', icon: 'settings', readTime: '5 min', link: '/nl/guides/profile-management' },
        { title: 'Bestuursledenbeheer', description: 'Voeg bestuursleden toe en beheer hun rollen en rechten', icon: 'users', readTime: '8 min', link: '/nl/guides/board-member-management' },
      ],
    },
    {
      category: 'Technische Handleidingen',
      icon: 'settings',
      description: 'Technische documentatie en configuratiehandleidingen',
      guides: [
        { title: 'Domeinen en Protocollen', description: "Inzicht in Dafira's domeinen en netwerkvereisten", icon: 'globe', readTime: '7 min', link: '/nl/guides/domains-protocols' },
      ],
    },
  ],
};

export const GUIDE_UI: Record<GuideLang, {
  eyebrow: string;
  title: string;
  lead: string;
  search: string;
  searchLabel: string;
  noResults: string;
  read: string;
  readTime: (t: string) => string;
  helpTitle: string;
  helpText: string;
  contact: string;
  demo: string;
  guideEyebrow: string;
  allGuides: string;
  tip: string;
}> = {
  en: {
    eyebrow: 'Help Center',
    title: 'How can we help you?',
    lead: 'Find step-by-step guides and tutorials to help you make the most of Dafira.',
    search: 'Search guides...',
    searchLabel: 'Search guides',
    noResults: 'No guides found',
    read: 'Read guide',
    readTime: (t) => `${t} read`,
    helpTitle: "Can't find what you're looking for?",
    helpText: 'Our support team is here to help you with any questions you may have.',
    contact: 'Contact Support',
    demo: 'Request a Demo',
    guideEyebrow: 'Guide',
    allGuides: 'All guides',
    tip: 'Tip',
  },
  fr: {
    eyebrow: "Centre d'aide",
    title: 'Comment pouvons-nous vous aider ?',
    lead: 'Découvrez nos guides et tutoriels pour tirer le meilleur parti de Dafira.',
    search: 'Rechercher un guide...',
    searchLabel: 'Rechercher un guide',
    noResults: 'Aucun guide trouvé',
    read: 'Lire le guide',
    readTime: (t) => `Lecture ${t}`,
    helpTitle: 'Vous ne trouvez pas ce que vous cherchez ?',
    helpText: 'Notre équipe support est là pour répondre à toutes vos questions.',
    contact: 'Contacter le support',
    demo: 'Demander une démo',
    guideEyebrow: 'Guide',
    allGuides: 'Tous les guides',
    tip: 'Conseil',
  },
  nl: {
    eyebrow: 'Helpcentrum',
    title: 'Hoe kunnen we u helpen?',
    lead: 'Ontdek stap-voor-stap handleidingen om het beste uit Dafira te halen.',
    search: 'Zoek handleidingen...',
    searchLabel: 'Zoek handleidingen',
    noResults: 'Geen handleidingen gevonden',
    read: 'Lees handleiding',
    readTime: (t) => `${t} leestijd`,
    helpTitle: 'Niet gevonden wat u zoekt?',
    helpText: 'Ons supportteam staat klaar om al uw vragen te beantwoorden.',
    contact: 'Contact Support',
    demo: 'Demo aanvragen',
    guideEyebrow: 'Handleiding',
    allGuides: 'Alle handleidingen',
    tip: 'Tip',
  },
};

export function guideLang(pathname: string): GuideLang {
  if (pathname.startsWith('/fr/') || pathname === '/fr') return 'fr';
  if (pathname.startsWith('/nl/') || pathname === '/nl') return 'nl';
  return 'en';
}

/** Catalogue entry + category for a guide page path. */
export function findGuide(pathname: string) {
  const lang = guideLang(pathname);
  const clean = pathname.replace(/\.html$/, '').replace(/\/$/, '');
  for (const cat of GUIDES[lang]) {
    const g = cat.guides.find((x) => x.link === clean);
    if (g) return { guide: g, category: cat.category, lang };
  }
  return { guide: undefined, category: undefined, lang };
}
