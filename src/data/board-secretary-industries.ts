// Sector pages for board secretaries: /for/board-secretary/industry/[industry] (EN, FR, NL).
// Icons are line-icon names rendered through <Icon>. Quotes reference real, verbatim customer quotes (components/industries/customerQuotes.ts).
import type { QuoteKey } from '../components/industries/customerQuotes';
import type { IndustryContent, IndustryId, IndustryLang } from './board-member-industries';

export { industryIds } from './board-member-industries';
export type { IndustryContent, IndustryId, IndustryLang } from './board-member-industries';

export const industryData: Record<IndustryLang, Record<IndustryId, IndustryContent>> = {
  en: {
    'financial-services': {
      name: 'Financial services',
      icon: 'bank',
      seo: {
        title: 'Financial Services Board Secretary Software | Dafira',
        description: 'Board portal for company secretaries in banks, insurers and investment firms: board and committee meetings, minutes, secure distribution and an audit trail.',
      },
      hero: {
        eyebrow: 'Board secretaries · Financial services',
        title: 'For company secretaries in financial services',
        lead: 'Board and committee meetings, regulatory documentation and a complete record. Dafira organises the administration of the board in one secure place.',
      },
      challenges: {
        title: 'What secretaries in financial services deal with',
        lead: 'Many meetings, many documents, and supervisors who may ask to see them.',
        items: [
          { icon: 'documents', title: 'Regulatory documentation', text: 'Keep the board papers, minutes and resolutions that supervisors may ask for, in order.' },
          { icon: 'lock', title: 'Information security', text: 'Handle confidential financial information with controlled access.' },
          { icon: 'calendar', title: 'Meeting coordination', text: 'Coordinate the board and several committees, each with its own calendar and members.' },
        ],
      },
      features: {
        title: 'What Dafira provides',
        lead: 'Tools used by board secretaries in financial services.',
        items: [
          { icon: 'clipboard', title: 'Documentation', text: 'A complete record of the board’s work.', items: ['Audit trail', 'Document retention', 'Version history', 'Decision log'] },
          { icon: 'lock', title: 'Secure communication', text: 'Board information shared only with the intended people.', items: ['Secure board chat', 'Secure file sharing', 'Access by role', 'Activity log'] },
          { icon: 'calendar', title: 'Meeting management', text: 'The board and committee cycle in one calendar.', items: ['Committees', 'Agenda builder', 'AI minute builder', 'Action items'] },
        ],
      },
    },
    healthcare: {
      name: 'Healthcare',
      icon: 'health',
      seo: {
        title: 'Healthcare Board Secretary Platform | Dafira',
        description: 'Board portal for secretaries of hospitals and care organisations: confidential board papers, committee meetings, minutes and a searchable record.',
      },
      hero: {
        eyebrow: 'Board secretaries · Healthcare',
        title: 'For board secretaries in healthcare',
        lead: 'Prepare board and committee meetings, share confidential papers securely and keep the minutes and decisions in order.',
      },
      challenges: {
        title: 'What secretaries in healthcare deal with',
        lead: 'Several governance bodies and sensitive information.',
        items: [
          { icon: 'lock', title: 'Confidentiality', text: 'Board papers can contain sensitive information that must reach only the right people.' },
          { icon: 'users', title: 'Coordination', text: 'Organise communication between medical staff, management and the board.' },
          { icon: 'clipboard', title: 'Clinical governance', text: 'Support the documentation and reporting of quality and safety committees.' },
        ],
      },
      features: {
        title: 'What Dafira provides',
        lead: 'Tools used by board secretaries in healthcare.',
        items: [
          { icon: 'shield', title: 'Protected information', text: 'Board papers under access control.', items: ['Access by role', 'Encryption', 'Audit trail', 'GDPR-aligned data protection'] },
          { icon: 'layers', title: 'Committees', text: 'A separate space for each committee, with its own members and papers.', items: ['Quality and safety committee', 'Agenda templates', 'Committee minutes'] },
          { icon: 'calendar', title: 'Meeting management', text: 'From the invitation to the follow-up.', items: ['Invitations', 'Document distribution', 'AI minute builder', 'Action items'] },
        ],
      },
    },
    'real-estate': {
      name: 'Real estate',
      icon: 'building',
      seo: {
        title: 'Real Estate Board Secretary Software | Dafira',
        description: 'Board portal for secretaries of property companies: investment files, board meetings, minutes and a record of decisions.',
      },
      hero: {
        eyebrow: 'Board secretaries · Real estate',
        title: 'For board secretaries in real estate',
        lead: 'Investment files, board meetings and follow-up on decisions for each asset. Dafira keeps the administration of the board in one place.',
      },
      challenges: {
        title: 'What secretaries in real estate deal with',
        lead: 'Extensive documentation for each project and each decision.',
        items: [
          { icon: 'documents', title: 'Project documentation', text: 'Manage the documents behind each acquisition, disposal or development.' },
          { icon: 'chart', title: 'Investment records', text: 'Keep a clear record of what was decided for each investment.' },
          { icon: 'users', title: 'Reporting', text: 'Share board information with several stakeholder groups, each with the right access.' },
        ],
      },
      features: {
        title: 'What Dafira provides',
        lead: 'Tools used by board secretaries in real estate.',
        items: [
          { icon: 'folder', title: 'Project documents', text: 'Board papers organised and kept with their history.', items: ['Document library', 'Version history', 'Access by role'] },
          { icon: 'vote', title: 'Decision record', text: 'Votes and resolutions for each investment, kept with the meeting.', items: ['Voting', 'E-signature', 'Decision log'] },
          { icon: 'calendar', title: 'Meeting coordination', text: 'The board cycle in one calendar.', items: ['Calendar', 'Document distribution', 'AI minute builder', 'Action items'] },
        ],
      },
    },
  },
  fr: {
    'financial-services': {
      name: 'Services financiers',
      icon: 'bank',
      seo: {
        title: 'Logiciel pour secrétaires du conseil dans les services financiers | Dafira',
        description: 'Portail du conseil pour les secrétaires généraux de banques, assureurs et sociétés d’investissement : réunions du conseil et des comités, procès-verbaux, diffusion sécurisée et piste d’audit.',
      },
      hero: {
        eyebrow: 'Secrétaires du conseil · Services financiers',
        title: 'Pour les secrétaires généraux du secteur financier',
        lead: 'Réunions du conseil et des comités, documentation réglementaire et registre complet. Dafira organise l’administration du conseil dans un espace sécurisé.',
      },
      challenges: {
        title: 'Les enjeux des secrétaires du secteur financier',
        lead: 'De nombreuses réunions, de nombreux documents, et des superviseurs qui peuvent demander à les consulter.',
        items: [
          { icon: 'documents', title: 'Documentation réglementaire', text: 'Tenir en ordre les documents, procès-verbaux et résolutions que les superviseurs peuvent demander.' },
          { icon: 'lock', title: 'Sécurité de l’information', text: 'Traiter les informations financières confidentielles avec un accès contrôlé.' },
          { icon: 'calendar', title: 'Coordination des réunions', text: 'Coordonner le conseil et plusieurs comités, chacun avec son calendrier et ses membres.' },
        ],
      },
      features: {
        title: 'Ce que Dafira apporte',
        lead: 'Les outils utilisés par les secrétaires du conseil dans le secteur financier.',
        items: [
          { icon: 'clipboard', title: 'Documentation', text: 'Un registre complet des travaux du conseil.', items: ['Piste d’audit', 'Conservation des documents', 'Historique des versions', 'Registre des décisions'] },
          { icon: 'lock', title: 'Communication sécurisée', text: 'Des informations partagées uniquement avec les bonnes personnes.', items: ['Messagerie sécurisée du conseil', 'Partage de fichiers sécurisé', 'Accès par rôle', 'Journal d’activité'] },
          { icon: 'calendar', title: 'Gestion des réunions', text: 'Le cycle du conseil et des comités dans un seul calendrier.', items: ['Comités', 'Création d’ordres du jour', 'Rédaction de PV assistée par IA', 'Actions de suivi'] },
        ],
      },
    },
    healthcare: {
      name: 'Santé',
      icon: 'health',
      seo: {
        title: 'Plateforme pour secrétaires du conseil dans la santé | Dafira',
        description: 'Portail du conseil pour les secrétaires d’hôpitaux et d’organisations de soins : documents confidentiels, réunions des comités, procès-verbaux et registre consultable.',
      },
      hero: {
        eyebrow: 'Secrétaires du conseil · Santé',
        title: 'Pour les secrétaires du conseil dans la santé',
        lead: 'Préparez les réunions du conseil et des comités, partagez les documents confidentiels en toute sécurité et tenez en ordre procès-verbaux et décisions.',
      },
      challenges: {
        title: 'Les enjeux des secrétaires du secteur de la santé',
        lead: 'Plusieurs organes de gouvernance et des informations sensibles.',
        items: [
          { icon: 'lock', title: 'Confidentialité', text: 'Les documents du conseil peuvent contenir des informations sensibles qui ne doivent atteindre que les bonnes personnes.' },
          { icon: 'users', title: 'Coordination', text: 'Organiser la communication entre le corps médical, la direction et le conseil.' },
          { icon: 'clipboard', title: 'Gouvernance clinique', text: 'Soutenir la documentation et le reporting des comités qualité et sécurité.' },
        ],
      },
      features: {
        title: 'Ce que Dafira apporte',
        lead: 'Les outils utilisés par les secrétaires du conseil dans la santé.',
        items: [
          { icon: 'shield', title: 'Informations protégées', text: 'Des documents du conseil sous contrôle d’accès.', items: ['Accès par rôle', 'Chiffrement', 'Piste d’audit', 'Protection des données conforme au RGPD'] },
          { icon: 'layers', title: 'Comités', text: 'Un espace distinct pour chaque comité, avec ses membres et ses documents.', items: ['Comité qualité et sécurité', 'Modèles d’ordre du jour', 'Procès-verbaux des comités'] },
          { icon: 'calendar', title: 'Gestion des réunions', text: 'De l’invitation au suivi.', items: ['Invitations', 'Diffusion des documents', 'Rédaction de PV assistée par IA', 'Actions de suivi'] },
        ],
      },
    },
    'real-estate': {
      name: 'Immobilier',
      icon: 'building',
      seo: {
        title: 'Logiciel pour secrétaires du conseil dans l’immobilier | Dafira',
        description: 'Portail du conseil pour les secrétaires de sociétés immobilières : dossiers d’investissement, réunions du conseil, procès-verbaux et registre des décisions.',
      },
      hero: {
        eyebrow: 'Secrétaires du conseil · Immobilier',
        title: 'Pour les secrétaires du conseil dans l’immobilier',
        lead: 'Dossiers d’investissement, réunions du conseil et suivi des décisions pour chaque actif. Dafira réunit l’administration du conseil en un seul endroit.',
      },
      challenges: {
        title: 'Les enjeux des secrétaires du secteur immobilier',
        lead: 'Une documentation abondante pour chaque projet et chaque décision.',
        items: [
          { icon: 'documents', title: 'Documentation des projets', text: 'Gérer les documents de chaque acquisition, cession ou développement.' },
          { icon: 'chart', title: 'Registre des investissements', text: 'Garder une trace claire de ce qui a été décidé pour chaque investissement.' },
          { icon: 'users', title: 'Reporting', text: 'Partager l’information du conseil avec plusieurs groupes de parties prenantes, chacun avec le bon accès.' },
        ],
      },
      features: {
        title: 'Ce que Dafira apporte',
        lead: 'Les outils utilisés par les secrétaires du conseil dans l’immobilier.',
        items: [
          { icon: 'folder', title: 'Documents de projet', text: 'Des documents organisés et conservés avec leur historique.', items: ['Bibliothèque de documents', 'Historique des versions', 'Accès par rôle'] },
          { icon: 'vote', title: 'Registre des décisions', text: 'Votes et résolutions de chaque investissement, conservés avec la réunion.', items: ['Votes', 'Signature électronique', 'Registre des décisions'] },
          { icon: 'calendar', title: 'Coordination des réunions', text: 'Le cycle du conseil dans un seul calendrier.', items: ['Calendrier', 'Diffusion des documents', 'Rédaction de PV assistée par IA', 'Actions de suivi'] },
        ],
      },
    },
  },
  nl: {
    'financial-services': {
      name: 'Financiële dienstverlening',
      icon: 'bank',
      seo: {
        title: 'Software voor bestuurssecretarissen in de financiële sector | Dafira',
        description: 'Bestuursportaal voor secretarissen van banken, verzekeraars en beleggingsondernemingen: bestuurs- en comitévergaderingen, notulen, beveiligde verspreiding en een audittrail.',
      },
      hero: {
        eyebrow: 'Bestuurssecretarissen · Financiële dienstverlening',
        title: 'Voor bestuurssecretarissen in de financiële sector',
        lead: 'Bestuurs- en comitévergaderingen, regelgevende documentatie en een volledig register. Dafira organiseert de administratie van het bestuur op één beveiligde plek.',
      },
      challenges: {
        title: 'Waar secretarissen in de financiële sector mee te maken hebben',
        lead: 'Veel vergaderingen, veel documenten, en toezichthouders die ze kunnen opvragen.',
        items: [
          { icon: 'documents', title: 'Regelgevende documentatie', text: 'De stukken, notulen en resoluties die toezichthouders kunnen opvragen op orde houden.' },
          { icon: 'lock', title: 'Informatiebeveiliging', text: 'Vertrouwelijke financiële informatie behandelen met gecontroleerde toegang.' },
          { icon: 'calendar', title: 'Vergadercoördinatie', text: 'Het bestuur en meerdere comités coördineren, elk met een eigen agenda en eigen leden.' },
        ],
      },
      features: {
        title: 'Wat Dafira biedt',
        lead: 'De tools die bestuurssecretarissen in de financiële sector gebruiken.',
        items: [
          { icon: 'clipboard', title: 'Documentatie', text: 'Een volledig register van het werk van het bestuur.', items: ['Audittrail', 'Bewaring van documenten', 'Versiegeschiedenis', 'Besluitenregister'] },
          { icon: 'lock', title: 'Beveiligde communicatie', text: 'Informatie die alleen de juiste personen bereikt.', items: ['Beveiligde bestuurschat', 'Beveiligd delen van bestanden', 'Toegang per rol', 'Activiteitenlog'] },
          { icon: 'calendar', title: 'Vergaderbeheer', text: 'De cyclus van bestuur en comités in één kalender.', items: ['Comités', 'Agendabouwer', 'AI-notulenbouwer', 'Actiepunten'] },
        ],
      },
    },
    healthcare: {
      name: 'Zorg',
      icon: 'health',
      seo: {
        title: 'Platform voor bestuurssecretarissen in de zorg | Dafira',
        description: 'Bestuursportaal voor secretarissen van ziekenhuizen en zorgorganisaties: vertrouwelijke stukken, comitévergaderingen, notulen en een doorzoekbaar register.',
      },
      hero: {
        eyebrow: 'Bestuurssecretarissen · Zorg',
        title: 'Voor bestuurssecretarissen in de zorg',
        lead: 'Bereid bestuurs- en comitévergaderingen voor, deel vertrouwelijke stukken veilig en houd notulen en besluiten op orde.',
      },
      challenges: {
        title: 'Waar secretarissen in de zorg mee te maken hebben',
        lead: 'Meerdere bestuursorganen en gevoelige informatie.',
        items: [
          { icon: 'lock', title: 'Vertrouwelijkheid', text: 'Bestuursstukken kunnen gevoelige informatie bevatten die alleen de juiste personen mag bereiken.' },
          { icon: 'users', title: 'Coördinatie', text: 'De communicatie tussen medische staf, directie en bestuur organiseren.' },
          { icon: 'clipboard', title: 'Klinische governance', text: 'De documentatie en rapportering van kwaliteits- en veiligheidscomités ondersteunen.' },
        ],
      },
      features: {
        title: 'Wat Dafira biedt',
        lead: 'De tools die bestuurssecretarissen in de zorg gebruiken.',
        items: [
          { icon: 'shield', title: 'Beschermde informatie', text: 'Bestuursstukken onder toegangscontrole.', items: ['Toegang per rol', 'Versleuteling', 'Audittrail', 'Gegevensbescherming conform de AVG'] },
          { icon: 'layers', title: 'Comités', text: 'Een aparte ruimte voor elk comité, met eigen leden en stukken.', items: ['Kwaliteits- en veiligheidscomité', 'Agendasjablonen', 'Notulen van comités'] },
          { icon: 'calendar', title: 'Vergaderbeheer', text: 'Van de uitnodiging tot de opvolging.', items: ['Uitnodigingen', 'Verspreiding van documenten', 'AI-notulenbouwer', 'Actiepunten'] },
        ],
      },
    },
    'real-estate': {
      name: 'Vastgoed',
      icon: 'building',
      seo: {
        title: 'Software voor bestuurssecretarissen in vastgoed | Dafira',
        description: 'Bestuursportaal voor secretarissen van vastgoedondernemingen: investeringsdossiers, bestuursvergaderingen, notulen en een besluitenregister.',
      },
      hero: {
        eyebrow: 'Bestuurssecretarissen · Vastgoed',
        title: 'Voor bestuurssecretarissen in vastgoed',
        lead: 'Investeringsdossiers, bestuursvergaderingen en opvolging van besluiten per actief. Dafira brengt de administratie van het bestuur samen op één plek.',
      },
      challenges: {
        title: 'Waar secretarissen in vastgoed mee te maken hebben',
        lead: 'Uitgebreide documentatie voor elk project en elk besluit.',
        items: [
          { icon: 'documents', title: 'Projectdocumentatie', text: 'De documenten achter elke aankoop, verkoop of ontwikkeling beheren.' },
          { icon: 'chart', title: 'Investeringsregister', text: 'Duidelijk vastleggen wat er voor elke investering besloten werd.' },
          { icon: 'users', title: 'Rapportering', text: 'Bestuursinformatie delen met meerdere groepen belanghebbenden, elk met de juiste toegang.' },
        ],
      },
      features: {
        title: 'Wat Dafira biedt',
        lead: 'De tools die bestuurssecretarissen in vastgoed gebruiken.',
        items: [
          { icon: 'folder', title: 'Projectdocumenten', text: 'Stukken geordend en bewaard met hun historiek.', items: ['Documentenbibliotheek', 'Versiegeschiedenis', 'Toegang per rol'] },
          { icon: 'vote', title: 'Besluitenregister', text: 'Stemmingen en resoluties per investering, bewaard bij de vergadering.', items: ['Stemmen', 'Elektronische handtekening', 'Besluitenregister'] },
          { icon: 'calendar', title: 'Vergadercoördinatie', text: 'De bestuurscyclus in één kalender.', items: ['Kalender', 'Verspreiding van documenten', 'AI-notulenbouwer', 'Actiepunten'] },
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
