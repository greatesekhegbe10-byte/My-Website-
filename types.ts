export enum Category {
  ALL = 'All',
  WEB_DESIGN = 'Web Design',
  CYBERSECURITY = 'Cybersecurity',
  SOFTWARE = 'Software',
  CONSULTING = 'Consulting',
  AI_SOLUTIONS = 'AI Solutions'
}

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  features: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  image?: string;
  isError?: boolean;
}