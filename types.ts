export interface Project {
  title: string;
  tech: string[];
  description: string;
  icon: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}
