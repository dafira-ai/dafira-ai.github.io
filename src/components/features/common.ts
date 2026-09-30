// Shared copy for the feature pages (EN / FR / NL).
import { localizePath, type Lang } from '../../i18n/routes';

export type FeatureLang = 'en' | 'fr' | 'nl';
export const featureLang = (lang: Lang): FeatureLang => (lang === 'fr' || lang === 'nl' ? lang : 'en');

export const common = {
  en: {
    demo: 'Book a demo',
    contact: 'Contact sales',
    readMore: 'Read more',
    security: 'How we secure your data',
    caseStudy: 'Read the case study',
    related: 'Other features',
    relatedLead: 'Each feature works on the same meetings, documents and members.',
    allFeatures: 'All features',
    cta: {
      title: 'See Dafira with your own board pack',
      subtitle: 'A 30-minute demo with someone who has run board meetings. Bring a real agenda and we will set it up with you.',
    },
  },
  fr: {
    demo: 'Demander une démo',
    contact: 'Nous contacter',
    readMore: 'En savoir plus',
    security: 'Comment nous protégeons vos données',
    caseStudy: "Lire l'étude de cas",
    related: 'Autres fonctionnalités',
    relatedLead: 'Chaque fonctionnalité s’appuie sur les mêmes séances, documents et membres.',
    allFeatures: 'Toutes les fonctionnalités',
    cta: {
      title: 'Découvrez Dafira avec votre propre dossier du conseil',
      subtitle: 'Une démonstration de 30 minutes avec une personne qui a déjà organisé des séances de conseil. Apportez un véritable ordre du jour, nous le configurerons avec vous.',
    },
  },
  nl: {
    demo: 'Demo aanvragen',
    contact: 'Contact opnemen',
    readMore: 'Meer lezen',
    security: 'Hoe wij uw gegevens beveiligen',
    caseStudy: 'Lees de case study',
    related: 'Andere functionaliteiten',
    relatedLead: 'Elke functionaliteit werkt met dezelfde vergaderingen, documenten en leden.',
    allFeatures: 'Alle functionaliteiten',
    cta: {
      title: 'Bekijk Dafira met uw eigen bestuursdossier',
      subtitle: 'Een demo van 30 minuten met iemand die zelf bestuursvergaderingen heeft georganiseerd. Breng een echte agenda mee, dan zetten we die samen met u op.',
    },
  },
} as const;

export type FeatureSlug =
  | 'ai-powered-agenda-builder'
  | 'document-collaboration'
  | 'secure-communication'
  | 'ai-assistant'
  | 'ai-minute-builder'
  | 'ai-board-compliance-monitoring';

export const featureNav: Record<FeatureLang, { slug: FeatureSlug; icon: string; title: string; text: string }[]> = {
  en: [
    { slug: 'ai-powered-agenda-builder', icon: 'list', title: 'Agenda builder', text: 'Templates, timings and documents attached to each agenda item.' },
    { slug: 'document-collaboration', icon: 'pen', title: 'Document collaboration', text: 'Private annotations, shared comments and version history on the board pack.' },
    { slug: 'secure-communication', icon: 'chat', title: 'Secure communication', text: 'Private messages and a board news feed, kept inside the platform.' },
    { slug: 'ai-assistant', icon: 'search', title: 'AI assistant', text: 'Questions answered from your board documents, with sources.' },
    { slug: 'ai-minute-builder', icon: 'mic', title: 'AI minute builder', text: 'A structured draft of the minutes, prepared from the meeting recording.' },
    { slug: 'ai-board-compliance-monitoring', icon: 'scale', title: 'Compliance monitoring', text: 'Regulatory requirements such as CSRD linked to your board documents.' },
  ],
  fr: [
    { slug: 'ai-powered-agenda-builder', icon: 'list', title: "Création de l'ordre du jour", text: 'Modèles, durées et documents rattachés à chaque point.' },
    { slug: 'document-collaboration', icon: 'pen', title: 'Collaboration documentaire', text: 'Annotations privées, commentaires partagés et historique des versions.' },
    { slug: 'secure-communication', icon: 'chat', title: 'Communication sécurisée', text: 'Messages privés et fil d’actualité du conseil, au sein de la plateforme.' },
    { slug: 'ai-assistant', icon: 'search', title: 'Assistant IA', text: 'Des réponses tirées de vos documents du conseil, avec leurs sources.' },
    { slug: 'ai-minute-builder', icon: 'mic', title: 'Procès-verbaux par IA', text: 'Un projet de procès-verbal structuré, préparé à partir de l’enregistrement.' },
    { slug: 'ai-board-compliance-monitoring', icon: 'scale', title: 'Suivi de la conformité', text: 'Exigences réglementaires comme la CSRD reliées à vos documents.' },
  ],
  nl: [
    { slug: 'ai-powered-agenda-builder', icon: 'list', title: 'Agendabouwer', text: 'Sjablonen, tijdsduur en documenten per agendapunt.' },
    { slug: 'document-collaboration', icon: 'pen', title: 'Samenwerken aan documenten', text: 'Persoonlijke annotaties, gedeelde opmerkingen en versiegeschiedenis.' },
    { slug: 'secure-communication', icon: 'chat', title: 'Beveiligde communicatie', text: 'Privéberichten en een nieuwsfeed voor het bestuur, binnen het platform.' },
    { slug: 'ai-assistant', icon: 'search', title: 'AI-assistent', text: 'Antwoorden uit uw bestuursdocumenten, met bronvermelding.' },
    { slug: 'ai-minute-builder', icon: 'mic', title: 'AI-notulen', text: 'Een gestructureerd ontwerp van de notulen, op basis van de opname.' },
    { slug: 'ai-board-compliance-monitoring', icon: 'scale', title: 'Compliance monitoring', text: 'Regelgeving zoals CSRD gekoppeld aan uw bestuursdocumenten.' },
  ],
};

export const featureHref = (lang: FeatureLang, slug: FeatureSlug | '') =>
  localizePath(lang, slug ? `/features/${slug}` : '/features');

// Customer quotes, verbatim from the home-page testimonials (src/components/Testimonials.astro, src/pages/{fr,nl}/index.astro).
export const customerQuotes = {
  lore: {
    author: { en: 'General Counsel', fr: 'Directrice juridique', nl: 'General Counsel' },
    company: { en: 'Listed fashion group', fr: 'Groupe de mode coté en bourse', nl: 'Beursgenoteerde modegroep' },
    href: '/case-studies/listed-fashion-group',
    en: { quote: 'Dafira has transformed how we manage our board operations, bringing efficiency and clarity to our governance processes.', role: 'General Counsel' },
    fr: { quote: 'Dafira a révolutionné notre gouvernance en apportant efficacité et clarté à nos processus.', role: 'Directrice Juridique' },
    nl: { quote: 'Dafira heeft onze governance gerevolutioneerd door efficiëntie en duidelijkheid in onze processen te brengen.', role: 'Juridisch Directeur' },
  },
  pierre: {
    author: { en: 'CEO', fr: 'CEO', nl: 'CEO' },
    company: { en: 'Regional public investment fund', fr: "Fonds public d'investissement régional", nl: 'Regionaal publiek investeringsfonds' },
    href: '/case-studies/public-investment-fund',
    en: { quote: 'Dafira has simplified our document management tremendously, making our meeting preparations more efficient and allowing our board to focus on decision-making.', role: 'CEO' },
    fr: { quote: 'Dafira a transformé notre gestion documentaire, rendant nos conseils plus efficaces et centrés sur la prise de décision.', role: 'Directeur Général' },
    nl: { quote: 'Dafira heeft ons documentbeheer getransformeerd, waardoor onze vergaderingen efficiënter en meer besluitgericht zijn geworden.', role: 'CEO' },
  },
} as const;
