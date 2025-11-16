import { experience } from "@/data/profile";

export function ExperienceList() {
  return (
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
  );
}
