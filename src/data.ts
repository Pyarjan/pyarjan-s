import { Project, Skill, BlogPost } from "./types";

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with modern UI and secure payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://magnis-store-co.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
  },
  {
    title: "Brand Identity Design",
    description:
      "Complete brand identity package including logo, business cards, and marketing materials",
    technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website with VS Code theme and terminal interface",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Pyarjan/portfolio",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop",
  },
];

export const skills: Skill[] = [
  {
    category: "Web Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Design",
    items: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "UI/UX Design",
      "Logo Design",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "MongoDB", "PostgreSQL", "Docker", "AWS"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-react",
    title: "Getting Started with React in 2024",
    excerpt:
      "A comprehensive guide to starting your journey with React development",
    content: `React has become the go-to library for building modern web applications. In this guide, we'll explore the essential concepts and best practices for getting started with React development in 2024.

## Prerequisites

Before diving into React, make sure you have:
- Basic knowledge of HTML, CSS, and JavaScript
- Node.js installed on your computer
- A code editor (VS Code recommended)

## Setting Up Your First React Project

    1. Create a new project using Vite
    2. Understanding components and props
    3. Managing state with hooks
    4. Building your first application

## Best Practices

    - Keep components small and focused
    - Use functional components and hooks
    - Implement proper state management
    - Follow React's documentation guidelines`,
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    id: "mastering-typescript",
    title: "Mastering TypeScript for Modern Web Development",
    excerpt:
      "Learn how to leverage TypeScript to write better, more maintainable code",
    content: `TypeScript has revolutionized how we write JavaScript applications. Let's explore the key concepts and advanced features that make TypeScript essential for modern web development.

## Why TypeScript?

TypeScript offers several advantages:
- Static typing
- Better IDE support
- Enhanced code quality
- Improved maintainability

## Key Concepts

1. Type annotations and interfaces
2. Generics
3. Union and intersection types
4. Advanced type utilities

## Real-world Applications

Learn how to apply TypeScript in real projects...`,
    date: "2024-03-10",
    readTime: "8 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=400&fit=crop",
  },
  {
    id: "css-preprocessors",
    title: "The Power of CSS Preprocessors: A Comprehensive Guide",
    excerpt: "Discover how CSS preprocessors can supercharge your stylesheets",
    content: `CSS preprocessors have transformed the way we write CSS. In this article, w
    e'll explore the key features and benefits of popular CSS preprocessors like Sass and Less.

 ## What are CSS Preprocessors?
    CSS preprocessors are tools that extend the standard capabilities of CSS.
    They allow you to write dynamic, reusable stylesheets with features like 
    variables, nesting, and mixins.

## Key Features of Sass and Less
    1. Variables: Define reusable values in your stylesheets
    2. Nesting: Create nested selectors for better organization
    3. Mixins: Define reusable blocks of styles
    4. Functions: Write custom functions to manipulate styles

## Integrating Preprocessors into Your Workflow
    1. Installing Sass or Less
    2. Compiling your stylesheets
    3. Leveraging advanced features

## Best Practices
    - Use variables for colors, fonts, and spacing
    - Organize your stylesheets with nested selectors
    - Create mixins for reusable styles
    - Explore the full capabilities of Sass and Less to
    take your stylesheets to the next level.`,
    date: "2024-03-05",
    readTime: "6 min read",
    tags: ["CSS", "Sass", "Less", "Web Development"],
    image:
      "/public/Image-1-3.webp",
  },
];

export const aboutMe = {
  story:
    "I'm a passionate BCA student and web developer with over 2 years of experience in creating beautiful, functional web applications and designing compelling brand identities. My journey began with simple HTML websites and has evolved into building complex full-stack applications.",
  experience: [
    {
      period: "2022 - Present",
      role: "Freelance Web Developer & Designer",
      description:
        "Creating custom websites and brand identities for clients worldwide",
    },
    {
      period: "2021 - 2022",
      role: "Junior Web Developer",
      description:
        "Worked on various web development projects using modern technologies",
    },
  ],
};
