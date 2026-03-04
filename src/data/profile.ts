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


