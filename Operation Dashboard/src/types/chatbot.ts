export interface ChatNode {
  id: string;
  type: 'question' | 'answer' | 'branch';
  text: string;
  textAr?: string;
  options?: ChatOption[];
  docLink?: string;
  category: string;
}

export interface ChatOption {
  label: string;
  labelAr?: string;
  nextNodeId: string;
  icon?: string;
}

export interface ChatMessage {
  id: string;
  nodeId: string;
  text: string;
  type: 'bot' | 'user';
  options?: ChatOption[];
  docLink?: string;
}
