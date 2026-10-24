// Central content for the site. Factual practice details (name, credentials,
// addresses, timings, contact) live here so every page stays in sync.

export const doctor = {
  name: "Dr. Jharna K Doshi",
  shortName: "Dr. Jharna",
  qualifications: "MBBS, DNB PEDIATRICS, PGPN, (Pediatric Nutrition)",
};

export const contact = {
  email: "jharnadoshik@gmail.com",
  phone: "+91-9701944505",
  phoneHref: "tel:+919701944505",
  facebook:
    "https://www.facebook.com/Dr-Jharna-K-Doshi-Pediatrician-in-Gurgaon-102498331362775",
  twitter: "#",
  googleReviews:
    "https://www.google.com/search?q=Dr.+Jharna+K+Doshi#lrd=0x390d2397f0183a51:0x3beca43d786e7e7c,1,,,,",
  iapGuidelines: "https://iapindia.org/guidelines-for-parents/",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.3664228030027!2d77.09248965631991!3d28.427316982499228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2207836aa34b%3A0xac04254d1ee351a6!2s132%2C%20Devinder%20Vihar%2C%20Sector%2056%2C%20Gurugram%2C%20Haryana%20122011!5e0!3m2!1sen!2sin!4v1617183466086!5m2!1sen!2sin",
};

export const clinics = [
  {
    name: "Seet Multispeciality Clinic & Path Lab",
    address:
      "Plot No 132, Huda Plot, Opposite Devender Vihar Sector 56, Gurgaon 122011",
    timing: ["Mon - Sat: 10:30 AM - 01:00 PM", "05:30 PM - 07:30 PM"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.3664228030027!2d77.09248965631991!3d28.427316982499228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2207836aa34b%3A0xac04254d1ee351a6!2s132%2C%20Devinder%20Vihar%2C%20Sector%2056%2C%20Gurugram%2C%20Haryana%20122011!5e0!3m2!1sen!2sin!4v1617183466086!5m2!1sen!2sin",
  },
  {
    name: "W Pratiksha Hospital",
    address:
      "Room No. 904, W Pratiksha Hospital, Golf Course Ext Rd, Sector 56, Gurugram, Haryana 122011",
    timing: ["Tue, Wed and Fri: 05:30 PM - 07:45 PM"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0269656828364!2d77.09507891507779!3d28.41844318250267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23c02514fe95%3A0x3ef715d8bfd21442!2sW%20Pratiksha%20Hospital%20%7C%20Dr.%20Jharna%20K%20Doshi!5e0!3m2!1sen!2sin!4v1616651182263!5m2!1sen!2sin",
  },
];

export const primaryClinic = clinics[0];

export const bannerCaption = "SEET MULTISPECIALITY CLINIC & PATH CARE";

export const stats = [
  { icon: "experience", value: "16 +", label: "Years Of Experience" },
  { icon: "patients", value: "5000 +", label: "Satisfied Patients" },
  { icon: "quality", value: "99 +", label: "Best Quality & Safety" },
] as const;

export type StatIcon = (typeof stats)[number]["icon"];

// Drop real files at these paths under /public to replace the placeholders.
export const images = {
  logo: "/images/logo.png",
  banners: ["/images/banner/01.jpg", "/images/banner/2.jpg", "/images/banner/1.jpg"],
  welcome: "/images/wimg.jpg",
  doctorCutout: "/images/dr-jharna.png",
  doctorProfile: "/images/dr-jharna1.jpg",
  doctorSidebar: "/images/dr-left.jpg",
  innerBanners: {
    doctor: "/images/inner-banner1.jpg",
    services: "/images/inner-banner2.jpg",
    testimonials: "/images/inner-banner3.jpg",
    blog: "/images/inner-banner-blog.jpg",
  },
  immunisationChart: "/images/immunisation-chart1.jpg",
  growthCharts: ["/images/chart1.jpg", "/images/chart2.png"],
  googleReviewLogo: "/images/google-review-logo.png",
  testimonialVideos: ["/video/v1.mp4", "/video/v2.mp4"],
};

export type Service = {
  id: string;
  menuLabel: string;
  title: string;
  icon: "newborn" | "vaccine" | "growth" | "nutrition" | "allergy" | "teen" | "sick";
  teaser: string;
  body: { heading?: string; text: string }[];
  images?: string[];
};

export const services: Service[] = [
  {
    id: "newborn",
    menuLabel: "Newborn clinic & breast feeding guidance",
    title: "Newborn Clinic & Breast Feeding Guidance",
    icon: "newborn",
    teaser:
      "Gentle, attentive care for your newborn and practical support for parents settling into the first weeks.",
    body: [
      {
        text: "The first weeks at home bring a flood of questions. Our newborn clinic covers routine check-ups, weight monitoring, jaundice review, cord and skin care, and plain-language answers for new parents.",
      },
      {
        heading: "Breast feeding guidance",
        text: "Feeding can feel rewarding and overwhelming at the same time. We work with mothers on latch and positioning, supply concerns, feeding schedules and the common pitfalls that cause early frustration, so feeding becomes a calmer part of the day.",
      },
    ],
  },
  {
    id: "immunisation",
    menuLabel: "Immunisation/ Vaccination",
    title: "Immunization/Vaccination Services",
    icon: "vaccine",
    teaser:
      "Preventive vaccination for newborns, children and teens, following current recommended schedules.",
    body: [
      {
        text: "We provide vaccinations from birth through adolescence in line with current Indian Academy of Pediatrics recommendations, keep track of what is due next, and talk you through optional and newer vaccines so you can decide with confidence.",
      },
    ],
    images: ["/images/immunisation-chart1.jpg"],
  },
  {
    id: "growth",
    menuLabel: "Growth and development clinic",
    title: "Growth and Development Clinic",
    icon: "growth",
    teaser:
      "Regular screening of physical growth and developmental milestones as your child grows.",
    body: [
      {
        text: "Every child grows at their own pace, but early years move quickly. At each visit we plot height, weight and head size on standard growth charts and check motor, language, social and learning milestones. If something needs a closer look, we catch it early and guide you on next steps.",
      },
    ],
    images: ["/images/chart1.jpg", "/images/chart2.png"],
  },
  {
    id: "child-nutrition",
    menuLabel: "Child nutrition/Diet counselling",
    title: "Child Nutrition/Diet Counselling",
    icon: "nutrition",
    teaser:
      "Good nutrition underpins healthy growth, immunity and brain development in every child.",
    body: [
      {
        text: "A balanced diet supports immunity, healthy weight, bone strength and brain development. Our nutrition counselling looks at what your child actually eats day to day and builds a realistic plan around it.",
      },
      {
        text: "With a special interest in pediatric nutrition, we help families with picky eating, worries about a child being too thin or overweight, starting solids, and building lasting healthy habits that guard against both malnutrition and obesity.",
      },
    ],
  },
  {
    id: "allergy",
    menuLabel: "Allergy and Asthma clinic",
    title: "Allergy and Asthma Clinic",
    icon: "allergy",
    teaser:
      "Coordinated care to reduce symptoms and keep children with allergies and asthma active.",
    body: [
      {
        text: "Allergies and asthma are increasingly common in children. Our aim is to keep symptoms under control so your child can play, sleep and learn normally. We explain how asthma is diagnosed, what each medicine does, and how to use inhalers and spacers correctly.",
      },
      {
        text: "We also manage everyday allergic conditions such as seasonal allergies, allergic rhinitis and eczema.",
      },
    ],
  },
  {
    id: "adoloscent",
    menuLabel: "Adoloscent issues & counselling",
    title: "Adoloscent Issues and Counselling",
    icon: "teen",
    teaser:
      "A safe space for teenagers navigating the physical and emotional changes of puberty.",
    body: [
      {
        text: "Puberty brings rapid physical and emotional change, and with it plenty of questions. We offer confidential, judgement-free counselling that helps adolescents understand what is happening to their bodies and minds, and helps parents support them through it.",
      },
    ],
  },
  {
    id: "infections",
    menuLabel: "Infections / Sick child care",
    title: "Infections / Sick Child Care",
    icon: "sick",
    teaser:
      "Prompt assessment and treatment whenever your child is unwell.",
    body: [
      {
        text: "When your child is unwell, a sick-child visit lets us assess and treat them promptly. We manage seasonal flu, fevers, coughs and colds, stomach bugs and other common infections, always aiming for the minimum necessary medication and tests.",
      },
    ],
  },
];

export const welcome = {
  heading: "Welcome to",
  highlight: "Seet Multispeciality Clinic & Path Lab",
  paragraphs: [
    "We care for children from birth to 18 years of age, with an emphasis on preventing illness and encouraging healthy habits as much as treating sickness when it happens. Every family gets unhurried, personal attention and clear explanations, whether the visit is a routine check-up or an urgent concern.",
    "Our approach is evidence-based and ethical: we answer your questions fully, recommend only what your child needs, and work as a team so that care is efficient, affordable and consistent.",
  ],
};

export const doctorBio = {
  intro: `${doctor.name} is a pediatrician (child specialist) in Gurgaon offering complete care for children, from newborns to teenagers. Alongside treating illness, she places strong emphasis on talking with parents about prevention, nutrition and healthy development.`,
  education:
    "She completed her MBBS at MGM Medical College and Hospital, Jamshedpur, and holds a DNB in Pediatrics.",
  more: [
    "Pediatric nutrition, and preventing childhood malnutrition and obesity, are areas of particular interest. She holds a Post Graduate Diploma in Pediatric Nutrition (PGPN) from Boston University.",
    "She is a member of the Indian Academy of Pediatrics.",
    "Her practice covers well-baby care, immunization, adolescent health, infectious diseases, nutrition and weight management, growth and development, behavioral concerns, and allergy and asthma. She looks after the whole family's wellbeing, including the stress and worry parents often carry.",
  ],
};

export const patientInfo = [
  { title: "Quality Assurance", image: "/images/p1.jpg", icon: "quality" },
  { title: "Sterilization", image: "/images/p2.jpg", icon: "sterile" },
  { title: "Urgent Appointments", image: "/images/p3.jpg", icon: "urgent" },
  { title: "Educational Videos", image: "/images/p4.jpg", icon: "video" },
  { title: "Lab Support", image: "/images/p5.jpg", icon: "lab" },
] as const;

export const gallery = [
  "g-oct-2.jpg", "g-oct-3.jpg", "g-sep-1.jpg", "g-sep-2.jpg", "g-sep-3.jpg",
  "g-sep-5.jpg", "g-sep-6.jpg", "g-july2025-1.jpg", "g-july2025-3.jpg",
  "g24.jpg", "g23.jpg", "g20.jpg", "g9.jpg", "g10.jpg", "g16.jpg",
  "g13.jpg", "g12.jpg", "g4.jpg", "g6.jpg", "g7.jpg", "g18.jpg",
].map((file) => `/images/gallery/${file}`);

// Add genuine reviews from parents here (with their permission), e.g.
// { quote: "…", name: "Parent name" }. Until then the page points visitors
// to the practice's Google reviews.
export const testimonials: { quote: string; name: string }[] = [];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/meet-the-doctor", label: "Meet The Doctor" },
  { href: "/services", label: "Our Services", children: true },
  { href: "/testimonials", label: "Patients Testimonials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Latest Blog" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export const siteUrl = "https://www.drjharnachildspecialist.com";
