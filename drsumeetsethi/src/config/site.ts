/* =========================================================
   SITE CONFIG — edit this file to make the site your own.
   Header, footer, nav menus, service/condition cards, the
   contact-form dropdown and the floating buttons all read it.
   ========================================================= */

export type SocialKey = "facebook" | "instagram" | "linkedin" | "youtube";

export interface Treatment {
  /** URL slug — the detail page lives at /treatment/<id>/ */
  id: string;
  title: string;
  /** File name in public/img without extension */
  icon: string;
  desc: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  phone: string;
  emergencyPhone: string;
  /** Digits only, including country code */
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  mapEmbed: string;
  developer: { name: string; url: string };
  socials: Partial<Record<SocialKey, string>>;
  services: Treatment[];
  conditions: Treatment[];
}

export const SITE: SiteConfig = {
  name: "Dr. Your Name",
  title: "Specialist Title", // e.g. "Interventional Cardiologist"
  tagline: "Compassionate, evidence-based specialist care for you and your family.",
  phone: "+00 00000 00000",
  emergencyPhone: "+00 00000 00000",
  whatsapp: "000000000000",
  email: "hello@yourdomain.com",
  address: "Clinic Name, Street Address, City, State 000000",
  hours: "Mon – Sat: 10:00 AM – 6:00 PM",
  mapEmbed: "https://www.google.com/maps?q=New+Delhi&output=embed", // replace with your own map embed URL
  developer: { name: "Your Agency", url: "#" },
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
  services: [
    { id: "consultation", title: "Consultation & Diagnosis", icon: "icon-1", desc: "A thorough assessment of your history and symptoms to reach an accurate diagnosis." },
    { id: "advanced-procedures", title: "Advanced Procedures", icon: "icon-2", desc: "Modern, minimally invasive procedures performed with precision and care." },
    { id: "preventive-care", title: "Preventive Care", icon: "icon-3", desc: "Screening and lifestyle guidance to catch problems early and keep you healthy." },
    { id: "health-checkups", title: "Health Check-up Packages", icon: "icon-4", desc: "Structured check-ups tailored to your age, risk factors and family history." },
    { id: "diagnostic-tests", title: "Diagnostic Tests", icon: "icon-5", desc: "In-house and partner diagnostics with clear reports and quick turnaround." },
    { id: "emergency-care", title: "Emergency Care", icon: "icon-6", desc: "Rapid response and coordinated hospital care when every minute matters." },
    { id: "imaging", title: "Imaging & Evaluation", icon: "icon-7", desc: "Detailed imaging to plan treatment and track your progress accurately." },
    { id: "follow-up", title: "Follow-up & Rehabilitation", icon: "icon-8", desc: "Ongoing support, medication review and recovery plans after treatment." },
  ],
  conditions: [
    { id: "condition-1", title: "Condition One", icon: "icon-2", desc: "Short description of the condition and how it is treated." },
    { id: "condition-2", title: "Condition Two", icon: "icon-3", desc: "Short description of the condition and how it is treated." },
    { id: "condition-3", title: "Condition Three", icon: "icon-7", desc: "Short description of the condition and how it is treated." },
    { id: "condition-4", title: "Condition Four", icon: "icon-5", desc: "Short description of the condition and how it is treated." },
    { id: "condition-5", title: "Condition Five", icon: "icon-1", desc: "Short description of the condition and how it is treated." },
    { id: "condition-6", title: "Condition Six", icon: "icon-4", desc: "Short description of the condition and how it is treated." },
    { id: "condition-7", title: "Condition Seven", icon: "icon-8", desc: "Short description of the condition and how it is treated." },
    { id: "condition-8", title: "Condition Eight", icon: "icon-6", desc: "Short description of the condition and how it is treated." },
  ],
};

export const tel = (n: string) => "tel:" + n.replace(/[^\d+]/g, "");
export const treatmentPath = (t: Treatment) => `/treatment/${t.id}`;
