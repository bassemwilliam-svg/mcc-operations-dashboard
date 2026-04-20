export type Role = 'operator' | 'supervisor' | 'facilitator' | 'it-admin';
export type DocCategory = 'guides' | 'sops' | 'scenarios' | 'training' | 'forms' | 'reference' | 'meta';

export interface DocMeta {
  id: string;
  title: string;
  titleAr?: string;
  category: DocCategory;
  roles: Role[];
  tags: string[];
  version: string;
  date: string;
  lastUpdated: string;
  classification: string;
  summary: string;
  summaryAr?: string;
  related: string[];
  filePath: string;
}

export interface DocContent extends DocMeta {
  content: string;
  headings: DocHeading[];
}

export interface DocHeading {
  level: number;
  text: string;
  id: string;
}

export interface SearchResult {
  item: DocMeta;
  score: number;
  matches?: Array<{
    key: string;
    value: string;
    indices: Array<[number, number]>;
  }>;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'urgent';
  date: string;
}

export interface HardwareItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  warrantyExpiry: string;
  annualCost?: number;
  notes: string;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  department: string;
}
