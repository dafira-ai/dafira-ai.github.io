// Real customer quotes (verbatim, as published on the home page), per language, anonymised.
// Used by the role and industry pages. Do not paraphrase them.

export type QuoteLang = 'en' | 'fr' | 'nl';
export type QuoteKey = 'lore' | 'pierre' | 'nathalie';

export interface CustomerQuote {
  quote: string;
  author: string;
  role: string;
  company: string;
  link: string;
}

// Customers are anonymised: job title instead of the person, industry instead of the company.
const base = {
  lore: { link: '/case-studies/listed-fashion-group' },
  pierre: { link: '/case-studies/public-investment-fund' },
  nathalie: { link: '/case-studies/healthcare-real-estate' },
};

const who: Record<QuoteLang, Record<QuoteKey, { author: string; company: string }>> = {
  en: {
    lore: { author: 'General Counsel', company: 'Listed fashion group' },
    pierre: { author: 'CEO', company: 'Regional public investment fund' },
    nathalie: { author: 'Paralegal & Compliance Officer', company: 'Listed healthcare real estate company' },
  },
  fr: {
    lore: { author: 'Directrice juridique', company: 'Groupe de mode coté en bourse' },
    pierre: { author: 'CEO', company: "Fonds public d'investissement régional" },
    nathalie: { author: 'Juriste et responsable conformité', company: 'Société immobilière cotée du secteur des soins' },
  },
  nl: {
    lore: { author: 'General Counsel', company: 'Beursgenoteerde modegroep' },
    pierre: { author: 'CEO', company: 'Regionaal publiek investeringsfonds' },
    nathalie: { author: 'Paralegal en compliance officer', company: 'Beursgenoteerde zorgvastgoedvennootschap' },
  },
};

const text: Record<QuoteLang, Record<QuoteKey, { quote: string; role: string }>> = {
  en: {
    lore: { quote: 'Dafira has transformed how we manage our board operations, bringing efficiency and clarity to our governance processes.', role: 'General Counsel' },
    pierre: { quote: 'Dafira has simplified our document management tremendously, making our meeting preparations more efficient and allowing our board to focus on decision-making.', role: 'CEO' },
    nathalie: { quote: 'Dafira embraced the next generation of Board management software, easy to use and with AI integration.', role: 'Paralegal en Compliance Officer' },
  },
  fr: {
    lore: { quote: 'Dafira a révolutionné notre gouvernance en apportant efficacité et clarté à nos processus.', role: 'Directrice Juridique' },
    pierre: { quote: 'Dafira a transformé notre gestion documentaire, rendant nos conseils plus efficaces et centrés sur la prise de décision.', role: 'Directeur Général' },
    nathalie: { quote: "Dafira représente l'avenir de la gouvernance, alliant simplicité d'usage et intelligence artificielle.", role: 'Responsable Juridique et Conformité' },
  },
  nl: {
    lore: { quote: 'Dafira heeft onze governance gerevolutioneerd door efficiëntie en duidelijkheid in onze processen te brengen.', role: 'Juridisch Directeur' },
    pierre: { quote: 'Dafira heeft ons documentbeheer getransformeerd, waardoor onze vergaderingen efficiënter en meer besluitgericht zijn geworden.', role: 'CEO' },
    nathalie: { quote: 'Dafira vertegenwoordigt de toekomst van governance, met een combinatie van gebruiksgemak en kunstmatige intelligentie.', role: 'Legal & Compliance Manager' },
  },
};

export function customerQuote(lang: string, key: QuoteKey): CustomerQuote {
  const l = (lang === 'fr' || lang === 'nl' ? lang : 'en') as QuoteLang;
  const prefix = l === 'en' ? '' : `/${l}`;
  const b = base[key];
  return { ...b, ...who[l][key], ...text[l][key], role: '', link: `${prefix}${b.link}` };
}

export const readCaseLabel: Record<QuoteLang, string> = {
  en: 'Read the case study',
  fr: 'Lire l’étude de cas',
  nl: 'Lees het klantverhaal',
};
