// Interface labels of the compliance dashboard mock-up (EN / FR / NL; other languages fall back to English).
import type { Lang } from '../../i18n/routes';

const labels = {
  en: { complete: 'complete', due: 'Due', strengths: 'Strengths', gaps: 'Gaps identified', recommendations: 'Recommendations', documents: 'Supporting documents', relevant: 'relevance', activity: 'Recent activity', example: 'Example data' },
  fr: { complete: 'réalisé', due: 'Échéance', strengths: 'Points forts', gaps: 'Lacunes identifiées', recommendations: 'Recommandations', documents: 'Documents justificatifs', relevant: 'pertinence', activity: 'Activité récente', example: 'Données d’exemple' },
  nl: { complete: 'voltooid', due: 'Deadline', strengths: 'Sterke punten', gaps: 'Vastgestelde lacunes', recommendations: 'Aanbevelingen', documents: 'Ondersteunende documenten', relevant: 'relevantie', activity: 'Recente activiteit', example: 'Voorbeeldgegevens' },
};

export const complianceLabels = (lang: Lang) => labels[lang === 'fr' || lang === 'nl' ? lang : 'en'];

export const statusTone = {
  good: 'bg-emerald-50 text-emerald-800',
  warning: 'bg-amber-50 text-amber-800',
  alert: 'bg-red-50 text-red-700',
} as const;

export const statusBar = {
  good: 'bg-emerald-600',
  warning: 'bg-amber-500',
  alert: 'bg-red-600',
} as const;
