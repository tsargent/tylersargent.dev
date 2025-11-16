import { ThemeToggle } from "@/components/theme-toggle";
import { SocialLinks } from "@/components/social-links";
import { ExperienceList } from "@/components/experience-list";
import { SkillsList } from "@/components/skills-list";
import { ProjectsList } from "@/components/projects-list";

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
          React Native. Over a decade of engineering experience with a focus on
          clean code, testing best practices, and delivering high-quality
          solutions in health tech.
        </p>
        <SocialLinks />
      </header>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>
        <ExperienceList />
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Skills
        </h2>
        <SkillsList />
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <ProjectsList />
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
