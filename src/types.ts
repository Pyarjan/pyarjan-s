export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  period: string;
  role: string;
  description: string;
}

export interface AboutMe {
  story: string;
  experience: Experience[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}