export type AgendaItemType = 'discussion' | 'decision' | 'information' | 'presentation' | 'voting' | 'workshop' | 'break';

export interface Document {
  name: string;
  type: string;
}

export interface SubItem {
  title: string;
  duration: number;
}

export interface AgendaItem {
  id?: string;
  title: string;
  type: AgendaItemType;
  duration: number;
  documents?: Document[];
  subItems?: SubItem[];
}

export interface TimeSlot {
  time: string;
  title: string;
  type: AgendaItemType;
  duration: number;
}

export interface Template {
  name: string;
  icon: string;
  items: AgendaItem[];
}

export interface AISuggestion {
  title: string;
  type: AgendaItemType;
  confidence: number;
  reason: string;
}
