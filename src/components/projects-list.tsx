import { projects } from "@/data/profile";

export function ProjectsList() {
  return (
    <ul className="space-y-6">
      {projects.map((project) => (
        <li key={project.name} className="space-y-2">
          <h3 className="text-lg font-medium text-foreground">
            {project.name}
          </h3>
          <p className="text-foreground/70">{project.description}</p>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-foreground/60 transition-colors hover:text-foreground"
            aria-label={`View ${project.name} on GitHub`}
          >
            View on GitHub →
          </a>
        </li>
      ))}
    </ul>
  );
}
