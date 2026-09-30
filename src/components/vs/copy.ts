// Shared copy for the competitor comparison pages (/vs/*, /fr/vs/*, /nl/vs/*).
// Only facts documented elsewhere on the site are stated about Dafira. Nothing is asserted about competitors:
// their column lists questions to check with the vendor.

export type VsLang = 'en' | 'fr' | 'nl';

/** Criteria a comparison page can cover. The Dafira side of each criterion is shared; the questions are per page. */
export type CriterionKey =
  | 'ux'
  | 'ai'
  | 'docs'
  | 'implementation'
  | 'support'
  | 'supportImplementation'
  | 'supportSecurity'
  | 'pricing'
  | 'mobile';

export interface DafiraSide {
  icon: string;
  title: string;
  text: string;
  points: string[];
}

/** A customer quote as it appears on a given page (kept verbatim per language variant). */
export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  link: string;
}

interface Copy {
  eyebrow: string;
  heroActions: { trial: string; demo: string };
  glance: { label: string; rows: [string, string][] };
  differences: { eyebrow: string; title: (c: string) => string; lead: (c: string) => string; dafira: string; competitor: (c: string) => string };
  table: {
    eyebrow: string;
    title: string;
    lead: (c: string) => string;
    criterion: string;
    toConfirm: string;
    included: string;
    notIncluded: string;
    legend: (c: string) => string;
    rows: string[];
  };
  criteria: Record<CriterionKey, DafiraSide>;
  switching: {
    eyebrow: string;
    title: (c: string) => string;
    lead: string;
    trial: { title: string; text: string; link: string };
    move: { title: string; text: string; link: string };
    pricing: { title: string; text: string; link: string };
    note: string;
  };
  testimonials: { title: string; subtitle: string; cta: string; ctaLink: string };
  cta: { title: string; subtitle: string; cta1: string; cta2: string };
}


export const COPY: Record<VsLang, Copy> = {
  en: {
    eyebrow: 'Comparison',
    heroActions: { trial: 'Start free trial', demo: 'Book a demo' },
    glance: {
      label: 'Dafira at a glance',
      rows: [
        ['Scope', 'Agenda, board pack, meeting, minutes, votes and signatures'],
        ['AI', 'AI assistant on board documents and AI minute builder'],
        ['Security', '256-bit encryption, two-factor authentication, GDPR'],
        ['Trial', '14 days, no credit card required'],
      ],
    },
    differences: {
      eyebrow: 'Criterion by criterion',
      title: (c) => `Dafira and ${c}, criterion by criterion`,
      lead: (c) => `What Dafira offers on each point, and the questions worth asking ${c} for your own evaluation.`,
      dafira: 'Dafira',
      competitor: (c) => `To check with ${c}`,
    },
    table: {
      eyebrow: 'Checklist',
      title: 'A checklist for your evaluation',
      lead: (c) => `What Dafira includes today. Features and plans change on both sides, so confirm the ${c} column with the vendor for the plan you are offered.`,
      criterion: 'Capability',
      toConfirm: 'To confirm',
      included: 'Included',
      notIncluded: 'Not included',
      legend: (c) => `“To confirm” means this page does not assess ${c} on that point.`,
      rows: [
        'Agenda builder',
        'Board pack and document library',
        'Private annotations',
        'Version history',
        'AI assistant on board documents',
        'AI minute builder',
        'Voting',
        'Electronic signature',
        'Decision log and action items',
        'Secure board chat',
        'Role-based access',
        'Two-factor authentication',
        '14-day free trial without credit card',
      ],
    },
    criteria: {
      ux: {
        icon: 'desktop',
        title: 'Built around the board cycle',
        text: 'Agenda, board pack, meeting and minutes follow the order in which a board works.',
        points: ['Directors read and annotate on any device', 'Access set by board role', 'Onboarding and training for directors'],
      },
      ai: {
        icon: 'sparkle',
        title: 'AI assistant and AI minute builder',
        text: 'AI features support work on board papers and minutes; the secretary reviews and approves what is recorded.',
        points: ['Questions answered from the board papers', 'Summaries of long documents', 'Draft minutes in several languages'],
      },
      docs: {
        icon: 'documents',
        title: 'Board packs and document library',
        text: 'Board papers are assembled into a pack, shared securely and kept in one library with their history.',
        points: ['Document library', 'Version history', 'Private annotations', '256-bit encryption'],
      },
      implementation: {
        icon: 'settings',
        title: 'Assisted set-up',
        text: 'Our team configures the workspace with you and helps import your existing documents.',
        points: ['Bulk upload of existing documents', 'Onboarding for secretaries and directors', '14-day free trial with your own board pack'],
      },
      support: {
        icon: 'support',
        title: 'Support by plan',
        text: 'Support levels depend on the plan, from email support to 24/7 support with a dedicated success manager.',
        points: ['Email support', '24/7 support on higher plans', 'Dedicated success manager on higher plans'],
      },
      supportImplementation: {
        icon: 'support',
        title: 'Set-up and support',
        text: 'Our team sets up the workspace with you. Support levels then depend on the plan, from email support to 24/7 support with a dedicated success manager.',
        points: ['Assisted onboarding', 'Import of existing documents', '24/7 support on higher plans'],
      },
      supportSecurity: {
        icon: 'shield',
        title: 'Security and support',
        text: 'Documents, messages and votes are protected by 256-bit encryption, and access is set by board role. Support levels depend on the plan.',
        points: ['Two-factor authentication', 'Role-based access', 'GDPR compliance', '24/7 support on higher plans'],
      },
      pricing: {
        icon: 'clipboard',
        title: 'Published plans',
        text: 'Plans and what they include are listed on our pricing page, and you can test the full product before choosing.',
        points: ['Plans listed on the pricing page', '14-day free trial', 'No credit card required for the trial'],
      },
      mobile: {
        icon: 'phone',
        title: 'On any device',
        text: 'Directors read the board pack, annotate and use the secure board chat from a computer, tablet or phone.',
        points: ['Board pack on tablet and phone', 'Private annotations', 'Secure board chat'],
      },
    },
    switching: {
      eyebrow: 'Switching',
      title: (c) => `Moving from ${c}`,
      lead: 'Try Dafira alongside your current tool before you decide.',
      trial: { title: '14-day free trial', text: 'Full access to all features for 14 days.', link: 'Start free trial' },
      move: { title: 'Help with the move', text: 'Our team helps you import your documents and set up your boards and committees.', link: 'Talk to us' },
      pricing: { title: 'Plans and pricing', text: 'Plans and what they include are listed on our pricing page.', link: 'See pricing' },
      note: 'No credit card required. Cancel anytime.',
    },
    testimonials: {
      title: 'What board teams say',
      subtitle: 'Secretaries, general counsels and CEOs on running their board with Dafira.',
      cta: 'All customer stories',
      ctaLink: '/testimonials',
    },
    cta: {
      title: 'See Dafira with your own board pack',
      subtitle: 'A 30-minute demo with someone who has run board meetings. Bring a real agenda and we will set it up with you.',
      cta1: 'Book a demo',
      cta2: 'Contact sales',
    },
  },

  fr: {
    eyebrow: 'Comparatif',
    heroActions: { trial: 'Démarrer l’essai gratuit', demo: 'Demander une démo' },
    glance: {
      label: 'Dafira en bref',
      rows: [
        ['Périmètre', 'Ordre du jour, dossier du conseil, séance, procès-verbal, votes et signatures'],
        ['IA', 'Assistant IA sur les documents du conseil et rédaction assistée des procès-verbaux'],
        ['Sécurité', 'Chiffrement 256 bits, authentification à deux facteurs, RGPD'],
        ['Essai', '14 jours, sans carte bancaire'],
      ],
    },
    differences: {
      eyebrow: 'Critère par critère',
      title: (c) => `Dafira et ${c}, critère par critère`,
      lead: (c) => `Ce que Dafira propose sur chaque point, et les questions à poser à ${c} pour votre propre évaluation.`,
      dafira: 'Dafira',
      competitor: (c) => `À vérifier auprès de ${c}`,
    },
    table: {
      eyebrow: 'Grille',
      title: 'Une grille pour votre évaluation',
      lead: (c) => `Ce que Dafira inclut aujourd’hui. Les fonctionnalités et les offres évoluent des deux côtés : confirmez la colonne ${c} auprès de l’éditeur pour l’offre qui vous est proposée.`,
      criterion: 'Fonctionnalité',
      toConfirm: 'À confirmer',
      included: 'Inclus',
      notIncluded: 'Non inclus',
      legend: (c) => `« À confirmer » signifie que cette page n’évalue pas ${c} sur ce point.`,
      rows: [
        'Constructeur d’ordre du jour',
        'Dossier du conseil et bibliothèque de documents',
        'Annotations privées',
        'Historique des versions',
        'Assistant IA sur les documents du conseil',
        'Rédaction assistée des procès-verbaux',
        'Votes',
        'Signature électronique',
        'Registre des décisions et suivi des actions',
        'Messagerie sécurisée du conseil',
        'Accès par rôle',
        'Authentification à deux facteurs',
        'Essai gratuit de 14 jours sans carte bancaire',
      ],
    },
    criteria: {
      ux: {
        icon: 'desktop',
        title: 'Conçu autour du cycle du conseil',
        text: 'Ordre du jour, dossier, séance et procès-verbal suivent l’ordre dans lequel un conseil travaille.',
        points: ['Lecture et annotation sur tout appareil', 'Accès défini selon le rôle au conseil', 'Prise en main et formation des administrateurs'],
      },
      ai: {
        icon: 'sparkle',
        title: 'Assistant IA et rédaction des procès-verbaux',
        text: 'Les fonctionnalités IA aident au travail sur les documents et les procès-verbaux ; le secrétaire relit et valide ce qui est consigné.',
        points: ['Réponses tirées des documents du conseil', 'Synthèse des documents longs', 'Projets de procès-verbal en plusieurs langues'],
      },
      docs: {
        icon: 'documents',
        title: 'Dossiers du conseil et bibliothèque',
        text: 'Les documents sont réunis en dossier, partagés de façon sécurisée et conservés dans une bibliothèque unique avec leur historique.',
        points: ['Bibliothèque de documents', 'Historique des versions', 'Annotations privées', 'Chiffrement 256 bits'],
      },
      implementation: {
        icon: 'settings',
        title: 'Mise en place accompagnée',
        text: 'Notre équipe configure l’espace avec vous et vous aide à importer vos documents existants.',
        points: ['Import groupé des documents existants', 'Prise en main pour secrétaires et administrateurs', 'Essai de 14 jours avec votre propre dossier'],
      },
      support: {
        icon: 'support',
        title: 'Support selon l’offre',
        text: 'Le niveau de support dépend de l’offre, du support par e-mail au support 24/7 avec un responsable de compte dédié.',
        points: ['Support par e-mail', 'Support 24/7 sur les offres supérieures', 'Responsable de compte dédié sur les offres supérieures'],
      },
      supportImplementation: {
        icon: 'support',
        title: 'Mise en place et support',
        text: 'Notre équipe met en place l’espace avec vous. Le niveau de support dépend ensuite de l’offre, du support par e-mail au support 24/7 avec un responsable de compte dédié.',
        points: ['Prise en main accompagnée', 'Import des documents existants', 'Support 24/7 sur les offres supérieures'],
      },
      supportSecurity: {
        icon: 'shield',
        title: 'Sécurité et support',
        text: 'Documents, messages et votes sont protégés par un chiffrement 256 bits, et l’accès est défini selon le rôle au conseil. Le niveau de support dépend de l’offre.',
        points: ['Authentification à deux facteurs', 'Accès par rôle', 'Conformité RGPD', 'Support 24/7 sur les offres supérieures'],
      },
      pricing: {
        icon: 'clipboard',
        title: 'Offres publiées',
        text: 'Les offres et leur contenu figurent sur notre page tarifs, et vous pouvez tester le produit complet avant de choisir.',
        points: ['Offres détaillées sur la page tarifs', 'Essai gratuit de 14 jours', 'Aucune carte bancaire pour l’essai'],
      },
      mobile: {
        icon: 'phone',
        title: 'Sur tout appareil',
        text: 'Les administrateurs lisent le dossier, annotent et utilisent la messagerie sécurisée depuis un ordinateur, une tablette ou un téléphone.',
        points: ['Dossier du conseil sur tablette et téléphone', 'Annotations privées', 'Messagerie sécurisée du conseil'],
      },
    },
    switching: {
      eyebrow: 'Changer d’outil',
      title: (c) => `Passer de ${c} à Dafira`,
      lead: 'Essayez Dafira en parallèle de votre outil actuel avant de décider.',
      trial: { title: 'Essai gratuit de 14 jours', text: 'Accès complet à toutes les fonctionnalités pendant 14 jours.', link: 'Démarrer l’essai gratuit' },
      move: { title: 'Aide à la transition', text: 'Notre équipe vous aide à importer vos documents et à configurer vos conseils et comités.', link: 'Nous contacter' },
      pricing: { title: 'Offres et tarifs', text: 'Les offres et leur contenu figurent sur notre page tarifs.', link: 'Voir les tarifs' },
      note: 'Pas de carte bancaire requise. Annulation possible à tout moment.',
    },
    testimonials: {
      title: 'Ce qu’en disent les équipes du conseil',
      subtitle: 'Secrétaires généraux, juristes et dirigeants sur la gestion de leur conseil avec Dafira.',
      cta: 'Tous les témoignages clients',
      ctaLink: '/fr/testimonials',
    },
    cta: {
      title: 'Découvrez Dafira avec votre propre dossier du conseil',
      subtitle: 'Une démonstration de 30 minutes avec une personne qui a déjà organisé des séances de conseil. Apportez un véritable ordre du jour, nous le configurerons avec vous.',
      cta1: 'Demander une démo',
      cta2: 'Nous contacter',
    },
  },

  nl: {
    eyebrow: 'Vergelijking',
    heroActions: { trial: 'Gratis proefperiode starten', demo: 'Demo aanvragen' },
    glance: {
      label: 'Dafira in het kort',
      rows: [
        ['Reikwijdte', 'Agenda, vergaderdossier, vergadering, notulen, stemmingen en handtekeningen'],
        ['AI', 'AI-assistent voor bestuursdocumenten en AI-notulenbouwer'],
        ['Beveiliging', '256-bit encryptie, tweefactorauthenticatie, AVG'],
        ['Proefperiode', '14 dagen, geen creditcard nodig'],
      ],
    },
    differences: {
      eyebrow: 'Per criterium',
      title: (c) => `Dafira en ${c}, per criterium`,
      lead: (c) => `Wat Dafira op elk punt biedt, en de vragen die u ${c} kunt stellen voor uw eigen evaluatie.`,
      dafira: 'Dafira',
      competitor: (c) => `Na te gaan bij ${c}`,
    },
    table: {
      eyebrow: 'Checklist',
      title: 'Een checklist voor uw evaluatie',
      lead: (c) => `Wat Dafira vandaag omvat. Functies en pakketten veranderen aan beide kanten; bevestig de kolom ${c} bij de leverancier voor het pakket dat u aangeboden krijgt.`,
      criterion: 'Functie',
      toConfirm: 'Te bevestigen',
      included: 'Inbegrepen',
      notIncluded: 'Niet inbegrepen',
      legend: (c) => `“Te bevestigen” betekent dat deze pagina ${c} op dat punt niet beoordeelt.`,
      rows: [
        'Agendabouwer',
        'Vergaderdossier en documentbibliotheek',
        'Persoonlijke annotaties',
        'Versiegeschiedenis',
        'AI-assistent voor bestuursdocumenten',
        'AI-notulenbouwer',
        'Stemmingen',
        'Elektronische handtekening',
        'Besluitenregister en actiepunten',
        'Beveiligde bestuurschat',
        'Toegang per rol',
        'Tweefactorauthenticatie',
        'Gratis proefperiode van 14 dagen zonder creditcard',
      ],
    },
    criteria: {
      ux: {
        icon: 'desktop',
        title: 'Opgebouwd rond de bestuurscyclus',
        text: 'Agenda, vergaderdossier, vergadering en notulen volgen de volgorde waarin een bestuur werkt.',
        points: ['Lezen en annoteren op elk toestel', 'Toegang volgens de rol in het bestuur', 'Onboarding en opleiding voor bestuurders'],
      },
      ai: {
        icon: 'sparkle',
        title: 'AI-assistent en AI-notulenbouwer',
        text: 'AI-functies ondersteunen het werk aan bestuursdocumenten en notulen; de secretaris leest na en keurt goed wat wordt vastgelegd.',
        points: ['Antwoorden op basis van de bestuursdocumenten', 'Samenvattingen van lange documenten', 'Ontwerpnotulen in meerdere talen'],
      },
      docs: {
        icon: 'documents',
        title: 'Vergaderdossiers en documentbibliotheek',
        text: 'Bestuursdocumenten worden gebundeld tot een dossier, veilig gedeeld en met hun geschiedenis in één bibliotheek bewaard.',
        points: ['Documentbibliotheek', 'Versiegeschiedenis', 'Persoonlijke annotaties', '256-bit encryptie'],
      },
      implementation: {
        icon: 'settings',
        title: 'Begeleide opstart',
        text: 'Ons team richt de omgeving samen met u in en helpt uw bestaande documenten te importeren.',
        points: ['Bulkupload van bestaande documenten', 'Onboarding voor secretarissen en bestuurders', 'Proefperiode van 14 dagen met uw eigen dossier'],
      },
      support: {
        icon: 'support',
        title: 'Ondersteuning per pakket',
        text: 'Het ondersteuningsniveau hangt af van het pakket, van e-mailondersteuning tot 24/7-ondersteuning met een vaste success manager.',
        points: ['E-mailondersteuning', '24/7-ondersteuning in hogere pakketten', 'Vaste success manager in hogere pakketten'],
      },
      supportImplementation: {
        icon: 'support',
        title: 'Opstart en ondersteuning',
        text: 'Ons team richt de omgeving samen met u in. Het ondersteuningsniveau hangt daarna af van het pakket, van e-mailondersteuning tot 24/7-ondersteuning met een vaste success manager.',
        points: ['Begeleide onboarding', 'Import van bestaande documenten', '24/7-ondersteuning in hogere pakketten'],
      },
      supportSecurity: {
        icon: 'shield',
        title: 'Beveiliging en ondersteuning',
        text: 'Documenten, berichten en stemmingen zijn beschermd met 256-bit encryptie, en toegang wordt bepaald door de rol in het bestuur. Het ondersteuningsniveau hangt af van het pakket.',
        points: ['Tweefactorauthenticatie', 'Toegang per rol', 'AVG-conform', '24/7-ondersteuning in hogere pakketten'],
      },
      pricing: {
        icon: 'clipboard',
        title: 'Gepubliceerde pakketten',
        text: 'De pakketten en wat ze omvatten staan op onze prijspagina, en u kunt het volledige product testen voordat u kiest.',
        points: ['Pakketten op de prijspagina', 'Gratis proefperiode van 14 dagen', 'Geen creditcard nodig voor de proefperiode'],
      },
      mobile: {
        icon: 'phone',
        title: 'Op elk toestel',
        text: 'Bestuurders lezen het vergaderdossier, annoteren en gebruiken de beveiligde bestuurschat vanaf een computer, tablet of telefoon.',
        points: ['Vergaderdossier op tablet en telefoon', 'Persoonlijke annotaties', 'Beveiligde bestuurschat'],
      },
    },
    switching: {
      eyebrow: 'Overstappen',
      title: (c) => `Overstappen van ${c}`,
      lead: 'Probeer Dafira naast uw huidige tool voordat u beslist.',
      trial: { title: 'Gratis proefperiode van 14 dagen', text: 'Volledige toegang tot alle functies gedurende 14 dagen.', link: 'Gratis proefperiode starten' },
      move: { title: 'Hulp bij de overstap', text: 'Ons team helpt u uw documenten te importeren en uw besturen en comités in te richten.', link: 'Contact opnemen' },
      pricing: { title: 'Pakketten en prijzen', text: 'De pakketten en wat ze omvatten staan op onze prijspagina.', link: 'Prijzen bekijken' },
      note: 'Geen creditcard nodig. Op elk moment opzegbaar.',
    },
    testimonials: {
      title: 'Wat bestuursteams zeggen',
      subtitle: 'Secretarissen, juristen en CEO’s over het werken met Dafira voor hun bestuur.',
      cta: 'Alle klantverhalen',
      ctaLink: '/nl/testimonials',
    },
    cta: {
      title: 'Bekijk Dafira met uw eigen bestuursdossier',
      subtitle: 'Een demo van 30 minuten met iemand die zelf bestuursvergaderingen heeft georganiseerd. Breng een echte agenda mee, dan zetten we die samen met u op.',
      cta1: 'Demo aanvragen',
      cta2: 'Contact opnemen',
    },
  },
};
