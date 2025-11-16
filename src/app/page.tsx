import { ThemeToggle } from "@/components/theme-toggle";
import { socialLinks, experience, skills, projects } from "@/data/profile";

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      {/* Theme Toggle */}
      <div className="mb-8 flex justify-end">
        <ThemeToggle />
      </div>

      {/* Header */}
      <header className="mb-16">
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Tyler Sargent
        </h1>
        <p className="mb-6 text-xl text-foreground/80">
          Staff Software Engineer
        </p>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
          Building performant, maintainable software with TypeScript, React, and
          React Native. Focused on clean code, testing best practices, and
          delivering high-quality solutions in health tech for 7 years.
        </p>
        <ul className="flex flex-wrap gap-4" aria-label="Social links">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                aria-label={link.label === "Email" ? "Send email" : link.label}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>
        <ul className="space-y-8">
          {experience.map((role) => (
            <li key={role.title} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-medium text-foreground">
                  {role.title}
                </h3>
                <span className="text-sm text-foreground/60">
                  <time>{role.from}</time> - <time>{role.to}</time>
                </span>
              </div>
              <p className="text-foreground/70">{role.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Skills
        </h2>
        <div className="space-y-4">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="mb-2 text-sm font-medium text-foreground/80">
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-foreground/70">
                {group.items.map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>
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
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 pt-8">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Tyler Sargent. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
