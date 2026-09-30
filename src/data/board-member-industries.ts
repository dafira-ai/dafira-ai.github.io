// Sector pages for board members: /for/board-member/industry/[industry] (EN, FR, NL).
// Icons are line-icon names rendered through <Icon>. Quotes reference real, verbatim customer quotes (components/industries/customerQuotes.ts).
import type { QuoteKey } from '../components/industries/customerQuotes';

export type IndustryLang = 'en' | 'fr' | 'nl';
export const industryIds = ['financial-services', 'healthcare', 'real-estate'] as const;
export type IndustryId = (typeof industryIds)[number];

export interface IndustryItem { icon: string; title: string; text: string; items?: string[] }
export interface IndustryContent {
  name: string;
  icon: string;
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string };
  challenges: { title: string; lead: string; items: IndustryItem[] };
  features: { title: string; lead: string; items: IndustryItem[] };
}

export const industryData: Record<IndustryLang, Record<IndustryId, IndustryContent>> = {
  en: {
    'financial-services': {
      name: 'Financial services',
      icon: 'bank',
      seo: {
        title: 'Financial Services Board Member Software | Dafira',
        description: 'Board portal for directors of banks, insurers and investment firms: confidential board papers, committee meetings and a clear record of decisions.',
      },
      hero: {
        eyebrow: 'Board members · Financial services',
        title: 'For directors of financial institutions',
        lead: 'Boards in financial services carry heavy regulatory responsibilities. Dafira keeps the board papers, committee work and decisions in one secure, documented place.',
      },
      challenges: {
        title: 'What financial services boards deal with',
        lead: 'Supervisors expect boards to show how they reached their decisions.',
        items: [
          { icon: 'scale', title: 'Regulatory environment', text: 'Follow evolving financial regulation and keep the related board papers together.' },
          { icon: 'shield', title: 'Risk oversight', text: 'Prepare risk and audit committee discussions with complete, current information.' },
          { icon: 'users', title: 'Accountability', text: 'Show what was discussed and decided, and on the basis of which documents.' },
        ],
      },
      features: {
        title: 'What Dafira provides',
        lead: 'Board tools used by directors in financial services.',
        items: [
          { icon: 'shield', title: 'Compliance monitoring', text: 'Follow regulatory topics relevant to the board.', items: ['Regulatory topics', 'Related documents', 'Audit trail'] },
          { icon: 'layers', title: 'Board and committees', text: 'Separate spaces for the board and each committee, with their own members.', items: ['Risk and audit committees', 'Access by role', 'Committee minutes'] },
          { icon: 'vote', title: 'Decisions on record', text: 'Votes, resolutions and signatures kept with the meeting.', items: ['Voting', 'E-signature', 'Decision log', 'Action items'] },
        ],
      },
    },
    healthcare: {
      name: 'Healthcare',
      icon: 'health',
      seo: {
        title: 'Healthcare Board Member Platform | Dafira',
        description: 'Board portal for directors of hospitals and care organisations: quality and safety on the agenda, confidential papers and documented decisions.',
      },
      hero: {
        eyebrow: 'Board members · Healthcare',
        title: 'For directors of healthcare organisations',
        lead: 'Healthcare boards oversee quality of care, safety and finances at once. Dafira helps you prepare those discussions and keep a record of what was decided.',
      },
      challenges: {
        title: 'What healthcare boards deal with',
        lead: 'Clinical, financial and regulatory matters meet at the same table.',
        items: [
          { icon: 'health', title: 'Quality of care', text: 'Review quality and safety reports as a standing item, with the history of previous discussions.' },
          { icon: 'lock', title: 'Confidential information', text: 'Board papers can contain sensitive information; access must be limited to the right people.' },
          { icon: 'users', title: 'Many stakeholders', text: 'Medical staff, management and supervisory bodies each bring their own perspective.' },
        ],
      },
      features: {
        title: 'What Dafira provides',
        lead: 'Board tools used by directors in healthcare.',
        items: [
          { icon: 'clipboard', title: 'Clinical governance', text: 'Recurring agenda items and committee spaces for quality and safety.', items: ['Agenda templates', 'Quality committee', 'Action items'] },
          { icon: 'lock', title: 'Confidentiality', text: 'Role-based access and encryption for board papers.', items: ['Access by role', 'Encryption', 'Audit trail', 'GDPR-aligned data protection'] },
          { icon: 'chat', title: 'Board communication', text: 'Keep exchanges between meetings in one secure place.', items: ['Secure board chat', 'News feed', 'Private annotations'] },
        ],
      },
    },
    'real-estate': {
      name: 'Real estate',
      icon: 'building',
      seo: {
        title: 'Real Estate Board Member Software | Dafira',
        description: 'Board portal for directors of property investment and management companies: investment papers, portfolio discussions and a record of decisions.',
      },
      hero: {
        eyebrow: 'Board members · Real estate',
        title: 'For directors of real estate companies',
        lead: 'Real estate boards decide on acquisitions, disposals and development projects. Dafira keeps the investment files, discussions and decisions together.',
      },
      challenges: {
        title: 'What real estate boards deal with',
        lead: 'Large, long-term commitments that need a clear decision trail.',
        items: [
          { icon: 'chart', title: 'Portfolio oversight', text: 'Follow the portfolio through regular board papers and reports.' },
          { icon: 'trend', title: 'Investment decisions', text: 'Review acquisition and development files before deciding.' },
          { icon: 'building', title: 'Asset management', text: 'Keep track of the decisions and follow-up actions for each asset.' },
        ],
      },
      features: {
        title: 'What Dafira provides',
        lead: 'Board tools used by directors in real estate.',
        items: [
          { icon: 'folder', title: 'Investment files', text: 'Board papers for each project, organised by agenda item.', items: ['Board pack by agenda item', 'Document library', 'Version history'] },
          { icon: 'sparkle', title: 'AI assistant', text: 'Ask questions about long investment files and get summaries.', items: ['Questions on board documents', 'Summaries'] },
          { icon: 'vote', title: 'Decisions and follow-up', text: 'Votes, resolutions and action items kept with the meeting.', items: ['Voting', 'E-signature', 'Decision log', 'Tasks'] },
        ],
      },
    },
  },
  fr: {
    'financial-services': {
      name: 'Services financiers',
      icon: 'bank',
      seo: {
        title: 'Logiciel pour administrateurs dans les services financiers | Dafira',
        description: 'Portail du conseil pour les administrateurs de banques, assureurs et sociétés d’investissement : documents confidentiels, comités et décisions documentées.',
      },
      hero: {
        eyebrow: 'Administrateurs · Services financiers',
        title: 'Pour les administrateurs d’institutions financières',
        lead: 'Les conseils du secteur financier portent de lourdes responsabilités réglementaires. Dafira réunit les documents du conseil, le travail des comités et les décisions dans un espace sécurisé et documenté.',
      },
      challenges: {
        title: 'Les enjeux des conseils du secteur financier',
        lead: 'Les superviseurs attendent des conseils qu’ils puissent montrer comment leurs décisions ont été prises.',
        items: [
          { icon: 'scale', title: 'Environnement réglementaire', text: 'Suivre l’évolution de la réglementation financière et garder les documents du conseil qui s’y rapportent.' },
          { icon: 'shield', title: 'Surveillance des risques', text: 'Préparer les travaux des comités des risques et d’audit avec une information complète et à jour.' },
          { icon: 'users', title: 'Redevabilité', text: 'Montrer ce qui a été discuté et décidé, et sur la base de quels documents.' },
        ],
      },
      features: {
        title: 'Ce que Dafira apporte',
        lead: 'Les outils utilisés par les administrateurs du secteur financier.',
        items: [
          { icon: 'shield', title: 'Suivi de la conformité', text: 'Suivre les sujets réglementaires qui concernent le conseil.', items: ['Sujets réglementaires', 'Documents associés', 'Piste d’audit'] },
          { icon: 'layers', title: 'Conseil et comités', text: 'Des espaces distincts pour le conseil et chaque comité, avec leurs propres membres.', items: ['Comités des risques et d’audit', 'Accès par rôle', 'Procès-verbaux des comités'] },
          { icon: 'vote', title: 'Décisions consignées', text: 'Votes, résolutions et signatures conservés avec la réunion.', items: ['Votes', 'Signature électronique', 'Registre des décisions', 'Actions de suivi'] },
        ],
      },
    },
    healthcare: {
      name: 'Santé',
      icon: 'health',
      seo: {
        title: 'Plateforme pour administrateurs dans le secteur de la santé | Dafira',
        description: 'Portail du conseil pour les administrateurs d’hôpitaux et d’organisations de soins : qualité et sécurité à l’ordre du jour, documents confidentiels, décisions documentées.',
      },
      hero: {
        eyebrow: 'Administrateurs · Santé',
        title: 'Pour les administrateurs d’organisations de santé',
        lead: 'Les conseils du secteur de la santé supervisent à la fois la qualité des soins, la sécurité et les finances. Dafira vous aide à préparer ces discussions et à garder la trace des décisions.',
      },
      challenges: {
        title: 'Les enjeux des conseils du secteur de la santé',
        lead: 'Questions cliniques, financières et réglementaires se rejoignent autour de la même table.',
        items: [
          { icon: 'health', title: 'Qualité des soins', text: 'Examiner les rapports qualité et sécurité comme point permanent, avec l’historique des discussions précédentes.' },
          { icon: 'lock', title: 'Informations confidentielles', text: 'Les documents du conseil peuvent contenir des informations sensibles ; l’accès doit être limité aux bonnes personnes.' },
          { icon: 'users', title: 'Parties prenantes multiples', text: 'Corps médical, direction et autorités de tutelle apportent chacun leur point de vue.' },
        ],
      },
      features: {
        title: 'Ce que Dafira apporte',
        lead: 'Les outils utilisés par les administrateurs du secteur de la santé.',
        items: [
          { icon: 'clipboard', title: 'Gouvernance clinique', text: 'Points récurrents à l’ordre du jour et espaces de comité pour la qualité et la sécurité.', items: ['Modèles d’ordre du jour', 'Comité qualité', 'Actions de suivi'] },
          { icon: 'lock', title: 'Confidentialité', text: 'Accès par rôle et chiffrement des documents du conseil.', items: ['Accès par rôle', 'Chiffrement', 'Piste d’audit', 'Protection des données conforme au RGPD'] },
          { icon: 'chat', title: 'Communication du conseil', text: 'Garder les échanges entre les réunions dans un seul espace sécurisé.', items: ['Messagerie sécurisée du conseil', 'Fil d’actualités', 'Annotations privées'] },
        ],
      },
    },
    'real-estate': {
      name: 'Immobilier',
      icon: 'building',
      seo: {
        title: 'Logiciel pour administrateurs dans l’immobilier | Dafira',
        description: 'Portail du conseil pour les administrateurs de sociétés d’investissement et de gestion immobilière : dossiers d’investissement, suivi du portefeuille et registre des décisions.',
      },
      hero: {
        eyebrow: 'Administrateurs · Immobilier',
        title: 'Pour les administrateurs de sociétés immobilières',
        lead: 'Les conseils immobiliers décident d’acquisitions, de cessions et de projets de développement. Dafira réunit les dossiers d’investissement, les discussions et les décisions.',
      },
      challenges: {
        title: 'Les enjeux des conseils immobiliers',
        lead: 'Des engagements importants et durables, qui exigent une trace claire des décisions.',
        items: [
          { icon: 'chart', title: 'Suivi du portefeuille', text: 'Suivre le portefeuille au travers de documents et de rapports réguliers.' },
          { icon: 'trend', title: 'Décisions d’investissement', text: 'Examiner les dossiers d’acquisition et de développement avant de décider.' },
          { icon: 'building', title: 'Gestion des actifs', text: 'Garder la trace des décisions et des actions de suivi pour chaque actif.' },
        ],
      },
      features: {
        title: 'Ce que Dafira apporte',
        lead: 'Les outils utilisés par les administrateurs du secteur immobilier.',
        items: [
          { icon: 'folder', title: 'Dossiers d’investissement', text: 'Les documents de chaque projet, organisés par point de l’ordre du jour.', items: ['Dossier du conseil par point', 'Bibliothèque de documents', 'Historique des versions'] },
          { icon: 'sparkle', title: 'Assistant IA', text: 'Poser des questions sur de longs dossiers d’investissement et en obtenir des résumés.', items: ['Questions sur les documents', 'Résumés'] },
          { icon: 'vote', title: 'Décisions et suivi', text: 'Votes, résolutions et actions conservés avec la réunion.', items: ['Votes', 'Signature électronique', 'Registre des décisions', 'Tâches'] },
        ],
      },
    },
  },
  nl: {
    'financial-services': {
      name: 'Financiële dienstverlening',
      icon: 'bank',
      seo: {
        title: 'Software voor bestuurders in de financiële sector | Dafira',
        description: 'Bestuursportaal voor bestuurders van banken, verzekeraars en beleggingsondernemingen: vertrouwelijke stukken, comitévergaderingen en gedocumenteerde besluiten.',
      },
      hero: {
        eyebrow: 'Bestuurders · Financiële dienstverlening',
        title: 'Voor bestuurders van financiële instellingen',
        lead: 'Besturen in de financiële sector dragen zware regelgevende verantwoordelijkheden. Dafira brengt de bestuursstukken, het werk van de comités en de besluiten samen op één beveiligde, gedocumenteerde plek.',
      },
      challenges: {
        title: 'Waar besturen in de financiële sector mee te maken hebben',
        lead: 'Toezichthouders verwachten dat besturen kunnen aantonen hoe zij tot hun besluiten kwamen.',
        items: [
          { icon: 'scale', title: 'Regelgeving', text: 'De ontwikkeling van financiële regelgeving volgen en de bijbehorende bestuursstukken bijeenhouden.' },
          { icon: 'shield', title: 'Risicotoezicht', text: 'Het werk van risico- en auditcomités voorbereiden met volledige, actuele informatie.' },
          { icon: 'users', title: 'Verantwoording', text: 'Aantonen wat besproken en besloten werd, en op basis van welke documenten.' },
        ],
      },
      features: {
        title: 'Wat Dafira biedt',
        lead: 'De tools die bestuurders in de financiële sector gebruiken.',
        items: [
          { icon: 'shield', title: 'Compliance-opvolging', text: 'Regelgevende onderwerpen volgen die het bestuur aangaan.', items: ['Regelgevende onderwerpen', 'Bijbehorende documenten', 'Audittrail'] },
          { icon: 'layers', title: 'Bestuur en comités', text: 'Aparte ruimtes voor het bestuur en elk comité, met eigen leden.', items: ['Risico- en auditcomités', 'Toegang per rol', 'Notulen van comités'] },
          { icon: 'vote', title: 'Vastgelegde besluiten', text: 'Stemmingen, resoluties en handtekeningen bewaard bij de vergadering.', items: ['Stemmen', 'Elektronische handtekening', 'Besluitenregister', 'Actiepunten'] },
        ],
      },
    },
    healthcare: {
      name: 'Zorg',
      icon: 'health',
      seo: {
        title: 'Platform voor bestuurders in de zorgsector | Dafira',
        description: 'Bestuursportaal voor bestuurders van ziekenhuizen en zorgorganisaties: kwaliteit en veiligheid op de agenda, vertrouwelijke stukken en gedocumenteerde besluiten.',
      },
      hero: {
        eyebrow: 'Bestuurders · Zorg',
        title: 'Voor bestuurders van zorgorganisaties',
        lead: 'Besturen in de zorg houden tegelijk toezicht op zorgkwaliteit, veiligheid en financiën. Dafira helpt u die besprekingen voor te bereiden en de besluiten vast te leggen.',
      },
      challenges: {
        title: 'Waar besturen in de zorg mee te maken hebben',
        lead: 'Klinische, financiële en regelgevende vragen komen samen aan dezelfde tafel.',
        items: [
          { icon: 'health', title: 'Zorgkwaliteit', text: 'Kwaliteits- en veiligheidsrapporten als vast agendapunt bespreken, met de historiek van eerdere besprekingen.' },
          { icon: 'lock', title: 'Vertrouwelijke informatie', text: 'Bestuursstukken kunnen gevoelige informatie bevatten; de toegang moet beperkt blijven tot de juiste personen.' },
          { icon: 'users', title: 'Veel belanghebbenden', text: 'Medische staf, directie en toezichthouders brengen elk hun eigen perspectief.' },
        ],
      },
      features: {
        title: 'Wat Dafira biedt',
        lead: 'De tools die bestuurders in de zorg gebruiken.',
        items: [
          { icon: 'clipboard', title: 'Klinische governance', text: 'Terugkerende agendapunten en comitéruimtes voor kwaliteit en veiligheid.', items: ['Agendasjablonen', 'Kwaliteitscomité', 'Actiepunten'] },
          { icon: 'lock', title: 'Vertrouwelijkheid', text: 'Toegang per rol en versleuteling van bestuursstukken.', items: ['Toegang per rol', 'Versleuteling', 'Audittrail', 'Gegevensbescherming conform de AVG'] },
          { icon: 'chat', title: 'Bestuurscommunicatie', text: 'Uitwisselingen tussen vergaderingen op één beveiligde plek houden.', items: ['Beveiligde bestuurschat', 'Nieuwsfeed', 'Privé-annotaties'] },
        ],
      },
    },
    'real-estate': {
      name: 'Vastgoed',
      icon: 'building',
      seo: {
        title: 'Software voor bestuurders in de vastgoedsector | Dafira',
        description: 'Bestuursportaal voor bestuurders van vastgoedbeleggings- en beheerondernemingen: investeringsdossiers, portefeuilleopvolging en een besluitenregister.',
      },
      hero: {
        eyebrow: 'Bestuurders · Vastgoed',
        title: 'Voor bestuurders van vastgoedondernemingen',
        lead: 'Vastgoedbesturen beslissen over aankopen, verkopen en ontwikkelingsprojecten. Dafira brengt de investeringsdossiers, besprekingen en besluiten samen.',
      },
      challenges: {
        title: 'Waar vastgoedbesturen mee te maken hebben',
        lead: 'Grote, langlopende verbintenissen die een duidelijk besluitvormingsspoor vragen.',
        items: [
          { icon: 'chart', title: 'Portefeuilletoezicht', text: 'De portefeuille opvolgen via regelmatige bestuursstukken en rapporten.' },
          { icon: 'trend', title: 'Investeringsbesluiten', text: 'Aankoop- en ontwikkelingsdossiers doornemen voordat er beslist wordt.' },
          { icon: 'building', title: 'Assetmanagement', text: 'De besluiten en opvolgacties per actief bijhouden.' },
        ],
      },
      features: {
        title: 'Wat Dafira biedt',
        lead: 'De tools die bestuurders in de vastgoedsector gebruiken.',
        items: [
          { icon: 'folder', title: 'Investeringsdossiers', text: 'De stukken van elk project, geordend per agendapunt.', items: ['Bestuursdossier per agendapunt', 'Documentenbibliotheek', 'Versiegeschiedenis'] },
          { icon: 'sparkle', title: 'AI-assistent', text: 'Vragen stellen over lange investeringsdossiers en samenvattingen krijgen.', items: ['Vragen over documenten', 'Samenvattingen'] },
          { icon: 'vote', title: 'Besluiten en opvolging', text: 'Stemmingen, resoluties en actiepunten bewaard bij de vergadering.', items: ['Stemmen', 'Elektronische handtekening', 'Besluitenregister', 'Taken'] },
        ],
      },
    },
  },
};

/** Real customer quote shown on each sector page (none where no customer from that sector has been quoted). */
export const testimonials: Record<IndustryId, QuoteKey | null> = {
  'financial-services': 'pierre',
  healthcare: null,
  'real-estate': 'nathalie',
};

export function getIndustry(lang: string, id: string): IndustryContent | undefined {
  const l = (lang === 'fr' || lang === 'nl' ? lang : 'en') as IndustryLang;
  return industryData[l][id as IndustryId];
}
