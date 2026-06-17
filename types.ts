export interface Project {
  title: string;
  tech: string[];
  description: string;
  icon: string;
  link?: string;
  isCurrent?: boolean;
  tag?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
  type?: string;
  badge?: string;
  skills?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}
