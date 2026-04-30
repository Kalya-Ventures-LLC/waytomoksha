// ── Way To Moksha – shared TypeScript types ──────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface Retreat {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status: "upcoming" | "past";
  imageUrl?: string;
}

export interface Session {
  id: string;
  title: string;
  language: string;
  schedule: string;
  platform: "YouTube" | "Zoom" | "Both";
  link?: string;
}

export interface PwaApp {
  id: string;
  title: string;
  description: string;
  status: "coming-soon" | "live";
}

export interface DonationMethod {
  id: string;
  region: "India" | "USA";
  method: string;
  detail: string;
}

export interface DonationPurpose {
  id: string;
  title: string;
  description: string;
}
