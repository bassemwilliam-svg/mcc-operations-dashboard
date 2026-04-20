export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
  subItems?: ChecklistItem[];
}

export interface Checklist {
  id: string;
  title: string;
  description: string;
  role: string;
  type: 'pre-session' | 'post-session' | 'setup' | 'onboarding';
  items: ChecklistItem[];
}
