/* Page content that is easier to edit as data than as JSX. */

export interface TabSection {
  heading: string;
  items: string[];
}

export interface Tab {
  label: string;
  sections: TabSection[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export const homeAchievements: Tab[] = [
  {
    label: "Qualifications",
    sections: [
      {
        heading: "Educational Qualifications",
        items: [
          "Degree name — University / Institute, Year",
          "Postgraduate degree — University / Institute, Year",
          "Super-speciality degree — University / Institute, Year",
        ],
      },
      {
        heading: "Professional Qualifications",
        items: ["Fellowship or certification — Awarding body, Year", "Board certification — Awarding body, Year"],
      },
    ],
  },
  {
    label: "Expertise",
    sections: [
      {
        heading: "Areas of Expertise",
        items: ["Area of expertise one", "Area of expertise two", "Area of expertise three", "Area of expertise four"],
      },
    ],
  },
  {
    label: "Experience",
    sections: [
      {
        heading: "Clinical Experience",
        items: ["Position — Hospital name, Years", "Position — Hospital name, Years", "Position — Hospital name, Years"],
      },
    ],
  },
  {
    label: "Memberships",
    sections: [
      {
        heading: "Professional Memberships",
        items: ["Professional society / association", "Professional society / association", "Professional society / association"],
      },
    ],
  },
];

export const aboutJourney: Tab[] = [
  {
    label: "Education",
    sections: [
      {
        heading: "Educational Qualifications",
        items: [
          "Degree name — University / Institute, Year",
          "Postgraduate degree — University / Institute, Year",
          "Super-speciality degree — University / Institute, Year",
        ],
      },
      {
        heading: "Academic Excellence",
        items: ["Award, medal or rank — Institute, Year", "Scholarship or distinction — Institute, Year"],
      },
    ],
  },
  {
    label: "Qualifications",
    sections: [
      { heading: "Professional Qualifications", items: ["Fellowship — Awarding body, Year", "Certification — Awarding body, Year"] },
      { heading: "Medical Licensure", items: ["Medical council registration number"] },
    ],
  },
  {
    label: "Clinical Experience",
    sections: [
      {
        heading: "Clinical Experience",
        items: ["Senior Consultant — Hospital name, Years", "Consultant — Hospital name, Years", "Senior Resident — Hospital name, Years"],
      },
    ],
  },
  {
    label: "Procedures",
    sections: [{ heading: "Specialised Procedures", items: ["Procedure one", "Procedure two", "Procedure three", "Procedure four"] }],
  },
];

export const aboutResearch: Tab[] = [
  {
    label: "Memberships",
    sections: [{ heading: "Memberships", items: ["Professional society / association", "Professional society / association"] }],
  },
  {
    label: "Publications",
    sections: [
      {
        heading: "Publications",
        items: [
          "Author(s). Title of paper. Journal. Year;Vol(Issue):Pages.",
          "Author(s). Title of paper. Journal. Year;Vol(Issue):Pages.",
        ],
      },
    ],
  },
  {
    label: "Conferences",
    sections: [
      {
        heading: "Conferences & Talks",
        items: ["Talk or presentation — Conference name, City, Year", "Faculty / panelist — Conference name, City, Year"],
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Patient review goes here. Keep it short and specific — what the experience was like and how they feel now.",
    name: "Patient Name",
    role: "Patient",
    avatar: "/img/avatar-1.svg",
    rating: 5,
  },
  {
    quote: "A second patient review. Mention the care team, the clarity of explanations, or how smooth the follow-up was.",
    name: "Patient Name",
    role: "Patient's family",
    avatar: "/img/avatar-2.svg",
    rating: 5,
  },
  {
    quote: "A third patient review. Short, honest testimonials build more trust than long ones.",
    name: "Patient Name",
    role: "Patient",
    avatar: "/img/avatar-3.svg",
    rating: 5,
  },
];

export const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
  src: `/img/gallery-${i + 1}.svg`,
  alt: `Gallery photo ${i + 1}`,
}));

export const caseStudies: GalleryImage[] = Array.from({ length: 5 }, (_, i) => ({
  src: `/img/case-${i + 1}.svg`,
  alt: `Case study ${i + 1}`,
}));

/** YouTube embed URL for the home page video, e.g. https://www.youtube.com/embed/VIDEO_ID */
export const homeVideo = "";

export const emergencyContacts = [
  { icon: "phone", title: "Hospital Call Centre", number: "+00 00000 00000", desc: "Appointments, admissions and general queries." },
  { icon: "hospital", title: "Hospital Emergency", number: "+00 00000 00000", desc: "Direct line to the emergency department, open 24 hours." },
  { icon: "ambulance", title: "Ambulance Services", number: "+00 00000 00000", desc: "Equipped ambulances with trained paramedics." },
] as const;
