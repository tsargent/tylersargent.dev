export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
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
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/tsargent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tylersargent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@tylersargent.dev"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </header>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-medium text-foreground">
                Staff Software Engineer
              </h3>
              <span className="text-sm text-foreground/60">2021 - Present</span>
            </div>
            <p className="text-foreground/70">
              Leading development of mobile and web applications in health tech
              using TypeScript, React Native, and React. Implementing
              comprehensive testing strategies and establishing best practices
              for code quality and maintainability. Mentoring engineers and
              driving technical excellence across teams.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-medium text-foreground">
                Software Engineer
              </h3>
              <span className="text-sm text-foreground/60">2018 - 2021</span>
            </div>
            <p className="text-foreground/70">
              Built and maintained full-stack health tech applications with
              TypeScript and Node.js. Developed cross-platform mobile
              applications with React Native. Contributed to testing
              infrastructure and improved deployment processes.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Skills
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-sm font-medium text-foreground/80">
              Languages
            </h3>
            <p className="text-foreground/70">TypeScript, JavaScript</p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-foreground/80">
              Technologies
            </h3>
            <p className="text-foreground/70">
              React Native, React, Node.js, Next.js
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-foreground/80">
              Practices
            </h3>
            <p className="text-foreground/70">
              Testing Best Practices, Test-Driven Development, Code Review,
              Clean Code, CI/CD
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-foreground">
              Buoy Sonification Project
            </h3>
            <p className="text-foreground/70">
              TypeScript monorepo transforming real-time NOAA buoy observations
              into APIs for exploratory auditory analytics. Built with Fastify,
              Prisma, BullMQ, and Redis. Features real-time SSE streaming,
              comprehensive test coverage, and production-ready CI/CD pipeline.
            </p>
            <a
              href="https://github.com/tsargent/buoy-data-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              View on GitHub →
            </a>
          </div>
        </div>
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
