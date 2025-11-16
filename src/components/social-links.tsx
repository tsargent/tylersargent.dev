import { socialLinks } from "@/data/profile";

export function SocialLinks() {
  return (
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
  );
}
