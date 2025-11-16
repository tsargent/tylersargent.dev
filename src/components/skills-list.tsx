import { skills } from "@/data/profile";

export function SkillsList() {
  return (
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
  );
}
