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
    /* image:
      "images/Image-1-3.webp", */
      image:
      "data:image/png;base64,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",
  }
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
