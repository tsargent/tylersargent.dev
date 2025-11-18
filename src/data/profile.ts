export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/tsargent", external: true },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tylersargent",
    external: true,
  },
  { label: "Email", href: "mailto:hello@tylersargent.dev" },
];

export type ExperienceItem = {
  title: string;
  from: string; // year or full date
  to: string; // year or 'Present'
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Staff Software Engineer",
    from: "2021",
    to: "Present",
    description:
      "Leading development of mobile and web applications in health tech using TypeScript, React Native, and React. Implementing comprehensive testing strategies and establishing best practices for code quality and maintainability. Mentoring engineers and driving technical excellence across teams.",
  },
  {
    title: "Software Engineer",
    from: "2018",
    to: "2021",
    description:
      "Built and maintained full-stack health tech applications with TypeScript and Node.js. Developed cross-platform mobile applications with React Native. Contributed to testing infrastructure and improved deployment processes.",
  },
];

export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript"] },
  {
    group: "Technologies",
    items: ["React Native", "React", "Node.js", "Next.js"],
  },
  {
    group: "Practices",
    items: [
      "Testing Best Practices",
      "Test-Driven Development",
      "Code Review",
      "Clean Code",
      "CI/CD",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: "Spec → Scaffold Developer Agent",
    description:
      "AI-powered code scaffolding tool that generates complete project structures from feature descriptions. Built with Next.js 16, React 19, TypeScript, and OpenAI API. Enter a spec, preview generated files, and download as ZIP.",
    href: "https://github.com/tsargent/spec-scaffold",
  },
  {
    name: "RAG Demo",
    description:
      "Retrieval-Augmented Generation demonstration project showcasing AI-powered document retrieval and question answering capabilities.",
    href: "https://github.com/tsargent/RAG-demo",
  },
  {
    name: "Buoy Sonification Project",
    description:
      "TypeScript monorepo transforming real-time NOAA buoy observations into APIs for exploratory auditory analytics. Built with Fastify, Prisma, BullMQ, and Redis. Features real-time SSE streaming, comprehensive test coverage, and production-ready CI/CD pipeline.",
    href: "https://github.com/tsargent/buoy-data-project",
  },
];
